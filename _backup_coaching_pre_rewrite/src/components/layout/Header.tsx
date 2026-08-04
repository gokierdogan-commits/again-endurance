'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/products', label: 'Gear' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/#about', label: 'About' },
  { href: '/#faq', label: 'FAQ' },
]

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change — intentional setState inside effect (external state sync)
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Close menu on Escape
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setMenuOpen(false)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function isActive(href: string) {
    if (href.includes('#')) return false
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
          scrolled
            ? 'bg-bg/95 backdrop-blur-sm border-b border-edge'
            : 'bg-transparent'
        )}
      >
        <div className="site-container">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <Link
              href="/"
              className="font-bold text-xl text-copy tracking-tight hover:text-accent transition-colors duration-150"
              aria-label="Again. Home"
            >
              Again<span className="brand-dot">.</span>
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm transition-colors duration-150',
                    isActive(link.href)
                      ? 'text-copy font-medium'
                      : 'text-copy-2 hover:text-copy'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA + mobile hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/coaching"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-bg bg-accent hover:bg-accent-2 transition-colors duration-150"
              >
                Apply for coaching
              </Link>

              <button
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 text-copy-2 hover:text-copy transition-colors"
              >
                {menuOpen
                  ? <X size={20} aria-hidden="true" />
                  : <Menu size={20} aria-hidden="true" />
                }
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-opacity duration-200',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-bg/90 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        {/* Panel */}
        <nav
          aria-label="Mobile navigation"
          className={cn(
            'absolute top-16 left-0 right-0 bg-surface border-b border-edge transition-transform duration-200',
            menuOpen ? 'translate-y-0' : '-translate-y-2'
          )}
        >
          <ul className="site-container py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'block py-3 text-base transition-colors duration-150',
                    isActive(link.href)
                      ? 'text-copy font-medium'
                      : 'text-copy-2 hover:text-copy'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-edge mt-2">
              <Link
                href="/coaching"
                className="block py-3 text-base font-medium text-accent"
              >
                Apply for coaching →
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
