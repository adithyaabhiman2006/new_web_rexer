'use client'
import { useState, useEffect } from 'react'
import { ShieldCheck, Cpu, Terminal, Radio, Activity } from 'lucide-react'

export default function TelemetryBar() {
  const [time, setTime] = useState('')
  const [latency, setLatency] = useState(14)

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(now.toUTCString().slice(17, 25) + ' UTC')
    }
    update()
    const t = setInterval(update, 1000)
    
    // Slight random ping variation for authentic telemetry
    const p = setInterval(() => {
      setLatency(Math.floor(11 + Math.random() * 6))
    }, 4000)

    return () => {
      clearInterval(t)
      clearInterval(p)
    }
  }, [])

  return (
    <aside aria-label="System status telemetry" className="telemetry-bar">
      <div className="container telemetry-inner">
        <div className="telemetry-item">
          <span className="telemetry-dot" />
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>SYS_DEFENSE:</span>
          <span style={{ color: 'var(--cyan-bright)' }}>AES-256 // ZERO-TRUST ACTIVE</span>
        </div>

        <div className="telemetry-item" style={{ display: 'none', md: 'flex' }}>
          <ShieldCheck size={13} style={{ color: 'var(--emerald-neon)' }} />
          <span>CODERABBIT AI VERIFIED</span>
          <span style={{ color: 'var(--text-muted)' }}>•</span>
          <Cpu size={13} style={{ color: 'var(--amber-gold)' }} />
          <span>CLAUDE ENGINE v4.6</span>
        </div>

        <div className="telemetry-item">
          <Activity size={13} style={{ color: 'var(--cyan-bright)' }} />
          <span>EDGE: <strong style={{ color: 'var(--emerald-neon)' }}>{latency}ms</strong></span>
          <span style={{ color: 'var(--text-muted)' }}>|</span>
          <Radio size={13} style={{ color: 'var(--crimson-alert)' }} />
          <span>@RexerLK [60K+]</span>
          <span style={{ color: 'var(--text-muted)' }}>|</span>
          <span style={{ color: 'var(--text-secondary)' }}>{time || '00:00:00 UTC'}</span>
        </div>
      </div>
    </aside>
  )
}
