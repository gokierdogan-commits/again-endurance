import type { Category, Product } from '@/types'

export const categories: Category[] = [
  { id: 'all', label: 'All' },
  { id: 'running-shoes', label: 'Running Shoes' },
  { id: 'running-technology', label: 'Running Technology' },
  { id: 'recovery', label: 'Recovery' },
  { id: 'strength-training', label: 'Strength Training' },
  { id: 'nutrition-hydration', label: 'Nutrition & Hydration' },
  { id: 'clothing', label: 'Clothing' },
  { id: 'cycling', label: 'Cycling' },
  { id: 'everyday', label: 'Everyday Equipment' },
]

/**
 * Product list — all entries are placeholder templates.
 *
 * To add a real product:
 * 1. Replace the [TODO] values with actual product details
 * 2. Add the product image to /public/images/products/
 * 3. Replace affiliateUrl with your affiliate link
 * 4. Set featured: true for products you want on the homepage
 *
 * Affiliate URL format:
 * - Use your tracking link from the affiliate program
 * - Do NOT use example.com — replace before publishing
 */
export const products: Product[] = [

  // ─── Running Shoes ────────────────────────────────────
  {
    id: 'shoe-asics-nimbus-28',
    name: 'ASICS Nimbus 28 (100KM Tested)',
    category: 'running-shoes',
    image: '/images/products/asics-nimbus-28.jpg',
    shortDescription: 'The exact shoes I use for marathon & ultra training',
    whyIUseIt: 'At 204 cm, every stride loads more than most shoe reviews account for. This is the pair still holding up through the miles that led to the 100 km.',
    affiliateUrl: 'https://amzn.to/4vFuiKp',
    discountCode: undefined,
    discountDescription: undefined,
    featured: true,
    available: true,
  },
  {
    id: 'shoe-adidas-boston',
    name: 'Adidas Boston',
    category: 'running-shoes',
    image: '/images/products/adidas-boston-black.jpeg',
    shortDescription: 'The shoe I use for tempo sessions & race day',
    whyIUseIt: 'Not a race day supershoe. Just quicker than my daily trainer for tempo sessions, without needing a taper to notice it.',
    affiliateUrl: 'https://amzn.to/4gSiyjP',
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: true,
  },
  {
    id: 'shoe-asics-metaspeed-edge',
    name: 'ASICS METASPEED Edge',
    category: 'running-shoes',
    image: '/images/products/asics_metaspeed-edge.jpeg',
    shortDescription: 'My marathon racing shoe.',
    whyIUseIt: 'Good for tall people and strides. At 204 cm my stride is longer than most reviews are written for, and the plate geometry in the Edge actually works with that instead of against it.',
    affiliateUrl: 'https://amzn.to/452waC3',
    discountCode: undefined,
    discountDescription: undefined,
    featured: true,
    available: true,
  },

  // ─── Running Technology ───────────────────────────────
  {
    id: 'watch-garmin-fenix-8',
    name: 'Garmin Fenix 8',
    category: 'running-technology',
    image: '/images/products/garmin-fenix-8-padded-v3.png',
    shortDescription: 'The watch I recommend for serious marathon & ultra training. Built for performance.',
    whyIUseIt: 'Battery life that survives an ultra without a mid run charge, and data worth looking at afterward instead of ignoring.',
    affiliateUrl: 'https://amzn.to/3Tbi3Ys',
    discountCode: undefined,
    discountDescription: undefined,
    featured: true,
    available: true,
  },
  {
    id: 'hrm-chest',
    name: '[TODO: Chest strap HRM — e.g. Garmin HRM-Pro Plus, Polar H10, Wahoo TICKR X]',
    category: 'running-technology',
    image: '/images/products/hrm-chest.jpg',
    shortDescription: '[TODO: When you use a chest strap vs wrist HR — threshold sessions, long runs, intervals]',
    whyIUseIt: '[TODO: Accuracy advantages you have actually noticed, specific workouts where it matters, comfort over long distances]',
    affiliateUrl: 'https://example.com', // [TODO: Replace with your affiliate tracking URL]
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: false,
  },

  // ─── Recovery ─────────────────────────────────────────
  {
    id: 'massage-gun',
    name: 'Bob and Brad Q2 Mini Massage Gun',
    category: 'recovery',
    image: '/images/products/massage-gun-bob-brad.jpg',
    shortDescription: 'What I use for recovery after long runs and hard sessions.',
    whyIUseIt: "Deep tissue percussion I reach for on rest days and post-long-run. 5 speed levels and 5 attachment heads cover everything from calves to shoulders, it's quiet enough to use in the evening, and small enough to pack for races.",
    affiliateUrl: 'https://amzn.to/4pU7ZPE',
    discountCode: undefined,
    discountDescription: undefined,
    featured: true,
    available: true,
  },
  {
    id: 'compression-socks',
    name: '[TODO: Compression socks or sleeves — brand, model, compression level]',
    category: 'recovery',
    image: '/images/products/compression.jpg',
    shortDescription: '[TODO: When you wear compression — post-race, long travel, overnight recovery]',
    whyIUseIt: '[TODO: What you have noticed at your size and after ultra-distance events, material quality, durability]',
    affiliateUrl: 'https://example.com', // [TODO: Replace with your affiliate tracking URL]
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: false,
  },

  // ─── Strength Training ────────────────────────────────
  {
    id: 'strength-bands',
    name: '[TODO: Resistance bands or strength equipment — brand, resistance levels]',
    category: 'strength-training',
    image: '/images/products/strength-bands.jpg',
    shortDescription: '[TODO: How this supports your hybrid training — specific exercises in your routine]',
    whyIUseIt: '[TODO: Why this equipment, what exercises you use it for alongside running, portability value]',
    affiliateUrl: 'https://example.com', // [TODO: Replace with your affiliate tracking URL]
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: false,
  },

  // ─── Nutrition & Hydration ────────────────────────────
  {
    id: 'gel-precision-fuel-pf30',
    name: 'Precision Fuel PF30 Energy Gels',
    category: 'nutrition-hydration',
    image: '/images/products/precision-fuel-pf30-padded-v2.png',
    shortDescription: 'What I use for energy during long runs & marathon training. Easy on the stomach.',
    whyIUseIt: 'The one gel that has never once upset my stomach on a long run. After enough failed alternatives, that is the only thing that matters.',
    affiliateUrl: 'https://amzn.to/3Rre61e',
    discountCode: undefined,
    discountDescription: undefined,
    featured: true,
    available: true,
  },
  {
    id: 'vest-salomon-adv-hydra-4',
    name: 'Salomon ADV Hydra Vest 4',
    category: 'nutrition-hydration',
    image: '/images/products/salomon-adv-hydra-vest-4-padded-v5.png',
    shortDescription: 'The hydration vest I use for long trail runs & ultras',
    whyIUseIt: 'Enough capacity for a full day on trail without bouncing at pace. Nothing more complicated than that.',
    affiliateUrl: 'https://amzn.to/4gXdWsV',
    discountCode: undefined,
    discountDescription: undefined,
    featured: true,
    available: true,
  },
  {
    id: 'creatine-esn',
    name: 'ESN Ultrapure Creatine Monohydrate',
    category: 'nutrition-hydration',
    image: '/images/products/esn-creatine.jpg',
    shortDescription: 'Daily supplement I take for muscle strength and mental sharpness during heavy training blocks.',
    whyIUseIt: "3g of pure creatine monohydrate a day, no fillers. It's micro-fine so it dissolves clean in water without clumping, and I've noticed it helps not just with strength but with staying mentally sharp during high-volume weeks.",
    affiliateUrl: 'https://amzn.to/3TCg6V3',
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: true,
  },
  {
    id: 'vitamin-d3-k2',
    name: 'Vitamin D3 + K2 (Vegan)',
    category: 'nutrition-hydration',
    image: '/images/products/vitamin-d3-k2.jpg',
    shortDescription: "A supplement I take every day during the winter months.",
    whyIUseIt: "Less sunlight means I'm more mindful of my vitamin D intake. I chose a vegan D3 combined with K2 in a simple once-daily tablet that fits easily into my routine.",
    affiliateUrl: 'https://amzn.to/4btuS6L',
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: true,
  },

  // ─── Clothing ─────────────────────────────────────────
  {
    id: 'running-shorts',
    name: 'ASICS Road 2-N-1 5in Shorts',
    category: 'clothing',
    image: '/images/products/shorts.jpg',
    shortDescription: 'What I wear for daily training runs.',
    whyIUseIt: "The 2-in-1 design means I don't need separate compression shorts underneath, and the side pockets hold my phone or gels without bouncing.",
    affiliateUrl: 'https://amzn.to/4yV0goy',
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: true,
  },
  {
    id: 'running-jacket',
    name: '[TODO: Running jacket — brand, model, weight category]',
    category: 'clothing',
    image: '/images/products/jacket.jpg',
    shortDescription: '[TODO: Weather conditions and distances you use this for]',
    whyIUseIt: '[TODO: Packability, breathability at effort, waterproofing level, how it performs at your pace and distance]',
    affiliateUrl: 'https://example.com', // [TODO: Replace with your affiliate tracking URL]
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: false,
  },
  {
    id: 'tank-puma-velocity',
    name: 'PUMA Velocity Running Tank Top',
    category: 'clothing',
    image: '/images/products/puma-velocity-tank.jpeg',
    shortDescription: 'What I wear for hot weather training runs.',
    whyIUseIt: "PUMA's dryCELL fabric keeps sweat off during summer sessions, and the looser tank cut breathes better than a fitted shirt once it gets humid.",
    affiliateUrl: 'https://amzn.to/4z2D7kk',
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: true,
  },

  // ─── Cycling ──────────────────────────────────────────
  {
    id: 'cycling-trainer',
    name: '[TODO: Cycling equipment — e.g. smart trainer, bike computer, saddle]',
    category: 'cycling',
    image: '/images/products/cycling.jpg',
    shortDescription: '[TODO: How cycling fits into your training — cross-training, active recovery, aerobic base]',
    whyIUseIt: '[TODO: Specific use case — indoor training in winter, low-impact aerobic work, recovery rides]',
    affiliateUrl: 'https://example.com', // [TODO: Replace with your affiliate tracking URL]
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: false,
  },

  // ─── Everyday Equipment ───────────────────────────────
  {
    id: 'everyday-bottle',
    name: '[TODO: Water bottle or hydration — brand, capacity, material]',
    category: 'everyday',
    image: '/images/products/bottle.jpg',
    shortDescription: '[TODO: Daily hydration context — desk, commute, pre-run]',
    whyIUseIt: '[TODO: Why this bottle specifically — insulation, lid mechanism, durability, size for your daily intake target]',
    affiliateUrl: 'https://example.com', // [TODO: Replace with your affiliate tracking URL]
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: false,
  },
]

/** Helper: get products by category */
export function getProductsByCategory(categoryId: string): Product[] {
  if (categoryId === 'all') return products
  return products.filter((p) => p.category === categoryId)
}

/** Helper: get featured products */
export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured && p.available)
}
