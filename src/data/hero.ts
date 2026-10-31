import type { HeroData } from '../types'

// Facts here are governed by docs/candidate-evidence.md. Change that first.
export const hero: HeroData = {
  name: { ru: 'Александр Чумак', en: 'Alexandr Chumak' },
  role: {
    ru: 'Senior Frontend / Product-инженер',
    en: 'Senior Frontend / Product Engineer',
  },
  stack: {
    ru: 'React · TypeScript · Next.js · React Native',
    en: 'React · TypeScript · Next.js · React Native',
  },
  pitch: {
    ru: '6+ лет в продакшене, веб и мобильные продукты. Пять лет фронтенда на CRM для логистики EVCARGO, затем единственный фронтенд-разработчик CRM для ресторанов. Свои продукты собираю целиком и довожу до релиза: Rivella, мультитенантный AI-ассистент записи, работает в продакшене, Prosvetum, iOS-приложение с саммари книг, опубликовано в App Store.',
    en: '6+ years shipping production web and mobile software. Five years of frontend on the EVCARGO logistics CRM, then the only frontend engineer on a restaurant CRM. I also build my own products end to end and ship them: Rivella, a multi-tenant AI booking assistant, runs in production, and Prosvetum, an iOS book-summary app, is on the App Store.',
  },
  location: { ru: 'Кишинёв, Молдова · UTC+2', en: 'Chișinău, Moldova · UTC+2' },
  availability: {
    ru: 'Гражданство ЕС · спонсорство для работы в ЕС не требуется · удалённо по ЕС или релокация',
    en: 'EU citizen · No sponsorship required for EU roles · Remote EU or relocation',
  },
  proof: [
    { ru: '6+ лет в продакшене', en: '6+ years in production' },
    { ru: '5 лет на EVCARGO', en: '5 years on EVCARGO' },
    { ru: 'AI-продукт в продакшене', en: 'AI product in production' },
    { ru: 'Гражданство ЕС', en: 'EU citizen, no sponsorship' },
  ],
  avatar: '/avatar.jpg',
}
