'use client'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Play, Sparkles, Terminal as TermIcon, ExternalLink, Lock, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import CyberTerminal from '@/components/ui/CyberTerminal'
import SplitFlapText from '@/components/ui/SplitFlapText'

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

            {/* Live Mechanical Split-Flap Status Board */}
            <div
              style={{
                margin: '1.25rem 0 1.5rem 0',
                padding: '0.75rem 1.15rem',
                background: 'rgba(4, 10, 22, 0.85)',
                border: '1px solid rgba(0, 240, 255, 0.22)',
                borderRadius: '12px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(0, 240, 255, 0.05)',
                display: 'inline-flex',
                flexDirection: 'column',
                gap: '0.45rem',
                maxWidth: '100%',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--cyan-bright)',
                  letterSpacing: '0.06em',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span className="telemetry-dot" />
                  MECHANICAL FLAP DEPARTURE STATUS
                </span>
                <span
                  style={{
                    color: 'var(--emerald-neon)',
                    background: 'rgba(0, 255, 136, 0.12)',
                    padding: '0.1rem 0.4rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(0, 255, 136, 0.25)',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                  }}
                >
                  SOLARI MATRIX // ACTIVE
                </span>
              </div>

              <div style={{ overflowX: 'auto', paddingBottom: '2px' }}>
                <SplitFlapText
                  words={[
                    'LAUNCH READY',
                    '0 CVE LOCKED',
                    'FLUTTER 3.24',
                    'SIGNAL LIVE ',
                    'AES-256 GCM ',
                    '120 FPS HFT ',
                    'ENCLAVE INIT'
                  ]}
                  fontSize={24}
                  tileRadius={6}
                  gap={4}
                  flipsPerChar={6}
                  cycleDelay={2400}
                  flipDuration={0.09}
                  stagger={0.04}
                  tileColor="#0a1428"
                  textColor="#00f0ff"
                  padTo={12}
                />
              </div>
            </div>

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
