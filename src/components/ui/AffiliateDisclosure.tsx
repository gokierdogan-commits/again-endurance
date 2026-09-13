import { cn } from '@/lib/utils'

interface AffiliateDisclosureProps {
  className?: string
  compact?: boolean
}

export function AffiliateDisclosure({ className, compact = false }: AffiliateDisclosureProps) {
  if (compact) {
    return (
      <p className={cn('text-xs text-copy-3 leading-relaxed', className)}>
        Affiliate disclosure: Some links are affiliate links. I may earn a small
        commission at no additional cost to you. I clearly distinguish between
        equipment I personally use and alternative recommendations.
      </p>
    )
  }

  return (
    <aside
      aria-label="Affiliate disclosure"
      className={cn(
        'border-t border-edge pt-6 mt-6',
        className
      )}
    >
      <p className="text-xs text-copy-3 leading-relaxed max-w-2xl">
        <strong className="text-copy-2 font-medium">Affiliate disclosure:</strong>{' '}
        Some links are affiliate links. I may earn a small commission at no
        additional cost to you. I clearly distinguish between equipment I
        personally use and alternative recommendations based on features and value.
      </p>
    </aside>
  )
}
