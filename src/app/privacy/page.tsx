import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for again-endurance.com',
  alternates: { canonical: `${siteConfig.url}/privacy` },
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="site-container max-w-3xl">
        <div className="mb-12">
          <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-4">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-copy mb-4">
            Privacy policy.
          </h1>
          <p className="text-copy-3 text-sm">
            Last updated: 23 July 2026
          </p>
        </div>

        {/* Template notice */}
        <div className="border border-accent-dim bg-accent-dim/30 p-5 mb-10 text-sm text-copy-2 leading-relaxed space-y-2">
          <p className="font-medium text-accent">Template. Requires review before publishing.</p>
          <p>
            This privacy policy is a template. It must be reviewed and completed by a
            qualified legal professional familiar with Swiss law (DSG / nDSG) and the
            GDPR where applicable before this website is made public.
          </p>
          <p>
            Do not treat this text as legal advice. Remove this notice before publishing.
          </p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8 text-copy-2 leading-relaxed">

          <section aria-labelledby="controller">
            <h2 id="controller" className="text-lg font-semibold text-copy mb-3">
              1. Controller
            </h2>
            <p>
              The controller responsible for data processing on this website is:<br />
              {siteConfig.legalName}<br />
              {siteConfig.legalAddress}<br />
              Email: goki.erdogan@gmail.com
            </p>
          </section>

          <section aria-labelledby="data-collected">
            <h2 id="data-collected" className="text-lg font-semibold text-copy mb-3">
              2. Data collected
            </h2>
            <p>This website may collect the following data:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Coaching application data (name, email, training information)</li>
              <li>Partnership enquiry data (name, email, company, message)</li>
              <li>Access logs (IP address, browser type, pages visited) via the hosting provider</li>
              <li>Analytics data if analytics is configured (see below)</li>
            </ul>
          </section>

          <section aria-labelledby="purpose">
            <h2 id="purpose" className="text-lg font-semibold text-copy mb-3">
              3. Purpose of processing
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Coaching application data is used to review applications and respond where appropriate</li>
              <li>Partnership enquiry data is used to review and respond to collaboration requests</li>
              <li>Analytics data is used to understand how the website is used and to improve it</li>
            </ul>
          </section>

          <section aria-labelledby="legal-basis">
            <h2 id="legal-basis" className="text-lg font-semibold text-copy mb-3">
              4. Legal basis
            </h2>
            <p>
              Coaching application data is processed based on your consent when you submit
              the form, and where a coaching relationship begins, on the necessity to
              perform that agreement. Partnership enquiry data is processed based on your
              consent when you submit the form. Access logs are processed based on a
              legitimate interest in operating and securing the website.
            </p>
          </section>

          <section aria-labelledby="retention">
            <h2 id="retention" className="text-lg font-semibold text-copy mb-3">
              5. Data retention
            </h2>
            <p>
              Coaching and partnership enquiry data is kept for as long as needed to review
              and respond to your enquiry, and for up to 24 months afterward in case of
              follow-up, unless a longer period is required for an ongoing coaching
              relationship or by law. Access logs are retained by the hosting provider
              according to their own retention schedule.
            </p>
          </section>

          <section aria-labelledby="third-parties">
            <h2 id="third-parties" className="text-lg font-semibold text-copy mb-3">
              6. Third parties
            </h2>
            <p>This website may share data with the following third-party services:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>
                Formspree (form submissions):{' '}
                <a
                  href="https://formspree.io/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-2 underline"
                >
                  formspree.io/legal/privacy-policy
                </a>
              </li>
              <li>
                Vercel (hosting and infrastructure):{' '}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-2 underline"
                >
                  vercel.com/legal/privacy-policy
                </a>
              </li>
              <li>No analytics provider is currently configured on this website.</li>
            </ul>
          </section>

          <section aria-labelledby="rights">
            <h2 id="rights" className="text-lg font-semibold text-copy mb-3">
              7. Your rights
            </h2>
            <p>
              Under applicable data protection law, you may have the right to access,
              correct, delete, or restrict the processing of your personal data. To
              exercise these rights, contact: goki.erdogan@gmail.com.
            </p>
          </section>

          <section aria-labelledby="analytics">
            <h2 id="analytics" className="text-lg font-semibold text-copy mb-3">
              8. Analytics
            </h2>
            <p>
              This website does not currently use any analytics provider. If analytics are
              added in the future, this section will be updated to describe what is
              collected and, where required, how to manage cookie consent.
            </p>
          </section>

          <section aria-labelledby="affiliate">
            <h2 id="affiliate" className="text-lg font-semibold text-copy mb-3">
              9. Affiliate links
            </h2>
            <p>
              This website contains affiliate links. When you click an affiliate link and
              make a purchase, the linked retailer may set cookies on your device in
              accordance with their own privacy policy. Please review the privacy policies
              of any third-party retailers you visit.
            </p>
          </section>

          <section aria-labelledby="changes">
            <h2 id="changes" className="text-lg font-semibold text-copy mb-3">
              10. Changes to this policy
            </h2>
            <p>
              This policy may be updated from time to time. The updated version will be
              published on this page with a revised date.
            </p>
          </section>

        </div>
      </div>
    </section>
  )
}
