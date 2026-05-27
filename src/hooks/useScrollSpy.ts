import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently centered in the viewport.
 * Pass a stable array of element ids (e.g. a module-level constant).
 */
export function useScrollSpy(
  ids: readonly string[],
  rootMargin = '-45% 0px -50% 0px',
): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin, threshold: 0 },
    )

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, rootMargin])

  return activeId
}
