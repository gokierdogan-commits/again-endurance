import { ContactForm } from '@/components/ui/ContactForm'

export function PartnershipContact() {
  return (
    <section
      id="partnerships"
      aria-labelledby="partnership-heading"
      className="scroll-mt-16 lg:scroll-mt-18 py-20 lg:py-28 border-b border-edge"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">

          {/* Left: info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-4">
                Brand & partnerships
              </p>
              <h2 id="partnership-heading" className="text-2xl sm:text-3xl font-bold text-copy mb-4">
                Work together.
              </h2>
              <p className="text-copy-2 text-sm leading-relaxed">
                Open to product testing, brand collaborations, content partnerships,
                and event appearances.
              </p>
            </div>

            <div className="border-t border-edge pt-6 space-y-3">
              <p className="text-xs tracking-widest uppercase text-copy-3 font-medium">
                Enquiry types
              </p>
              <ul className="space-y-1.5 text-sm text-copy-2">
                <li>Product testing and honest review</li>
                <li>Brand partnership and ambassadorship</li>
                <li>Event participation or appearance</li>
                <li>Content collaboration</li>
              </ul>
            </div>

            <p className="text-xs text-copy-3 leading-relaxed">
              This form is for brand and partnership enquiries only.
              For coaching enquiries, use the{' '}
              <a href="/coaching" className="text-accent hover:text-accent-2 underline transition-colors">
                coaching application
              </a>
              .
            </p>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
