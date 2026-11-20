import type { Language } from '../i18n'
import { notes, postPath } from './notes'
import { PostImage } from './PostImage'

const TEXT = {
  en: {
    title: 'Posts',
    lead: 'Short practical posts on Claude Code, prompting and AI features in production.',
    read: 'Read the post →',
  },
  ru: {
    title: 'Посты',
    lead: 'Короткие практичные посты про Claude Code, промпты и AI-фичи в продакшене.',
    read: 'Читать пост →',
  },
}

export function NotesIndex({ lang }: { lang: Language }) {
  const t = TEXT[lang]
  return (
    <>
      <h1 className="text-3xl font-semibold sm:text-4xl">{t.title}</h1>
      <p className="mt-3 text-text-secondary">{t.lead}</p>
      <ul className="mt-10 space-y-4">
        {notes.map((n) => (
          <li key={n.slug}>
            <a
              href={postPath(lang, n.slug)}
              className="group flex gap-4 rounded-xl border border-border bg-bg-elevated p-4 transition-colors hover:border-accent sm:gap-6 sm:p-5"
            >
              <PostImage
                note={n}
                lang={lang}
                className="h-auto w-20 shrink-0 self-start sm:w-28"
              />
              <div className="min-w-0">
                <p className="font-mono text-xs text-text-muted">{n.date}</p>
                <h2 className="mt-1 text-lg font-semibold sm:text-xl">
                  {n[lang].title}
                </h2>
                <p className="mt-2 text-sm text-text-secondary sm:text-base">
                  {n[lang].description}
                </p>
                <p className="mt-3 text-sm font-medium text-accent group-hover:underline">
                  {t.read}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
