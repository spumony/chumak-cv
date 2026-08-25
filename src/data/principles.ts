import type { Principle } from '../types'

// Three, not four. A recruiter reads the section header and one line of each.
export const principles: Principle[] = [
  {
    title: { ru: 'Отвечаю за весь путь', en: 'End-to-end ownership' },
    body: {
      ru: 'Веду работу от требований и контрактов API до архитектуры фронтенда, реализации, тестов и релиза. На текущем продукте я единственный фронтенд-инженер, а Rivella собрал и развернул один целиком.',
      en: 'I take product work from requirements and API contracts through frontend architecture, implementation, testing and release. I am the sole frontend engineer on the current product, and I built and deployed Rivella end to end alone.',
    },
  },
  {
    title: { ru: 'Система раньше экранов', en: 'Systems over one-off screens' },
    body: {
      ru: 'Начинаю с набора компонентов и общих паттернов данных, чтобы новые сценарии наследовали консистентность, а не собирали её заново. Навести её потом дороже, чем заложить сразу.',
      en: 'I start from a component set and shared data patterns, so new workflows inherit consistency instead of recreating it. Retrofitting it later costs more than building it in.',
    },
  },
  {
    title: {
      ru: 'Доказательства вместо заявлений',
      en: 'Evidence over claims',
    },
    body: {
      ru: 'Решения записываю, границы, которые важны, покрываю тестами, а каждое число держу привязанным к команде, которая его выдаёт. Число без источника — это не доказательство.',
      en: 'I write decisions down, test the boundaries that matter, and keep every number tied to the command that produced it. A number without a source is not evidence.',
    },
  },
]
