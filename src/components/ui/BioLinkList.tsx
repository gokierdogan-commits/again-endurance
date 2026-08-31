'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { bioLinks } from '@/data/links'
import { trackEvent, AnalyticsEvent } from '@/lib/analytics'

const linkClass = 'group flex items-center justify-between w-full px-5 py-4 border border-edge text-copy hover:border-accent hover:text-accent transition-colors duration-150'

export function BioLinkList() {
  function handleClick(label: string) {
    trackEvent(AnalyticsEvent.LINKS_PAGE_CLICK, { link: label })
  }

  return (
    <nav aria-label="Links" className="w-full space-y-3">
      {bioLinks.map((link) => {
        const content = (
          <>
            <span className="text-sm font-medium tracking-wide">{link.label}</span>
            <ArrowUpRight
              size={16}
              className="text-copy-3 group-hover:text-accent transition-colors duration-150"
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
