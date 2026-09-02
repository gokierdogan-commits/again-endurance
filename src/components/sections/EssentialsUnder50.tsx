import { ProductGrid } from '@/components/ui/ProductGrid'
import { getUnder50 } from '@/data/products'

/**
 * Driven entirely by `priceEUR` on each product in src/data/products.ts.
 * Renders nothing until at least one product has a real, confirmed price
 * under 50 — never guess a price just to populate this section.
 */
export function EssentialsUnder50() {
  const items = getUnder50()
  if (items.length === 0) return null

  return (
    <section aria-labelledby="under-50-heading" className="py-16 lg:py-20 border-b border-edge bg-surface">
      <div className="site-container">
        <div className="mb-8 lg:mb-10">
          <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-3">
            Low Cost, High Use
          </p>
          <h2 id="under-50-heading" className="text-2xl sm:text-3xl font-bold text-copy">
            Essentials under CHF 50.
          </h2>
        </div>

        <ProductGrid products={items} />
      </div>
    </section>
  )
}
