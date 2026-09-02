export interface Category {
  id: string
  label: string
}

export interface Product {
  id: string
  name: string
  category: string
  image: string
  /** CSS object-position for the product image, e.g. 'center 30%'. Defaults to 'center'. */
  imagePosition?: string
  shortDescription: string
  whyIUseIt: string
  /** Short trust badge shown as the card's eyebrow, e.g. "100 km Tested", "Race Day". */
  badge?: string
  /**
   * For running shoes only — the shoe's job in the rotation, e.g. "My Long-Run Shoe".
   * Shown as the card eyebrow instead of `badge` in the Shoes section.
   */
  role?: string
  /** True only when existing copy actually ties this product to the 100 km run. Drives the "Gear Behind My 100 km" section. */
  usedFor100km?: boolean
  /** Real price in EUR (Amazon.de), when known. Drives the "Under CHF 50" section — leave unset rather than guessing. */
  priceEUR?: number
  /** Short 1–2 word use-case label for the compact "My Top Picks" tile, e.g. "Long runs", "Race day". */
  useCase?: string
  affiliateUrl: string
  discountCode?: string
  discountDescription?: string
  featured: boolean
  available: boolean
}

export interface Social {
  id: string
  label: string
  href: string
  ariaLabel: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}
