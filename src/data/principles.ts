import type { Principle } from '../types'

// Three, not four. A recruiter reads the section header and one line of each.
export const principles: Principle[] = [
  {
    title: { ru: 'Отвечаю за весь путь', en: 'End-to-end ownership' },
    body: {
      ru: 'Веду работу от требований и контрактов API до архитектуры фронтенда, реализации, тестов и релиза.',
      en: 'I take product work from requirements and API contracts through frontend architecture, implementation, testing and release.',
    },
  },
  {
    title: { ru: 'Система раньше экранов', en: 'Systems over one-off screens' },
    body: {
      ru: 'Начинаю с набора компонентов и общих паттернов данных, чтобы новые сценарии сразу выглядели и работали единообразно. Навести её потом дороже, чем заложить сразу.',
      en: 'I start from a component set and shared data patterns, so new workflows inherit consistency instead of recreating it. Retrofitting it later costs more than building it in.',
    },
  },
  {
    title: {
      ru: 'Доказательства вместо заявлений',
      en: 'Evidence over claims',
    },
    body: {
      ru: 'Решения записываю, важные границы покрываю тестами. Числа на сайте взяты из реальных прогонов тестов и кода.',
      en: 'I write decisions down and test the boundaries that matter. The numbers on this site come from real test runs and code.',
    },
  },
]
