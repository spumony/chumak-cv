import { Badge } from '../components/ui/Badge'
import { FadeIn } from '../components/ui/FadeIn'
import { SectionTitle } from '../components/ui/SectionTitle'
import { skills } from '../data/skills'
import { useT } from '../i18n/useT'

export function Skills() {
  const { t, pick } = useT()

  return (
    <section
      id="skills"
      className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28"
    >
      <FadeIn>
        <SectionTitle>{t('nav.skills')}</SectionTitle>
      </FadeIn>

      <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:gap-8">
        {skills.map((group, index) => (
          <FadeIn key={index} delay={index * 0.05}>
            <div>
              <h3 className="font-mono text-sm tracking-wider text-text-muted uppercase">
                {pick(group.category)}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item, itemIndex) => (
                  <Badge
                    key={itemIndex}
                    tone={group.upcoming ? 'muted' : 'default'}
                  >
                    {typeof item === 'string' ? item : pick(item)}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
