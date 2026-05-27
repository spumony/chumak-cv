import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
  /** Accent-toned variant for emphasis (e.g. featured / proficiency). */
  accent?: boolean
  className?: string
}

/** Monospace pill for technologies and tags. Never wraps internally. */
export function Badge({ children, accent = false, className }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-sm whitespace-nowrap',
        accent
          ? 'border-accent/40 bg-accent/10 text-accent'
          : 'border-border bg-bg-elevated text-text-secondary',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  )
}
