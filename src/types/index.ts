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
  affiliateUrl: string
  discountCode?: string
  discountDescription?: string
  featured: boolean
  available: boolean
}

export interface Stat {
  id: string
  value: string
  label: string
  sublabel?: string
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
