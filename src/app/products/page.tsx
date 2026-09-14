import type { Metadata } from 'next'
import { GearBehind100km } from '@/components/sections/GearBehind100km'
import { EssentialsUnder50 } from '@/components/sections/EssentialsUnder50'
import { ShoesSection } from '@/components/sections/ShoesSection'
import { GearByCategory } from '@/components/sections/GearByCategory'
import { AffiliateDisclosure } from '@/components/ui/AffiliateDisclosure'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'My Gear',
  description: `What I actually use for 100 km runs, marathons and everyday training. ${siteConfig.tagline}`,
  alternates: { canonical: `${siteConfig.url}/products` },
  openGraph: {
    title: `My Gear | ${siteConfig.name}`,
    description: "Key gear I used for my 100 km run, and what's still in my kit for everyday training.",
  },
}

export default function ProductsPage() {
  return (
    <>
      <GearBehind100km />
      <EssentialsUnder50 />
      <ShoesSection />
      <GearByCategory />

      <div className="site-container py-12">
        <AffiliateDisclosure />
      </div>
    </>
  )
}
