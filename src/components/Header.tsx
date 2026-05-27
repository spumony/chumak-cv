import { useState } from 'react'
import { Menu } from 'lucide-react'
import { NAV_SECTION_IDS, SECTION_IDS } from '../types'
import { hero } from '../data/hero'
import { useT } from '../i18n/useT'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const { t, pick } = useT()
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const activeId = useScrollSpy(SECTION_IDS)
  const [menuOpen, setMenuOpen] = useState(false)

  // Derived so the menu is never shown on desktop (no effect needed).
  const menuVisible = menuOpen && !isDesktop

  return (
    <>
      <header className="pt-safe fixed inset-x-0 top-0 z-40 border-b border-border bg-bg/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-5 sm:h-16 sm:px-6 md:px-8">
          <a
            href="#hero"
            className="min-w-0 truncate font-mono text-sm font-medium text-text-primary"
          >
            {pick(hero.name)}
          </a>

          <nav
            aria-label={t('a11y.primaryNav')}
            className="hidden shrink-0 items-center gap-5 lg:flex lg:gap-6"
          >
            {NAV_SECTION_IDS.map((id) => {
              const active = activeId === id
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-current={active ? 'true' : undefined}
                  className={`text-sm transition-colors ${
                    active
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {t(`nav.${id}`)}
                </a>
              )
            })}
            <ThemeToggle />
            <LanguageToggle />
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label={t('a11y.openMenu')}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-text-secondary hover:text-text-primary lg:hidden"
          >
            <Menu aria-hidden className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuVisible}
        onClose={() => setMenuOpen(false)}
        activeId={activeId}
      />
    </>
  )
}
