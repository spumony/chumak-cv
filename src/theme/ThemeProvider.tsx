import { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext, type Theme } from './ThemeContext'

const STORAGE_KEY = 'theme'

// Read the theme set by the inline <head> script (before paint).
function initialTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'light' ? '#ffffff' : '#0a0a0a')
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Ignore storage failures (e.g. Safari private mode).
    }
  }, [theme])

  const toggle = () =>
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return <ThemeContext value={{ theme, toggle }}>{children}</ThemeContext>
}
