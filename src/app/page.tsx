import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { ProofStrip } from '@/components/sections/ProofStrip'
import { About } from '@/components/sections/About'
import { FeaturedProducts } from '@/components/sections/FeaturedProducts'
import { ProductCriteria } from '@/components/sections/ProductCriteria'
import { CoachingSection } from '@/components/sections/CoachingSection'
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
      <ProofStrip />
      <About />
      <FeaturedProducts />
      <ProductCriteria />
      <CoachingSection />
      <FAQ />
      <PartnershipContact />
    </>
  )
}
