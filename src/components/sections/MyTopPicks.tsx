import { CompactProductCard } from '@/components/ui/CompactProductCard'
import { getEssentials } from '@/data/products'

/**
 * Curated from the existing `featured` flag on each product — set/unset
 * that in src/data/products.ts to control what shows here. Deliberately
 * compact: a quick recommendation strip, not another full catalogue grid.
 * Overlap with "The Gear Behind My 100 km" is fine — the presentation here
 * is small enough that it doesn't read as repetition.
 */
export function MyTopPicks() {
  const items = getEssentials()
  if (items.length === 0) return null

  return (
    <section aria-labelledby="top-picks-heading" className="py-12 lg:py-16 border-b border-edge">
      <div className="site-container">
        <div className="mb-6">
          <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-3">
            My Top Picks
          </p>
          <h2 id="top-picks-heading" className="text-2xl sm:text-3xl font-bold text-copy">
            The gear I&apos;d buy again.
          </h2>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {items.map((product) => (
            <CompactProductCard key={product.id} product={product} variant="tile" />
          ))}
        </div>
      </div>
    </section>
  )
}
