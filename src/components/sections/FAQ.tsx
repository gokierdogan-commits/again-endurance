import { faqItems } from '@/data/faq'

export function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-16 lg:scroll-mt-18 py-20 lg:py-28 border-b border-edge bg-surface"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left: heading */}
          <div className="lg:col-span-1">
            <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-4">
              FAQ
            </p>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-copy">
              Common questions.
            </h2>
          </div>

          {/* Right: questions */}
          <div className="lg:col-span-2">
            <dl className="divide-y divide-edge">
              {faqItems.map((item) => (
                <details key={item.id} className="group py-5 first:pt-0 last:pb-0">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-sm font-medium text-copy hover:text-accent transition-colors duration-150 select-none">
                    <dt>{item.question}</dt>
                    {/* chevron indicator */}
                    <svg
                      className="shrink-0 w-4 h-4 text-copy-3 transition-transform duration-200 group-open:rotate-180"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <dd className="mt-4 text-sm text-copy-2 leading-relaxed">
                    {item.answer}
                  </dd>
                </details>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
