'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, Shield, Palette } from 'lucide-react'
import Link from 'next/link'

const PROJECTS = [
  {
    slug: 'vello-fintech',
    title: 'Vello — Personal Finance App',
    desc: 'A full-stack personal finance manager with AES-256 encryption, real-time budget AI, and Firebase auth.',
    category: 'Mobile',
    tags: ['Flutter', 'Firebase', 'AES-256'],
    icon: Code2,
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.08))',
  },
  {
    slug: 'tradex-dashboard',
    title: 'TradeX — Trading Dashboard',
    desc: 'Institutional-grade dark-mode trading interface with real-time data feeds and glassmorphic design.',
    category: 'UI/UX',
    tags: ['Figma', 'Flutter Web', 'Dark Mode'],
    icon: Palette,
    gradient: 'linear-gradient(135deg, rgba(245,166,35,0.15), rgba(251,191,36,0.08))',
  },
  {
    slug: 'securityaudit-platform',
    title: 'SecAudit — Vulnerability Platform',
    desc: 'Automated vulnerability assessment tool with CVE mapping, CVSS scoring, and remediation tracking.',
    category: 'Security',
    tags: ['Python', 'OWASP', 'Kali Linux'],
    icon: Shield,
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.08))',
  },
]

export default function Portfolio() {
  return (
    <section className="section" id="portfolio-preview">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <Code2 size={12} /> Featured Work
          </div>
          <h2 className="section-title">
            Our <span className="text-gradient-blue">Portfolio</span>
          </h2>
          <p className="section-subtitle">
            Projects that demonstrate security-first architecture
            and pixel-perfect design.
          </p>
        </motion.div>

        <div className="portfolio-grid">
          {PROJECTS.map((project, i) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.slug}
                className="glass-card portfolio-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                id={`portfolio-card-${project.slug}`}
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
                    <Icon size={40} style={{ opacity: 0.3 }} />
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      opacity: 0.4,
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
        </div>

        <motion.div
          style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link href="/portfolio" className="btn btn-outline" id="portfolio-view-all">
            View All Projects <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
