import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const GUMROAD_URL = 'https://goki07.gumroad.com/l/eqctfr'

export function TrainingPlanPromo() {
  return (
    <section
      id="training-plan"
      aria-labelledby="training-plan-heading"
      className="py-20 lg:py-28 border-b border-edge bg-surface"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Cover */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-none overflow-hidden">
              <Image
                src="/images/hybrid-training-plan-cover.png"
                alt="Hybrid Training Plan cover"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-4">
                Self-Guided Plan
              </p>
              <h2 id="training-plan-heading" className="text-3xl sm:text-4xl font-bold text-copy mb-4">
                Hybrid Training Plan.
              </h2>
              <p className="text-copy-2 text-lg leading-relaxed">
                Not ready for 1:1 coaching? This is the same structure I used going
                from 138 kg to a 100 km finish — running and strength training
                built to support each other, not compete.
              </p>
            </div>

            <p className="text-2xl font-bold text-accent">CHF 4.95</p>

            <Button href={GUMROAD_URL} size="lg" variant="primary" external>
              Get the Plan
              <ArrowRight size={15} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
