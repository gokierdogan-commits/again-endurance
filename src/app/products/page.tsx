import type { Metadata } from 'next'
import { FeaturedProducts } from '@/components/sections/FeaturedProducts'
import { ProductCriteria } from '@/components/sections/ProductCriteria'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Gear',
  description: `Equipment I use across marathons, ultras and daily training. ${siteConfig.tagline}`,
  alternates: { canonical: `${siteConfig.url}/products` },
  openGraph: {
    title: `Gear | ${siteConfig.name}`,
    description: "Equipment tested across marathons, ultras and daily training. Not reviews. Just what's still in my kit months later.",
  },
}

export default function ProductsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="py-16 lg:py-24 border-b border-edge">
        <div className="site-container">
          <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-4">
            Gear
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-copy tracking-tighter mb-6">
            What I use.
          </h1>
          <p className="text-copy-2 text-lg max-w-xl leading-relaxed">
            Equipment tested across marathons, ultras and daily training.
            Not reviews. Just what&apos;s still in my kit months later.
          </p>
        </div>
      </section>

      <FeaturedProducts showAll />
      <ProductCriteria />
    </>
  )
}
