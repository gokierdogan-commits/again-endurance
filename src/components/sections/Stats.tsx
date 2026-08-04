import { stats } from '@/data/stats'

export function Stats() {
  return (
    <section aria-label="Training statistics" className="bg-surface border-b border-edge">
      <div className="site-container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-y sm:divide-y-0 divide-edge">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col justify-center gap-2 px-6 py-8 lg:px-8 lg:py-10"
            >
              <span
                className="text-3xl lg:text-4xl font-bold font-mono text-copy tracking-tight leading-none tabular-nums"
                aria-label={`${stat.value}, ${stat.label}`}
              >
                {stat.value}
              </span>
              <span className="text-[10px] font-medium tracking-widest uppercase text-copy-2">
                {stat.label}
              </span>
              {stat.sublabel && (
                <span className="text-[10px] text-copy-3">{stat.sublabel}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
