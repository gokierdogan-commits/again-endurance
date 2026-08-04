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
                From walking to running consistently.
              </h2>
              <p className="text-copy-2 text-lg leading-relaxed mb-4">
                I&apos;m looking for 5 people who want support building a consistent
                running habit.
              </p>
              <p className="text-copy-2 leading-relaxed">
                This is for beginners, people returning after a long break, or anyone
                who feels too heavy, too slow, or not fit enough to call themselves a
                runner.
              </p>
              <p className="text-copy-2 leading-relaxed mt-4">
                We&apos;ll focus on building consistency, accountability, realistic
                progress, and making running fit around your life.
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <Button href="/coaching" size="lg" variant="primary">
                Apply
                <ArrowRight size={15} aria-hidden="true" />
              </Button>
              <p className="text-xs text-accent font-medium">
                Only 5 spots available.
              </p>
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
