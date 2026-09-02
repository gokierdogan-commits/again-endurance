import { ProductGrid } from '@/components/ui/ProductGrid'
import { getShoes } from '@/data/products'

export function ShoesSection() {
  const items = getShoes()
  if (items.length === 0) return null

  return (
    <section aria-labelledby="shoes-heading" className="py-16 lg:py-20 border-b border-edge">
      <div className="site-container">
        <div className="mb-8 lg:mb-10">
          <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-3">
            Shoes
          </p>
          <h2 id="shoes-heading" className="text-2xl sm:text-3xl font-bold text-copy mb-3">
            The full rotation.
          </h2>
          <p className="text-copy-2 max-w-xl">
            Different shoes for different jobs. Here&apos;s what each one is actually for.
          </p>
        </div>

        <ProductGrid products={items} />
      </div>
    </section>
  )
}
