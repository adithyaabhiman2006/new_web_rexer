'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import StarBorder from '@/components/ui/StarBorder'
import LetterPullup from '@/components/ui/LetterPullup'

const TESTIMONIALS = [
  {
    id: 't1',
    quote: 'Rexer Studio delivered an exceptional fintech app with security standards that exceeded our institutional requirements. The attention to encryption and auth flows was outstanding.',
    name: 'Sarah Chen',
    role: 'CTO, FinVault Inc.',
    initials: 'SC',
    accent: '#F59E0B',
  },
  {
    id: 't2',
    quote: 'Their penetration testing revealed critical vulnerabilities our internal team missed. The CVE-mapped reporting and remediation roadmap were incredibly thorough and actionable.',
    name: 'Marcus Rivera',
    role: 'Security Lead, BlockSecure',
    initials: 'MR',
    accent: '#8B5CF6',
  },
  {
    id: 't3',
    quote: 'The trading dashboard design transformed our platform. Users love the dark-mode interface and the data density without sacrificing clarity. Truly institutional-grade work.',
    name: 'Akira Tanaka',
    role: 'Product Manager, TradeAxis',
    initials: 'AT',
    accent: '#10B981',
  },
  {
    id: 't4',
    quote: 'Working with Rexer was a game-changer. They built our mobile banking app in record time without compromising on security. Firebase integration was seamless.',
    name: 'Elena Vasquez',
    role: 'Founder, NeoBank',
    initials: 'EV',
    accent: '#FFB800',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setActive((prev) => (prev + 1) % TESTIMONIALS.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const t = TESTIMONIALS[active]

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
            <LetterPullup text="Trusted by " delay={0.03} />
            <span className="text-gradient-blue">
              <LetterPullup text="Leaders" delay={0.04} />
            </span>
          </h2>
          <p className="section-subtitle">
            What our clients say about working with Rexer Studio.
          </p>
        </motion.div>

        {/* Featured testimonial with StarBorder */}
        <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative' }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={t.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <StarBorder color={t.accent} speed="8s" radius="var(--radius-lg)">
                <div
                  style={{
                    padding: '2.5rem',
                    textAlign: 'center',
                  }}
                >
                  {/* Large quote mark */}
                  <Quote
                    size={36}
                    style={{
                      color: t.accent,
                      opacity: 0.3,
                      marginBottom: '1rem',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '1.1rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1.8,
                      fontStyle: 'italic',
                      marginBottom: '2rem',
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${t.accent}33, ${t.accent}11)`,
                        border: `2px solid ${t.accent}44`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: t.accent,
                      }}
                    >
                      {t.initials}
                    </div>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontWeight: 600, color: 'var(--text-pure)', fontSize: '0.95rem' }}>{t.name}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </StarBorder>
            </motion.div>
          </AnimatePresence>

          {/* Navigation controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem' }}>
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--cyan-bright)'
                e.currentTarget.style.color = 'var(--cyan-bright)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)'
                e.currentTarget.style.color = 'var(--text-primary)'
              }}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i) }}
                  aria-label={`Testimonial ${i + 1}`}
                  style={{
                    width: active === i ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: active === i ? 'var(--cyan-bright)' : 'var(--border-medium)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: active === i ? '0 0 8px var(--cyan-glow)' : 'none',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--cyan-bright)'
                e.currentTarget.style.color = 'var(--cyan-bright)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)'
                e.currentTarget.style.color = 'var(--text-primary)'
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
