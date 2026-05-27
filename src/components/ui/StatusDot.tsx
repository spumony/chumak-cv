type StatusDotTone = 'success' | 'accent'

const TONES: Record<StatusDotTone, string> = {
  success: 'bg-success',
  accent: 'bg-accent',
}

/** Small pulsing "live" dot. The ping animation is disabled under
 *  prefers-reduced-motion via the global reset. */
export function StatusDot({ tone = 'success' }: { tone?: StatusDotTone }) {
  return (
    <span aria-hidden className="relative flex h-2 w-2">
      <span
        className={`absolute inline-flex h-full w-full animate-ping rounded-full ${TONES[tone]} opacity-75`}
      />
      <span
        className={`relative inline-flex h-2 w-2 rounded-full ${TONES[tone]}`}
      />
    </span>
  )
}
