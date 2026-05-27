import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
  className?: string
}

/** Monospace pill for technologies and tags. Never wraps internally. */
export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-border bg-bg-elevated px-2.5 py-1 font-mono text-sm whitespace-nowrap text-text-secondary ${className ?? ''}`}
    >
      {children}
    </span>
  )
}
