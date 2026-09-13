import type { Metadata } from 'next'
import Image from 'next/image'
import { BioLinkList } from '@/components/ui/BioLinkList'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: { absolute: 'Gökhan Erdogan | Coaching, Training Plan & Running Gear' },
  description:
    'From 138 kg to 100 km. Running coaching, a beginner-friendly hybrid training plan, and endurance gear used by Gökhan Erdogan.',
  alternates: { canonical: `${siteConfig.url}/links` },
}

export default function LinksPage() {
  return (
    <div className="-mt-16 min-h-dvh flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-sm flex flex-col items-center text-center">

        {/* Portrait */}
        <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
          <Image
            src="/images/hero/hero.jpg"
            alt="Gökhan Erdogan"
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>

        {/* Brand */}
        <p className="text-3xl font-black text-copy tracking-tighter mb-1">
          Again<span className="text-accent">.</span>
        </p>
        <p className="text-copy-2 text-sm mb-3">
          Gökhan Erdogan · Endurance athlete
        </p>
        <p className="text-copy text-sm leading-relaxed mb-6">
          From 138 kg to 100 km. I help beginners build a running habit that lasts.
        </p>

        {/* Links */}
        <BioLinkList />

        <p className="text-copy-3 text-xs mt-8">
          {siteConfig.location}
        </p>
      </div>
    </div>
  )
}
