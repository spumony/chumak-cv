import type { Language } from '../i18n'
import { notes, postPath } from './notes'

const TEXT = {
  en: {
    title: 'Posts',
    lead: 'Short practical posts on Claude Code, prompting and AI features in production.',
  },
  ru: {
    title: 'Посты',
    lead: 'Короткие практичные посты про Claude Code, промпты и AI-фичи в продакшене.',
  },
}

export function NotesIndex({ lang }: { lang: Language }) {
  return (
    <>
      <h1 className="text-3xl font-semibold sm:text-4xl">{TEXT[lang].title}</h1>
      <p className="mt-3 text-text-secondary">{TEXT[lang].lead}</p>
      <ul className="mt-10 space-y-8">
        {notes.map((n) => (
          <li key={n.slug}>
            <a href={postPath(lang, n.slug)} className="group block">
              <p className="font-mono text-xs text-text-muted">{n.date}</p>
              <h2 className="mt-1 text-xl font-semibold group-hover:text-accent">
                {n[lang].title}
              </h2>
              <p className="mt-2 text-text-secondary">{n[lang].description}</p>
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
