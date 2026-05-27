import { Card } from '../components/ui/Card'
import { FadeIn } from '../components/ui/FadeIn'
import { SectionTitle } from '../components/ui/SectionTitle'
import { focus } from '../data/focus'
import { useT } from '../i18n/useT'

export function Focus() {
  const { t, pick } = useT()

  return (
    <section
      id="focus"
      className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28"
    >
      <FadeIn>
        <SectionTitle>{t('focus.title')}</SectionTitle>
        <p className="mt-6 max-w-2xl text-base text-text-secondary sm:text-lg">
          {pick(focus.lead)}
        </p>
      </FadeIn>

      <div className="mt-8 grid auto-rows-fr grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
        {focus.highlights.map((highlight, index) => (
          <FadeIn key={index} delay={index * 0.05} className="h-full">
            <Card className="flex h-full flex-col">
              <h3 className="text-base font-semibold text-text-primary sm:text-lg">
                {pick(highlight.title)}
              </h3>
              <p className="mt-2 text-text-secondary">{pick(highlight.body)}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
