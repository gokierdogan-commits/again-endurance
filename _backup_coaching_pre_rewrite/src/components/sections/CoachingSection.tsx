import Image from 'next/image'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { coachingAreas, coachingFormats, coachingDisclaimer } from '@/data/coaching'

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
                1:1 Coaching
              </p>
              <h2 id="coaching-heading" className="text-3xl sm:text-4xl font-bold text-copy mb-4">
                Coaching for the rebuild.
              </h2>
              <p className="text-copy-2 leading-relaxed">
                Coaching here isn&apos;t about finding the perfect plan. It&apos;s about
                staying consistent, adjusting when life gets in the way, and showing up
                again the next day.
              </p>
            </div>

            {/* Areas */}
            <div>
              <p className="text-[10px] tracking-widest uppercase text-copy-3 font-medium mb-4">
                What coaching covers
              </p>
              <ul className="space-y-2.5">
                {coachingAreas.map((area) => (
                  <li key={area.id} className="flex items-start gap-3 text-sm text-copy-2">
                    <CheckCircle
                      size={14}
                      className="text-accent shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
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
              <div className="space-y-3">
                {coachingFormats.map((fmt) => (
                  <div key={fmt.id} className="border border-edge p-4">
                    <p className="text-sm font-semibold text-copy mb-1">{fmt.name}</p>
                    <p className="text-xs text-copy-2 leading-relaxed">{fmt.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button href="/coaching" size="lg" variant="primary">
              Apply for coaching
              <ArrowRight size={15} aria-hidden="true" />
            </Button>

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
