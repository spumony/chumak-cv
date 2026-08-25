/** A string available in both site languages. */
export type LocalizedString = { ru: string; en: string }

/** Section ids — used for anchors, smooth scroll and scroll-spy. */
export const SECTION_IDS = [
  'hero',
  'work',
  'experience',
  'skills',
  'approach',
  'background',
  'contact',
] as const

export type SectionId = (typeof SECTION_IDS)[number]

/**
 * Sections that appear in the navigation. Deliberately shorter than
 * SECTION_IDS: a recruiter scans four labels, not seven.
 */
export const NAV_SECTION_IDS = [
  'work',
  'experience',
  'skills',
  'contact',
] as const

export type NavSectionId = (typeof NAV_SECTION_IDS)[number]

/** A short stance on how the work gets done, shown in "How I work". */
export type Principle = {
  title: LocalizedString
  body: LocalizedString
}

export type CaseStudy = {
  title: string
  /** One line of context: what the product is and whose problem it solves. */
  context: LocalizedString
  /** Short status pill, e.g. "Deployed" / "5 years". Omit when there is none. */
  badge?: LocalizedString
  /** Free-form period label, e.g. "2021 — 2025 · five years". */
  period?: LocalizedString
  /** What exactly was mine — the question a recruiter is actually asking. */
  role: LocalizedString
  /**
   * 2–3 sentences on the architecture and the decisions behind it. Omitted
   * where publication scope does not allow describing the system.
   */
  system?: LocalizedString
  /** Short verified facts. Every one must be defensible in an interview. */
  evidence?: LocalizedString[]
  stack: string[]
  links?: {
    live?: string
    repo?: string
    writeup?: string
  }
}

export type HeroData = {
  name: LocalizedString
  role: LocalizedString
  /** Stack line under the role. */
  stack: LocalizedString
  /** 2–3 line elevator pitch. */
  pitch: LocalizedString
  location?: LocalizedString
  /** One-line availability signal (work authorisation, remote, relocation). */
  availability?: LocalizedString
  /** Compact proof strip below the hero — verified facts only, no counters. */
  proof: LocalizedString[]
  /** Path/URL to the avatar image. Omit to hide the avatar. */
  avatar?: string
}

export type ExperienceItem = {
  company: LocalizedString
  location: LocalizedString
  role: LocalizedString
  /** Free-form period label, e.g. "2022 — Present" / "2022 — наст. время". */
  period: LocalizedString
  description: LocalizedString
  bullets?: LocalizedString[]
  technologies: string[]
  /** Marks the current role — shows a live "Now" badge. */
  current?: boolean
  logo?: string
}

export type EducationItem = {
  institution: LocalizedString
  degree: LocalizedString
  field?: LocalizedString
  location?: LocalizedString
  period: string
}

export type SkillCategory = {
  category: LocalizedString
  /** Plain tech names stay as strings; translatable terms use LocalizedString. */
  items: (string | LocalizedString)[]
}

export type LanguageItem = {
  name: LocalizedString
  /** Proficiency description, e.g. "Professional working proficiency". */
  level: LocalizedString
  /** Short badge, e.g. "B2" or "Native". */
  levelCode?: string
}

export type ContactKind =
  | 'email'
  | 'linkedin'
  | 'github'
  | 'telegram'
  | 'website'

export type ContactLink = {
  kind: ContactKind
  label: string
  href: string
}

export type ContactData = {
  email: string
  links: ContactLink[]
}
