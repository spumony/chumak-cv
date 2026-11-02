import type { ContactData } from '../types'

// One primary action. Email first, LinkedIn second, GitHub as the quiet third.
export const contact: ContactData = {
  email: 'chumak.aleksandr96@gmail.com',
  links: [
    {
      kind: 'email',
      label: 'chumak.aleksandr96@gmail.com',
      href: 'mailto:chumak.aleksandr96@gmail.com',
    },
    {
      kind: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/spumony',
    },
    {
      kind: 'github',
      label: 'GitHub',
      href: 'https://github.com/spumony',
    },
  ],
}
