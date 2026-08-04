import type { Principle } from '../types'

export const principles: Principle[] = [
  {
    title: { ru: 'Отвечаю за весь путь', en: 'End-to-end ownership' },
    body: {
      ru: 'Веду фичу от схемы данных до экрана. На двух продуктах я единственный фронтенд-инженер, а Prosvetum и Rivella написал один целиком.',
      en: 'I carry a feature from the data schema to the screen. I am the only frontend engineer on two products, and I wrote Prosvetum and Rivella alone.',
    },
  },
  {
    title: {
      ru: 'Договорённости — в репозитории',
      en: 'Conventions live in the repo',
    },
    body: {
      ru: 'Роутинг, структура и правила именования записаны в проекте, а не держатся в голове. Следующему человеку не придётся спрашивать.',
      en: 'Routing, structure and naming rules are written down in the project rather than kept in my head. The next person should not have to ask.',
    },
  },
  {
    title: { ru: 'Система раньше экранов', en: 'A system before screens' },
    body: {
      ru: 'Начинаю с набора компонентов, а не с макета отдельной страницы. Навести консистентность потом дороже, чем заложить её сразу.',
      en: 'I start from a component set, not from one page mockup. Retrofitting consistency costs more than building it in.',
    },
  },
  {
    title: { ru: 'Минимум зависимостей', en: 'A small dependency list' },
    body: {
      ru: 'Новая библиотека должна себя окупать. Чаще всего задача закрывается тем, что уже есть в проекте или в самой платформе.',
      en: 'A new library has to earn its place. Most of the time the job is done by what the project or the platform already has.',
    },
  },
]
