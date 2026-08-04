'use client'

import { socials } from '@/data/socials'
import { trackEvent, AnalyticsEvent } from '@/lib/analytics'
import { cn } from '@/lib/utils'

interface SocialLinksProps {
  className?: string
  /** 'row' lays links out horizontally with separators */
  layout?: 'row' | 'stack'
}

export function SocialLinks({ className, layout = 'row' }: SocialLinksProps) {
  function handleClick(label: string) {
    trackEvent(AnalyticsEvent.SOCIAL_CLICK, { platform: label })
  }

  if (layout === 'stack') {
    return (
      <nav aria-label="Social profiles" className={cn('flex flex-col gap-2', className)}>
        {socials.map((s) => (
          <a
            key={s.id}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.ariaLabel}
            onClick={() => handleClick(s.label)}
            className="text-sm text-copy-2 hover:text-accent transition-colors duration-150 w-fit"
          >
            {s.label}
          </a>
        ))}
      </nav>
    )
  }

  return (
    <nav
      aria-label="Social profiles"
      className={cn('flex items-center flex-wrap gap-x-5 gap-y-2', className)}
    >
      {socials.map((s, i) => (
        <span key={s.id} className="flex items-center gap-5">
          {i > 0 && (
            <span className="text-edge w-px h-3 bg-edge inline-block" aria-hidden="true" />
          )}
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.ariaLabel}
            onClick={() => handleClick(s.label)}
            className="text-sm tracking-wide text-copy-2 hover:text-accent transition-colors duration-150"
          >
            {s.label}
          </a>
        </span>
      ))}
    </nav>
  )
}
