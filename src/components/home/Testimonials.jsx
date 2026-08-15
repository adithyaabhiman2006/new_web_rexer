'use client'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    id: 't1',
    quote: 'Rexer Studio delivered an exceptional fintech app with security standards that exceeded our institutional requirements. The attention to encryption and auth flows was outstanding.',
    name: 'Sarah Chen',
    role: 'CTO, FinVault Inc.',
    initials: 'SC',
  },
  {
    id: 't2',
    quote: 'Their penetration testing revealed critical vulnerabilities our internal team missed. The CVE-mapped reporting and remediation roadmap were incredibly thorough and actionable.',
    name: 'Marcus Rivera',
    role: 'Security Lead, BlockSecure',
    initials: 'MR',
  },
  {
    id: 't3',
    quote: 'The trading dashboard design transformed our platform. Users love the dark-mode interface and the data density without sacrificing clarity. Truly institutional-grade work.',
    name: 'Akira Tanaka',
    role: 'Product Manager, TradeAxis',
    initials: 'AT',
  },
  {
    id: 't4',
    quote: 'Working with Rexer was a game-changer. They built our mobile banking app in record time without compromising on security. Firebase integration was seamless.',
    name: 'Elena Vasquez',
    role: 'Founder, NeoBank',
    initials: 'EV',
  },
]

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <Quote size={12} /> Client Feedback
          </div>
          <h2 className="section-title">
            Trusted by <span className="text-gradient-blue">Leaders</span>
          </h2>
          <p className="section-subtitle">
            What our clients say about working with Rexer Studio.
          </p>
        </motion.div>

        <div className="testimonials-track">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              className="glass-card testimonial-card"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              id={`testimonial-${t.id}`}
            >
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
