'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { trackEvent, AnalyticsEvent } from '@/lib/analytics'
import { isValidAffiliateUrl } from '@/lib/utils'
import type { Product } from '@/types'

interface CompactProductCardProps {
  product: Product
  /**
   * 'tile' — small image + name + use-case, for the horizontal-scroll
   * "My Top Picks" strip.
   * 'featured-elsewhere' — text-only reference row used when a product
   * already got a full card in an earlier section (avoids repeating it).
   */
  variant: 'tile' | 'featured-elsewhere'
}

export function CompactProductCard({ product, variant }: CompactProductCardProps) {
  const hasValidUrl = isValidAffiliateUrl(product.affiliateUrl)
  if (!hasValidUrl) return null

  function handleClick() {
    trackEvent(AnalyticsEvent.AFFILIATE_CLICK, {
      product_id: product.id,
      product_name: product.name,
      category: product.category,
      card_variant: variant,
    })
  }

  if (variant === 'tile') {
    return (
      <a
        href={product.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        onClick={handleClick}
        aria-label={`${product.name} — ${product.useCase ?? 'view'} (opens in new tab)`}
        className="group shrink-0 w-32 sm:w-36 border border-edge bg-surface p-3 hover:border-copy-3 transition-colors duration-150"
      >
        <div className="relative aspect-square w-full mb-3 bg-surface-2 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectPosition: product.imagePosition ?? 'center' }}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="144px"
          />
        </div>
        <p className="text-xs font-medium text-copy leading-snug line-clamp-2 mb-1.5">
          {product.name}
        </p>
        <p className="flex items-center gap-1 text-[11px] text-accent">
          {product.useCase ?? 'View'}
          <ArrowRight size={11} aria-hidden="true" />
        </p>
      </a>
    )
  }

  return (
    <a
      href={product.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer nofollow"
      onClick={handleClick}
      aria-label={`View ${product.name} (opens in new tab)`}
      className="flex items-center justify-between gap-4 border border-edge bg-surface px-4 py-3 hover:border-copy-3 transition-colors duration-150"
    >
      <div className="min-w-0">
        {product.badge && (
          <p className="text-[10px] tracking-widest uppercase text-accent font-semibold mb-1">
            {product.badge}
          </p>
        )}
        <p className="text-sm font-medium text-copy leading-snug truncate">
          {product.name}
        </p>
        <p className="text-xs text-copy-3 mt-0.5">
          Featured in my 100 km setup
        </p>
      </div>
      <span className="flex items-center gap-1 text-sm text-accent shrink-0">
        View
        <ArrowRight size={13} aria-hidden="true" />
      </span>
    </a>
  )
}
