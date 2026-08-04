# Again. — Gökhan Erdogan Personal Website

Personal website for endurance athlete Gökhan Erdogan. Built with Next.js 16, TypeScript, and Tailwind CSS v4.

---

## Quick start

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values.

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes (prod) | Your public domain — used in metadata and sitemap |
| `FORMSPREE_COACHING_ID` | Recommended | Formspree form ID for coaching applications |
| `FORMSPREE_CONTACT_ID` | Recommended | Formspree form ID for brand/partnership contact |
| `NEXT_PUBLIC_GA_ID` | Optional | Google Analytics 4 Measurement ID (G-XXXXXXXXXX) |

Without `FORMSPREE_*` set, form submissions are logged to the server console and return success. Useful during development.

---

## How to edit content

All editable content is in `src/data/`. You do not need to touch component files to update text, links, or products.

### Site metadata, domain, email

Edit `src/data/site.ts`:

```ts
export const siteConfig = {
  url: 'https://again-endurance.com',     // change domain here
  coachingEmail: 'your@email.com',
  partnershipEmail: 'brands@email.com',
}
```

### Statistics

Edit `src/data/stats.ts` — change `value` and `label` for each stat.

### Social links

Edit `src/data/socials.ts` — replace the `href` values with your profile URLs.

### FAQ

Edit `src/data/faq.ts` — add, remove, or modify questions and answers.

### Coaching content

Edit `src/data/coaching.ts` — coaching areas, formats, and disclaimer text.

---

## How to add products and affiliate links

All products are in `src/data/products.ts`.

```ts
{
  id: 'unique-id',
  name: 'Brand Model',
  category: 'running-shoes',            // see categories list at top of file
  image: '/images/products/name.jpg',   // place in /public/images/products/
  shortDescription: 'One sentence on use case.',
  whyIUseIt: 'Why you specifically chose this product.',
  affiliateUrl: 'https://your-affiliate-link.com',
  discountCode: 'GOKHAN10',             // optional
  discountDescription: '10% off',       // optional
  featured: true,                       // shows on homepage
  available: true,
}
```

Affiliate links open in a new tab with `rel="noopener noreferrer nofollow"` automatically.

To **add a new category**: add an entry to the `categories` array at the top of `products.ts`. Use kebab-case for the `id`.

---

## How to add real images

Replace placeholder components by adding images to `/public/images/` and updating the component.

### Hero portrait

1. Add your image: `/public/images/hero.jpg` (recommended: 800×1067px, 3:4 ratio)
2. Open `src/components/sections/Hero.tsx` — find `REPLACE THIS PLACEHOLDER`
3. Replace `<PlaceholderImage />` with:

```tsx
import Image from 'next/image'

<div className="relative aspect-[3/4] w-full max-w-[360px] mx-auto lg:max-w-none overflow-hidden">
  <Image
    src="/images/hero.jpg"
    alt="Gökhan Erdogan running"
    fill
    priority
    className="object-cover"
    sizes="(max-width: 1024px) 360px, 40vw"
  />
</div>
```

Same pattern for **about** (`src/components/sections/About.tsx`) and **coaching** (`src/app/coaching/page.tsx` and `src/components/sections/CoachingSection.tsx`).

### Product images

1. Add image: `/public/images/products/product-id.jpg` (recommended: 800×600px, 4:3)
2. Update the `image` field in `src/data/products.ts`

### Open Graph image

1. Create a 1200×630px image
2. Save as `/public/og-image.jpg`

---

## How to connect the coaching form

**Formspree (recommended, free tier available):**

