import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { Work } from './sections/Work'
import { Experience } from './sections/Experience'
import { Skills } from './sections/Skills'
import { Approach } from './sections/Approach'
import { Background } from './sections/Background'
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

      {/* Proof first, then commercial history, then the supporting detail. */}
      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Approach />
        <Background />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
