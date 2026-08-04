/**
 * Analytics component — configure your analytics provider here.
 *
 * Option A — Vercel Analytics (recommended, privacy-first, no cookies):
 *   1. npm install @vercel/analytics
 *   2. Replace the null below with <VercelAnalytics />
 *   3. Import: import { Analytics as VercelAnalytics } from '@vercel/analytics/next'
 *
 * Option B — Google Analytics 4:
 *   1. Set NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX in .env.local
 *   2. Uncomment the GA4 block below
 *
 * The site works without any analytics — this component renders nothing by default.
 */

export function Analytics() {
  // ── Option A: Vercel Analytics ──────────────────────
  // import { Analytics as VercelAnalytics } from '@vercel/analytics/next'
  // return <VercelAnalytics />

  // ── Option B: GA4 via gtag ──────────────────────────
  // const gaId = process.env.NEXT_PUBLIC_GA_ID
  // if (!gaId) return null
  // return (
  //   <>
  //     <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
  //     <Script id="ga4" strategy="afterInteractive">{`
  //       window.dataLayer = window.dataLayer || [];
  //       function gtag(){dataLayer.push(arguments);}
  //       gtag('js', new Date());
  //       gtag('config', '${gaId}', { anonymize_ip: true });
  //     `}</Script>
  //   </>
  // )

  return null
}
