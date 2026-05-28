import { X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useCallback, useEffect, useState } from 'react'
import { useT } from '../i18n/useT'

type AvatarLightboxProps = {
  src: string
  alt: string
}

export function AvatarLightbox({ src, alt }: AvatarLightboxProps) {
  const { t } = useT()
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  const close = useCallback(() => {
    setOpen(false)
  }, [])

  useEffect(() => {
    if (!open) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, close])

  const overlayAnim = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }

  const imageAnim = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15 },
      }
    : {
        initial: { opacity: 0, scale: 0.92 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.96 },
        transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] as const },
      }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t('contact.openPhoto')}
        className="shrink-0 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-elevated"
      >
        <img
          src={src}
          alt={alt}
          width={128}
          height={128}
          loading="lazy"
          className="h-16 w-16 cursor-zoom-in rounded-full border border-border object-cover grayscale transition-[filter,transform] duration-300 ease-out hover:grayscale-0 hover:scale-105 sm:h-20 sm:w-20 motion-reduce:transition-none motion-reduce:hover:scale-100"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            {...overlayAnim}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={close}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm"
            style={{
              paddingTop: 'calc(1.25rem + env(safe-area-inset-top))',
              paddingBottom: 'calc(1.25rem + env(safe-area-inset-bottom))',
            }}
          >
            <button
              type="button"
              onClick={close}
              aria-label={t('contact.closePhoto')}
              className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              style={{
                top: 'calc(1rem + env(safe-area-inset-top))',
                right: 'calc(1rem + env(safe-area-inset-right))',
              }}
            >
              <X aria-hidden className="h-5 w-5" />
            </button>
            <motion.img
              {...imageAnim}
              src={src}
              alt={alt}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] cursor-default rounded-2xl border border-white/10 object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
