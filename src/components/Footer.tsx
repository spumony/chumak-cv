import { hero } from '../data/hero'
import { useT } from '../i18n/useT'

export function Footer() {
  const { t, pick } = useT()
  const year = new Date().getFullYear()

  return (
    <footer className="pb-safe border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 md:px-8">
        <p>
          © {year} {pick(hero.name)}
        </p>
        <p>{t('footer.builtWith')}</p>
      </div>
    </footer>
  )
}
