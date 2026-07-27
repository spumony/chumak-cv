import { ArrowUpRight, BookOpen } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { FadeIn } from '../components/ui/FadeIn'
import { GithubIcon } from '../components/ui/icons'
import { SectionTitle } from '../components/ui/SectionTitle'
import { StatusDot } from '../components/ui/StatusDot'
import { work } from '../data/work'
import { useT } from '../i18n/useT'
import type { CaseStudyStatus } from '../types'

const subheading = 'font-mono text-xs tracking-wider text-text-muted uppercase'
const projectLink =
  'inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-accent'

type StatusKey = 'inProgress' | 'shipped' | 'current'

function statusKey(status: CaseStudyStatus): StatusKey {
  // Map kebab-case data status to camelCase i18n key.
  return status === 'in-progress' ? 'inProgress' : status
}

export function Work() {
  const { t, pick } = useT()

  return (
    <section
      id="work"
      className="mx-auto max-w-3xl px-5 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12"
    >
      <FadeIn>
        <SectionTitle>{t('work.title')}</SectionTitle>
      </FadeIn>

      <div className="mt-8 flex flex-col gap-6 sm:mt-12 sm:gap-8">
        {work.map((caseStudy, index) => {
          const status = caseStudy.status
          const showLiveDot = status === 'in-progress' || status === 'current'
          return (
            <FadeIn key={caseStudy.title} delay={index * 0.05}>
              <Card
                className={
                  status === 'in-progress' || status === 'current'
                    ? 'ring-1 ring-accent/20'
                    : undefined
                }
              >
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
                  {status && (
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-xs font-medium text-accent">
                      {showLiveDot && <StatusDot tone="accent" />}
                      {t(`work.status.${statusKey(status)}`)}
                    </span>
                  )}
                </div>

                <div className="mt-5 flex flex-col gap-4">
                  <div>
                    <h4 className={subheading}>{t('work.problem')}</h4>
                    <p className="mt-1.5 text-text-secondary">
                      {pick(caseStudy.problem)}
                    </p>
                  </div>
                  <div>
                    <h4 className={subheading}>{t('work.approach')}</h4>
                    <p className="mt-1.5 text-text-secondary">
                      {pick(caseStudy.approach)}
                    </p>
                  </div>
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
                  <div>
                    <h4 className={subheading}>{t('work.outcome')}</h4>
                    <p className="mt-1.5 text-text-secondary">
                      {pick(caseStudy.outcome)}
                    </p>
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
                        {t('focus.live')}
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
                        {t('focus.repo')}
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
                        Write-up
                        <BookOpen aria-hidden className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                )}
              </Card>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
