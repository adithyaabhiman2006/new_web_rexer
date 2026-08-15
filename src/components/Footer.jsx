'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Youtube, Github, Twitter, Mail, Shield, ArrowUpRight, Lock, Terminal, Cpu } from 'lucide-react'

const CHANNELS = [
  { icon: Youtube, label: 'YouTube [60K+]', href: 'https://youtube.com/@RexerLK', handle: '@RexerLK' },
  { icon: Twitter, label: 'Twitter / X', href: 'https://twitter.com/RexerLK', handle: '@RexerLK' },
  { icon: Github, label: 'GitHub Repository', href: 'https://github.com/adithyaabhiman2006/new_web_rexer', handle: 'adithyaabhiman2006' },
  { icon: Mail, label: 'Encrypted Dispatch', href: 'mailto:rexerlk@gmail.com', handle: 'rexerlk@gmail.com' },
]

export default function Footer() {
  return (
    <footer id="site-footer" style={{ background: '#02040A', borderTop: '1px solid var(--border-medium)', position: 'relative' }}>
      <div className="container" style={{ padding: '5rem 1.5rem 3rem' }}>
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
                  style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'var(--cyan-bright)')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Channels & Dispatch */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--amber-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.2rem' }}>
              // VERIFIED CHANNELS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {CHANNELS.map(ch => {
                const Icon = ch.icon
                return (
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
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-pure)',
                      textDecoration: 'none',
                      fontSize: '0.82rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <Icon size={16} style={{ color: 'var(--cyan-bright)' }} />
                      <span>{ch.label}</span>
                    </div>
                    <ArrowUpRight size={14} style={{ color: 'var(--text-muted)' }} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
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
        }}>
          <div>
            © {new Date().getFullYear()} REXER STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>AUTONOMOUS ENGINE: CLAUDE 4.6</span>
            <span>REVIEW: CODERABBIT AI</span>
            <span>HOSTING: VERCEL EDGE</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
