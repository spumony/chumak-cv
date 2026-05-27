import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { Experience } from './sections/Experience'

const PLACEHOLDER_IDS = [
  'projects',
  'education',
  'skills',
  'certifications',
  'contact',
] as const

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        {PLACEHOLDER_IDS.map((id) => (
          <section
            key={id}
            id={id}
            className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center px-5 sm:px-6 md:px-8"
          >
            <h2 className="font-mono text-sm text-text-muted">#{id}</h2>
            <p className="mt-2 text-2xl font-semibold text-text-primary capitalize sm:text-3xl">
              {id} placeholder
            </p>
          </section>
        ))}
      </main>
    </>
  )
}

export default App
