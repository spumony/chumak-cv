import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'TODO: Project One',
    description: {
      ru: 'TODO: Что это за проект, какую проблему решает и ваша роль в нём.',
      en: 'TODO: What the project is, the problem it solves and your role in it.',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    links: {
      live: 'https://example.com',
      source: 'https://github.com/TODO/project-one',
    },
    featured: true,
  },
  {
    title: 'TODO: Project Two',
    description: {
      ru: 'TODO: Короткое описание второго проекта.',
      en: 'TODO: A short description of the second project.',
    },
    technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
    links: {
      source: 'https://github.com/TODO/project-two',
    },
  },
]
