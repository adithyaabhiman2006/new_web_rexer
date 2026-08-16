'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Shield,
  Lock,
  Terminal,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Key,
} from 'lucide-react'
import SpotlightCard from '@/components/ui/SpotlightCard'
import DecryptedText from '@/components/ui/DecryptedText'
import ShinyText from '@/components/ui/ShinyText'
import MagneticButton from '@/components/ui/MagneticButton'
import LetterPullup from '@/components/ui/LetterPullup'
import StarBorder from '@/components/ui/StarBorder'
import { soundFx } from '@/components/ui/soundEffects'

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Direct Email (PGP Verified)',
    value: 'rexerlk@gmail.com',
    href: 'mailto:rexerlk@gmail.com',
  },
  {
    icon: MessageSquare,
    label: 'YouTube Authority Channel',
    value: '@RexerLK (60K+ Subscribers)',
    href: 'https://youtube.com/@RexerLK',
  },
  {
    icon: Lock,
    label: 'Response SLA',
    value: 'Sub-4 hours for active commissions',
    href: null,
  },
]

const BUDGET_TIERS = ['$2,500 – $5,000', '$5,000 – $10,000', '$10,000 – $25,000', '$25,000+']

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'Institutional Mobile Development',
    budget: '$5,000 – $10,000',
    message: '',
  })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    soundFx.playClick()

    try {
      if (
        process.env.NEXT_PUBLIC_SUPABASE_URL &&
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      ) {
        const { supabase } = await import('@/lib/supabase')
        const { error } = await supabase.from('messages').insert([form])
        if (error) throw error
      }
      soundFx.playSuccess()
      setStatus({
        type: 'success',
        message:
          'Transmission encrypted and verified. Our lead architect will review your threat model and reply within 4 hours.',
      })
      setForm({
        name: '',
        email: '',
        service: 'Institutional Mobile Development',
        budget: '$5,000 – $10,000',
        message: '',
      })
    } catch {
      setStatus({
        type: 'error',
        message:
          'Transmission failed. Please dispatch directly to rexerlk@gmail.com with your project brief.',
      })
    } finally {
      setLoading(false)
    }
  }

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
            <Key size={12} /> Encrypted Commission Channel
          </motion.div>
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Commence <ShinyText text="Project" color="#00f0ff" shimmerColor="#ffffff" speed={3.5} />
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <DecryptedText
              text="Direct engagement channel with lead cybersecurity architect & Flutter engineers. NDA available upon request."
              animateOn="view"
              speed={25}
            />
          </motion.p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
            {/* Contact Info & Telemetry Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <SpotlightCard style={{ padding: '2rem' }} tilt={true} maxTilt={5}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--text-pure)',
                    marginBottom: '1.25rem',
                  }}
                >
                  Direct Security Channels
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {CONTACT_INFO.map((info) => (
                    <div key={info.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          background: 'rgba(0, 240, 255, 0.08)',
                          border: '1px solid rgba(0, 240, 255, 0.2)',
                          color: 'var(--cyan-bright)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <info.icon size={18} />
                      </div>
                      <div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                          {info.label}
                        </div>
                        {info.href ? (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontSize: '0.92rem',
                              fontWeight: 600,
                              color: 'var(--cyan-bright)',
                              textDecoration: 'none',
                            }}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                            {info.value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </SpotlightCard>

              {/* SLA & Engagement Promise */}
              <SpotlightCard
                spotlightColor="rgba(0, 255, 136, 0.15)"
                style={{ padding: '1.75rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                  <Shield size={16} style={{ color: 'var(--emerald-neon)' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--emerald-neon)' }}>
                    ZERO-CVE SLA GUARANTEE
                  </span>
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Every project commissioned through Rexer Studio includes full intellectual property
                  assignment, PGP commit history, and a certified penetration audit before release.
                </p>
              </SpotlightCard>
            </motion.div>

            {/* Encrypted Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <SpotlightCard style={{ padding: '2.5rem' }} tilt={false}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--text-pure)',
                      margin: 0,
                    }}
                  >
                    Project Scope & Transmission
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      padding: '0.15rem 0.45rem',
                      borderRadius: '4px',
                      background: 'rgba(0, 240, 255, 0.1)',
                      color: 'var(--cyan-bright)',
                      border: '1px solid rgba(0, 240, 255, 0.25)',
                    }}
                  >
                    ECDSA SECP256K1
                  </span>
                </div>

                <form onSubmit={handleSubmit} id="contact-form">
                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="form-label" htmlFor="contact-name" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      NAME // ORGANIZATION
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Satoshi Labs / Alexander Vance"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="form-label" htmlFor="contact-email" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      SECURE EMAIL
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="form-input"
                      placeholder="you@institution.io"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="form-label" htmlFor="contact-service" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      PRIMARY DISCIPLINE
                    </label>
                    <select
                      id="contact-service"
                      className="form-select"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                    >
                      <option value="Institutional Mobile Development">Institutional Mobile Development (Flutter Enclave)</option>
                      <option value="Penetration Testing & Red Teaming">Penetration Testing & Red Teaming (OWASP Top 10)</option>
                      <option value="Fintech & Trading UX">Fintech & Trading Platform UI/UX (WebGL 120FPS)</option>
                      <option value="Smart Contract Security Audit">Smart Contract & Web3 Security Audit</option>
                      <option value="Full Stack Custom Architecture">Full-Stack Sovereign Architecture Retainer</option>
                    </select>
                  </div>

                  {/* Budget Selector */}
                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="form-label" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      ESTIMATED INVESTMENT BUDGET
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      {BUDGET_TIERS.map((tier) => {
                        const isSelected = form.budget === tier
                        return (
                          <button
                            type="button"
                            key={tier}
                            onClick={() => {
                              soundFx.playClick()
                              setForm({ ...form, budget: tier })
                            }}
                            style={{
                              padding: '0.5rem 0.75rem',
                              borderRadius: '8px',
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              border: isSelected
                                ? '1px solid var(--cyan-bright)'
                                : '1px solid rgba(59, 130, 246, 0.15)',
                              background: isSelected
                                ? 'rgba(0, 240, 255, 0.15)'
                                : 'rgba(4, 8, 16, 0.6)',
                              color: isSelected ? 'var(--cyan-bright)' : 'var(--text-secondary)',
                              cursor: 'pointer',
                              transition: 'all 0.15s ease',
                            }}
                          >
                            {tier}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.75rem' }}>
                    <label className="form-label" htmlFor="contact-message" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      PROJECT BRIEF & THREAT MODEL SPEC
                    </label>
                    <textarea
                      id="contact-message"
                      className="form-textarea"
                      placeholder="Outline target platform, required compliance, and timeline..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      style={{ minHeight: '110px' }}
                    />
                  </div>

                  <MagneticButton style={{ width: '100%' }}>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      style={{ width: '100%', justifyContent: 'center' }}
                      disabled={loading}
                      id="contact-submit"
                    >
                      {loading ? 'Encrypting & Dispatching...' : <>Transmit Encrypted Brief <Send size={16} /></>}
                    </button>
                  </MagneticButton>

                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`form-status ${status.type}`}
                      style={{ marginTop: '1.25rem' }}
                    >
                      {status.message}
                    </motion.div>
                  )}
                </form>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
