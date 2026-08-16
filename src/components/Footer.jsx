'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Youtube, Github, Twitter, Mail, Shield, ArrowUpRight, Lock, Terminal, Cpu } from 'lucide-react'
import StarBorder from '@/components/ui/StarBorder'

const CHANNELS = [
  { icon: Youtube, label: 'YouTube [60K+]', href: 'https://youtube.com/@RexerLK', handle: '@RexerLK' },
  { icon: Twitter, label: 'Twitter / X', href: 'https://twitter.com/RexerLK', handle: '@RexerLK' },
  { icon: Github, label: 'GitHub Repository', href: 'https://github.com/adithyaabhiman2006/new_web_rexer', handle: 'adithyaabhiman2006' },
  { icon: Mail, label: 'Encrypted Dispatch', href: 'mailto:rexerlk@gmail.com', handle: 'rexerlk@gmail.com' },
]

export default function Footer() {
  return (
    <footer id="site-footer" style={{ background: '#02040A', borderTop: '1px solid var(--border-medium)', position: 'relative', overflow: 'hidden' }}>
      {/* Aurora strip at top of footer */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '180px',
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 240, 255, 0.08) 0%, rgba(147, 51, 234, 0.05) 40%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ padding: '5rem 1.5rem 3rem', position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '3.5rem',
          marginBottom: '4rem',
        }}>
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
              <div className="brand-shield-logo">
                <Shield size={20} />
              </div>
              <div className="brand-text">
                REX<span>ER</span> <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>// STUDIO</span>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '320px' }}>
              Institutional-grade Flutter architecture, offensive penetration testing (OWASP),
              and high-density fintech UI/UX design. Building fortified digital empires since day one.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--emerald-neon)' }}>
              <span className="telemetry-dot" />
              <span>DEFENSE MATRIX ACTIVE</span>
            </div>
          </div>

          {/* Core Navigation */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--cyan-bright)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.2rem' }}>
              // ARCHITECTURES
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { label: 'System Overview', href: '/' },
                { label: 'Case Studies & CVE Audits', href: '/portfolio' },
                { label: 'Investment & Pricing Model', href: '/pricing' },
                { label: 'Threat Intelligence & Blog', href: '/blog' },
                { label: 'Engineering Doctrine & Team', href: '/about' },
                { label: 'Commence Project', href: '/contact' },
              ].map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="footer-nav-link"
                  style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease, transform 0.2s ease', display: 'inline-block' }}
                  onMouseOver={(e) => { e.currentTarget.style.color = 'var(--cyan-bright)'; e.currentTarget.style.transform = 'translateX(4px)' }}
                  onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateX(0)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Channels with StarBorder */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--amber-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.2rem' }}>
              // VERIFIED CHANNELS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {CHANNELS.map((ch, i) => {
                const Icon = ch.icon
                const card = (
                  <a
                    key={ch.label}
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.6rem 0.9rem',
                      color: 'var(--text-pure)',
                      textDecoration: 'none',
                      fontSize: '0.82rem',
                      transition: 'transform 0.2s ease',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <Icon size={16} style={{ color: 'var(--cyan-bright)' }} />
                      <span>{ch.label}</span>
                    </div>
                    <ArrowUpRight size={14} style={{ color: 'var(--text-muted)' }} />
                  </a>
                )

                // First channel (YouTube) gets StarBorder treatment
                if (i === 0) {
                  return (
                    <StarBorder key={ch.label} color="#FFB800" speed="6s" radius="var(--radius-sm)">
                      {card}
                    </StarBorder>
                  )
                }

                return (
                  <div
                    key={ch.label}
                    style={{
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    {card}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar with scanline */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--text-muted)',
          position: 'relative',
        }}>
          <div
            className="footer-scanline"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, var(--cyan-bright), transparent)',
              animation: 'scanline-sweep 4s ease-in-out infinite',
              opacity: 0.4,
            }}
          />
          <div>
            © {new Date().getFullYear()} REXER STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span>AUTONOMOUS ENGINE: CLAUDE 4.6</span>
            <span>REVIEW: CODERABBIT AI</span>
            <span>HOSTING: GITHUB PAGES</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
