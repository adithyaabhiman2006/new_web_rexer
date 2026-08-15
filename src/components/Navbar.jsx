'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Terminal, ArrowUpRight, Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { href: '/', label: 'System' },
  { href: '/portfolio', label: 'Case Studies' },
  { href: '/pricing', label: 'Investment' },
  { href: '/blog', label: 'Threat Intel' },
  { href: '/about', label: 'Doctrine' },
  { href: '/contact', label: 'Commence' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-nav">
        <div className="container navbar-inner">
          {/* Brand Logo */}
          <Link href="/" className="navbar-brand" id="nav-brand">
            <div className="brand-shield-logo">
              <Shield size={20} />
            </div>
            <div className="brand-text">
              REX<span>ER</span> <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 400 }}>// OS</span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="navbar-nav" id="desktop-nav">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${active ? 'active' : ''}`}
                  id={`nav-item-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Right Action */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Link
              href="/contact"
              className="btn btn-primary btn-sm"
              style={{ display: 'none', sm: 'inline-flex' }}
              id="nav-cta-btn"
            >
              Initiate Contact <ArrowUpRight size={14} />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-xs)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
              }}
              aria-label="Toggle menu"
              className="mobile-toggle-btn"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: 'calc(var(--nav-height) + var(--telemetry-height))',
              left: 0,
              right: 0,
              background: '#040812',
              borderBottom: '1px solid var(--border-medium)',
              padding: '2rem 1.5rem',
              zIndex: 499,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                style={{ fontSize: '1.2rem', padding: '0.5rem 0' }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn btn-primary btn-lg"
              style={{ width: '100%', marginTop: '1rem' }}
              onClick={() => setMobileOpen(false)}
            >
              Initiate Contact <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
