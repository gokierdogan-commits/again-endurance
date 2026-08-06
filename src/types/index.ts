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
  /** When true, ProductCard omits the "Why I use it" label above whyIUseIt — varies card rhythm. */
  hideWhyLabel?: boolean
  /** Short trust badge, e.g. "100 km Tested", "Race Day". Shown next to the category label. */
  badge?: string
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
