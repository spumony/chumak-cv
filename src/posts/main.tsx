import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/geist-mono/400.css'
import '../index.css'
import i18n, { type Language } from '../i18n'
import { ThemeProvider } from '../theme/ThemeProvider'
import { NoteLayout } from './NoteLayout'
import { NotesIndex } from './NotesIndex'
import { notes } from './notes'

// One entry for every post page:
// /posts/ and /posts/ru/ list posts, /posts/<slug>/ and /posts/<slug>/ru/ show one.
const parts = location.pathname.split('/').filter(Boolean)
const lang: Language = parts.at(-1) === 'ru' ? 'ru' : 'en'
const note = notes.find((n) => n.slug === parts[1])
const Body = note?.Body[lang]

// The URL decides the language; the CV page then opens in the same one.
void i18n.changeLanguage(lang)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <NoteLayout lang={lang} slug={note?.slug}>
        {note && Body ? (
          <article className="note">
            <p className="font-mono text-xs text-text-muted">{note.date}</p>
            <h1>{note[lang].title}</h1>
            <Body />
          </article>
        ) : (
          <NotesIndex lang={lang} />
        )}
      </NoteLayout>
    </ThemeProvider>
  </StrictMode>,
)
