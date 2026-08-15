'use client'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Smartphone, Target, LayoutDashboard, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const SERVICES = [
  {
    id: 's1',
    num: '01',
    icon: Smartphone,
    color: 'blue',
    title: 'Secure Mobile App Development',
    desc: 'End-to-end Flutter & Firebase applications hardened with AES-256 encryption, secure auth flows, and production-ready CI/CD pipelines.',
    tags: ['Flutter', 'Firebase', 'Dart', 'AES-256', 'CI/CD'],
  },
  {
    id: 's2',
    num: '02',
    icon: Target,
    color: 'cyan',
    title: 'Penetration Testing & Vulnerability Assessment',
    desc: 'Systematic offensive testing of your mobile, web, and API surfaces. Detailed CVE-mapped reporting with remediation roadmaps.',
    tags: ['OWASP', 'Burp Suite', 'Python', 'Kali Linux', 'CVE Reports'],
  },
  {
    id: 's3',
    num: '03',
    icon: LayoutDashboard,
    color: 'gold',
    title: 'UI/UX Design for Fintech & Trading',
    desc: 'Institutional-grade dashboards designed for speed, clarity, and trust. Dark-mode-first, data-dense, beautiful. Figma → Flutter, pixel-perfect.',
    tags: ['Figma', 'Flutter Web', 'Glassmorphism', 'Trading UX', 'Dark Mode'],
  },
]

function ServiceCard({ service, index }) {
  const cardRef = useRef(null)

  const onMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1)
    const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1)
    card.style.setProperty('--glow-x', `${x}%`)
    card.style.setProperty('--glow-y', `${y}%`)
  }

  const Icon = service.icon

  return (
    <motion.div
      ref={cardRef}
      className="glass-card service-card"
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      id={`service-card-${service.id}`}
    >
      <div className="service-num">{service.num}</div>
      <div className={`service-icon-wrap ${service.color}`}>
        <Icon size={24} />
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-desc">{service.desc}</p>
      <div className="service-tags">
        {service.tags.map(tag => (
          <span key={tag} className="service-tag">{tag}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Services() {
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
            <LayoutDashboard size={12} /> What We Build
          </div>
          <h2 className="section-title">
            High-Ticket <span className="text-gradient-blue">Services</span>
          </h2>
          <p className="section-subtitle">
            Every project is built with institutional-grade security,
            pixel-perfect design, and production-ready architecture.
          </p>
        </motion.div>

        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <motion.div
          style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link href="/pricing" className="btn btn-outline" id="services-cta">
            View Pricing <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
