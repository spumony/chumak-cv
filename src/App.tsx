import { LanguageToggle } from './components/LanguageToggle'
import { Badge } from './components/ui/Badge'
import { Card } from './components/ui/Card'
import { FadeIn } from './components/ui/FadeIn'
import { SectionTitle } from './components/ui/SectionTitle'

function App() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col gap-8 px-5 py-16 sm:px-6 md:px-8">
      <LanguageToggle className="self-start" />
      <FadeIn className="flex flex-col gap-6">
        <SectionTitle>UI primitives</SectionTitle>
        <Card interactive>
          <h3 className="text-lg font-medium text-text-primary">
            Interactive card
          </h3>
          <p className="mt-2 text-text-secondary">
            Subtle border highlight on hover (desktop only).
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>React</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Tailwind CSS</Badge>
            <Badge>Framer Motion</Badge>
          </div>
        </Card>
        <Card>
          <p className="text-text-secondary">
            Static card — без hover-подсветки.
          </p>
        </Card>
      </FadeIn>
    </main>
  )
}

export default App
