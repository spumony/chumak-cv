import { ArrowUpRight } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { GithubIcon } from '../components/ui/icons'
import { Card } from '../components/ui/Card'
import { FadeIn } from '../components/ui/FadeIn'
import { SectionTitle } from '../components/ui/SectionTitle'
import { projects } from '../data/projects'
import { useT } from '../i18n/useT'

const projectLink =
  'inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-accent'

export function Projects() {
  const { t, pick } = useT()

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28"
    >
      <FadeIn>
        <SectionTitle>{t('nav.projects')}</SectionTitle>
      </FadeIn>

      <div className="mt-8 grid auto-rows-fr grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn key={index} delay={index * 0.05} className="h-full">
            <Card interactive className="flex h-full flex-col">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-text-primary sm:text-xl">
                  {pick(project.title)}
                </h3>
                {project.featured && (
                  <Badge tone="accent">{t('projects.featured')}</Badge>
                )}
              </div>

              <p className="mt-3 text-text-secondary">
                {pick(project.description)}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              {(project.links?.live || project.links?.source) && (
                <div className="mt-auto flex flex-wrap gap-5 pt-5">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className={projectLink}
                    >
                      {t('projects.live')}
                      <ArrowUpRight aria-hidden className="h-4 w-4" />
                    </a>
                  )}
                  {project.links.source && (
                    <a
                      href={project.links.source}
                      target="_blank"
                      rel="noreferrer"
                      className={projectLink}
                    >
                      {t('projects.source')}
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>
              )}
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
