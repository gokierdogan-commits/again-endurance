import type { Metadata } from 'next'
import { XCircle } from 'lucide-react'
import { CoachingForm } from '@/components/ui/CoachingForm'
import { coachingDisclaimer, coachingNotFor } from '@/data/coaching'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Work With Me',
  description: `From walking to running consistently. ${siteConfig.tagline}`,
  alternates: { canonical: `${siteConfig.url}/coaching` },
  openGraph: {
    title: `Work With Me | ${siteConfig.name}`,
    description: "I'm looking for 5 people who want support building a consistent running habit.",
  },
}

export default function CoachingPage() {
  return (
    <>
      {/* Page hero */}
      <section className="py-16 lg:py-24 border-b border-edge">
        <div className="site-container max-w-4xl">
          <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-4">
            Work With Me
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-copy tracking-tighter mb-6">
            From walking to running consistently.
          </h1>
          <p className="text-copy-2 text-lg max-w-2xl leading-relaxed mb-4">
            I&apos;m looking for 5 people who want support building a consistent
            running habit.
          </p>
          <p className="text-copy-2 max-w-2xl leading-relaxed">
            This is for beginners, people returning after a long break, or anyone
            who feels too heavy, too slow, or not fit enough to call themselves a
            runner. We&apos;ll focus on building consistency, accountability,
            realistic progress, and making running fit around your life.
          </p>
          <p className="text-sm text-accent font-medium mt-6">
            Only 5 spots available.
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section id="how-it-works" aria-labelledby="how-heading" className="scroll-mt-16 lg:scroll-mt-18 py-16 lg:py-24 border-b border-edge bg-surface">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div>
              <h2 id="how-heading" className="text-2xl sm:text-3xl font-bold text-copy mb-4">
                What to expect.
              </h2>
              <p className="text-copy-2 text-sm leading-relaxed">
                This is a small pilot, not a fixed program. Every plan starts from
                where you actually are, not where you think you should be. Some
                weeks go well. Some don&apos;t. Both get planned for.
              </p>
            </div>

            <div className="lg:col-span-2 space-y-8">
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
                  Apply.
                </h2>
                <p className="text-copy-2 text-sm leading-relaxed">
                  Fill in the application below. I&apos;ll review your situation and
                  reach out if it looks like a good fit.
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
