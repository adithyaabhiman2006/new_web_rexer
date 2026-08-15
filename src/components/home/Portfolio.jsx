'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Shield, Palette, ArrowUpRight, Lock, Activity, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const FLAGSHIP_PROJECTS = [
  {
    slug: 'vello-fintech',
    title: 'Vello — Sovereign Personal Finance OS',
    category: 'FLUTTER / AES-256 / FIREBASE',
    badge: 'FLAGSHIP FINTECH',
    desc: 'An institutional-grade personal wealth architecture engineered in Flutter with client-side AES-256-GCM encryption, biometric key derivation, and automated budget AI.',
    specs: [
      { label: 'Security', val: 'AES-256-GCM + Secure Enclave' },
      { label: 'Latency', val: '< 16ms Local Query Time' },
      { label: 'Compliance', val: 'OWASP MASVS L2 Certified' },
    ],
    tags: ['Flutter 3.24', 'Dart', 'Firebase Auth', 'AES-256', 'SQLCipher'],
    color: 'var(--cyan-bright)',
  },
  {
    slug: 'tradex-terminal',
    title: 'TradeX — High-Frequency Trading Terminal',
    category: 'FIGMA / FLUTTER WEB / WEBGL',
    badge: 'DARK-MODE FIRST',
    desc: 'Sub-millisecond real-time market dashboard designed for institutional crypto & equity desks. Features zero-glare dark mode palette, custom order book canvas, and keyboard-first trading.',
    specs: [
      { label: 'Render Rate', val: '120 FPS WebGL Charts' },
      { label: 'Throughput', val: '50K msg/sec WebSockets' },
      { label: 'Volume', val: '$120M+ Processed' },
    ],
    tags: ['Figma Master', 'Flutter Web', 'WebGL', 'D3.js', 'WebSocket'],
    color: 'var(--amber-gold)',
  },
  {
    slug: 'secaudit-platform',
    title: 'SecAudit — Automated CVE Penetration Engine',
    category: 'PYTHON / FASTAPI / KALI LINUX',
    badge: 'ZERO-DAY AUDITING',
    desc: 'Systematic vulnerability exploitation engine that maps API attack surfaces, checks OWASP Top 10 vectors, and generates cryptographic verification receipts.',
    specs: [
      { label: 'CVE Database', val: 'NVD + Exploit-DB Sync' },
      { label: 'Coverage', val: 'API, Mobile Binary, Auth' },
      { label: 'Pass Rate', val: '100% Patch Verified' },
    ],
    tags: ['Python 3.12', 'Burp Suite Pro', 'Frida', 'OWASP Top 10', 'CVSS v3.1'],
    color: 'var(--crimson-alert)',
  },
]

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <Code2 size={12} /> Battle-Tested Case Studies
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient-cyan">Fortified Systems</span>
          </h2>
          <p className="section-subtitle">
            Explore our production-deployed architectures. Built from scratch with zero compromises
            on security, telemetry, or user experience.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.5rem' }}>
          {FLAGSHIP_PROJECTS.map((proj, i) => (
            <motion.div
              key={proj.slug}
              className="cyber-card"
              style={{ padding: '2.2rem', display: 'flex', flexDirection: 'column' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              id={`portfolio-item-${proj.slug}`}
            >
              <div className="bracket-corner bracket-tl" />
              <div className="bracket-corner bracket-tr" />
              <div className="bracket-corner bracket-bl" />
              <div className="bracket-corner bracket-br" />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: proj.color,
                  letterSpacing: '0.08em',
                }}>
                  {proj.category}
                </span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  padding: '2px 7px',
                  borderRadius: '4px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-muted)',
                }}>
                  {proj.badge}
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-pure)', marginBottom: '1rem', lineHeight: 1.25 }}>
                {proj.title}
              </h3>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {proj.desc}
              </p>

              {/* Technical Specifications Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.5rem',
                padding: '1rem',
                background: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '1.5rem',
              }}>
                {proj.specs.map(spec => (
                  <div key={spec.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '2px' }}>
                      {spec.label}
                    </div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: proj.color }}>
                      {spec.val}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '1.2rem', borderTop: '1px solid var(--border-subtle)' }}>
                {proj.tags.map(t => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      padding: '2px 7px',
                      borderRadius: '4px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <Link href="/portfolio" className="btn btn-outline btn-lg" id="portfolio-view-all-btn">
            Explore All Case Studies & Systems <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
