'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-bg" />
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="section-eyebrow"
            style={{ margin: '0 auto var(--space-xl)' }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles size={12} /> Ready to Build?
          </motion.div>
          <h2 className="cta-title">
            Ready to Build Your
            <br />
            <span className="text-gradient-cta">Secure Empire?</span>
          </h2>
          <p className="cta-subtitle">
            Let&apos;s discuss your project. From concept to deployment,
            we build digital products that institutions trust.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-lg" id="cta-contact">
              Start a Project <ArrowRight size={18} />
            </Link>
            <Link href="/pricing" className="btn btn-outline btn-lg" id="cta-pricing">
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
