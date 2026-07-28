import { FadeIn } from '../components/ui/FadeIn'
import { SectionTitle } from '../components/ui/SectionTitle'
import { focus } from '../data/focus'
import { useT } from '../i18n/useT'

export function Focus() {
  const { t, pick } = useT()

  return (
    <section id="focus" className="border-y border-border bg-accent/5">
      <div className="mx-auto max-w-3xl px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6">
        <FadeIn>
          <SectionTitle>{t('focus.title')}</SectionTitle>
          <p className="mt-6 max-w-2xl text-base text-text-secondary sm:text-lg">
            {pick(focus.lead)}
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <ul className="mt-8 flex flex-col gap-3 sm:mt-10">
            {focus.bullets.map((bullet, index) => (
              <li key={index} className="flex gap-3 text-text-secondary">
                <span
                  aria-hidden
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                <span>{pick(bullet)}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}
