'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Smartphone, Target, LayoutDashboard, Lock, ShieldCheck, Zap, ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const HIGH_TICKET_SERVICES = [
  {
    id: 'mobile-fintech',
    num: '01 // ARCHITECTURE',
    title: 'Institutional Mobile Development',
    subtitle: 'Hardened Flutter & Firebase Architecture',
    desc: 'End-to-end iOS & Android fintech applications engineered with AES-256-GCM data-at-rest encryption, biometric enclave authentication, and TLS 1.3 certificate pinning.',
    capabilities: [
      'Zero-knowledge local encrypted database (SQLite + SQLCipher)',
      'Biometric Secure Enclave & Android Keystore integration',
      'Real-time automated CI/CD with CodeRabbit AST auditing',
      'High-throughput WebSocket order books & live market feeds',
    ],
    tags: ['Flutter 3.24', 'Dart', 'Firebase', 'AES-256', 'SQLCipher'],
    highlight: '60K+ Developers Trained',
    color: 'var(--cyan-bright)',
    icon: Smartphone,
  },
  {
    id: 'offensive-security',
    num: '02 // OFFENSIVE SEC',
    title: 'Penetration Testing & Red Teaming',
    subtitle: 'Systematic OWASP Top 10 & Zero-Day Probing',
    desc: 'Offensive exploitation and code audits targeting API gateways, mobile binaries, and smart contracts. Delivered with actionable CVSS v3.1 reports and cryptographic fix verification.',
    capabilities: [
      'Dynamic binary instrumentation with Frida & Radare2',
      'API gateway fuzzing, broken object level auth (BOLA) testing',
      'CVE-mapped vulnerability assessments with remediation patches',
      'Zero-trust network architecture & SOC2/ISO audit preparation',
    ],
    tags: ['OWASP Top 10', 'Burp Suite Pro', 'Frida', 'Kali Linux', 'CVSS v3.1'],
    highlight: '100% Remediation Rate',
    color: 'var(--crimson-alert)',
    icon: Target,
  },
  {
    id: 'trading-ux',
    num: '03 // INTERFACE',
    title: 'Fintech & Trading Platform UI/UX',
    subtitle: 'Data-Dense, Dark-Mode-First Trading Dashboards',
    desc: 'Pixel-perfect institutional interfaces built for milliseconds-critical decision making. High information density, bespoke glassmorphic depth, and seamless Figma-to-Flutter pipelines.',
    capabilities: [
      'Sub-millisecond chart rendering with WebGL / Custom Canvas',
      'Multi-panel modular layout with customized dark palettes',
      'Zero-latency keyboard shortcut execution system',
      'Accessible WCAG AAA contrast and high-frequency tactile feedback',
    ],
    tags: ['Figma Master', 'Flutter Web', 'WebGL', 'Trading UX', 'Glassmorphism'],
    highlight: '$120M+ Volume Processed',
    color: 'var(--amber-gold)',
    icon: LayoutDashboard,
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState('mobile-fintech')

  return (
    <section className="section" id="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <ShieldCheck size={12} /> High-Ticket Engineering Disciplines
          </div>
          <h2 className="section-title">
            What We <span className="text-gradient-cyan">Fortify & Build</span>
          </h2>
          <p className="section-subtitle">
            We don&apos;t build generic websites. We engineer high-stakes fintech systems
            and offensive security defenses trusted by enterprises and fintech pioneers.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {HIGH_TICKET_SERVICES.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.id}
                className="cyber-card"
                style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                id={`service-${s.id}`}
              >
                <div className="bracket-corner bracket-tl" />
                <div className="bracket-corner bracket-tr" />
                <div className="bracket-corner bracket-bl" />
                <div className="bracket-corner bracket-br" />

                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-tertiary)',
                    border: `1px solid ${s.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: s.color,
                  }}>
                    <Icon size={24} />
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: s.color,
                    padding: '3px 8px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '4px',
                  }}>
                    {s.highlight}
                  </span>
                </div>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  {s.num}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-pure)' }}>
                  {s.title}
                </h3>
                <div style={{ fontSize: '0.85rem', color: s.color, fontWeight: 600, marginBottom: '1.2rem' }}>
                  {s.subtitle}
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {s.desc}
                </p>

                {/* Capabilities list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                  {s.capabilities.map((cap, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-primary)' }}>
                      <CheckCircle2 size={15} style={{ color: s.color, flexShrink: 0, marginTop: '2px' }} />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                  {s.tags.map(t => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
