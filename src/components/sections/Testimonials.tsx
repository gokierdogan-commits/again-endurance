interface Testimonial {
  quote: string
  name: string
}

/**
 * PLACEHOLDER — no real testimonials exist yet. Do not fill this with
 * invented quotes. Add real ones here (with the person's permission) when
 * they exist; the section renders nothing until then.
 */
const testimonials: Testimonial[] = []

export function Testimonials() {
  if (testimonials.length === 0) return null

  return (
    <section aria-labelledby="testimonials-heading" className="py-20 lg:py-28 border-b border-edge bg-surface">
      <div className="site-container">
        <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-4">
          Results
        </p>
        <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-copy mb-10">
          What people say.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="border-l-2 border-accent pl-5">
              <p className="text-copy-2 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-3 text-sm text-copy-3">{t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
