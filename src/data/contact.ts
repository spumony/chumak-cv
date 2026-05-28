import type { ContactData } from '../types'

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
      kind: 'telegram',
      label: 'Telegram',
      href: 'https://t.me/spumony',
    },
    // Add your GitHub once you have the username:
    // { kind: 'github', label: 'GitHub', href: 'https://github.com/<username>' },
  ],
}
