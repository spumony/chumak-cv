import { ArrowRight, Bug, Sparkles, Zap } from 'lucide-react'
import type { ComponentType } from 'react'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { FadeIn } from '../components/ui/FadeIn'
import { SectionTitle } from '../components/ui/SectionTitle'
import { StatusDot } from '../components/ui/StatusDot'
import { focus } from '../data/focus'
import { useT } from '../i18n/useT'

const HIGHLIGHT_ICONS: ComponentType<{ className?: string }>[] = [
  Zap,
  Bug,
  Sparkles,
]

export function Focus() {
  const { t, pick } = useT()

  return (
    <section id="focus" className="border-y border-border bg-accent/5">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
        <FadeIn>
          <SectionTitle>{t('focus.title')}</SectionTitle>
          <p className="mt-6 max-w-2xl text-base text-text-secondary sm:text-lg">
            {pick(focus.lead)}
          </p>

          {/* Transition: Frontend → AI, in progress */}
          <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-sm sm:gap-3">
            <span className="rounded-full border border-border bg-bg px-3 py-1 text-text-secondary">
              Frontend Engineer
            </span>
            <ArrowRight aria-hidden className="h-4 w-4 text-text-muted" />
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-accent">
              <StatusDot tone="accent" />
              AI Product Engineer
            </span>
            <span className="text-text-muted">· {t('focus.inProgress')}</span>
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-5">
          <FadeIn delay={0.05} className="lg:col-span-3">
            <Card className="h-full ring-1 ring-accent/30">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-text-primary sm:text-xl">
                  {focus.project.title}
                </h3>
                <Badge tone="accent">{t('focus.building')}</Badge>
              </div>
              <p className="mt-3 text-text-secondary">
                {pick(focus.project.description)}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {focus.project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </Card>
          </FadeIn>

          <div className="grid gap-3 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-1">
            {focus.highlights.map((highlight, index) => {
              const Icon = HIGHLIGHT_ICONS[index]
              return (
                <FadeIn
                  key={index}
                  delay={0.1 + index * 0.05}
                  className="h-full"
                >
                  <div className="flex h-full items-start gap-3 rounded-lg border border-border bg-bg p-4">
                    {Icon && (
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    )}
                    <span className="text-sm text-text-secondary">
                      {pick(highlight)}
                    </span>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
