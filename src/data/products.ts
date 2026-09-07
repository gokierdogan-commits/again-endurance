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
 * 4. Set featured: true for products you'd count among "My Essentials"
 * 5. Set usedFor100km: true only if it genuinely was part of the 100 km setup
 * 6. Set priceEUR to the real current price to have it show under "Essentials Under CHF 50"
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
    shortDescription: 'My softest shoe, for long runs and recovery days.',
    whyIUseIt: "At 204 cm, every stride loads more than most shoe reviews account for. The extra cushioning takes the edge off on long runs and the days after, not built for pace.",
    badge: '100 km Tested',
    role: 'My Long-Run Shoe',
    usedFor100km: true,
    useCase: 'Long runs',
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
    whyIUseIt: 'Quicker than my daily trainer for tempo sessions, without needing a taper to notice it.',
    badge: 'Tempo & Race Day',
    role: 'My Tempo Shoe',
    affiliateUrl: 'https://amzn.to/4gSiyjP',
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: true,
  },
  {
    id: 'shoe-asics-metaspeed-edge',
    name: 'ASICS Metaspeed Sky 3',
    category: 'running-shoes',
    image: '/images/products/asics_metaspeed-edge.jpeg',
    shortDescription: 'My marathon racing shoe.',
    whyIUseIt: 'Good for tall people and strides. At 204 cm my stride is longer than most reviews are written for, and the plate geometry in the Sky 3 actually works with that instead of against it.',
    badge: 'Race Day',
    role: 'My Race Shoe',
    useCase: 'Race day',
    affiliateUrl: 'https://amzn.to/45uUugc',
    discountCode: undefined,
    discountDescription: undefined,
    featured: true,
    available: true,
  },
  {
    id: 'shoe-asics-superblast-3',
    name: 'ASICS Superblast 3',
    category: 'running-shoes',
    image: '/images/products/asics-superblast-3.jpg',
    shortDescription: 'What I use for long runs at a faster pace.',
    whyIUseIt: "Enough cushioning to hold up over distance, but responsive enough that I'm not fighting the shoe when I pick up the pace.",
    badge: 'Long Runs',
    role: 'My Fast Long-Run Shoe',
    affiliateUrl: 'https://amzn.to/4qh7KON',
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: true,
  },
  {
    id: 'shoe-asics-novablast-5',
    name: 'ASICS Novablast 5',
    category: 'running-shoes',
    image: '/images/products/asics-novablast-5.jpg',
    shortDescription: 'My speed and tempo session shoe.',
    whyIUseIt: 'Roomy enough for bigger feet without sizing up, and bouncy enough to actually want to run fast in.',
    badge: 'Tempo & Speed',
    role: 'My Speed Shoe',
    affiliateUrl: 'https://amzn.to/4g0gFAR',
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: true,
  },
  {
    id: 'shoe-on-cloudmonster-2',
    name: 'On Cloudmonster 2',
    category: 'running-shoes',
    image: '/images/products/on-cloudmonster-2.jpg',
    shortDescription: 'The shoe I wore for my 66 km relay around the lake.',
    whyIUseIt: 'Held up for the full 66 km without breaking down, which is the only test that matters for a shoe like this.',
    badge: '66 km Tested',
    role: 'My Ultra Shoe',
    affiliateUrl: 'https://amzn.to/4g9Eu88',
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: true,
  },
  {
    id: 'shoe-on-cloudsurfer-max',
    name: 'On Cloudsurfer Max',
    category: 'running-shoes',
    image: '/images/products/on-cloudsurfer-max.jpg',
    shortDescription: 'What I use for half marathon distance.',
    whyIUseIt: "My go-to for 21 km efforts. Enough cushioning to hold up, without feeling heavy by the second half.",
    badge: '21 km Tested',
    role: 'My Half-Marathon Shoe',
    affiliateUrl: 'https://amzn.to/3TZfnh2',
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: true,
  },
  {
    id: 'shoe-new-balance-1080v14',
    name: 'New Balance Fresh Foam X 1080 V14',
    category: 'running-shoes',
    image: '/images/products/new-balance-fresh-foam-x-1080v14.jpg',
    shortDescription: 'My go-to for easy days and long runs.',
    whyIUseIt: "The Fresh Foam X midsole is the most cushioned version New Balance makes. When comfort matters more than pace, this is the pair I reach for.",
    badge: 'Max Cushion',
    role: 'My Recovery Shoe',
    affiliateUrl: 'https://amzn.to/4qRmQuP',
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: true,
  },
  {
    id: 'shoe-nike-pegasus-41',
    name: 'Nike Pegasus 41',
    category: 'running-shoes',
    image: '/images/products/nike-pegasus-41.jpg',
    shortDescription: 'One shoe for most of the week.',
    whyIUseIt: 'The ReactX foam and Air Zoom units make it responsive enough for a faster effort but forgiving enough for daily miles. Not a specialist, just reliable.',
    badge: 'All-Rounder',
    role: 'My Everyday Trainer',
    affiliateUrl: 'https://amzn.to/4gEkc8p',
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: true,
  },
  {
    id: 'shoe-hoka-speedgoat-7',
    name: 'HOKA Speedgoat 7',
    category: 'running-shoes',
    image: '/images/products/hoka-speedgoat-7-padded.png',
    shortDescription: 'What I switch into once the road ends.',
    whyIUseIt: 'The Vibram outsole holds on loose or wet trail in a way none of my road shoes do, and there’s enough cushioning left for the climbs back out.',
    badge: 'Trail Runs',
    role: 'My Trail Shoe',
    useCase: 'Trail runs',
    affiliateUrl: 'https://amzn.to/3SN3Ocs',
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: true,
  },

  // ─── Running Technology ───────────────────────────────
  {
    id: 'watch-garmin-fenix-8',
    name: 'Garmin Fenix 8',
    category: 'running-technology',
    image: '/images/products/garmin-fenix-8-padded-v3.png',
    shortDescription: 'The watch I recommend for serious marathon & ultra training. Built for performance.',
    whyIUseIt: 'Battery life that survives an ultra without a mid-run charge, and data worth looking at afterward.',
    badge: 'Ultra Tested',
    usedFor100km: true,
    useCase: 'Ultra training',
    affiliateUrl: 'https://amzn.to/3Tbi3Ys',
    discountCode: undefined,
    discountDescription: undefined,
    featured: true,
    available: true,
  },
  {
    id: 'watch-garmin-forerunner-265',
    name: 'Garmin Forerunner 265',
    category: 'running-technology',
    image: '/images/products/garmin-forerunner-265-padded.png',
    shortDescription: 'A lighter alternative to the Fenix for regular training runs, without the bulk or the price.',
    whyIUseIt: 'Has the training metrics that actually matter — pace, HR, recovery time — without the extra weight of the Fenix. What I’d point people to if they don’t need multi-day battery for ultras.',
    badge: 'Training Watch',
    role: 'My Lighter Training Watch',
    useCase: 'Daily training',
    affiliateUrl: 'https://amzn.to/4x5dTzi',
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: true,
  },
  {
    id: 'watch-garmin-forerunner-165-music',
    name: 'Garmin Forerunner 165 Music',
    category: 'running-technology',
    image: '/images/products/garmin-forerunner-165-music-padded.png',
    shortDescription: 'The watch I’d point a beginner runner to — GPS and music without paying for features you won’t use yet.',
    whyIUseIt: 'Not what I train with day to day, but solid value if you’re starting out and don’t need multi-sport tracking or ultra-distance battery life.',
    badge: 'Great Starter Watch',
    useCase: 'Getting started',
    affiliateUrl: 'https://amzn.to/4ygguaF',
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: true,
  },
  {
    id: 'watch-apple-se-3',
    name: 'Apple Watch SE 3',
    category: 'running-technology',
    image: '/images/products/apple-watch-se-3-padded.png',
    shortDescription: 'The watch I wear on days I’m not training — lighter than the Fenix, and doubles as a normal smartwatch.',
    whyIUseIt: 'The Fenix stays on for long runs and race day; this is what’s on my wrist the rest of the time for notifications and sleep tracking.',
    badge: 'Everyday Wear',
    role: 'My Everyday Watch',
    useCase: 'Everyday wear',
    affiliateUrl: 'https://amzn.to/4yoE9Gc',
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
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
    whyIUseIt: "I reach for this on rest days and after long runs. Quiet enough for the evening, small enough to pack for races.",
    badge: 'Recovery Essential',
    useCase: 'Recovery',
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
    badge: 'Favourite',
    useCase: 'Fueling',
    // priceEUR: set this once you have the current price — this is genuinely a
    // low-cost item and a strong "Under CHF 50" candidate.
    affiliateUrl: 'https://amzn.to/3Rre61e',
    discountCode: undefined,
    discountDescription: undefined,
    featured: true,
    available: true,
  },
  {
    id: 'gel-high5-energy-berry',
    name: 'HIGH5 Energy Gel (Berry)',
    category: 'nutrition-hydration',
    image: '/images/products/high5-energy-gel-berry-padded.png',
    shortDescription: 'The budget option when I don’t want to pay premium gel prices for easy training days.',
    whyIUseIt: 'Not what I reach for on race day, but a solid, cheaper alternative for regular training runs when I’m going through gels quickly.',
    badge: 'Budget Pick',
    useCase: 'Training fuel',
    affiliateUrl: 'https://amzn.to/4x3AWur',
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: true,
  },
  {
    id: 'vest-salomon-adv-hydra-4',
    name: 'Salomon ADV Hydra Vest 4',
    category: 'nutrition-hydration',
    image: '/images/products/salomon-adv-hydra-vest-4-padded-v5.png',
    shortDescription: 'The hydration vest I use for long trail runs & ultras',
    whyIUseIt: 'Enough capacity for a full day on trail without bouncing at pace.',
    badge: 'Still Using',
    usedFor100km: true,
    useCase: 'Long trail days',
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
    badge: 'Daily Staple',
    // priceEUR: set this once you have the current price — this is genuinely a
    // low-cost item and a strong "Under CHF 50" candidate.
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
    badge: 'Winter Staple',
    // priceEUR: set this once you have the current price — this is genuinely a
    // low-cost item and a strong "Under CHF 50" candidate.
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
    badge: 'Daily Trainer',
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
    badge: 'Summer Staple',
    affiliateUrl: 'https://amzn.to/4z2D7kk',
    discountCode: undefined,
    discountDescription: undefined,
    featured: false,
    available: true,
  },
  {
    id: 'shorts-adidas-adi365',
    name: 'adidas Adi365 Running Shorts',
    category: 'clothing',
    image: '/images/products/adidas-adi365-shorts.jpg',
    shortDescription: 'What I wear for easy runs and everyday training.',
    whyIUseIt: "Built-in liner means one less layer to think about, and the 5-inch length doesn't ride up once the pace picks up.",
    affiliateUrl: 'https://amzn.to/4wDji0p',
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

/** True when a product is real (has an affiliate link and isn't a draft). */
function isPublished(p: Product): boolean {
  return p.available && p.affiliateUrl.startsWith('http') && p.affiliateUrl !== 'https://example.com'
}

/** Helper: get products by category */
export function getProductsByCategory(categoryId: string): Product[] {
  if (categoryId === 'all') return products
  return products.filter((p) => p.category === categoryId)
}

/** Helper: get featured products (used for the homepage teaser) */
export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured && p.available)
}

