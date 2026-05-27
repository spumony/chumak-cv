import { Globe, Mail, Send } from 'lucide-react'
import { Fragment, type ComponentType } from 'react'
import { CopyEmailButton } from '../components/CopyEmailButton'
import { FadeIn } from '../components/ui/FadeIn'
import { GithubIcon, LinkedinIcon } from '../components/ui/icons'
import { SectionTitle } from '../components/ui/SectionTitle'
import { contact } from '../data/contact'
import type { ContactKind } from '../types'
import { useT } from '../i18n/useT'

const ICONS: Record<ContactKind, ComponentType<{ className?: string }>> = {
  email: Mail,
  linkedin: LinkedinIcon,
  github: GithubIcon,
  telegram: Send,
  website: Globe,
}

const baseLink =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 font-medium transition-colors'
const primaryLink = `${baseLink} bg-accent text-bg hover:bg-accent-hover`
const secondaryLink = `${baseLink} border border-border text-text-primary hover:border-accent/50`

export function Contact() {
  const { t } = useT()

  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28"
    >
      <FadeIn>
        <SectionTitle>{t('nav.contact')}</SectionTitle>
        <p className="mt-6 max-w-2xl text-base text-text-secondary sm:text-lg">
          {t('contact.lead')}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {contact.links.map((link, index) => {
            const Icon = ICONS[link.kind]
            const external = link.href.startsWith('http')
            return (
              <Fragment key={link.href}>
                <a
                  href={link.href}
                  className={index === 0 ? primaryLink : secondaryLink}
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </a>
                {link.kind === 'email' && (
                  <CopyEmailButton
                    email={contact.email}
                    className={secondaryLink}
                  />
                )}
              </Fragment>
            )
          })}
        </div>
      </FadeIn>
    </section>
  )
}
