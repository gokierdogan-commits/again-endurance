import type { Metadata } from 'next'
import { CheckCircle, XCircle } from 'lucide-react'
import { CoachingForm } from '@/components/ui/CoachingForm'
import {
  coachingAreas,
  coachingFormats,
  coachingDisclaimer,
  coachingNotFor,
} from '@/data/coaching'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Coaching',
  description: `Coaching for the rebuild. ${siteConfig.tagline}`,
  alternates: { canonical: `${siteConfig.url}/coaching` },
  openGraph: {
    title: `Coaching | ${siteConfig.name}`,
    description: 'Staying consistent, adjusting when life gets in the way, and showing up again.',
  },
}

export default function CoachingPage() {
  return (
    <>
      {/* Page hero */}
      <section className="py-16 lg:py-24 border-b border-edge">
        <div className="site-container max-w-4xl">
          <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-4">
            1:1 Coaching
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-copy tracking-tighter mb-6">
            Coaching for the rebuild.
          </h1>
          <p className="text-copy-2 text-lg max-w-2xl leading-relaxed">
            Coaching here isn&apos;t about finding the perfect plan. It&apos;s about
            staying consistent, adjusting when life gets in the way, and showing up
            again the next day.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" aria-labelledby="how-heading" className="scroll-mt-16 lg:scroll-mt-18 py-16 lg:py-24 border-b border-edge bg-surface">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div>
              <h2 id="how-heading" className="text-2xl sm:text-3xl font-bold text-copy mb-4">
                What coaching covers.
              </h2>
              <p className="text-copy-2 text-sm leading-relaxed">
                Every plan starts from where you actually are, not where you think you
                should be. Some weeks go well. Some don&apos;t. Both get planned for.
              </p>
            </div>

            <div className="lg:col-span-2 space-y-8">
              {/* Areas */}
              <div>
                <p className="text-[10px] tracking-widest uppercase text-copy-3 font-medium mb-4">
                  Coaching areas
                </p>
                <ul className="space-y-2.5">
                  {coachingAreas.map((area) => (
                    <li key={area.id} className="flex items-start gap-3 text-sm text-copy-2">
                      <CheckCircle size={14} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                      {area.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Formats */}
              <div>
                <p className="text-[10px] tracking-widest uppercase text-copy-3 font-medium mb-4">
                  Coaching formats
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {coachingFormats.map((fmt) => (
                    <div key={fmt.id} className="border border-edge p-5">
                      <p className="text-sm font-semibold text-copy mb-2">{fmt.name}</p>
                      <p className="text-xs text-copy-2 leading-relaxed">{fmt.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Not for */}
              <div>
                <p className="text-[10px] tracking-widest uppercase text-copy-3 font-medium mb-4">
                  Not suitable for
                </p>
                <ul className="space-y-1.5">
                  {coachingNotFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-copy-3">
                      <XCircle size={13} className="shrink-0 mt-0.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-copy-3 leading-relaxed border-l-2 border-edge pl-4">
                {coachingDisclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section aria-labelledby="form-heading" className="py-16 lg:py-24">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

            {/* Left: info */}
            <div className="space-y-6">
              <div>
                <h2 id="form-heading" className="text-2xl sm:text-3xl font-bold text-copy mb-4">
                  Apply for coaching.
                </h2>
                <p className="text-copy-2 text-sm leading-relaxed">
                  Fill in the application below. I&apos;ll review your situation and contact
                  you if the coaching format looks suitable.
                </p>
              </div>

            </div>

            {/* Right: form */}
            <div className="lg:col-span-2">
              <CoachingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
