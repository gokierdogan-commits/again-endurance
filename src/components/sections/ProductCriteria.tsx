const criteria = [
  {
    id: 'comfort',
    label: 'Long-distance comfort',
    description: 'How a product performs past 25 km, not just in a shop or on a short test.',
  },
  {
    id: 'durability',
    label: 'Durability',
    description: 'Whether it holds up over months of real training, not a single review session.',
  },
  {
    id: 'performance',
    label: 'Race performance',
    description: 'The difference it makes at effort, not just at moderate pace.',
  },
  {
    id: 'recovery',
    label: 'Recovery support',
    description: 'What it contributes to the days after long runs or races.',
  },
  {
    id: 'value',
    label: 'Value against alternatives',
    description: 'Whether it justifies the price compared to what I have already tested.',
  },
  {
    id: 'continued-use',
    label: 'Still in rotation',
    description: 'If it is still in my kit six months later, that is the real test.',
  },
]

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
            <h2 id="criteria-heading" className="text-3xl sm:text-4xl font-bold text-copy mb-6">
              How I choose.
            </h2>
            <p className="text-copy-2 leading-relaxed">
              Every item on this site earned its place through real use, not a single
              test. These are the six things that decide whether something stays in my kit.
            </p>
          </div>

          {/* Right: criteria list */}
          <div className="lg:col-span-2">
            <ol className="divide-y divide-edge">
              {criteria.map((item, i) => (
                <li key={item.id} className="flex gap-5 py-5 first:pt-0 last:pb-0">
                  <span
                    className="text-xs font-mono text-copy-3 pt-0.5 w-6 shrink-0 tabular-nums"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-copy mb-1">{item.label}</p>
                    <p className="text-sm text-copy-2 leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
