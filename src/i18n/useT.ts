import { useTranslation } from 'react-i18next'
import type { Language } from './index'

/**
 * Thin wrapper over react-i18next that also exposes the normalized active
 * language and a `pick` helper for selecting from localized data objects
 * (`{ ru, en }`) defined in src/data.
 */
export function useT() {
  const { t, i18n } = useTranslation()
  const lang: Language = i18n.language.toLowerCase().startsWith('ru')
    ? 'ru'
    : 'en'

  function pick<T>(value: Record<Language, T>): T {
    return value[lang]
  }

  return { t, i18n, lang, pick }
}
