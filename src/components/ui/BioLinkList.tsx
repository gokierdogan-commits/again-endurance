'use client'

import Link from 'next/link'
import { ArrowUpRight, Globe, ShoppingBag, HeartHandshake, Dumbbell } from 'lucide-react'
import { siInstagram, siStrava, siTiktok, siYoutube } from 'simple-icons'
import { bioLinks, type BioLink } from '@/data/links'
import { trackEvent, AnalyticsEvent } from '@/lib/analytics'
import { cn } from '@/lib/utils'

const baseLinkClass =
  'group flex items-center gap-3 w-full min-h-[3.25rem] px-5 py-3.5 border transition-colors duration-150'

const variantClass: Record<'default' | 'primary' | 'secondary', string> = {
  default: 'border-edge text-copy hover:border-accent hover:text-accent',
  secondary: 'border-accent text-accent bg-transparent hover:bg-accent-dim',
  primary: 'border-accent bg-accent text-bg hover:bg-accent-2 hover:border-accent-2 font-semibold',
}

const arrowClass: Record<'default' | 'primary' | 'secondary', string> = {
  default: 'text-copy-3 group-hover:text-accent',
  secondary: 'text-accent',
  primary: 'text-bg',
}

const lucideIcons = {
  website: Globe,
  gear: ShoppingBag,
  coaching: HeartHandshake,
  'training-plan': Dumbbell,
} as const

const brandIcons = {
  instagram: siInstagram,
  strava: siStrava,
  tiktok: siTiktok,
  youtube: siYoutube,
} as const

function LinkIcon({ id }: { id: string }) {
  const Lucide = lucideIcons[id as keyof typeof lucideIcons]
  if (Lucide) {
    return <Lucide size={18} className="shrink-0" aria-hidden="true" />
  }

  const brand = brandIcons[id as keyof typeof brandIcons]
  if (brand) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={18}
        height={18}
        fill="currentColor"
        className="shrink-0"
        aria-hidden="true"
      >
        <path d={brand.path} />
      </svg>
    )
  }

  return null
}

export function BioLinkList() {
  function handleClick(label: string) {
    trackEvent(AnalyticsEvent.LINKS_PAGE_CLICK, { link: label })
  }

  return (
    <nav aria-label="Links" className="w-full space-y-3">
      {bioLinks.map((link: BioLink) => {
        const tier = link.variant ?? 'default'

        const content = (
          <>
            <LinkIcon id={link.id} />
            <span className="text-sm leading-snug font-medium tracking-wide flex-1 text-left">
              {link.label}
            </span>
            <ArrowUpRight
              size={16}
              className={cn('transition-colors duration-150 shrink-0', arrowClass[tier])}
              aria-hidden="true"
            />
          </>
        )

        const className = cn(baseLinkClass, variantClass[tier])

        if (link.external) {
          return (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClick(link.label)}
              className={className}
            >
              {content}
            </a>
          )
        }

        return (
          <Link
            key={link.id}
            href={link.href}
            onClick={() => handleClick(link.label)}
            className={className}
          >
            {content}
          </Link>
        )
      })}
    </nav>
  )
}
