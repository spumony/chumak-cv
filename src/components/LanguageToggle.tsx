import { SUPPORTED_LANGUAGES, type Language } from '../i18n'
import { useT } from '../i18n/useT'

const LABELS: Record<Language, string> = { en: 'EN', ru: 'RU' }

type LanguageToggleProps = {
  className?: string
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { t, lang, i18n } = useT()

  return (
    <div
      role="group"
      aria-label={t('a11y.languageGroup')}
      className={`inline-flex items-center rounded-full border border-border bg-bg-elevated p-0.5 font-mono text-sm ${className ?? ''}`}
    >
      {SUPPORTED_LANGUAGES.map((code) => {
        const active = code === lang
        return (
          <button
            key={code}
            type="button"
            aria-pressed={active}
            onClick={() => void i18n.changeLanguage(code)}
            className={`flex h-11 min-w-11 items-center justify-center rounded-full px-3 transition-colors ${
              active
                ? 'bg-accent text-bg'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            {LABELS[code]}
          </button>
        )
      })}
    </div>
  )
}
