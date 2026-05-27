import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import ru from './locales/ru.json'

export const SUPPORTED_LANGUAGES = ['en', 'ru'] as const
export type Language = (typeof SUPPORTED_LANGUAGES)[number]

const STORAGE_KEY = 'lang'

function isLanguage(value: string | null): value is Language {
  return value === 'en' || value === 'ru'
}

function detectInitialLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (isLanguage(stored)) return stored
  return navigator.language?.toLowerCase().startsWith('ru') ? 'ru' : 'en'
}

const initialLanguage = detectInitialLanguage()

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

function applyHtmlLang(lng: string) {
  document.documentElement.lang = lng
}

applyHtmlLang(initialLanguage)

i18n.on('languageChanged', (lng) => {
  applyHtmlLang(lng)
  try {
    localStorage.setItem(STORAGE_KEY, lng)
  } catch {
    // Ignore storage failures (e.g. Safari private mode).
  }
})

export default i18n
