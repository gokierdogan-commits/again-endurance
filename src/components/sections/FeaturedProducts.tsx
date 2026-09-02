'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CategoryFilter } from '@/components/ui/CategoryFilter'
import { ProductGrid } from '@/components/ui/ProductGrid'
import { AffiliateDisclosure } from '@/components/ui/AffiliateDisclosure'
import { categories, products } from '@/data/products'
import { isValidAffiliateUrl } from '@/lib/utils'

interface FeaturedProductsProps {
  /** When true, shows all products (for /products page) */
  showAll?: boolean
}

export function FeaturedProducts({ showAll = false }: FeaturedProductsProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [previewMode, setPreviewMode] = useState(false)

  // Draft products (no real affiliate link yet) are hidden from visitors.
  // Append ?preview=1 to the URL to see them while you're still filling them in.
  useEffect(() => {
    setPreviewMode(new URLSearchParams(window.location.search).get('preview') === '1')
  }, [])

  const filtered = (showAll ? products : products.filter((p) => p.available))
    .filter((p) => previewMode || isValidAffiliateUrl(p.affiliateUrl))
    .filter((p) => activeCategory === 'all' || p.category === activeCategory)

  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="py-20 lg:py-28 border-b border-edge"
    >
      <div className="site-container space-y-10">

        {/* Header — the /products page already has its own hero with this title, so skip it here when showAll */}
        {showAll ? (
          <h2 id="products-heading" className="sr-only">
            What I use.
          </h2>
        ) : (
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-3">
                Gear
              </p>
              <h2 id="products-heading" className="text-3xl sm:text-4xl font-bold text-copy">
                What I use.
              </h2>
              <p className="mt-3 text-copy-2 max-w-xl">
                Equipment tested across marathons, ultras, and the easy days between.
                Not reviews. Just what&apos;s still in my kit months later.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-2 transition-colors shrink-0"
            >
              View all gear
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        )}

        {/* Category filter */}
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        {previewMode && (
          <div className="text-xs tracking-wide text-accent border border-accent-dim px-3 py-2">
            Preview mode: showing draft products not yet visible to visitors
          </div>
        )}

        {/* Product grid */}
        {filtered.length > 0 ? (
          <ProductGrid products={filtered} />
        ) : (
          <div className="py-16 text-center text-copy-3 text-sm border border-edge">
            No products in this category yet.
          </div>
        )}

        {/* Affiliate disclosure */}
        <AffiliateDisclosure />
      </div>
    </section>
  )
}
