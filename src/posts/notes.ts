import type { ComponentType } from 'react'
import type { Language } from '../i18n'
import meta from './meta.json'
import {
  ClaudeMdVsHooksEn,
  ClaudeMdVsHooksRu,
} from './articles/ClaudeMdVsHooks'
import { WriteTheReasonEn, WriteTheReasonRu } from './articles/WriteTheReason'
import { GrillMeEn, GrillMeRu } from './articles/GrillMe'

// Titles and descriptions live in meta.json: the page generator reads them too.
const bodies: Record<string, Record<Language, ComponentType>> = {
  'grill-me': { en: GrillMeEn, ru: GrillMeRu },
  'claude-md-vs-hooks': { en: ClaudeMdVsHooksEn, ru: ClaudeMdVsHooksRu },
  'write-the-reason': { en: WriteTheReasonEn, ru: WriteTheReasonRu },
}

export type Note = (typeof meta)[number] & {
  Body: Record<Language, ComponentType>
}

export const notes: Note[] = meta.map((m) => ({ ...m, Body: bodies[m.slug] }))

export const postPath = (lang: Language, slug?: string) =>
  `/posts/${slug ? `${slug}/` : ''}${lang === 'ru' ? 'ru/' : ''}`

// "24 November 2026" / "24 ноября 2026 г.". T12:00 keeps the day in any time zone.
export const formatDate = (date: string, lang: Language) =>
  new Date(`${date}T12:00:00`).toLocaleDateString(
    lang === 'ru' ? 'ru-RU' : 'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric' },
  )

// The LinkedIn image of a post (pnpm posts:cards). ?v= busts the 1-day png cache.
export const postImage = (note: Note) =>
  `/posts/${note.slug}/linkedin.png?v=${note.date}`
