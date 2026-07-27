import { FadeIn } from '../components/ui/FadeIn'
import { SectionTitle } from '../components/ui/SectionTitle'
import { education } from '../data/education'
import { useT } from '../i18n/useT'

export function Education() {
  const { t, pick } = useT()

  return (
    <section
      id="education"
      className="mx-auto max-w-3xl px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6"
    >
      <FadeIn>
        <SectionTitle>{t('nav.education')}</SectionTitle>
      </FadeIn>

      <div className="mt-8 flex flex-col">
        {education.map((item, index) => (
          <FadeIn key={index} delay={index * 0.05}>
            <div className="flex flex-col gap-1 border-t border-border py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div>
                <h3 className="text-base font-semibold text-text-primary sm:text-lg">
                  {pick(item.degree)}
                </h3>
                <p className="text-text-secondary">{pick(item.institution)}</p>
              </div>
              <p className="font-mono text-sm whitespace-nowrap text-text-muted">
                {item.period}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
