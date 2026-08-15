'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, MessageSquare, Clock } from 'lucide-react'

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rexerlk@gmail.com',
    href: 'mailto:rexerlk@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Remote — Worldwide',
    href: null,
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        const { supabase } = await import('@/lib/supabase')
        const { error } = await supabase.from('messages').insert([form])
        if (error) throw error
      }
      setStatus({ type: 'success', message: 'Message sent successfully! We\'ll get back to you within 24 hours.' })
      setForm({ name: '', email: '', service: '', message: '' })
    } catch {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again or email us directly at rexerlk@gmail.com.' })
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
            <MessageSquare size={12} /> Get in Touch
          </motion.div>
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let&apos;s <span className="text-gradient-blue">Connect</span>
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to build something secure and beautiful?
            Tell us about your project.
          </motion.p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h3 style={{ fontSize: 'var(--fs-2xl)', fontWeight: 700, marginBottom: 'var(--space-2xl)' }}>
                Contact Information
              </h3>

              {CONTACT_INFO.map((info, i) => (
                <motion.div
                  key={info.label}
                  className="contact-info-item"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                >
                  <div className="contact-info-icon">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <div className="contact-info-label">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} className="contact-info-value" style={{ color: 'var(--clr-blue)' }}>
                        {info.value}
                      </a>
                    ) : (
                      <div className="contact-info-value">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}

              <div style={{
                marginTop: 'var(--space-3xl)',
                padding: 'var(--space-2xl)',
                background: 'var(--bg-glass)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)',
              }}>
                <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-md)' }}>
                  Prefer a different channel?
                </h4>
                <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  You can also reach us on{' '}
                  <a href="https://twitter.com/RexerLK" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--clr-blue)' }}>
                    Twitter @RexerLK
                  </a>{' '}
                  or through our{' '}
                  <a href="https://youtube.com/@RexerLK" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--clr-blue)' }}>
                    YouTube channel
                  </a>.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="glass-card" style={{ padding: 'var(--space-2xl)' }} id="contact-form">
                <h3 style={{ fontSize: 'var(--fs-xl)', fontWeight: 700, marginBottom: 'var(--space-2xl)' }}>
                  Send a Message
                </h3>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    className="form-input"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-service">Service Interest</label>
                  <select
                    id="contact-service"
                    className="form-select"
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">Select a service...</option>
                    <option value="mobile-dev">Mobile App Development</option>
                    <option value="pentesting">Penetration Testing</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="consulting">Security Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    className="form-textarea"
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={loading}
                  id="contact-submit"
                >
                  {loading ? 'Sending...' : <>Send Message <Send size={16} /></>}
                </button>

                {status && (
                  <div className={`form-status ${status.type}`}>
                    {status.message}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
