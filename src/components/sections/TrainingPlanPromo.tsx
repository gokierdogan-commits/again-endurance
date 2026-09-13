import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const GUMROAD_URL = 'https://goki07.gumroad.com/l/eqctfr'

const benefits = [
  'Beginner-friendly running progression',
  'Strength training that supports your running',
  'A clear weekly structure',
  'Built for long-term consistency',
]

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
                Build your running habit without giving up strength.
              </h2>
              <p className="text-copy-2 text-lg leading-relaxed">
                A structured plan for beginners and people restarting who want running
                and strength training to work together, not compete with each other.
              </p>
              <p className="text-copy-2 text-lg leading-relaxed mt-4">
                I built it from my own journey from 138 kg to completing a 100 km
                ultra. The focus isn&apos;t chasing pace from day one. It&apos;s
                building gradually, staying strong, and following a structure you
                can stick to when motivation disappears.
              </p>
            </div>

            <ul className="space-y-2">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-copy-2">
                  <Check size={14} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-2xl font-bold text-accent">CHF 4.95</p>

            <div className="space-y-3">
              <Button href={GUMROAD_URL} size="lg" variant="primary" external>
                Get the Hybrid Plan
                <ArrowRight size={15} aria-hidden="true" />
              </Button>
              <p className="text-copy-3 text-xs">
                Self-guided plan. No individual feedback or coaching included.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
