'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Shield, Palette, ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react'
import Link from 'next/link'
import SpotlightCard from '@/components/ui/SpotlightCard'
import DecryptedText from '@/components/ui/DecryptedText'
import ShinyText from '@/components/ui/ShinyText'
import LetterPullup from '@/components/ui/LetterPullup'
import StarBorder from '@/components/ui/StarBorder'

const CATEGORIES = ['All', 'Mobile Enclave', 'Offensive Security', 'Trading UX']

const PROJECTS = [
  {
    slug: 'vello-fintech',
    title: 'Vello — Zero-Knowledge Personal Finance',
    desc: 'High-security personal finance mobile app engineered with AES-256-GCM memory cipher, biometric enclave authentication, and real-time Supabase synchronization.',
    category: 'Mobile Enclave',
    tags: ['Flutter 3.24', 'Supabase RLS', 'Dart', 'AES-256', 'SQLCipher'],
    highlight: '$4.2M Tx Volume',
    icon: Code2,
    spotlight: 'rgba(0, 240, 255, 0.18)',
    gradient: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(6, 182, 212, 0.04))',
  },
  {
    slug: 'apex-orderbook',
    title: 'Apex — Sub-Millisecond Orderbook Terminal',
    desc: 'WebGL high-frequency institutional trading dashboard processing 50K+ live ticks/second without CPU frame drops or UI throttling.',
    category: 'Trading UX',
    tags: ['WebGL Canvas', 'Flutter Web', '120 FPS Engine', 'Dark Mode'],
    highlight: '< 16ms Frame Loop',
    icon: Palette,
    spotlight: 'rgba(255, 180, 0, 0.18)',
    gradient: 'linear-gradient(135deg, rgba(245, 166, 35, 0.15), rgba(251, 191, 36, 0.04))',
  },
  {
    slug: 'secaudit-platform',
    title: 'SecAudit — Automated CVE Vulnerability Matrix',
    desc: 'Automated offensive security suite running dynamic AST heuristics, Frida memory hooks, and BOLA attack vectors with cryptographic remediation receipts.',
    category: 'Offensive Security',
    tags: ['OWASP Top 10', 'Burp Suite Pro', 'Frida', 'Kali Linux', 'CVSS v3.1'],
    highlight: '0 Unresolved CVEs',
    icon: Shield,
    spotlight: 'rgba(255, 0, 85, 0.18)',
    gradient: 'linear-gradient(135deg, rgba(255, 0, 85, 0.15), rgba(245, 166, 35, 0.04))',
  },
  {
    slug: 'cryptovault-hsm',
    title: 'CypherVault — Sovereign Hardware Key Vault',
    desc: 'Multi-chain institutional wallet pairing Apple Secure Enclave & Android StrongBox with decentralized seed derivation and zero-cloud key exposure.',
    category: 'Mobile Enclave',
    tags: ['Flutter C++', 'Hardware Enclave', 'ECDSA secp256k1', 'Web3'],
    highlight: 'Silicon-Level Isolation',
    icon: Code2,
    spotlight: 'rgba(0, 255, 136, 0.18)',
    gradient: 'linear-gradient(135deg, rgba(0, 255, 136, 0.15), rgba(6, 182, 212, 0.04))',
  },
  {
    slug: 'pentest-pro',
    title: 'ChronoTrader — Algorithmic Execution Terminal',
    desc: 'Institutional algorithmic execution console with zero-latency hotkeys, multi-monitor dock layouts, and live WebSocket telemetry feeds.',
    category: 'Trading UX',
    tags: ['Figma Master', 'WebSocket Queue', 'Tactile Audio', 'Trading UX'],
    highlight: '$120M+ Secured',
    icon: Palette,
    spotlight: 'rgba(168, 85, 247, 0.18)',
    gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(59, 130, 246, 0.04))',
  },
  {
    slug: 'neobank-hardened',
    title: 'Vanguard — Fortified NeoBank Core Platform',
    desc: 'Modern cross-platform banking ecosystem with automated AML/KYC filters, Stripe webhook idempotent settlement, and strict PCI-DSS audit compliance.',
    category: 'Mobile Enclave',
    tags: ['Flutter iOS/Android', 'Stripe Connect', 'Supabase', 'PCI-DSS'],
    highlight: 'SOC2 / ISO 27001 Ready',
    icon: Shield,
    spotlight: 'rgba(59, 130, 246, 0.18)',
    gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.04))',
  },
]

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter)

  return (
    <>
      <div className="page-header">
        <div className="container">
          <motion.div
            className="section-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Code2 size={12} /> Institutional Showcase Matrix
          </motion.div>
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Engineered <ShinyText text="Case Studies" color="#00f0ff" shimmerColor="#ffffff" speed={3.5} />
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <DecryptedText
              text="Zero-trust mobile applications, offensive security audits, and sub-millisecond trading terminals."
              animateOn="view"
              speed={25}
            />
          </motion.p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Filter bar */}
          <div className="portfolio-filter-bar" id="portfolio-filters" style={{ justifyContent: 'center', marginBottom: '3rem' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => {
                const Icon = project.icon
                return (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    id={`project-${project.slug}`}
                    style={{ height: '100%' }}
                  >
                    <SpotlightCard
                      spotlightColor={project.spotlight}
                      tilt={true}
                      maxTilt={7}
                      style={{ padding: 0, height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                      {/* Top Preview Banner */}
                      <div
                        style={{
                          background: project.gradient,
                          height: '140px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '1.5rem',
                          borderBottom: '1px solid rgba(59, 130, 246, 0.12)',
                          position: 'relative',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <div
                            style={{
                              width: '42px',
                              height: '42px',
                              borderRadius: '10px',
                              background: 'rgba(4, 8, 18, 0.8)',
                              border: '1px solid rgba(0, 240, 255, 0.25)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--cyan-bright)',
                            }}
                          >
                            <Icon size={22} />
                          </div>
                          <div>
                            <span
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.68rem',
                                color: 'var(--cyan-bright)',
                                letterSpacing: '0.08em',
                              }}
                            >
                              {project.category.toUpperCase()}
                            </span>
                          </div>
                        </div>

                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            padding: '0.2rem 0.5rem',
                            borderRadius: '4px',
                            background: 'rgba(0, 255, 136, 0.12)',
                            color: 'var(--emerald-neon)',
                            border: '1px solid rgba(0, 255, 136, 0.25)',
                          }}
                        >
                          {project.highlight}
                        </span>
                      </div>

                      {/* Content */}
                      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: 'var(--text-pure)',
                            marginBottom: '0.75rem',
                          }}
                        >
                          {project.title}
                        </h3>

                        <p
                          style={{
                            fontSize: '0.88rem',
                            lineHeight: 1.6,
                            color: 'var(--text-secondary)',
                            marginBottom: '1.5rem',
                            flex: 1,
                          }}
                        >
                          {project.desc}
                        </p>

                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.4rem',
                            paddingTop: '1.2rem',
                            borderTop: '1px solid rgba(59, 130, 246, 0.1)',
                          }}
                        >
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.68rem',
                                padding: '2px 8px',
                                borderRadius: '4px',
                                background: 'rgba(255, 255, 255, 0.04)',
                                color: 'var(--text-muted)',
                                border: '1px solid rgba(255, 255, 255, 0.06)',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  )
}
