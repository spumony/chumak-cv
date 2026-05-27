import type { HeroData } from '../types'

export const hero: HeroData = {
  name: { ru: 'Александр Чумак', en: 'Alexandr Chumak' },
  role: {
    ru: 'Senior Frontend-разработчик · React и React Native',
    en: 'Senior Frontend Developer · React & React Native',
  },
  pitch: {
    ru: 'Более 5 лет создаю масштабируемые веб-приложения и цифровые продукты на основе React-экосистемы. Делаю производительные интерфейсы, чистую архитектуру и дизайн-системы, работаю в кросс-функциональных командах и участвую в технических решениях.',
    en: '5+ years building scalable web apps and digital products across the React ecosystem. I focus on performant UIs, clean architecture and design systems, and thrive in cross-functional teams. Open to remote roles across Europe.',
  },
  location: { ru: 'Кишинёв, Молдова', en: 'Chișinău, Moldova' },
  // avatar: '/avatar.jpg', // add an image to /public and uncomment to show it
}
