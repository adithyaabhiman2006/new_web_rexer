'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Send } from 'lucide-react'
import Link from 'next/link'
import MagneticButton from '@/components/ui/MagneticButton'
import ShinyText from '@/components/ui/ShinyText'
import DecryptedText from '@/components/ui/DecryptedText'

export default function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-bg" />
      <div className="container">
        <motion.div
          className="cta-content cyber-card"
          style={{ padding: '3.5rem 2rem', position: 'relative' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bracket-corner bracket-tl" />
          <div className="bracket-corner bracket-tr" />
          <div className="bracket-corner bracket-bl" />
          <div className="bracket-corner bracket-br" />

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
            <ShinyText
              text="Secure Digital Empire?"
              color="#F59E0B"
              shimmerColor="#ffffff"
              speed={3.5}
            />
          </h2>
          <p className="cta-subtitle">
            Let&apos;s engineer your project with hardware-backed enclaves and zero unresolved CVEs.
            From concept to mainnet deployment, we build architectures that institutions trust.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <MagneticButton>
              <Link href="/contact" className="btn btn-primary btn-lg" id="cta-contact">
                <Send size={16} /> Start a Project <ArrowRight size={18} />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/pricing" className="btn btn-outline btn-lg" id="cta-pricing">
                View Pricing & SLA
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
