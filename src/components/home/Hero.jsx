'use client'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Play, Sparkles, Terminal as TermIcon, ExternalLink, Lock, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import CyberTerminal from '@/components/ui/CyberTerminal'

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Vision & Action */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* System Status Eyebrow */}
            <div className="section-eyebrow">
              <span className="telemetry-dot" />
              <span>INSTITUTIONAL CYBERSECURITY & FINTECH OS</span>
            </div>

            {/* Kinetic Display Headline */}
            <h1 className="hero-headline">
              Engineering <span className="text-gradient-cyan">Fortified</span> Digital Empires.
            </h1>

            {/* Subtitle */}
            <p className="hero-description">
              Rexer Studio crafts institutional-grade <strong>Flutter & Web3 applications</strong>,
              executes systematic <strong>penetration testing (OWASP Top 10)</strong>, and designs
              high-density <strong>fintech trading dashboards</strong> engineered for extreme security and speed.
            </p>

            {/* System Spec Badges */}
            <div className="hero-badges-row">
              <span className="hero-badge highlight">
                <ShieldCheck size={13} /> CEH Certified
              </span>
              <span className="hero-badge">
                <Lock size={13} /> AES-256-GCM
              </span>
              <span className="hero-badge">
                <CheckCircle2 size={13} /> CodeRabbit Verified
              </span>
              <span className="hero-badge">
                <Sparkles size={13} /> Claude Powered
              </span>
            </div>

            {/* Action Row */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <Link href="/contact" className="btn btn-primary btn-lg" id="hero-action-primary">
                Commission Project <ArrowRight size={18} />
              </Link>
              <Link href="/portfolio" className="btn btn-outline btn-lg" id="hero-action-secondary">
                <Play size={16} /> Live Showcases
              </Link>
            </div>

            {/* Authority stats ticker */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.2rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--cyan-bright)' }}>
                  60K+
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  YOUTUBE SUBSCRIBERS
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--emerald-neon)' }}>
                  $120M+
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  TRANSACTION VOLUME SECURED
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--amber-gold)' }}>
                  0 CVE
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  UNRESOLVED VULNERABILITIES
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Live Interactive Cyber Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <CyberTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
