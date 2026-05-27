import type { HeroData } from '../types'

export const hero: HeroData = {
  name: { ru: 'Александр Чумак', en: 'Alexandr Chumak' },
  role: {
    ru: 'Senior Frontend-инженер → AI Product Engineer',
    en: 'Senior Frontend Engineer → AI Product Engineer',
  },
  pitch: {
    ru: '5 лет на React, TypeScript и Next.js с продуктовым взглядом — перехожу в AI product engineering. Прохожу интенсивную 16-недельную программу с упором на backend, базы данных и AI-инжиниринг: учусь, строя реальное full-stack приложение, а не туториалы.',
    en: '5 years in React, TypeScript and Next.js with a product mindset — now moving into AI product engineering. I’m in an intensive 16-week program going deep on backend, databases and AI engineering: learning by building a real full-stack app, not following tutorials.',
  },
  location: { ru: 'Кишинёв, Молдова', en: 'Chișinău, Moldova' },
  // avatar: '/avatar.jpg', // add an image to /public and uncomment to show it
}
