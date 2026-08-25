import type { ContactData } from '../types'

// One primary action. Email first, LinkedIn second, GitHub as the quiet third.
export const contact: ContactData = {
  email: 'ciumac.dev@gmail.com',
  links: [
    {
      kind: 'email',
      label: 'ciumac.dev@gmail.com',
      href: 'mailto:ciumac.dev@gmail.com',
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
