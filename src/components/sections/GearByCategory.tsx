import { ProductGrid } from '@/components/ui/ProductGrid'
import { CompactProductCard } from '@/components/ui/CompactProductCard'
import { getOtherCategoryGroups } from '@/data/products'

export function GearByCategory() {
  // A category only earns a spot here if it has at least one product that
  // isn't already shown as a full card elsewhere — a group with nothing but
  // an "already featured" pointer adds no new information.
  const groups = getOtherCategoryGroups()
    .map(({ category, items }) => ({
      category,
      fullItems: items.filter((p) => !p.usedFor100km),
      alreadyFeatured: items.filter((p) => p.usedFor100km),
    }))
    .filter((group) => group.fullItems.length > 0)

  if (groups.length === 0) return null

  return (
    <section aria-labelledby="rest-of-kit-heading" className="py-16 lg:py-20">
      <div className="site-container space-y-14">
        <div>
          <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-3">
            Rest of the Kit
          </p>
          <h2 id="rest-of-kit-heading" className="text-2xl sm:text-3xl font-bold text-copy">
            Other things I can recommend.
          </h2>
        </div>

        {groups.map(({ category, fullItems, alreadyFeatured }) => (
          <div key={category.id}>
            <h3 className="text-xs tracking-widest uppercase text-copy-3 font-medium mb-4">
              {category.label}
            </h3>
            <ProductGrid products={fullItems} />
            {alreadyFeatured.length > 0 && (
              <div className="mt-3 space-y-2">
                {alreadyFeatured.map((product) => (
                  <CompactProductCard key={product.id} product={product} variant="featured-elsewhere" />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
