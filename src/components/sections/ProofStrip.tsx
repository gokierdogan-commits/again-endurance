import { journey } from '@/data/journey'

export function ProofStrip() {
  return (
    <section aria-label="Key numbers" className="bg-surface border-b border-edge">
      <div className="site-container">
        <div className="grid grid-cols-2 sm:grid-cols-5 divide-x divide-y sm:divide-y-0 divide-edge">
          {journey.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center gap-1.5 px-5 py-6 lg:px-4"
            >
              <span
                className="text-xl lg:text-2xl font-bold font-mono text-copy tracking-tight leading-none tabular-nums"
                aria-label={`${item.value}, ${item.label}`}
              >
                {item.value}
              </span>
              <span className="text-[10px] leading-snug text-copy-2">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
