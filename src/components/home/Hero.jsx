'use client'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Play, Sparkles, Lock, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import CyberTerminal from '@/components/ui/CyberTerminal'
import SplitFlapText from '@/components/ui/SplitFlapText'
import DecryptedText from '@/components/ui/DecryptedText'
import ShinyText from '@/components/ui/ShinyText'
import MagneticButton from '@/components/ui/MagneticButton'
import CountUp from '@/components/ui/CountUp'
import TextPressure from '@/components/ui/TextPressure'

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
            {/* System Status Eyebrow with DecryptedText */}
            <div className="section-eyebrow">
              <span className="telemetry-dot" />
              <DecryptedText
                text="INSTITUTIONAL CYBERSECURITY & FINTECH OS"
                animateOn="view"
                speed={30}
              />
            </div>

            {/* Kinetic Display Headline with TextPressure */}
            <h1 className="hero-headline" style={{ overflow: 'visible' }}>
              <span style={{ display: 'block', marginBottom: '0.15em' }}>Engineering</span>
              <TextPressure
                text="Fortified"
                className="hero-pressure-text"
                fontFamily="var(--font-hero)"
                minWeight={300}
                maxWeight={900}
                radius={250}
                style={{
                  background: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 40%, #8B5CF6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              />{' '}
              <span style={{ display: 'inline' }}>Digital Empires.</span>
            </h1>

            {/* Live Mechanical Split-Flap Status Board */}
            <div
              style={{
                margin: '1.25rem 0 1.5rem 0',
                padding: '0.75rem 1.15rem',
                background: 'rgba(17, 20, 28, 0.9)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                borderRadius: '12px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(245, 158, 11, 0.05)',
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
                  tileColor="#11141C"
                  textColor="#FBBF24"
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

            {/* Magnetic Action Row */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <MagneticButton>
                <Link href="/contact" className="btn btn-primary btn-lg" id="hero-action-primary">
                  Commission Project <ArrowRight size={18} />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/portfolio" className="btn btn-outline btn-lg" id="hero-action-secondary">
                  <Play size={16} /> Live Showcases
                </Link>
              </MagneticButton>
            </div>

            {/* Animated CountUp Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.2rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--cyan-bright)' }}>
                  <CountUp end={60} suffix="K+" duration={2200} />
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  YOUTUBE SUBSCRIBERS
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--emerald-neon)' }}>
                  $<CountUp end={120} suffix="M+" duration={2500} />
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  TRANSACTION VOLUME SECURED
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--amber-gold)' }}>
                  <CountUp end={0} duration={800} /> CVE
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  UNRESOLVED VULNERABILITIES
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Live Interactive Cyber Terminal + 3D Shield */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{ position: 'relative' }}
          >
            {/* Floating 3D CSS Shield behind terminal */}
            <div
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-30px',
                width: '160px',
                height: '160px',
                background: 'conic-gradient(from 180deg, rgba(245, 158, 11, 0.18), rgba(139, 92, 246, 0.15), rgba(251, 191, 36, 0.18), rgba(245, 158, 11, 0.18))',
                borderRadius: '50%',
                filter: 'blur(40px)',
                animation: 'float-shield 6s ease-in-out infinite',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <CyberTerminal />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
