'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Shield, Palette, ArrowUpRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const CATEGORIES = ['All', 'Mobile', 'Security', 'UI/UX']

const PROJECTS = [
  {
    slug: 'vello-fintech',
    title: 'Vello — Personal Finance App',
    desc: 'A full-stack personal finance manager with AES-256 encryption, real-time budget AI, and Firebase auth.',
    category: 'Mobile',
    tags: ['Flutter', 'Firebase', 'Dart', 'AES-256'],
    icon: Code2,
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.08))',
  },
  {
    slug: 'tradex-dashboard',
    title: 'TradeX — Trading Dashboard',
    desc: 'Institutional-grade dark-mode trading interface with real-time data feeds and glassmorphic design.',
    category: 'UI/UX',
    tags: ['Figma', 'Flutter Web', 'Dark Mode', 'Glassmorphism'],
    icon: Palette,
    gradient: 'linear-gradient(135deg, rgba(245,166,35,0.15), rgba(251,191,36,0.08))',
  },
  {
    slug: 'securityaudit-platform',
    title: 'SecAudit — Vulnerability Platform',
    desc: 'Automated vulnerability assessment tool with CVE mapping, CVSS scoring, and remediation tracking.',
    category: 'Security',
    tags: ['Python', 'OWASP', 'Kali Linux', 'Burp Suite'],
    icon: Shield,
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.08))',
  },
  {
    slug: 'cryptovault-wallet',
    title: 'CryptoVault — Secure Wallet',
    desc: 'Multi-chain cryptocurrency wallet with biometric auth, hardware key support, and cold storage integration.',
    category: 'Mobile',
    tags: ['Flutter', 'Web3', 'Biometrics', 'HSM'],
    icon: Code2,
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))',
  },
  {
    slug: 'pentest-reporting',
    title: 'PentestPro — Report Generator',
    desc: 'Automated penetration testing report generator with CVSS scoring, compliance mapping, and client portals.',
    category: 'Security',
    tags: ['Python', 'FastAPI', 'CVSS', 'PDF Gen'],
    icon: Shield,
    gradient: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(245,166,35,0.08))',
  },
  {
    slug: 'neobank-dashboard',
    title: 'NeoBank — Banking Dashboard',
    desc: 'Modern digital banking interface with transaction analytics, spending insights, and goal tracking.',
    category: 'UI/UX',
    tags: ['Figma', 'React', 'D3.js', 'Dark Mode'],
    icon: Palette,
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.08))',
  },
]

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter)

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
            <Code2 size={12} /> Our Work
          </motion.div>
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Project <span className="text-gradient-blue">Portfolio</span>
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Security-first applications and institutional-grade designs
            built for trust and performance.
          </motion.p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Filter bar */}
          <div className="portfolio-filter-bar" id="portfolio-filters">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
                id={`filter-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="portfolio-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => {
                const Icon = project.icon
                return (
                  <motion.div
                    key={project.slug}
                    className="glass-card portfolio-card"
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    id={`project-${project.slug}`}
                  >
                    <div
                      className="portfolio-card-image"
                      style={{ background: project.gradient }}
                    >
                      <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: '0.5rem',
                      }}>
                        <Icon size={48} style={{ opacity: 0.25 }} />
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          opacity: 0.3,
                          letterSpacing: '0.1em',
                        }}>
                          {project.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div style={{ padding: 'var(--space-lg)' }}>
                      <div className="portfolio-card-category">{project.category}</div>
                      <h3 className="portfolio-card-title">{project.title}</h3>
                      <p className="portfolio-card-desc">{project.desc}</p>
                      <div className="portfolio-card-tags">
                        {project.tags.map(tag => (
                          <span key={tag} className="service-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
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
