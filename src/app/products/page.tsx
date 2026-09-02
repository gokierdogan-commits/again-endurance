import type { Metadata } from 'next'
import { GearBehind100km } from '@/components/sections/GearBehind100km'
import { EssentialsUnder50 } from '@/components/sections/EssentialsUnder50'
import { ShoesSection } from '@/components/sections/ShoesSection'
import { GearByCategory } from '@/components/sections/GearByCategory'
import { ProductCriteria } from '@/components/sections/ProductCriteria'
import { AffiliateDisclosure } from '@/components/ui/AffiliateDisclosure'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'My Gear',
  description: `What I actually use for 100 km runs, marathons and everyday training. ${siteConfig.tagline}`,
  alternates: { canonical: `${siteConfig.url}/products` },
  openGraph: {
    title: `My Gear | ${siteConfig.name}`,
    description: "Key gear I used for my 100 km run, and what's still in my kit for everyday training.",
  },
}

export default function ProductsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="py-16 lg:py-20 border-b border-edge">
        <div className="site-container">
          <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-4">
            What I Actually Use
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-copy tracking-tighter mb-6">
            What I actually use.
          </h1>
          <p className="text-copy-2 text-lg max-w-xl leading-relaxed mb-6">
            Gear I&apos;ve personally used across 100 km runs, marathons and everyday training.
          </p>
          <p className="text-copy-3 text-sm tracking-wide">
            204 cm · 108 kg · 100 km finisher · 3:23 marathon
          </p>
        </div>
      </section>

      <GearBehind100km />
      <EssentialsUnder50 />
      <ShoesSection />
      <GearByCategory />
      <ProductCriteria />

      <div className="site-container py-12">
        <AffiliateDisclosure />
      </div>
    </>
  )
}
