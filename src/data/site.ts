/**
 * Central site configuration.
 * Change values here — they propagate across metadata, footer, forms, and SEO.
 */
export const siteConfig = {
  /** Public domain — update before going live */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://again-endurance.com',

  name: 'Gökhan Erdogan',
  title: 'Gökhan Erdogan, Endurance Athlete',
  description:
    'From 138 kg to the long game. Gear and decisions built through real experience.',

  /** Short positioning statement used in OG and meta descriptions */
  tagline: 'From 138 kg to the long game.',

  /** Supporting line shown in hero */
  supportingLine:
    "This isn't a highlight reel. It's a record of what actually worked.",

  brand: 'Again.',
  location: 'Zürich, Switzerland',

  /** Coaching enquiries */
  coachingEmail: 'TODO_coaching@again-endurance.com',

  /** Brand partnerships and press */
  partnershipEmail: 'TODO_partnerships@again-endurance.com',

  /** Used in footer and legal pages */
  legalName: 'Gökhan Erdogan', // [TODO: Legal entity name if applicable]
  legalAddress: 'Zürich, Switzerland', // [TODO: Full address if required]
} as const
