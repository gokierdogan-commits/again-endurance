'use client'

import { cn } from '@/lib/utils'
import type { Category } from '@/types'

interface CategoryFilterProps {
  categories: Category[]
  active: string
  onChange: (id: string) => void
  className?: string
}

export function CategoryFilter({ categories, active, onChange, className }: CategoryFilterProps) {
  return (
    <div
      className={cn(
        'flex gap-2 overflow-x-auto pb-1 scrollbar-none',
        className
      )}
      role="tablist"
      aria-label="Filter by category"
    >
      {categories.map((cat) => (
        <button
          key={cat.id}
          role="tab"
          aria-selected={active === cat.id}
          onClick={() => onChange(cat.id)}
          className={cn(
            'shrink-0 px-4 py-2 text-xs font-medium tracking-wide transition-colors duration-150 border',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:ring-offset-bg',
            active === cat.id
              ? 'bg-accent text-bg border-accent'
              : 'bg-transparent text-copy-2 border-edge hover:border-copy-3 hover:text-copy'
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
