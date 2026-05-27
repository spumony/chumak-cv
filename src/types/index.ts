/** A string available in both site languages. */
export type LocalizedString = { ru: string; en: string }

/** Section ids — used for anchors, smooth scroll and scroll-spy. */
export const SECTION_IDS = [
  'hero',
  'experience',
  'projects',
  'education',
  'skills',
  'languages',
  'contact',
] as const

export type SectionId = (typeof SECTION_IDS)[number]

/** Sections that appear in the navigation (everything except the hero). */
export const NAV_SECTION_IDS = [
  'experience',
  'projects',
  'education',
  'skills',
  'languages',
  'contact',
] as const

export type NavSectionId = (typeof NAV_SECTION_IDS)[number]

export type HeroData = {
  name: LocalizedString
  role: LocalizedString
  /** 2–3 line elevator pitch. */
  pitch: LocalizedString
  location?: LocalizedString
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
  logo?: string
}

export type Project = {
  title: LocalizedString
  description: LocalizedString
  technologies: string[]
  links?: {
    live?: string
    source?: string
  }
  /** Visually emphasize this project. */
  featured?: boolean
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
  /** Proficiency description, e.g. "Upper-Intermediate". */
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
