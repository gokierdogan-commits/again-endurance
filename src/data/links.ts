import { siteConfig } from '@/data/site'
import { socials } from '@/data/socials'

export interface BioLink {
  id: string
  label: string
  href: string
  external?: boolean
}

/**
 * Links shown on the /links bio-link page (e.g. for an Instagram bio).
 * Keep this short — it's meant to be scanned in a few seconds.
 */
export const bioLinks: BioLink[] = [
  { id: 'gear', label: 'Shop my gear', href: '/products' },
  { id: 'coaching', label: 'Want to run 100 km too? Apply for free coaching', href: '/coaching#apply' },
  { id: 'website', label: 'Visit the website', href: siteConfig.url, external: true },
  ...socials.map((s) => ({
    id: s.id,
    label: s.label,
    href: s.href,
    external: true,
  })),
]
