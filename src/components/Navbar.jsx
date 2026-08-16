'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, ArrowUpRight, Menu, X } from 'lucide-react'
import StarBorder from '@/components/ui/StarBorder'

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
      <header
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        id="main-nav"
        style={{
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(12px)',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(12px)',
          background: scrolled
            ? 'rgba(11, 13, 18, 0.88)'
            : 'rgba(11, 13, 18, 0.55)',
          borderBottom: scrolled
            ? '1px solid rgba(245, 158, 11, 0.18)'
            : '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="container navbar-inner">
          {/* Animated Brand Logo */}
          <Link href="/" className="navbar-brand" id="nav-brand">
            <motion.div
              className="brand-shield-logo"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Shield size={20} />
            </motion.div>
            <motion.div
              className="brand-text"
              initial={{ x: -15, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              REX<span>ER</span>{' '}
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  fontWeight: 400,
                }}
              >
                // OS
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav Items with gradient underline hover */}
          <nav className="navbar-nav" id="desktop-nav">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link nav-link-premium ${active ? 'active' : ''}`}
                  id={`nav-item-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {active && (
                    <span
                      className="nav-active-dot"
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: 'var(--cyan-bright)',
                        boxShadow: '0 0 8px var(--cyan-bright), 0 0 16px var(--cyan-glow)',
                        animation: 'pulse-glow 2s ease-in-out infinite',
                      }}
                    />
                  )}
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Right Action — StarBorder CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="nav-cta-desktop">
              <StarBorder color="#F59E0B" speed="4s" radius="var(--radius-full)">
                <Link
                  href="/contact"
                  className="btn btn-primary btn-sm"
                  style={{
                    background: 'rgba(245, 158, 11, 0.1)',
                    border: 'none',
                    padding: '0.45rem 1.2rem',
                    color: '#FFFFFF',
                  }}
                  id="nav-cta-btn"
                >
                  Initiate Contact <ArrowUpRight size={14} />
                </Link>
              </StarBorder>
            </div>

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
              background: 'rgba(11, 13, 18, 0.96)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(245, 158, 11, 0.18)',
              padding: '2rem 1.5rem',
              zIndex: 499,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="nav-link"
                  style={{ fontSize: '1.2rem', padding: '0.5rem 0' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <StarBorder color="#F59E0B" speed="4s" radius="var(--radius-md)">
                <Link
                  href="/contact"
                  className="btn btn-primary btn-lg"
                  style={{
                    width: '100%',
                    marginTop: '0.5rem',
                    background: 'rgba(245, 158, 11, 0.1)',
                    border: 'none',
                    color: '#FFFFFF',
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  Initiate Contact <ArrowUpRight size={16} />
                </Link>
              </StarBorder>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
