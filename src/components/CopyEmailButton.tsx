import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { useT } from '../i18n/useT'

type CopyEmailButtonProps = {
  email: string
  className?: string
}

export function CopyEmailButton({ email, className }: CopyEmailButtonProps) {
  const { t } = useT()
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard
      ?.writeText(email)
      .then(() => {
        setCopied(true)
        window.setTimeout(() => setCopied(false), 2000)
      })
      .catch(() => {
        // Clipboard unavailable (e.g. insecure context) — ignore.
      })
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-live="polite"
      className={className}
    >
      {copied ? (
        <Check aria-hidden className="h-4 w-4" />
      ) : (
        <Copy aria-hidden className="h-4 w-4" />
      )}
      {copied ? t('contact.copied') : t('contact.copyEmail')}
    </button>
  )
}
