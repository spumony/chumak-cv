import { Globe, MapPin, Mail, Send } from 'lucide-react'
import { Fragment, type ComponentType } from 'react'
import { CopyEmailButton } from '../components/CopyEmailButton'
import { FadeIn } from '../components/ui/FadeIn'
import { GithubIcon, LinkedinIcon } from '../components/ui/icons'
import { SectionTitle } from '../components/ui/SectionTitle'
import { contact } from '../data/contact'
import { hero } from '../data/hero'
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
  const { t, pick } = useT()

  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28"
    >
      <FadeIn>
        <SectionTitle>{t('nav.contact')}</SectionTitle>

        {hero.avatar && (
          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-border bg-bg-elevated p-4 sm:gap-5 sm:p-5">
            <img
              src={hero.avatar}
              alt={pick(hero.name)}
              width={128}
              height={128}
              loading="lazy"
              className="h-16 w-16 shrink-0 rounded-full border border-border object-cover grayscale transition-[filter,transform] duration-300 ease-out hover:grayscale-0 hover:scale-105 sm:h-20 sm:w-20 motion-reduce:transition-none motion-reduce:hover:scale-100"
            />
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold text-text-primary sm:text-lg">
                {pick(hero.name)}
              </p>
              {hero.location && (
                <p className="flex items-center gap-1.5 text-sm text-text-muted">
                  <MapPin aria-hidden className="h-4 w-4 shrink-0" />
                  {pick(hero.location)}
                </p>
              )}
            </div>
          </div>
        )}

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
