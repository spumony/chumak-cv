import { LanguageToggle } from './components/LanguageToggle'
import { useT } from './i18n/useT'

function App() {
  const { t, lang } = useT()

  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center gap-6 px-5 py-16 sm:px-6 md:px-8">
      <LanguageToggle className="self-start" />
      <h1 className="text-balance text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl md:text-7xl">
        {t('meta.title')}
      </h1>
      <p className="text-base text-text-secondary sm:text-lg">
        {t('meta.description')}
      </p>
      <nav className="flex flex-wrap gap-3 font-mono text-sm">
        <span className="text-text-muted">{t('nav.experience')}</span>
        <span className="text-text-muted">{t('nav.projects')}</span>
        <span className="text-text-muted">{t('nav.education')}</span>
        <span className="text-text-muted">{t('nav.skills')}</span>
        <span className="text-text-muted">{t('nav.certifications')}</span>
        <span className="text-text-muted">{t('nav.contact')}</span>
      </nav>
      <p className="font-mono text-sm text-accent">
        active language: {lang}
      </p>
    </main>
  )
}

export default App
