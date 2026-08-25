import type { Language } from '../i18n'

/**
 * ATS-friendly PDFs in /public, rebuilt by scripts/build-cv.sh from the HTML
 * in scripts/. The site offers the Core variant; the AI Product variant
 * (Alexandr-Chumak-Senior-Product-Engineer-AI.pdf) is for targeted
 * applications — see docs/tailor-cv.md.
 */
export const resumeUrl: Record<Language, string> = {
  en: '/Alexandr-Chumak-Senior-Frontend-Engineer.pdf',
  ru: '/Alexandr-Chumak-Senior-Frontend-Engineer-RU.pdf',
}
