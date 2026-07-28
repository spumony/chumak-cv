import { Download } from 'lucide-react'
import { resumeUrl } from '../data/resume'
import { useT } from '../i18n/useT'

/**
 * Compact, always-visible CV download in the header. The visible label is just
 * "CV" (identical in both languages) so it survives the 1024px header budget;
 * the full wording lives in aria-label for screen readers.
 */
export function DownloadCvButton() {
  const { t, lang } = useT()

  return (
    <a
      href={resumeUrl[lang]}
      download
      aria-label={t('experience.downloadCv')}
      className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
    >
      <Download aria-hidden className="h-4 w-4" />
      CV
    </a>
  )
}
