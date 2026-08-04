import type { Stat } from '@/types'

/**
 * Proof statistics shown in the Stats section.
 * Edit values, labels and sublabels here.
 */
export const stats: Stat[] = [
  {
    id: 'height',
    value: '204 cm',
    label: 'Height',
    sublabel: 'Taller than most runners',
  },
  {
    id: 'start-weight',
    value: '138 kg',
    label: 'Starting weight',
    sublabel: 'Where the health journey began',
  },
  {
    id: 'marathon-pb',
    value: '3:23',
    label: 'Marathon PB',
    sublabel: 'Years in the making',
  },
  {
    id: 'ultra',
    value: '100 km',
    label: 'Ultramarathon',
    sublabel: 'The furthest, so far',
  },
  {
    id: 'documented-km',
    value: '3,500+',
    label: 'Kilometres logged',
    sublabel: 'And counting',
  },
]
