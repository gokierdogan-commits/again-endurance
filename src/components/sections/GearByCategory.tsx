import { ProductGrid } from '@/components/ui/ProductGrid'
import { getOtherCategoryGroups } from '@/data/products'

export function GearByCategory() {
  const groups = getOtherCategoryGroups()
  if (groups.length === 0) return null

  return (
    <section aria-labelledby="rest-of-kit-heading" className="py-16 lg:py-20">
      <div className="site-container space-y-14">
        <div>
          <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-3">
            Rest of the Kit
          </p>
          <h2 id="rest-of-kit-heading" className="text-2xl sm:text-3xl font-bold text-copy">
            Everything else I use.
          </h2>
        </div>

        {groups.map(({ category, items }) => (
          <div key={category.id}>
            <h3 className="text-xs tracking-widest uppercase text-copy-3 font-medium mb-4">
              {category.label}
            </h3>
            <ProductGrid products={items} />
          </div>
        ))}
      </div>
    </section>
  )
}
