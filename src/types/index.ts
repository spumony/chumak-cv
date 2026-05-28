/** A string available in both site languages. */
export type LocalizedString = { ru: string; en: string }

/** Section ids — used for anchors, smooth scroll and scroll-spy. */
export const SECTION_IDS = [
  'hero',
  'focus',
  'work',
  'experience',
  'education',
  'skills',
  'languages',
  'freelance',
  'contact',
] as const

export type SectionId = (typeof SECTION_IDS)[number]

/** Sections that appear in the navigation (everything except the hero). */
export const NAV_SECTION_IDS = [
  'work',
  'experience',
  'education',
  'skills',
  'languages',
  'freelance',
  'contact',
] as const

export type NavSectionId = (typeof NAV_SECTION_IDS)[number]

export type FocusData = {
  lead: LocalizedString
  /** "Now" manifesto bullets (Building / Reading / Open to / Not taking). */
  bullets: LocalizedString[]
  /** Date string shown as "Updated …" — bilingual. */
  updatedOn: LocalizedString
}

export type CaseStudyStatus = 'in-progress' | 'shipped' | 'current'

export type CaseStudy = {
  title: string
  status?: CaseStudyStatus
  /** Free-form period label, e.g. "2026 — Present". */
  period?: LocalizedString
  problem: LocalizedString
  approach: LocalizedString
  stack: string[]
  outcome: LocalizedString
  links?: {
    live?: string
    repo?: string
    writeup?: string
  }
}

export type HeroData = {
  name: LocalizedString
  role: LocalizedString
  /** 2–3 line elevator pitch. */
  pitch: LocalizedString
  location?: LocalizedString
  /** One-line availability signal (roles, remote, contracts). */
  availability?: LocalizedString
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
  /** Aspirational / learning skills — rendered muted, never claimed as known. */
  upcoming?: boolean
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

export type FreelanceOffer = {
  title: LocalizedString
  description: LocalizedString
}

export type FreelanceFaq = {
  q: LocalizedString
  a: LocalizedString
}

export type FreelanceData = {
  intro: LocalizedString
  /** One-line "who I work with" tagline shown under the intro. */
  whoIWorkWith?: LocalizedString
  offers: FreelanceOffer[]
  process: LocalizedString[]
  faq: FreelanceFaq[]
  /** Optional booking link (Cal.com/Calendly). Omit to show only email. */
  bookingUrl?: string
}
