import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { FeaturedProducts } from '@/components/sections/FeaturedProducts'
import { ProductCriteria } from '@/components/sections/ProductCriteria'
import { CoachingSection } from '@/components/sections/CoachingSection'
import { About } from '@/components/sections/About'
import { FAQ } from '@/components/sections/FAQ'
import { PartnershipContact } from '@/components/sections/PartnershipContact'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProducts />
      <ProductCriteria />
      <CoachingSection />
      <About />
      <FAQ />
      <PartnershipContact />
    </>
  )
}
