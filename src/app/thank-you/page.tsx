import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Application received',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <section className="py-24 lg:py-32 min-h-[60vh] flex items-center">
      <div className="site-container max-w-xl text-center space-y-6">
        <CheckCircle
          size={40}
          className="text-ok mx-auto"
          aria-hidden="true"
        />
        <h1 className="text-3xl font-bold text-copy">Application received.</h1>
        <p className="text-copy-2 leading-relaxed">
          I&apos;ll review your situation and contact you if the coaching format looks suitable.
        </p>
        <p className="text-sm text-copy-3">
          This page confirms your submission. You should also receive a confirmation email
          if you used a valid address.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-copy-2 hover:text-accent transition-colors"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Back to {siteConfig.brand}
          </Link>
        </div>
      </div>
    </section>
  )
}
