import Image from 'next/image'

const stages = [
  {
    id: 'problem',
    label: 'Problem',
    text: "At 204 cm and 138 kg, most running advice didn't apply to me.",
  },
  {
    id: 'first-step',
    label: 'First step',
    text: "I didn't start running. I started walking, and changed how I ate.",
  },
  {
    id: 'transformation',
    label: 'Transformation',
    text: 'Running started around 110 kg. Short, slow runs at first. Then a half marathon. A marathon. A 100 km ultra, seven half marathons in seven days, a 66 km relay around the lake, all within about a year. Not one breakthrough. Just repeated decisions.',
  },
  {
    id: 'mission',
    label: 'Mission',
    text: 'Now I document what actually works, and help a few people build the same habit.',
  },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-16 lg:scroll-mt-18 py-20 lg:py-28 border-b border-edge">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className="order-last lg:order-first">
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-none overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Gökhan Erdogan running"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-8">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-accent font-medium mb-4">
                Background
              </p>
              <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-copy">
                Not a natural athlete.
              </h2>
            </div>

            <div className="space-y-6 text-copy-2 leading-relaxed">
              {stages.map((stage) => (
                <div key={stage.id}>
                  <p className="text-[10px] tracking-widest uppercase text-copy-3 font-medium mb-1.5">
                    {stage.label}
                  </p>
                  <p>{stage.text}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-edge pt-6 space-y-2">
              <dl className="space-y-2">
                <div className="flex gap-4">
                  <dt className="text-xs tracking-widest uppercase text-copy-3 w-28 shrink-0">Starting weight</dt>
                  <dd className="text-sm text-copy-2">138 kg</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-xs tracking-widest uppercase text-copy-3 w-28 shrink-0">Now</dt>
                  <dd className="text-sm text-copy-2">~108 kg</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-xs tracking-widest uppercase text-copy-3 w-28 shrink-0">Based in</dt>
                  <dd className="text-sm text-copy-2">Zürich, Switzerland</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-xs tracking-widest uppercase text-copy-3 w-28 shrink-0">Focus</dt>
                  <dd className="text-sm text-copy-2">
                    Training for the Jungfrau Marathon, slowly rebuilding after an injury toward ultra distances
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-xs tracking-widest uppercase text-copy-3 w-28 shrink-0">Training since</dt>
                  <dd className="text-sm text-copy-2">July 2025</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
