import { ArrowUpRight, BookOpen } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { FadeIn } from '../components/ui/FadeIn'
import { GithubIcon } from '../components/ui/icons'
import { SectionTitle } from '../components/ui/SectionTitle'
import { work } from '../data/work'
import { useT } from '../i18n/useT'

const subheading = 'font-mono text-xs tracking-wider text-text-muted uppercase'
const projectLink =
  'inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-accent'

export function Work() {
  const { t, pick } = useT()

  return (
    <section
      id="work"
      className="mx-auto max-w-3xl px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6"
    >
      <FadeIn>
        <SectionTitle>{t('work.title')}</SectionTitle>
      </FadeIn>

      <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:gap-8">
        {work.map((caseStudy, index) => (
          <FadeIn key={caseStudy.title} delay={index * 0.05}>
            <Card>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex min-w-0 flex-col gap-1">
                  <h3 className="text-lg font-semibold text-text-primary sm:text-xl">
                    {caseStudy.title}
                  </h3>
                  {caseStudy.period && (
                    <p className="font-mono text-sm text-text-muted">
                      {pick(caseStudy.period)}
                    </p>
                  )}
                </div>
                {caseStudy.badge && (
                  <span className="inline-flex shrink-0 items-center rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-xs font-medium text-accent">
                    {pick(caseStudy.badge)}
                  </span>
                )}
              </div>

              <p className="mt-4 text-text-secondary">
                {pick(caseStudy.context)}
              </p>

              <div className="mt-5 flex flex-col gap-4">
                <div>
                  <h4 className={subheading}>{t('work.role')}</h4>
                  <p className="mt-1.5 text-text-secondary">
                    {pick(caseStudy.role)}
                  </p>
                </div>
                {caseStudy.system && (
                  <div>
                    <h4 className={subheading}>{t('work.system')}</h4>
                    <p className="mt-1.5 text-text-secondary">
                      {pick(caseStudy.system)}
                    </p>
                  </div>
                )}
                {caseStudy.evidence && caseStudy.evidence.length > 0 && (
                  <div>
                    <h4 className={subheading}>{t('work.evidence')}</h4>
                    <ul className="mt-2 flex flex-col gap-2">
                      {caseStudy.evidence.map((fact, factIndex) => (
                        <li
                          key={factIndex}
                          className="flex gap-3 text-text-secondary"
                        >
                          <span
                            aria-hidden
                            className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                          />
                          <span>{pick(fact)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h4 className={subheading}>{t('work.stack')}</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {caseStudy.stack.map((tech) => (
                      <Badge key={tech} tone="accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {(caseStudy.links?.live ||
                caseStudy.links?.repo ||
                caseStudy.links?.writeup) && (
                <div className="mt-5 flex flex-wrap gap-5 border-t border-border pt-4">
                  {caseStudy.links.live && (
                    <a
                      href={caseStudy.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className={projectLink}
                    >
                      {t('work.live')}
                      <ArrowUpRight aria-hidden className="h-4 w-4" />
                    </a>
                  )}
                  {caseStudy.links.repo && (
                    <a
                      href={caseStudy.links.repo}
                      target="_blank"
                      rel="noreferrer"
                      className={projectLink}
                    >
                      {t('work.repo')}
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  )}
                  {caseStudy.links.writeup && (
                    <a
                      href={caseStudy.links.writeup}
                      target="_blank"
                      rel="noreferrer"
                      className={projectLink}
                    >
                      {t('work.writeup')}
                      <BookOpen aria-hidden className="h-4 w-4" />
                    </a>
                  )}
                </div>
              )}
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
