import Image from 'next/image'
import { MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { siteConfig } from '@/data/site'

export function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center bg-bg py-24 lg:py-32 border-b border-edge"
      aria-label="Introduction"
    >
      <div className="site-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* ── Portrait ──────────────────────────────── */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[3/4] w-full max-w-[360px] mx-auto lg:max-w-none overflow-hidden">
              <Image
                src="/images/hero/hero.jpg"
                alt="Gökhan Erdogan"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 360px, 40vw"
              />
            </div>
          </div>

          {/* ── Text content ──────────────────────────── */}
          <div className="lg:col-span-3 flex flex-col gap-7">

            {/* Name + location */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black text-copy leading-[0.95] tracking-tighter">
                Gökhan<br />Erdogan
              </h1>
              <p className="mt-4 flex items-center gap-1.5 text-copy-2 text-sm tracking-wider">
                <MapPin size={12} aria-hidden="true" />
                Endurance athlete · {siteConfig.location}
              </p>
            </div>

            {/* Divider */}
            <div className="w-10 h-px bg-accent" aria-hidden="true" />

            {/* Brand tag */}
            <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">
              Again.
            </p>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-copy leading-[1.05]">
              {siteConfig.tagline}
            </h2>

            {/* Supporting line */}
            <p className="text-copy-2 text-lg leading-relaxed max-w-lg">
              {siteConfig.supportingLine}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button href="/products" size="lg" variant="primary">
                Shop my gear
              </Button>
              <Button href="/coaching#apply" size="lg" variant="ghost">
                Apply to Work With Me
                <ArrowRight size={15} aria-hidden="true" />
              </Button>
            </div>
            <p className="text-copy-3 text-xs -mt-4">
              A small pilot helping 5 people build a consistent running habit.
            </p>

            {/* Social links */}
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  )
}
