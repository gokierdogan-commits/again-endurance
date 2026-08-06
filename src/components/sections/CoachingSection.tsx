import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { coachingDisclaimer } from '@/data/coaching'

const whoFor = ['Beginners', 'Returning after a break', 'Struggling with consistency']
const whatYouGet = ['Accountability', 'Weekly feedback', 'Personal guidance', 'A habit that lasts']

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
              <p className="text-copy-2 text-lg leading-relaxed">
                For people who don&apos;t think of themselves as runners yet.
              </p>
            </div>

            {/* Who it's for / What you get */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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

            {/* CTA */}
            <div className="space-y-3">
              <p className="text-xs text-accent font-medium">
                Currently accepting 5 people.
              </p>
              <Button href="/coaching#apply" size="lg" variant="primary">
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
