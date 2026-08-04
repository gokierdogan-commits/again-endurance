import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Legal Notice',
  description: 'Legal notice / imprint for again-endurance.com',
  alternates: { canonical: `${siteConfig.url}/legal` },
  robots: { index: false },
}

export default function LegalPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="site-container max-w-2xl">
        <div className="mb-12">
          <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-4">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-copy mb-4">
            Legal notice.
          </h1>
        </div>

        {/* Template notice */}
        <div className="border border-accent-dim bg-accent-dim/30 p-5 mb-10 text-sm text-copy-2 leading-relaxed space-y-2">
          <p className="font-medium text-accent">Template. Requires review before publishing.</p>
          <p>
            This legal notice is a template. Requirements for imprint / impressum vary by
            country. In Switzerland, Germany, and Austria, legal notice requirements are
            defined by specific law (e.g. § 5 TMG in Germany). Consult a qualified legal
            professional before publishing.
          </p>
        </div>

        <div className="space-y-8 text-copy-2 leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-copy mb-3">Site operator</h2>
            <address className="not-italic text-sm space-y-1">
              <p>{siteConfig.legalName}</p>
              <p>{siteConfig.legalAddress}</p>
              <p>Email: goki.erdogan@gmail.com</p>
            </address>
          </section>

          <section>
            <h2 className="text-base font-semibold text-copy mb-3">Content responsibility</h2>
            <p className="text-sm">
              Responsible for the content of this website under applicable law:<br />
              {siteConfig.legalName}, {siteConfig.legalAddress}
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-copy mb-3">Disclaimer</h2>
            <div className="text-sm space-y-3">
              <p>
                The content of this website is provided for informational purposes only.
                No liability is accepted for the completeness, accuracy, or currency of
                the information provided.
              </p>
              <p>
                External links are to third-party websites. No liability is accepted for
                the content of externally linked pages.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold text-copy mb-3">Copyright</h2>
            <p className="text-sm">
              © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
              Content, images, and design elements may not be reproduced without prior
              written consent.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-copy mb-3">Affiliate disclosure</h2>
            <p className="text-sm">
              This website contains affiliate links. Purchases made through affiliate links
              may result in a commission being earned. This is disclosed on all relevant pages.
              Affiliate relationships do not influence editorial decisions or product recommendations.
            </p>
          </section>

        </div>
      </div>
    </section>
  )
}
