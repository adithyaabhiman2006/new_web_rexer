'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Search, CheckCircle2, AlertTriangle, Terminal, Lock, Cpu, ArrowRight } from 'lucide-react'

const SCAN_STEPS = [
  'Probing TLS 1.3 Cryptographic Handshake...',
  'Executing OWASP Mobile Top 10 Vector Analysis...',
  'Evaluating AES-256-GCM Key Rotation & Keychain Vault...',
  'Testing JWT Bearer Token Replay Protection...',
  'Inspecting Memory Buffer Boundaries & Frida Hooks...',
  'Generating Comprehensive Defense Telemetry...',
]

export default function LiveScanner() {
  const [target, setTarget] = useState('vello.fintech.io')
  const [scanning, setScanning] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [result, setResult] = useState(null)

  const handleScan = (e) => {
    e.preventDefault()
    if (!target.trim() || scanning) return

    setScanning(true)
    setResult(null)
    setCurrentStep(0)

    let step = 0
    const interval = setInterval(() => {
      step++
      if (step < SCAN_STEPS.length) {
        setCurrentStep(step)
      } else {
        clearInterval(interval)
        setScanning(false)
        setResult({
          target: target.trim(),
          score: 99.4,
          grade: 'A+ INSTITUTIONAL',
          passed: 42,
          cves: 0,
          cipher: 'TLS_AES_256_GCM_SHA384',
          latency: '14ms',
          timestamp: new Date().toISOString(),
        })
      }
    }, 450)
  }

  return (
    <section className="section" id="live-scanner">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <Shield size={12} /> Interactive Defense Sandbox
          </div>
          <h2 className="section-title">
            Live Vulnerability <span className="text-gradient-cyan">Auditor</span>
          </h2>
          <p className="section-subtitle">
            Simulate a real-time OWASP Top 10 penetration test against your fintech target.
            Witness the same automated inspection algorithms we build into institutional apps.
          </p>
        </motion.div>

        <motion.div
          className="cyber-card scanner-card"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bracket-corner bracket-tl" />
          <div className="bracket-corner bracket-tr" />
          <div className="bracket-corner bracket-bl" />
          <div className="bracket-corner bracket-br" />

          {/* Input Bar */}
          <form onSubmit={handleScan} className="scanner-input-bar">
            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '0.75rem', color: 'var(--cyan-bright)' }}>
              <Terminal size={18} />
            </div>
            <input
              type="text"
              className="scanner-input"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              placeholder="Enter domain or app identifier (e.g. app.fintech.io)..."
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={scanning}
              id="scanner-execute-btn"
            >
              {scanning ? (
                <>
                  <span className="telemetry-dot" /> Scanning...
                </>
              ) : (
                <>
                  Execute Audit <Search size={16} />
                </>
              )}
            </button>
          </form>

          {/* Live Scan Telemetry Feedback */}
          {scanning && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: '#02050D',
                padding: '1.5rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-medium)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--amber-gold)' }}>
                <Cpu size={16} />
                <span>INSPECTION IN PROGRESS: [THREAD_0{currentStep + 1}]</span>
              </div>
              <div style={{ color: 'var(--cyan-bright)', marginBottom: '0.5rem' }}>
                {SCAN_STEPS[currentStep]}
              </div>
              <div style={{
                width: '100%',
                height: '4px',
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '2px',
                overflow: 'hidden',
              }}>
                <motion.div
                  style={{
                    height: '100%',
                    background: 'var(--grad-cyan-blue)',
                  }}
                  animate={{ width: `${((currentStep + 1) / SCAN_STEPS.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          )}

          {/* Results Display */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 1.25rem',
                  background: 'rgba(0, 255, 136, 0.08)',
                  border: '1px solid rgba(0, 255, 136, 0.3)',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '1.5rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2 size={24} style={{ color: 'var(--emerald-neon)' }} />
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-pure)' }}>
                        AUDIT COMPLETE: {result.target}
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--emerald-neon)' }}>
                        GRADE: {result.grade} • 0 ZERO-DAY THREATS
                      </div>
                    </div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {result.timestamp.slice(0, 19)} UTC
                  </div>
                </div>

                <div className="scanner-results-grid">
                  <div className="scanner-metric-box">
                    <div className="scanner-metric-val">{result.score}%</div>
                    <div className="scanner-metric-lbl">SECURITY COMPLIANCE</div>
                  </div>
                  <div className="scanner-metric-box">
                    <div className="scanner-metric-val" style={{ color: 'var(--cyan-bright)' }}>{result.passed}/42</div>
                    <div className="scanner-metric-lbl">OWASP CHECKS PASSED</div>
                  </div>
                  <div className="scanner-metric-box">
                    <div className="scanner-metric-val" style={{ color: 'var(--emerald-neon)' }}>0</div>
                    <div className="scanner-metric-lbl">CRITICAL CVE DETECTED</div>
                  </div>
                  <div className="scanner-metric-box">
                    <div className="scanner-metric-val" style={{ color: 'var(--amber-gold)', fontSize: '1.2rem', paddingTop: '0.4rem' }}>
                      AES-256
                    </div>
                    <div className="scanner-metric-lbl">GCM ENCRYPTION VAULT</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
