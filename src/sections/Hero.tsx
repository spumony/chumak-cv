import { ArrowRight, Globe, Mail, MapPin } from 'lucide-react'
import { FadeIn } from '../components/ui/FadeIn'
import { StatusDot } from '../components/ui/StatusDot'
import { hero } from '../data/hero'
import { useT } from '../i18n/useT'

const primaryCta =
  'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-bg transition-colors hover:bg-accent-hover sm:w-auto'
const secondaryCta =
  'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 font-medium text-text-primary transition-colors hover:border-accent/50 sm:w-auto'

export function Hero() {
  const { t, pick } = useT()

  return (
    <section
      id="hero"
      className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center px-5 py-24 sm:px-6 md:px-8"
    >
      <FadeIn className="flex flex-col items-start gap-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-sm font-medium text-success">
            <StatusDot tone="success" />
            {t('hero.openToWork')}
          </span>
          {hero.avatar && (
            <img
              src={hero.avatar}
              alt={pick(hero.name)}
              width={64}
              height={64}
              loading="eager"
              className="h-7 w-7 rounded-full border border-border object-cover grayscale transition-[filter,transform] duration-300 ease-out hover:grayscale-0 hover:scale-110 motion-reduce:transition-none motion-reduce:hover:scale-100"
            />
          )}
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-text-primary sm:text-5xl md:text-7xl">
            {pick(hero.name)}
          </h1>
          <p className="font-mono text-base text-accent sm:text-lg">
            {pick(hero.role)}
          </p>
        </div>

        <p className="max-w-2xl text-base text-text-secondary sm:text-lg">
          {pick(hero.pitch)}
        </p>

        <div className="flex flex-col gap-1.5 text-sm text-text-muted">
          {hero.location && (
            <p className="flex items-center gap-1.5">
              <MapPin aria-hidden className="h-4 w-4 shrink-0" />
              {pick(hero.location)}
            </p>
          )}
          {hero.availability && (
            <p className="flex items-start gap-1.5">
              <Globe aria-hidden className="mt-0.5 h-4 w-4 shrink-0" />
              <span className="text-balance">{pick(hero.availability)}</span>
            </p>
          )}
        </div>

        <div className="mt-2 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="#contact" className={primaryCta}>
            {t('hero.getInTouch')}
            <Mail aria-hidden className="h-4 w-4" />
          </a>
          <a href="#experience" className={secondaryCta}>
            {t('hero.viewWork')}
            <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </FadeIn>
    </section>
  )
}
