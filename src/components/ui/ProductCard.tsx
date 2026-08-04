'use client'

import Image from 'next/image'
import { ExternalLink, Tag } from 'lucide-react'
import { trackEvent, AnalyticsEvent } from '@/lib/analytics'
import { isValidAffiliateUrl } from '@/lib/utils'
import { categories } from '@/data/products'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const categoryLabel = categories.find((c) => c.id === product.category)?.label ?? product.category
  const hasValidUrl = isValidAffiliateUrl(product.affiliateUrl)

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
      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* Category + discount */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] tracking-widest uppercase text-copy-3 font-medium">
            {categoryLabel}
          </span>
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

        {/* Short description */}
        <p className="text-sm text-copy-2 leading-relaxed">
          {product.shortDescription}
        </p>

        {/* Why I use it */}
        <div className="border-t border-edge pt-4 flex-1">
          <p className="text-[11px] tracking-widest uppercase text-copy-3 mb-2 font-medium">
            Why I use it
          </p>
          <p className="text-sm text-copy-2 leading-relaxed">
            {product.whyIUseIt}
          </p>
        </div>

        {/* Discount description */}
        {product.discountDescription && (
          <p className="text-xs text-accent">{product.discountDescription}</p>
        )}

        {/* CTA */}
        <div className="mt-auto pt-2">
          {hasValidUrl ? (
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              onClick={handleAffiliateClick}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-2 transition-colors duration-150 group/link"
              aria-label={`View ${product.name} (opens in new tab)`}
            >
              View product
              <ExternalLink
                size={13}
                className="transition-transform duration-150 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
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
