import { Calendar, MapPin } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { FadeIn } from '../components/ui/FadeIn'
import { SectionTitle } from '../components/ui/SectionTitle'
import { experience } from '../data/experience'
import { useT } from '../i18n/useT'

export function Experience() {
  const { t, pick } = useT()

  return (
    <section
      id="experience"
      className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28"
    >
      <FadeIn>
        <SectionTitle>{t('nav.experience')}</SectionTitle>
      </FadeIn>

      <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:gap-6">
        {experience.map((item, index) => (
          <FadeIn key={index} delay={index * 0.05}>
            <Card>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-text-primary sm:text-xl">
                  {pick(item.role)}
                </h3>
                <p className="font-medium text-accent">{pick(item.company)}</p>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-sm text-text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar aria-hidden className="h-4 w-4 shrink-0" />
                  {item.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin aria-hidden className="h-4 w-4 shrink-0" />
                  {pick(item.location)}
                </span>
              </div>

              <p className="mt-4 text-text-secondary">
                {pick(item.description)}
              </p>

              {item.bullets && item.bullets.length > 0 && (
                <ul className="mt-4 flex flex-col gap-2">
                  {item.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex gap-3 text-text-secondary"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      <span>{pick(bullet)}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
