import { Mail } from 'lucide-react'
import { LinkedinIcon } from '../components/ui/icons'
import { contact } from '../data/contact'
import type { Language } from '../i18n'

const base =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors'
const secondary = `${base} border border-border text-text-primary hover:border-accent/50`

// Shown under every post. Facts match src/data/hero.ts.
const TEXT = {
  en: {
    label: 'About the author',
    badge: 'Open to work',
    title: "I'm looking for my next team",
    about:
      "I'm a Senior Full-Stack Engineer: React, TypeScript, Next.js, and AI features on the Claude API. I'm an EU citizen, so no visa sponsorship is needed. I can work remotely or relocate within the EU.",
    ask: "If your team is hiring, or you know one that is, I'd be glad to hear from you. An intro to the right person helps a lot.",
    email: 'Email me',
    cv: 'See my CV',
  },
  ru: {
    label: 'Об авторе',
    badge: 'Открыт к работе',
    title: 'Ищу новую команду',
    about:
      'Я Senior Full-Stack инженер: React, TypeScript, Next.js и AI-фичи на Claude API. У меня гражданство ЕС, визовое спонсорство не нужно. Работаю удалённо или готов переехать в пределах ЕС.',
    ask: 'Если ваша команда ищет инженера или вы знаете такую, напишите мне. Знакомство с нужным человеком очень поможет.',
    email: 'Написать на почту',
    cv: 'Резюме',
  },
} satisfies Record<Language, Record<string, string>>

export function HiringBanner({ lang }: { lang: Language }) {
  const t = TEXT[lang]
  return (
    <aside
      aria-label={t.label}
      className="mt-14 rounded-xl border border-accent/40 bg-bg-elevated p-5 sm:p-6"
    >
      <p className="font-mono text-xs tracking-wide text-accent uppercase">
        {t.badge}
      </p>
      <h2 className="mt-2 text-xl font-semibold text-text-primary">
        {t.title}
      </h2>
      <p className="mt-3 text-text-secondary">{t.about}</p>
      <p className="mt-3 text-text-secondary">{t.ask}</p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <a
          href={`mailto:${contact.email}`}
          className={`${base} bg-accent text-bg hover:bg-accent-hover`}
        >
          <Mail aria-hidden className="h-4 w-4" />
          {t.email}
        </a>
        <a href="/" className={secondary}>
          {t.cv}
        </a>
        <a href="https://www.linkedin.com/in/spumony" className={secondary}>
          <LinkedinIcon className="h-4 w-4" />
          LinkedIn
        </a>
      </div>
    </aside>
  )
}
