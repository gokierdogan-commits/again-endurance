import Link from 'next/link'
import { siteConfig } from '@/data/site'
import { SocialLinks } from '@/components/ui/SocialLinks'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-edge" aria-label="Site footer">
      <div className="site-container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <Link
              href="/"
              className="inline-block text-2xl font-bold text-copy tracking-tight hover:text-accent transition-colors"
              aria-label="Again. Home"
            >
              Again<span className="brand-dot">.</span>
            </Link>
            <p className="text-xs text-copy-3 leading-relaxed max-w-[220px]">
              {siteConfig.tagline} Zürich, Switzerland.
            </p>
            <SocialLinks layout="row" />
          </div>

          {/* Explore */}
          <nav aria-label="Explore" className="space-y-4">
            <p className="text-[10px] tracking-widest uppercase text-copy-3 font-medium">
              Explore
            </p>
            <ul className="space-y-2.5">
              {[
                { href: '/products', label: 'Shop Gear' },
                { href: '/coaching', label: 'Work With Me' },
                { href: '/#about', label: 'About' },
                { href: '/#faq', label: 'FAQ' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-copy-2 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Work With Me */}
          <nav aria-label="Work With Me" className="space-y-4">
            <p className="text-[10px] tracking-widest uppercase text-copy-3 font-medium">
              Work With Me
            </p>
            <ul className="space-y-2.5">
              {[
                { href: '/coaching#apply', label: 'Apply' },
                { href: '/coaching#how-it-works', label: 'What to expect' },
                { href: '/#partnerships', label: 'Partnerships' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-copy-2 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal" className="space-y-4">
            <p className="text-[10px] tracking-widest uppercase text-copy-3 font-medium">
              Legal
            </p>
            <ul className="space-y-2.5">
              {[
                { href: '/privacy', label: 'Privacy policy' },
                { href: '/legal', label: 'Legal notice' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-copy-2 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-edge flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-copy-3">
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-copy-3 max-w-md text-left sm:text-right leading-relaxed">
            Some links are affiliate links. I may earn a commission at no extra cost to you.
            I only recommend products I genuinely use.
          </p>
        </div>
      </div>
    </footer>
  )
}
