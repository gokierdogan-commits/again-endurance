/**
 * Central site configuration.
 * Change values here — they propagate across metadata, footer, forms, and SEO.
 */
export const siteConfig = {
  /** Public domain — update once a custom domain is connected in Vercel */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://again-endurance-woad.vercel.app',

  name: 'Gökhan Erdogan',
  title: 'Gökhan Erdogan, Endurance Athlete',
  description:
    'From 138 kg to the long game. Gear and decisions built through real experience.',

  /** Short positioning statement used in OG and meta descriptions */
  tagline: 'From 138 kg to the long game.',

  /** Supporting line shown in hero, right above the CTA buttons */
  supportingLine:
    "The plan, coaching, and gear are all built from what actually worked for me, from 138 kg to marathons and a 100 km ultra.",

  brand: 'Again.',
  location: 'Zürich, Switzerland',

  /** Coaching enquiries */
  coachingEmail: 'TODO_coaching@again-endurance.com',

  /** Free-session spots remaining — the only place this number needs updating. */
  coachingSpotsLeft: 7,

  /** Brand partnerships and press */
  partnershipEmail: 'TODO_partnerships@again-endurance.com',

  /** Used in footer and legal pages */
  legalName: 'Gökhan Erdogan', // [TODO: Legal entity name if applicable]
  legalAddress: 'Zürich, Switzerland', // [TODO: Full address if required]
} as const
