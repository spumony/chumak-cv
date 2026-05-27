import { Calendar, Download, MapPin } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { FadeIn } from '../components/ui/FadeIn'
import { SectionTitle } from '../components/ui/SectionTitle'
import { StatusDot } from '../components/ui/StatusDot'
import { experience } from '../data/experience'
import { useT } from '../i18n/useT'

// Drop an ATS-friendly PDF at this path in /public to show the download button.
const RESUME_URL = '/Alexandr_Chumak_CV.pdf'

export function Experience() {
  const { t, pick } = useT()

  return (
    <section
      id="experience"
      className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28"
    >
      <FadeIn>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionTitle>{t('nav.experience')}</SectionTitle>
          {RESUME_URL && (
            <a
              href={RESUME_URL}
              download
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-accent/50 hover:text-text-primary"
            >
              <Download aria-hidden className="h-4 w-4" />
              {t('experience.downloadCv')}
            </a>
          )}
        </div>
      </FadeIn>

      <div className="mt-8 flex flex-col gap-8 sm:mt-12 sm:gap-10">
        {experience.map((item, index) => (
          <FadeIn key={index} delay={index * 0.05}>
            <Card
              className={item.current ? 'ring-1 ring-accent/20' : undefined}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-text-primary sm:text-xl">
                    {pick(item.role)}
                  </h3>
                  <p className="font-medium text-accent">
                    {pick(item.company)}
                  </p>
                </div>
                {item.current && (
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 font-mono text-xs font-medium text-success">
                    <StatusDot tone="success" />
                    {t('experience.current')}
                  </span>
                )}
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-sm text-text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar aria-hidden className="h-4 w-4 shrink-0" />
                  {pick(item.period)}
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
                <ul className="mt-4 flex flex-col gap-2.5">
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
