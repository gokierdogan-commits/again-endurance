import { ProductGrid } from '@/components/ui/ProductGrid'
import { getEssentials } from '@/data/products'

/**
 * Curated from the existing `featured` flag on each product — set/unset
 * that in src/data/products.ts to control what shows here. Kept to a
 * small, deliberate set on purpose (4–6 items).
 */
export function MyEssentials() {
  const items = getEssentials()
  if (items.length === 0) return null

  return (
    <section aria-labelledby="essentials-heading" className="py-16 lg:py-20 border-b border-edge">
      <div className="site-container">
        <div className="mb-8 lg:mb-10">
          <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-3">
            My Essentials
          </p>
          <h2 id="essentials-heading" className="text-2xl sm:text-3xl font-bold text-copy">
            The gear I&apos;d buy again.
          </h2>
        </div>

        <ProductGrid products={items} />
      </div>
    </section>
  )
}
