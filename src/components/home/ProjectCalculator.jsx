'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Check, ArrowRight, Shield, Smartphone, Globe, Cpu } from 'lucide-react'
import Link from 'next/link'

const PLATFORMS = [
  { id: 'mobile', label: 'Flutter Mobile App (iOS & Android)', base: 4500, days: 21 },
  { id: 'web', label: 'Institutional Trading Dashboard (Web)', base: 3800, days: 18 },
  { id: 'fullstack', label: 'Full-Stack Fintech OS (Mobile + Web + Supabase)', base: 7900, days: 35 },
]

const SECURITY_LEVELS = [
  { id: 'standard', label: 'Standard Hardening (AES-256 + Firebase Auth)', mult: 1.0 },
  { id: 'pentest', label: 'Offensive Penetration Testing & CVE Remediation (+OWASP)', mult: 1.35 },
  { id: 'institutional', label: 'Institutional Zero-Trust & SOC2 Compliance Architecture', mult: 1.7 },
]

const ADDONS = [
  { id: 'stripe', label: 'Stripe Multi-Currency Billing & Subscriptions', price: 950 },
  { id: 'biometric', label: 'Hardware Key / Biometric Crypto HSM Vault', price: 1400 },
  { id: 'ai', label: 'Claude AI Financial Advisor / Fraud Detection Engine', price: 1800 },
  { id: 'audit', label: 'Certified Ethical Hacker (CEH) Signed Audit Report', price: 1200 },
]

export default function ProjectCalculator() {
  const [platform, setPlatform] = useState('fullstack')
  const [secLevel, setSecLevel] = useState('pentest')
  const [selectedAddons, setSelectedAddons] = useState(['stripe', 'audit'])

  const selectedPlatformObj = PLATFORMS.find(p => p.id === platform)
  const selectedSecObj = SECURITY_LEVELS.find(s => s.id === secLevel)

  const addonTotal = selectedAddons.reduce((acc, id) => {
    const found = ADDONS.find(a => a.id === id)
    return acc + (found ? found.price : 0)
  }, 0)

  const calculatedTotal = Math.round((selectedPlatformObj.base * selectedSecObj.mult) + addonTotal)
  const estimatedDays = Math.round(selectedPlatformObj.days * (secLevel === 'institutional' ? 1.4 : 1.1))

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id))
    } else {
      setSelectedAddons([...selectedAddons, id])
    }
  }

  return (
    <section className="section tech-grid-bg" id="calculator">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <Calculator size={12} /> Interactive Engineering Estimator
          </div>
          <h2 className="section-title">
            Custom Architecture <span className="text-gradient-cyan">Calculator</span>
          </h2>
          <p className="section-subtitle">
            Configure your technical specifications. Transparent, fixed-scope investment models
            with guaranteed institutional delivery timelines.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '2.5rem',
          alignItems: 'start',
        }}>
          {/* Left Column: Configuration Controls */}
          <motion.div
            className="cyber-card"
            style={{ padding: '2rem' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bracket-corner bracket-tl" />
            <div className="bracket-corner bracket-tr" />
            <div className="bracket-corner bracket-bl" />
            <div className="bracket-corner bracket-br" />

            {/* 1. Platform Selection */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--cyan-bright)', marginBottom: '0.75rem' }}>
                [01] SELECT PLATFORM ARCHITECTURE
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {PLATFORMS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPlatform(p.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.9rem 1.2rem',
                      borderRadius: 'var(--radius-sm)',
                      background: platform === p.id ? 'rgba(0, 240, 255, 0.12)' : 'var(--bg-tertiary)',
                      border: `1px solid ${platform === p.id ? 'var(--cyan-bright)' : 'var(--border-subtle)'}`,
                      color: 'var(--text-pure)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.9rem',
                    }}
                  >
                    <span>{p.label}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      ${p.base.toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Security Tier */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--amber-gold)', marginBottom: '0.75rem' }}>
                [02] SELECT SECURITY HARDENING GRADE
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {SECURITY_LEVELS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSecLevel(s.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.9rem 1.2rem',
                      borderRadius: 'var(--radius-sm)',
                      background: secLevel === s.id ? 'rgba(255, 184, 0, 0.12)' : 'var(--bg-tertiary)',
                      border: `1px solid ${secLevel === s.id ? 'var(--amber-gold)' : 'var(--border-subtle)'}`,
                      color: 'var(--text-pure)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.9rem',
                    }}
                  >
                    <span>{s.label}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      {s.mult}x
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Add-on Modules */}
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--emerald-neon)', marginBottom: '0.75rem' }}>
                [03] INTEGRATED SUBSYSTEMS & MODULES
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id)
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        background: isChecked ? 'rgba(0, 255, 136, 0.08)' : 'var(--bg-tertiary)',
                        border: `1px solid ${isChecked ? 'var(--emerald-neon)' : 'var(--border-subtle)'}`,
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <div style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '4px',
                          border: `1px solid ${isChecked ? 'var(--emerald-neon)' : 'var(--text-muted)'}`,
                          background: isChecked ? 'var(--emerald-neon)' : 'transparent',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#02060E',
                        }}>
                          {isChecked && <Check size={13} strokeWidth={3} />}
                        </div>
                        <span>{addon.label}</span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                        +${addon.price}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Live Estimate & Summary */}
          <motion.div
            className="cyber-card"
            style={{ padding: '2.2rem', position: 'sticky', top: '100px' }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bracket-corner bracket-tl" />
            <div className="bracket-corner bracket-tr" />
            <div className="bracket-corner bracket-bl" />
            <div className="bracket-corner bracket-br" />

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--cyan-bright)', marginBottom: '0.5rem' }}>
              // ESTIMATED INVESTMENT
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 800, color: 'var(--text-pure)', lineHeight: 1 }}>
              ${calculatedTotal.toLocaleString()}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
              Estimated timeline: <strong style={{ color: 'var(--emerald-neon)' }}>{estimatedDays} Days</strong> to production
            </div>

            <div style={{
              padding: '1.2rem',
              background: 'var(--bg-tertiary)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '1.8rem',
              fontSize: '0.82rem',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
            }}>
              <div>✔ Complete Source Code Ownership</div>
              <div>✔ Supabase PostgreSQL + RLS Database</div>
              <div>✔ Penetration Test & CVE Remediation</div>
              <div>✔ CI/CD Automated GitHub Actions Pipeline</div>
              <div>✔ 60-Day Dedicated Hotfix Warranty</div>
            </div>

            <Link
              href="/contact"
              className="btn btn-primary btn-lg"
              style={{ width: '100%', justifyContent: 'center' }}
              id="calculator-commission-btn"
            >
              Lock In Architecture <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
