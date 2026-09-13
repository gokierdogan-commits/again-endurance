import { siteConfig } from '@/data/site'

export interface BioLink {
  id: string
  label: string
  href: string
  external?: boolean
  /** Visual weight on the /links page. Omit for the plain (default) style. */
  variant?: 'primary' | 'secondary'
}

/**
 * Links shown on the /links bio-link page (e.g. for an Instagram/TikTok bio).
 * Keep this short — it's meant to be scanned in a few seconds. Order and
 * variant define the conversion funnel: coaching first and strongest, then
 * the training plan, then gear, then the full site.
 */
export const bioLinks: BioLink[] = [
  { id: 'coaching', label: 'Apply for 2 Free Coaching Sessions', href: '/coaching#apply', variant: 'primary' },
  { id: 'training-plan', label: 'Get the Hybrid Training Plan (CHF 4.95)', href: 'https://goki07.gumroad.com/l/eqctfr', external: true, variant: 'secondary' },
  { id: 'gear', label: 'See My Running Gear', href: '/products' },
  { id: 'website', label: 'Visit the Full Website', href: siteConfig.url, external: true },
]
