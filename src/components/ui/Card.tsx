import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  /** Adds a subtle border highlight on hover (desktop only via @media hover). */
  interactive?: boolean
  className?: string
}

export function Card({ children, interactive = false, className }: CardProps) {
  return (
    <div
      className={[
        'rounded-xl border border-border bg-bg-elevated p-5 sm:p-6',
        interactive && 'transition-colors hover:border-accent/50',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
