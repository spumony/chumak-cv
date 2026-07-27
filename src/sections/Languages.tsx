import { Badge } from '../components/ui/Badge'
import { FadeIn } from '../components/ui/FadeIn'
import { SectionTitle } from '../components/ui/SectionTitle'
import { languages } from '../data/languages'
import { useT } from '../i18n/useT'

export function Languages() {
  const { t, pick } = useT()

  return (
    <section
      id="languages"
      className="mx-auto max-w-3xl px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6"
    >
      <FadeIn>
        <SectionTitle>{t('nav.languages')}</SectionTitle>
      </FadeIn>

      <div className="mt-8 flex flex-col">
        {languages.map((language, index) => (
          <FadeIn key={index} delay={index * 0.05}>
            <div className="flex items-center justify-between gap-4 border-t border-border py-5">
              <div>
                <h3 className="font-medium text-text-primary">
                  {pick(language.name)}
                </h3>
                <p className="text-sm text-text-secondary">
                  {pick(language.level)}
                </p>
              </div>
              {language.levelCode && (
                <Badge tone="accent">{language.levelCode}</Badge>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
