declare global {
  interface Window {
    va?: (event: string, data?: Record<string, unknown>) => void
    gtag?: (...args: unknown[]) => void
  }
}

export const AnalyticsEvent = {
  AFFILIATE_CLICK: 'affiliate_click',
  COACHING_CTA: 'coaching_cta',
  COACHING_FORM_SUBMIT: 'coaching_form_submit',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  SOCIAL_CLICK: 'social_click',
  PARTNERSHIP_ENQUIRY: 'partnership_enquiry',
  LINKS_PAGE_CLICK: 'links_page_click',
} as const

type EventName = typeof AnalyticsEvent[keyof typeof AnalyticsEvent]

export function trackEvent(name: EventName, data?: Record<string, unknown>) {
  if (typeof window === 'undefined') return

  // Vercel Analytics
  if (typeof window.va === 'function') {
    window.va(name, data)
  }

  // Google Analytics 4 (optional)
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, data)
  }
}