/** "The Gear Behind My 100 km" — only products with explicit evidence in their copy. */
export function get100kmGear(): Product[] {
  return products.filter((p) => p.usedFor100km && isPublished(p))
}

/** "Essentials Under CHF 50" — only products with a real, confirmed price set. */
export function getUnder50(): Product[] {
  return products.filter((p) => p.priceEUR !== undefined && p.priceEUR < 50 && isPublished(p))
}

/**
 * All published running shoes, ordered by use case for "My Shoe Rotation" —
 * race day and long-run shoes first, the 100 km shoe last since it already
 * has a full card above and only needs a compact reference here.
 */
const SHOE_ROTATION_ORDER = [
  'shoe-asics-metaspeed-edge',
  'shoe-asics-superblast-3',
  'shoe-asics-novablast-5',
  'shoe-adidas-boston',
  'shoe-on-cloudmonster-2',
  'shoe-on-cloudsurfer-max',
  'shoe-new-balance-1080v14',
  'shoe-nike-pegasus-41',
  'shoe-hoka-speedgoat-7',
  'shoe-asics-nimbus-28',
]

export function getShoes(): Product[] {
  return products
    .filter((p) => p.category === 'running-shoes' && isPublished(p))
    .sort((a, b) => SHOE_ROTATION_ORDER.indexOf(a.id) - SHOE_ROTATION_ORDER.indexOf(b.id))
}

/** Published, non-shoe products grouped by category, for the categorised sections at the bottom. */
export function getOtherCategoryGroups(): { category: Category; items: Product[] }[] {
  return categories
    .filter((c) => c.id !== 'all' && c.id !== 'running-shoes')
    .map((category) => ({
      category,
      items: products.filter((p) => p.category === category.id && isPublished(p)),
    }))
    .filter((group) => group.items.length > 0)
}
