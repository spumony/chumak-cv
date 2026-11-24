import type { ComponentType } from 'react'
import type { Language } from '../i18n'
import meta from './meta.json'
import {
  ClaudeMdVsHooksEn,
  ClaudeMdVsHooksRu,
} from './articles/ClaudeMdVsHooks'
import { WriteTheReasonEn, WriteTheReasonRu } from './articles/WriteTheReason'
import { GrillMeEn, GrillMeRu } from './articles/GrillMe'
import { PasteAnExampleEn, PasteAnExampleRu } from './articles/PasteAnExample'
import {
  PhoneTranscriptEn,
  PhoneTranscriptRu,
} from './articles/PhoneTranscript'
import { ThreeChecksEn, ThreeChecksRu } from './articles/ThreeChecks'
import { SameContextEn, SameContextRu } from './articles/SameContext'
import {
  AiFluencyCourseEn,
  AiFluencyCourseRu,
} from './articles/AiFluencyCourse'
import { HumanizerEn, HumanizerRu } from './articles/Humanizer'
import { XlsxSkillEn, XlsxSkillRu } from './articles/XlsxSkill'
import {
  GoogleOrChatgptEn,
  GoogleOrChatgptRu,
} from './articles/GoogleOrChatgpt'
import { GmailDraftsEn, GmailDraftsRu } from './articles/GmailDrafts'
import { RoleInOneLineEn, RoleInOneLineRu } from './articles/RoleInOneLine'
import { PromptMasterEn, PromptMasterRu } from './articles/PromptMaster'
import {
  GooglePromptingGuideEn,
  GooglePromptingGuideRu,
} from './articles/GooglePromptingGuide'
import { HookifyEn, HookifyRu } from './articles/Hookify'
import { BossGetsMoreEn, BossGetsMoreRu } from './articles/BossGetsMore'
import { PptxSkillEn, PptxSkillRu } from './articles/PptxSkill'

// Titles and descriptions live in meta.json: the page generator reads them too.
const bodies: Record<string, Record<Language, ComponentType>> = {
  'phone-transcript': { en: PhoneTranscriptEn, ru: PhoneTranscriptRu },
  'three-checks': { en: ThreeChecksEn, ru: ThreeChecksRu },
  'same-context': { en: SameContextEn, ru: SameContextRu },
  'ai-fluency-course': { en: AiFluencyCourseEn, ru: AiFluencyCourseRu },
  humanizer: { en: HumanizerEn, ru: HumanizerRu },
  'xlsx-skill': { en: XlsxSkillEn, ru: XlsxSkillRu },
  'google-or-chatgpt': { en: GoogleOrChatgptEn, ru: GoogleOrChatgptRu },
  'gmail-drafts': { en: GmailDraftsEn, ru: GmailDraftsRu },
  'role-in-one-line': { en: RoleInOneLineEn, ru: RoleInOneLineRu },
  'prompt-master': { en: PromptMasterEn, ru: PromptMasterRu },
  'google-prompting-guide': {
    en: GooglePromptingGuideEn,
    ru: GooglePromptingGuideRu,
  },
  hookify: { en: HookifyEn, ru: HookifyRu },
  'boss-gets-more': { en: BossGetsMoreEn, ru: BossGetsMoreRu },
  'pptx-skill': { en: PptxSkillEn, ru: PptxSkillRu },
  'paste-an-example': { en: PasteAnExampleEn, ru: PasteAnExampleRu },
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
