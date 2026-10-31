import { FadeIn } from '../components/ui/FadeIn'
import { SectionTitle } from '../components/ui/SectionTitle'
import { education } from '../data/education'
import { languages } from '../data/languages'
import { useT } from '../i18n/useT'

const columnHeading =
  'font-mono text-xs tracking-wider text-text-muted uppercase'

/** Education and languages in one compact block — neither earns its own section. */
export function Background() {
  const { t, pick } = useT()

  return (
    <section
      id="background"
      className="mx-auto max-w-3xl px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6"
    >
      <FadeIn>
        <SectionTitle>{t('background.title')}</SectionTitle>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-10">
          <div>
            <h3 className={columnHeading}>{t('background.education')}</h3>
            <ul className="mt-3 flex flex-col gap-3">
              {education.map((item, index) => (
                <li key={index}>
                  <p className="font-medium text-text-primary">
                    {pick(item.degree)}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {pick(item.institution)}
                  </p>
                  <p className="font-mono text-sm text-text-muted">
                    {item.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={columnHeading}>{t('background.languages')}</h3>
            <ul className="mt-3 flex flex-col gap-3">
              {languages.map((language, index) => (
                <li key={index} className="flex items-baseline gap-2">
                  <span className="font-medium text-text-primary">
                    {pick(language.name)}
                  </span>
                  <span className="font-mono text-sm text-accent">
                    {language.levelCode}
                  </span>
                  <span className="text-sm text-text-muted">
                    {pick(language.level)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
