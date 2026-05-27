import { Moon, Sun } from 'lucide-react'
import { useT } from '../i18n/useT'
import { useTheme } from '../theme/useTheme'

type ThemeToggleProps = {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggle } = useTheme()
  const { t } = useT()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t('a11y.toggleTheme')}
      title={t('a11y.toggleTheme')}
      className={`flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:text-text-primary ${className ?? ''}`}
    >
      {isDark ? (
        <Sun aria-hidden className="h-5 w-5" />
      ) : (
        <Moon aria-hidden className="h-5 w-5" />
      )}
    </button>
  )
}
