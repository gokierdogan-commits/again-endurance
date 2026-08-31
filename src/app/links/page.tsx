import type { Metadata } from 'next'
import Image from 'next/image'
import { BioLinkList } from '@/components/ui/BioLinkList'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Links',
  description: `Everything in one place. ${siteConfig.tagline}`,
  alternates: { canonical: `${siteConfig.url}/links` },
}

export default function LinksPage() {
  return (
    <div className="-mt-16 min-h-dvh flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm flex flex-col items-center text-center">

        {/* Portrait */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6">
          <Image
            src="/images/hero/hero.jpg"
            alt="Gökhan Erdogan"
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>

        {/* Brand */}
        <p className="text-3xl font-black text-copy tracking-tighter mb-1">
          Again<span className="text-accent">.</span>
        </p>
        <p className="text-copy-2 text-sm mb-8">
          Gökhan Erdogan · Endurance athlete
        </p>

        {/* Links */}
        <BioLinkList />

        <p className="text-copy-3 text-xs mt-10">
          {siteConfig.location}
        </p>
      </div>
    </div>
  )
}
