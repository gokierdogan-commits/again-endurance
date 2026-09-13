import { siteConfig } from '@/data/site'

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
  { id: 'gear', label: 'See what I use', href: '/products' },
  { id: 'coaching', label: 'Want to build the habit?', href: '/coaching#apply' },
  { id: 'training-plan', label: 'Get my hybrid training plan (CHF 4.95)', href: 'https://goki07.gumroad.com/l/eqctfr', external: true },
  { id: 'website', label: 'Visit the website', href: siteConfig.url, external: true },
]
