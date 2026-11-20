import type { ComponentType } from 'react'
import type { Language } from '../i18n'
import meta from './meta.json'
import {
  ClaudeMdVsHooksEn,
  ClaudeMdVsHooksRu,
} from './articles/ClaudeMdVsHooks'

// Titles and descriptions live in meta.json: the page generator reads them too.
const bodies: Record<string, Record<Language, ComponentType>> = {
  'claude-md-vs-hooks': { en: ClaudeMdVsHooksEn, ru: ClaudeMdVsHooksRu },
}

export type Note = (typeof meta)[number] & {
  Body: Record<Language, ComponentType>
}

export const notes: Note[] = meta.map((m) => ({ ...m, Body: bodies[m.slug] }))

export const postPath = (lang: Language, slug?: string) =>
  `/posts/${slug ? `${slug}/` : ''}${lang === 'ru' ? 'ru/' : ''}`
