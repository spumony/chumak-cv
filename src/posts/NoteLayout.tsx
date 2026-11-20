import type { ReactNode } from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import { hero } from '../data/hero'
import { SUPPORTED_LANGUAGES, type Language } from '../i18n'
import { HiringBanner } from './HiringBanner'
import { postPath } from './notes'

type Props = { lang: Language; slug?: string; children: ReactNode }

export function NoteLayout({ lang, slug, children }: Props) {
  return (
    <>
      <header className="pt-safe border-b border-border">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-3 px-5 sm:h-16 sm:px-6">
          <a
            href="/"
            className="min-w-0 truncate py-3 font-mono text-sm font-medium text-text-primary"
          >
            {hero.name[lang]}
          </a>
          <nav className="flex shrink-0 items-center gap-3">
            <a
              href={postPath(lang)}
              className="text-sm text-text-secondary hover:text-text-primary"
            >
              {lang === 'ru' ? 'Посты' : 'Posts'}
            </a>
            {/* Links, not the i18n toggle: each language has its own URL. */}
            <div className="inline-flex items-center rounded-full border border-border bg-bg-elevated p-0.5 font-mono text-sm">
              {SUPPORTED_LANGUAGES.map((code) => (
                <a
                  key={code}
                  href={postPath(code, slug)}
                  hrefLang={code}
                  aria-current={code === lang ? 'page' : undefined}
                  className={`flex h-10 min-w-10 items-center justify-center rounded-full px-3 transition-colors ${
                    code === lang
                      ? 'bg-accent text-bg'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {code.toUpperCase()}
                </a>
              ))}
            </div>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-14">
        {children}
        <HiringBanner lang={lang} />
      </main>

      <footer className="pb-safe border-t border-border">
        <p className="mx-auto max-w-3xl px-5 py-8 text-sm text-text-muted sm:px-6">
          © {new Date().getFullYear()} {hero.name[lang]}
        </p>
      </footer>
    </>
  )
}
