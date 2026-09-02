import { ProductGrid } from '@/components/ui/ProductGrid'
import { get100kmGear } from '@/data/products'

export function GearBehind100km() {
  const items = get100kmGear()
  if (items.length === 0) return null

  return (
    <section
      aria-labelledby="100km-gear-heading"
      className="py-16 lg:py-20 border-b border-edge bg-surface"
    >
      <div className="site-container">
        <div className="mb-8 lg:mb-10">
          <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-3">
            100 km
          </p>
          <h2 id="100km-gear-heading" className="text-3xl sm:text-4xl font-black text-copy tracking-tighter mb-3">
            The gear behind my 100 km.
          </h2>
          <p className="text-copy-2 max-w-xl">
            Key gear I used for my 100 km run.
          </p>
        </div>

        <ProductGrid products={items} />
      </div>
    </section>
  )
}
