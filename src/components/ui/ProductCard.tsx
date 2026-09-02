'use client'

import Image from 'next/image'
import { ArrowRight, Tag } from 'lucide-react'
import { trackEvent, AnalyticsEvent } from '@/lib/analytics'
import { isValidAffiliateUrl } from '@/lib/utils'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const hasValidUrl = isValidAffiliateUrl(product.affiliateUrl)
  // Role (shoe's job in the rotation) wins over the generic trust badge —
  // it's the more personal, specific proof point.
  const eyebrow = product.role ?? product.badge
  const ctaLabel = product.category === 'running-shoes' ? 'View shoe' : 'View gear'

  function handleAffiliateClick() {
    trackEvent(AnalyticsEvent.AFFILIATE_CLICK, {
      product_id: product.id,
      product_name: product.name,
      category: product.category,
    })
  }

  return (
    <article className="group flex flex-col bg-surface border border-edge hover:border-copy-3 transition-colors duration-200">
      {/* Image */}
      <div className="relative aspect-[3/2] bg-surface-2 overflow-hidden">
        {product.image && !product.image.includes('placeholder') ? (
          hasValidUrl ? (
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              onClick={handleAffiliateClick}
              className="absolute inset-0"
              aria-label={`View ${product.name} (opens in new tab)`}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectPosition: product.imagePosition ?? 'center' }}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </a>
          ) : (
            <Image
              src={product.image}
              alt={product.name}
              fill
              style={{ objectPosition: product.imagePosition ?? 'center' }}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-surface-2"
            aria-hidden="true"
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'radial-gradient(circle, var(--color-edge) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
            <span className="text-[10px] tracking-widest uppercase text-copy-3 relative">
              Product image
            </span>
          </div>
        )}
        {!product.available && (
          <div className="absolute inset-0 bg-bg/80 flex items-center justify-center">
            <span className="text-xs tracking-widest uppercase text-copy-3">Unavailable</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-2">
        {/* Personal proof — the dominant, first thing you read */}
        <div className="flex items-center justify-between gap-2 mb-1">
          {eyebrow && (
            <span className="text-[10px] tracking-widest uppercase text-accent font-semibold">
              {eyebrow}
            </span>
          )}
          {product.discountCode && (
            <span className="flex items-center gap-1 text-[10px] tracking-wider uppercase text-accent border border-accent-dim px-2 py-0.5">
              <Tag size={9} aria-hidden="true" />
              {product.discountCode}
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="text-base font-semibold text-copy leading-snug tracking-tight">
          {product.name}
        </h3>

        {/* Personal description */}
        <p className="text-sm text-copy-2 leading-relaxed">
          {product.shortDescription}
        </p>
        {product.whyIUseIt && (
          <p className="text-xs text-copy-3 leading-relaxed">
            {product.whyIUseIt}
          </p>
        )}

        {/* Discount description */}
        {product.discountDescription && (
          <p className="text-xs text-accent">{product.discountDescription}</p>
        )}

        {/* CTA */}
        <div className="mt-auto pt-3">
          {hasValidUrl ? (
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              onClick={handleAffiliateClick}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-2 transition-colors duration-150 group/link"
              aria-label={`${ctaLabel}: ${product.name} (opens in new tab)`}
            >
              {ctaLabel}
              <ArrowRight
                size={13}
                className="transition-transform duration-150 group-hover/link:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          ) : (
            <span className="text-xs text-copy-3 italic">
              [TODO: Add affiliate URL]
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
