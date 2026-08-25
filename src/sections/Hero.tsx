import { ArrowRight, Download, Globe, Mail, MapPin } from 'lucide-react'
import { AvatarLightbox } from '../components/AvatarLightbox'
import { FadeIn } from '../components/ui/FadeIn'
import { StatusDot } from '../components/ui/StatusDot'
import { hero } from '../data/hero'
import { resumeUrl } from '../data/resume'
import { useT } from '../i18n/useT'

const primaryCta =
  'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-bg transition-colors hover:bg-accent-hover sm:w-auto'
const secondaryCta =
  'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 font-medium text-text-primary transition-colors hover:border-accent/50 sm:w-auto'

export function Hero() {
  const { t, pick, lang } = useT()

  return (
    <section
      id="hero"
      // No min-h-dvh: the first proof has to be reachable without a full scroll.
      className="mx-auto max-w-3xl px-5 pt-20 pb-4 sm:px-6 sm:pt-22 md:px-8"
    >
      <FadeIn className="flex flex-col items-start gap-5">
        <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-sm font-medium text-success">
          <StatusDot tone="success" />
          {t('hero.openToWork')}
        </span>

        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-text-primary sm:text-5xl md:text-6xl">
            {pick(hero.name)}
          </h1>
          <p className="text-lg font-medium text-text-primary sm:text-xl">
            {pick(hero.role)}
          </p>
          <p className="font-mono text-sm text-accent sm:text-base">
            {pick(hero.stack)}
          </p>
        </div>

        <div className="flex w-full flex-col gap-4 rounded-2xl border border-border bg-bg-elevated p-5 sm:flex-row sm:items-start sm:gap-6">
          {hero.avatar && (
            <AvatarLightbox src={hero.avatar} alt={pick(hero.name)} />
          )}
          <div className="flex flex-col gap-3">
            <p className="text-base text-text-secondary sm:text-lg">
              {pick(hero.pitch)}
            </p>
            {(hero.location || hero.availability) && (
              <div className="flex flex-col gap-1.5 border-t border-border/60 pt-3 text-sm text-text-muted">
                {hero.location && (
                  <p className="flex items-center gap-1.5">
                    <MapPin aria-hidden className="h-4 w-4 shrink-0" />
                    {pick(hero.location)}
                  </p>
                )}
                {hero.availability && (
                  <p className="flex items-start gap-1.5">
                    <Globe aria-hidden className="mt-0.5 h-4 w-4 shrink-0" />
                    <span className="text-balance">
                      {pick(hero.availability)}
                    </span>
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Proof before contact: a recruiter wants evidence first. */}
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="#work" className={primaryCta}>
            {t('hero.viewWork')}
            <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
          <a href={resumeUrl[lang]} download className={secondaryCta}>
            {t('hero.downloadCv')}
            <Download aria-hidden className="h-4 w-4" />
          </a>
          <a href="#contact" className={secondaryCta}>
            {t('hero.getInTouch')}
            <Mail aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={0.05}>
        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-border pt-4 sm:grid-cols-4">
          {hero.proof.map((item, index) => (
            <li
              key={index}
              className="font-mono text-xs text-text-secondary sm:text-sm"
            >
              {pick(item)}
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  )
}
