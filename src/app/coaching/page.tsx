import type { Metadata } from 'next'
import { Check, ArrowRight, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CoachingForm } from '@/components/ui/CoachingForm'
import { Testimonials } from '@/components/sections/Testimonials'
import { firstSessionsInclude, afterFreeSessions, coachingNotFor, coachingDisclaimer } from '@/data/coaching'
import { siteConfig } from '@/data/site'

const whoFor = ['Beginners', 'Returning after a break', 'Struggling with consistency']
const whatYouGet = ['Accountability', 'Weekly feedback', 'Personal guidance', 'A habit that lasts']

export const metadata: Metadata = {
  title: 'Work With Me',
  description: `Build a running habit that lasts. ${siteConfig.tagline}`,
  alternates: { canonical: `${siteConfig.url}/coaching` },
  openGraph: {
    title: `Work With Me | ${siteConfig.name}`,
    description: "I'm looking for ten people who want accountability, guidance, and a structured plan to become more consistent runners. 3 spots already booked.",
  },
}

export default function CoachingPage() {
  return (
    <>
      {/* Page hero */}
      <section className="py-16 lg:py-24 border-b border-edge">
        <div className="site-container max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-copy tracking-tighter mb-6">
            Build a running habit that lasts.
          </h1>
          <p className="text-copy-2 text-lg max-w-2xl leading-relaxed mb-8">
            For people who don&apos;t think of themselves as runners yet.
          </p>

          <Button href="#apply" size="lg" variant="primary" className="mb-8">
            Apply for Coaching
            <ArrowRight size={15} aria-hidden="true" />
          </Button>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mb-8">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-copy-3 font-medium mb-3">
                Who it&apos;s for
              </p>
              <ul className="space-y-2">
                {whoFor.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-copy-2">
                    <Check size={14} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-copy-3 font-medium mb-3">
                You&apos;ll get
              </p>
              <ul className="space-y-2">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-copy-2">
                    <Check size={14} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-copy-3 text-xs">
            Coaching available in German, English &amp; Turkish.
            <br />
            Coaching auf Deutsch, Englisch &amp; Türkisch verfügbar.
          </p>
        </div>
      </section>

      {/* What the offer actually includes */}
      <section aria-labelledby="sessions-heading" className="py-16 lg:py-24 border-b border-edge bg-surface">
        <div className="site-container max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div>
            <h2 id="sessions-heading" className="text-2xl sm:text-3xl font-bold text-copy mb-5">
              What the first two sessions include.
            </h2>
            <ul className="space-y-2.5">
              {firstSessionsInclude.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-copy-2">
                  <Check size={14} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-copy mb-5">
              What happens after the free sessions?
            </h2>
            <p className="text-copy-2 text-sm leading-relaxed">
              {afterFreeSessions}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials — renders nothing until real quotes exist */}
      <Testimonials />

      {/* Who this isn't for */}
      <section aria-labelledby="not-for-heading" className="py-16 lg:py-24 border-b border-edge">
        <div className="site-container max-w-4xl">
          <h2 id="not-for-heading" className="text-2xl sm:text-3xl font-bold text-copy mb-5">
            Not for you if…
          </h2>
          <ul className="space-y-2.5 mb-8">
            {coachingNotFor.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-copy-2">
                <X size={14} className="text-copy-3 shrink-0 mt-0.5" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xs text-copy-3 leading-relaxed max-w-2xl">
            {coachingDisclaimer}
          </p>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" aria-labelledby="form-heading" className="scroll-mt-16 lg:scroll-mt-18 py-16 lg:py-24">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

            {/* Left: info */}
            <div className="space-y-6">
              <div>
                <h2 id="form-heading" className="text-2xl sm:text-3xl font-bold text-copy mb-4">
                  Apply to work with me.
                </h2>
                <p className="text-copy-2 text-sm leading-relaxed">
                  A few quick details. I&apos;ll personally review every application
                  and reach out if it looks like a good fit.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 bg-accent-dim border border-accent px-3 py-1.5">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" aria-hidden="true" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold text-accent">
                  First 2 sessions free. {siteConfig.coachingSpotsLeft} spots left.
                </span>
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
