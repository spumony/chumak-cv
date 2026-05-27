import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useLayoutEffect, useRef, type MouseEvent } from 'react'
import { X } from 'lucide-react'
import { NAV_SECTION_IDS } from '../types'
import { useT } from '../i18n/useT'
import { LanguageToggle } from './LanguageToggle'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
  activeId: string | null
}

export function MobileMenu({ open, onClose, activeId }: MobileMenuProps) {
  const { t } = useT()
  const prefersReducedMotion = useReducedMotion()
  const panelRef = useRef<HTMLDivElement>(null)

  // Close first (releases the body scroll-lock), then scroll on the next frame.
  // A native anchor jump would fire while the body is still locked and be lost.
  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault()
    onClose()
    // Two frames so the close has committed (releasing the scroll-lock via the
    // layout-effect cleanup) before we scroll — otherwise the scroll is blocked.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
        })
        history.replaceState(null, '', `#${id}`)
      })
    })
  }

  // Lock body scroll, trap focus and wire Escape while the menu is open.
  // Layout effect so the scroll-lock is released synchronously on close,
  // before handleNavClick's rAF scroll runs.
  useLayoutEffect(() => {
    if (!open) return

    const previouslyFocused = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusables = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ) ?? [],
      )

    focusables()[0]?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab') return
      const items = focusables()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus()
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-bg md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={t('a11y.primaryNav')}
        >
          <motion.div
            ref={panelRef}
            className="pt-safe pb-safe flex h-full flex-col px-5 sm:px-6"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
            animate={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex h-14 shrink-0 items-center justify-end sm:h-16">
              <button
                type="button"
                onClick={onClose}
                aria-label={t('a11y.closeMenu')}
                className="flex h-11 w-11 items-center justify-center rounded-md text-text-secondary hover:text-text-primary"
              >
                <X aria-hidden className="h-6 w-6" />
              </button>
            </div>

            <nav
              aria-label={t('a11y.primaryNav')}
              className="flex flex-1 flex-col justify-center gap-1"
            >
              {NAV_SECTION_IDS.map((id) => {
                const active = activeId === id
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(event) => handleNavClick(event, id)}
                    aria-current={active ? 'true' : undefined}
                    className={`flex min-h-14 items-center text-2xl font-medium transition-colors ${
                      active ? 'text-accent' : 'text-text-primary'
                    }`}
                  >
                    {t(`nav.${id}`)}
                  </a>
                )
              })}
              <LanguageToggle className="mt-6 self-start" />
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
