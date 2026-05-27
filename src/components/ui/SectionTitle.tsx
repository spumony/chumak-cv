import type { ReactNode } from 'react'

type SectionTitleProps = {
  children: ReactNode
  className?: string
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={`flex items-center gap-3 text-2xl font-semibold tracking-tight text-balance text-text-primary sm:text-3xl md:text-4xl ${className ?? ''}`}
    >
      <span aria-hidden className="h-px w-6 shrink-0 bg-accent sm:w-8" />
      {children}
    </h2>
  )
}
