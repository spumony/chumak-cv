import { FadeIn } from '../components/ui/FadeIn'
import { SectionTitle } from '../components/ui/SectionTitle'
import { principles } from '../data/principles'
import { useT } from '../i18n/useT'

export function Principles() {
  const { t, pick } = useT()

  return (
    <section
      id="principles"
      className="mx-auto max-w-3xl px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6"
    >
      <FadeIn>
        <SectionTitle>{t('principles.title')}</SectionTitle>
      </FadeIn>

      <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8">
        {principles.map((item, index) => (
          <FadeIn key={index} delay={index * 0.05}>
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-semibold text-text-primary">
                {pick(item.title)}
              </h3>
              <p className="text-text-secondary">{pick(item.body)}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
