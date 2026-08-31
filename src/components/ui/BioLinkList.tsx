'use client'

import Link from 'next/link'
import { ArrowUpRight, Globe, ShoppingBag, HeartHandshake } from 'lucide-react'
import { siInstagram, siStrava, siTiktok } from 'simple-icons'
import { bioLinks } from '@/data/links'
import { trackEvent, AnalyticsEvent } from '@/lib/analytics'

const linkClass = 'group flex items-center gap-3 w-full px-5 py-4 border border-edge text-copy hover:border-accent hover:text-accent transition-colors duration-150'

const lucideIcons = {
  website: Globe,
  gear: ShoppingBag,
  coaching: HeartHandshake,
} as const

const brandIcons = {
  instagram: siInstagram,
  strava: siStrava,
  tiktok: siTiktok,
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
      {bioLinks.map((link) => {
        const content = (
          <>
            <LinkIcon id={link.id} />
            <span className="text-sm font-medium tracking-wide flex-1 text-left">{link.label}</span>
            <ArrowUpRight
              size={16}
              className="text-copy-3 group-hover:text-accent transition-colors duration-150 shrink-0"
              aria-hidden="true"
            />
          </>
        )

        if (link.external) {
          return (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClick(link.label)}
              className={linkClass}
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
            className={linkClass}
          >
            {content}
          </Link>
        )
      })}
    </nav>
  )
}
