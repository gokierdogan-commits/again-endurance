export function ProductCriteria() {
  return (
    <section
      aria-labelledby="criteria-heading"
      className="py-20 lg:py-28 border-b border-edge bg-surface"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">

          {/* Left: heading */}
          <div className="lg:col-span-1">
            <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-4">
              Method
            </p>
            <h2 id="criteria-heading" className="text-3xl sm:text-4xl font-bold text-copy">
              How I choose.
            </h2>
          </div>

          {/* Right: prose */}
          <div className="lg:col-span-2">
            <p className="text-copy-2 leading-relaxed">
              I don&apos;t rate gear off one run. Something has to hold up past 25 km,
              survive months of real training, actually help on race day, and still be
              worth the price next to what I&apos;ve already tried. If it&apos;s still
              in my kit six months later, that&apos;s the only review that matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