1. Create an account at [formspree.io](https://formspree.io/)
2. Create two forms: "Coaching Applications" and "Brand Contact"
3. Copy each form ID (looks like `xpwzabcd`)
4. Add to `.env.local`:
   ```
   FORMSPREE_COACHING_ID=xpwzabcd
   FORMSPREE_CONTACT_ID=xabcdwxyz
   ```

**Custom email (Resend, Nodemailer, etc.):**

Edit `src/app/actions/coaching.ts` and `src/app/actions/contact.ts`. They are standalone server actions — replace the Formspree fetch with your email provider.

---

## How to configure analytics

**Vercel Analytics (privacy-first, no cookies):**

```bash
npm install @vercel/analytics
```

Uncomment the Vercel block in `src/components/analytics/Analytics.tsx`.

**Google Analytics 4:**

1. Add `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` to `.env.local`
2. Uncomment the GA4 block in `src/components/analytics/Analytics.tsx`

The site works without analytics. Custom event names are in `src/lib/analytics.ts`.

---

## How to change the domain

Edit one field in `src/data/site.ts`:

```ts
url: 'https://your-domain.com',
```

Also update `NEXT_PUBLIC_SITE_URL` in your Vercel environment variables.

---

## How to deploy to Vercel

1. Push to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository
3. In Vercel project settings → Environment Variables, add:
   - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`
   - `FORMSPREE_COACHING_ID` = your form ID
   - `FORMSPREE_CONTACT_ID` = your form ID
4. Deploy
5. Add your custom domain in Vercel project settings → Domains

---

## Pre-launch checklist

### Content
- [ ] Replace `TODO_username` in `src/data/socials.ts` with real social URLs
- [ ] Replace email placeholders in `src/data/site.ts`
- [ ] Fill in all `[TODO]` product entries in `src/data/products.ts`
- [ ] Replace `https://example.com` affiliate URLs with real affiliate links
- [ ] Add hero portrait → `/public/images/hero.jpg`
- [ ] Add about image → `/public/images/about.jpg`
- [ ] Add coaching image → `/public/images/coaching.jpg`
- [ ] Add product images → `/public/images/products/`
- [ ] Create OG image → `/public/og-image.jpg` (1200×630px)
- [ ] Fill in `[TODO]` sections in `/privacy` and `/legal` pages
- [ ] Update "Training since" and "Focus" in `src/components/sections/About.tsx`

### Technical
- [ ] Set `NEXT_PUBLIC_SITE_URL` to real domain
- [ ] Configure Formspree IDs in environment variables
- [ ] Test coaching form end-to-end (real email received)
- [ ] Test partnership contact form end-to-end
- [ ] Verify affiliate links open in new tab
- [ ] Review mobile layout at 375px
- [ ] Check keyboard navigation on all pages
- [ ] Verify `/sitemap.xml` and `/robots.txt`
- [ ] Configure analytics provider (optional)

### Legal
- [ ] Have privacy policy reviewed by a legal professional (Swiss DSG/GDPR)
- [ ] Have legal notice reviewed for your jurisdiction
- [ ] Remove the "Template" warning banners from `/privacy` and `/legal` before publishing
- [ ] Confirm affiliate disclosure is accurate and visible

---

## Local commands

```bash
npm run dev          # development server
npm run build        # production build
npm run start        # production server (after build)
npm run lint         # ESLint
npx tsc --noEmit     # TypeScript check only
```

---

## File structure

```
src/
├── app/
│   ├── actions/          Server actions (form submission)
│   ├── coaching/page.tsx
│   ├── legal/page.tsx
│   ├── privacy/page.tsx
│   ├── products/page.tsx
│   ├── thank-you/page.tsx
│   ├── globals.css       Design tokens (Tailwind v4 @theme)
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx          Homepage
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── analytics/Analytics.tsx
│   ├── layout/           Header, Footer
│   ├── sections/         Hero, Stats, FeaturedProducts, etc.
│   └── ui/               Button, ProductCard, CoachingForm, etc.
├── data/                 All editable content lives here
├── lib/                  utils.ts, analytics.ts
└── types/index.ts
public/
├── images/               Add your real photos here
└── og-image.jpg          Add your OG image here
```

---

## Design tokens

Defined in `src/app/globals.css` under `@theme` (Tailwind v4):

| Purpose | Tailwind class | Value |
|---|---|---|
| Background | `bg-bg` | `#080808` |
| Surface | `bg-surface` | `#111111` |
| Input background | `bg-surface-2` | `#181818` |
| Border | `border-edge` | `#222222` |
| Primary text | `text-copy` | `#f0ebe2` |
| Secondary text | `text-copy-2` | `#8a8580` |
| Muted text | `text-copy-3` | `#4a4845` |
| Accent (warm gold) | `text-accent` / `bg-accent` | `#b89a6a` |

Font: Geist (variable weight), loaded via `next/font/google`.
