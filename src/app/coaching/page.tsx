import type { Metadata } from 'next'
import { XCircle } from 'lucide-react'
import { CoachingForm } from '@/components/ui/CoachingForm'
import { coachingDisclaimer, coachingNotFor } from '@/data/coaching'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Work With Me',
  description: `Build a running habit that lasts. ${siteConfig.tagline}`,
  alternates: { canonical: `${siteConfig.url}/coaching` },
  openGraph: {
    title: `Work With Me | ${siteConfig.name}`,
    description: "I'm looking for five people who want accountability, guidance, and a structured plan to become more consistent runners.",
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
            Build a running habit that lasts.
          </h1>
          <p className="text-copy-2 text-lg max-w-2xl leading-relaxed mb-4">
            I&apos;m looking for five people who want accountability, guidance, and
            a structured plan to become more consistent runners — whether
            you&apos;re starting from scratch, returning after a break, or training
            for your next goal.
          </p>
          <p className="text-copy-2 max-w-2xl leading-relaxed">
            My goal isn&apos;t just to help you finish a race. It&apos;s to help you
            build a running habit that fits your life and lasts. Together
            we&apos;ll focus on consistency, realistic progress, accountability,
            and enjoying the process. Every plan is tailored to your current
            fitness level and your personal goals.
          </p>
          <p className="text-sm text-accent font-medium mt-6">
            Currently accepting 5 people.
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
                  Apply to work with me.
                </h2>
                <p className="text-copy-2 text-sm leading-relaxed">
                  Tell me a bit about yourself and where you&apos;re starting from.
                  I&apos;ll read every application myself and reach out if it looks
                  like a good fit.
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
