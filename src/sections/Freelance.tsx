import { CalendarClock, Mail } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { FadeIn } from '../components/ui/FadeIn'
import { SectionTitle } from '../components/ui/SectionTitle'
import { contact } from '../data/contact'
import { freelance } from '../data/freelance'
import { useT } from '../i18n/useT'

const subheading = 'font-mono text-sm tracking-wider text-text-muted uppercase'
const primaryCta =
  'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-bg transition-colors hover:bg-accent-hover sm:w-auto'
const secondaryCta =
  'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 font-medium text-text-primary transition-colors hover:border-accent/50 sm:w-auto'

export function Freelance() {
  const { t, pick } = useT()

  return (
    <section
      id="freelance"
      className="mx-auto max-w-5xl px-5 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12"
    >
      <FadeIn>
        <SectionTitle>{t('freelance.title')}</SectionTitle>
        <p className="mt-6 max-w-2xl text-base text-text-secondary sm:text-lg">
          {pick(freelance.intro)}
        </p>
        {freelance.whoIWorkWith && (
          <p className="mt-4 max-w-2xl text-sm text-text-muted">
            <span className="font-mono tracking-wider uppercase">
              {t('freelance.whoIWorkWith')}
            </span>{' '}
            · {pick(freelance.whoIWorkWith)}
          </p>
        )}
      </FadeIn>

      {/* What I help with */}
      <h3 className={`mt-10 ${subheading}`}>{t('freelance.offersTitle')}</h3>
      <div className="mt-4 grid auto-rows-fr grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
        {freelance.offers.map((offer, index) => (
          <FadeIn key={index} delay={index * 0.05} className="h-full">
            <Card className="h-full">
              <h4 className="font-semibold text-text-primary">
                {pick(offer.title)}
              </h4>
              <p className="mt-2 text-sm text-text-secondary">
                {pick(offer.description)}
              </p>
            </Card>
          </FadeIn>
        ))}
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {/* How I work */}
        <FadeIn>
          <h3 className={subheading}>{t('freelance.processTitle')}</h3>
          <ol className="mt-4 flex flex-col gap-4">
            {freelance.process.map((step, index) => (
              <li key={index} className="flex gap-3 text-text-secondary">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-xs text-accent">
                  {index + 1}
                </span>
                <span>{pick(step)}</span>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={`mailto:${contact.email}`} className={primaryCta}>
              <Mail aria-hidden className="h-4 w-4" />
              {t('freelance.emailCta')}
            </a>
            {freelance.bookingUrl && (
              <a
                href={freelance.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className={secondaryCta}
              >
                <CalendarClock aria-hidden className="h-4 w-4" />
                {t('freelance.bookCta')}
              </a>
            )}
          </div>
        </FadeIn>

        {/* FAQ */}
        <FadeIn delay={0.05}>
          <h3 className={subheading}>{t('freelance.faqTitle')}</h3>
          <dl className="mt-4 flex flex-col">
            {freelance.faq.map((item, index) => (
              <div key={index} className="border-t border-border py-4">
                <dt className="font-medium text-text-primary">
                  {pick(item.q)}
                </dt>
                <dd className="mt-1 text-sm text-text-secondary">
                  {pick(item.a)}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  )
}
