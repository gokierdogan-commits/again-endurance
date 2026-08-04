import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <section className="py-24 lg:py-32 min-h-[60vh] flex items-center">
      <div className="site-container max-w-xl">
        <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-4">
          404
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-copy tracking-tighter mb-4">
          Page not found.
        </h1>
        <p className="text-copy-2 mb-8">
          That page doesn&apos;t exist or has moved. Use the links below to get back on track.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-copy-2 hover:text-accent transition-colors"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Home
          </Link>
          <Link href="/products" className="text-sm text-copy-2 hover:text-accent transition-colors">
            Gear
          </Link>
          <Link href="/coaching" className="text-sm text-copy-2 hover:text-accent transition-colors">
            Coaching
          </Link>
        </div>
      </div>
    </section>
  )
}
