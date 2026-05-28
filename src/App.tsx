import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { Focus } from './sections/Focus'
import { Work } from './sections/Work'
import { Experience } from './sections/Experience'
import { Education } from './sections/Education'
import { Skills } from './sections/Skills'
import { Languages } from './sections/Languages'
import { Freelance } from './sections/Freelance'
import { Contact } from './sections/Contact'
import { useDocumentMeta } from './hooks/useDocumentMeta'
import { useT } from './i18n/useT'

function App() {
  const { t } = useT()
  useDocumentMeta()

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-medium focus:text-bg focus:not-sr-only"
      >
        {t('a11y.skipToContent')}
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Focus />
        <Work />
        <Experience />
        <Education />
        <Skills />
        <Languages />
        <Freelance />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
