import { ProductGrid } from '@/components/ui/ProductGrid'
import { CompactProductCard } from '@/components/ui/CompactProductCard'
import { getShoes } from '@/data/products'

export function ShoesSection() {
  const items = getShoes()
  if (items.length === 0) return null

  // Already shown as a full card in "The Gear Behind My 100 km" —
  // reference it compactly here instead of repeating the full card.
  const fullItems = items.filter((p) => !p.usedFor100km)
  const alreadyFeatured = items.filter((p) => p.usedFor100km)

  return (
    <section aria-labelledby="shoes-heading" className="py-16 lg:py-20 border-b border-edge">
      <div className="site-container">
        <div className="mb-8 lg:mb-10">
          <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-3">
            Shoes
          </p>
          <h2 id="shoes-heading" className="text-2xl sm:text-3xl font-bold text-copy mb-3">
            My shoe rotation.
          </h2>
          <p className="text-copy-2 max-w-xl">
            Different shoes for different jobs. Here&apos;s what each one is actually for.
          </p>
        </div>

        <ProductGrid products={fullItems} />
        {alreadyFeatured.length > 0 && (
          <div className="mt-3 space-y-2">
            {alreadyFeatured.map((product) => (
              <CompactProductCard key={product.id} product={product} variant="featured-elsewhere" />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
