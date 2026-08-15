'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Play, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import ParticleBackground from '@/components/ui/ParticleBackground'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <ParticleBackground />

      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow */}
        <motion.div variants={item} className="hero-eyebrow">
          <ShieldCheck size={12} />
          Institutional · Cybersecurity · Fintech
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={item} className="hero-title">
          Building{' '}
          <span className="text-gradient-blue">Secure</span>
          <br />
          Digital Empires
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={item} className="hero-subtitle">
          Expert Flutter development, penetration testing, and institutional-grade
          fintech UI/UX design. We build apps that institutions trust and users love.
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={item} className="hero-cta-row">
          <Link href="/pricing" className="btn btn-primary btn-lg" id="hero-cta-primary">
            Get Started <ArrowRight size={18} />
          </Link>
          <Link href="/portfolio" className="btn btn-outline btn-lg" id="hero-cta-secondary">
            <Play size={16} /> View Our Work
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div variants={item} className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value">60K+</div>
            <div className="hero-stat-label">YouTube Subscribers</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">50+</div>
            <div className="hero-stat-label">Projects Delivered</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">99.9%</div>
            <div className="hero-stat-label">Uptime Guarantee</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
