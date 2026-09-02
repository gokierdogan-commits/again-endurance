import { ProductCard } from '@/components/ui/ProductCard'
import type { Product } from '@/types'

/**
 * Renders products in the site's standard 3-up grid, but caps the column
 * count (and row width) to the actual item count so a short row — e.g. a
 * category with only one product — never leaves empty grid tracks next to it.
 */
export function ProductGrid({ products }: { products: Product[] }) {
  const count = products.length
  const gridClass =
    count === 1
      ? 'grid-cols-1 max-w-[380px]'
      : count === 2
        ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl'
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={`grid ${gridClass} gap-px bg-edge`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
