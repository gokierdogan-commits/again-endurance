import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { coachingDisclaimer } from '@/data/coaching'

export function CoachingSection() {
  return (
    <section
      id="coaching"
      aria-labelledby="coaching-heading"
      className="scroll-mt-16 lg:scroll-mt-18 py-20 lg:py-28 border-b border-edge"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Text */}
          <div className="space-y-8">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-4">
                Work With Me
              </p>
              <h2 id="coaching-heading" className="text-3xl sm:text-4xl font-bold text-copy mb-4">
                Build a running habit that lasts.
              </h2>
              <p className="text-copy-2 text-lg leading-relaxed mb-4">
                I&apos;m looking for five people who want accountability, guidance, and
                a structured plan to become more consistent runners, whether
                you&apos;re starting from scratch, returning after a break, or
                training for your next goal.
              </p>
              <p className="text-copy-2 leading-relaxed">
                My goal isn&apos;t just to help you finish a race. It&apos;s to help
                you build a running habit that fits your life and lasts.
              </p>
              <p className="text-copy-2 leading-relaxed mt-4">
                Together we&apos;ll focus on consistency, realistic progress,
                accountability, and enjoying the process. Every plan is tailored to
                your current fitness level and your personal goals.
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <p className="text-xs text-accent font-medium">
                Currently accepting 5 people.
              </p>
              <Button href="/coaching" size="lg" variant="primary">
                Apply to Work With Me
                <ArrowRight size={15} aria-hidden="true" />
              </Button>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-copy-3 leading-relaxed">
              {coachingDisclaimer}
            </p>
          </div>

          {/* Image */}
          <div className="lg:sticky lg:top-24">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/coaching.jpg"
                alt="Gökhan Erdogan after finishing a marathon"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
