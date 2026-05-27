import type { ReactNode } from 'react'

type BadgeTone = 'default' | 'accent' | 'muted'

type BadgeProps = {
  children: ReactNode
  tone?: BadgeTone
  className?: string
}

const TONES: Record<BadgeTone, string> = {
  default: 'border-border bg-bg-elevated text-text-secondary',
  accent: 'border-accent/40 bg-accent/10 text-accent',
  muted: 'border-dashed border-border bg-transparent text-text-muted',
}

/** Monospace pill for technologies and tags. Never wraps internally. */
export function Badge({ children, tone = 'default', className }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-sm whitespace-nowrap',
        TONES[tone],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  )
}
