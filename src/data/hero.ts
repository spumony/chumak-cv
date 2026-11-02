import type { HeroData } from '../types'

// Facts here are governed by docs/candidate-evidence.md. Change that first.
export const hero: HeroData = {
  name: { ru: 'Александр Чумак', en: 'Aleksandr Chumak' },
  role: {
    ru: 'Senior Frontend / Product-инженер',
    en: 'Senior Frontend / Product Engineer',
  },
  stack: {
    ru: 'React · TypeScript · Next.js · React Native',
    en: 'React · TypeScript · Next.js · React Native',
  },
  // Two sentences: the cards below carry the detail.
  pitch: {
    ru: '6+ лет в продакшене: веб и мобильные продукты на React и React Native. Свои продукты довожу до релиза: Rivella работает в продакшене, Prosvetum опубликован в App Store.',
    en: '6+ years shipping production web and mobile software in React and React Native. I take my own products all the way to release: Rivella runs in production and Prosvetum is on the App Store.',
  },
  location: {
    ru: 'Кишинёв, Молдова · UTC+2/+3',
    en: 'Chișinău, Moldova · UTC+2/+3',
  },
  // Citizenship lives in the proof strip, so it is not repeated here.
  availability: {
    ru: 'Удалённо, офис в Кишинёве или релокация по ЕС · готов приступить сразу',
    en: 'Remote, on‑site in Chișinău, or relocation within the EU · Available immediately',
  },
  proof: [
    { ru: '6+ лет в продакшене', en: '6+ years in production' },
    { ru: '5 лет на EVCARGO', en: '5 years on EVCARGO' },
    { ru: 'AI-продукт в продакшене', en: 'AI product in production' },
    {
      ru: 'Гражданство ЕС, без спонсорства',
      en: 'EU citizen, no sponsorship',
    },
  ],
  avatar: '/avatar.jpg',
}
