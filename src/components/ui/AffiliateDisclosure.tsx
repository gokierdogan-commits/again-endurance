import { cn } from '@/lib/utils'

interface AffiliateDisclosureProps {
  className?: string
  compact?: boolean
}

export function AffiliateDisclosure({ className, compact = false }: AffiliateDisclosureProps) {
  if (compact) {
    return (
      <p className={cn('text-xs text-copy-3 leading-relaxed', className)}>
        Some links are affiliate links. I may earn a commission at no extra cost to you.
        I only list products I genuinely use.
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
        <strong className="text-copy-2 font-medium">Affiliate disclosure.</strong>{' '}
        Some links on this page are affiliate links. I may earn a small commission if you
        purchase through them, at no additional cost to you. I only list products I have
        personally used and would genuinely recommend based on real training experience.
      </p>
    </aside>
  )
}
