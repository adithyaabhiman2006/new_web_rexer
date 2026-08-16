'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Lock,
  Cpu,
  Terminal,
  Layers,
  Database,
  Smartphone,
  Zap,
  Globe,
  Radio,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'

const BADGES = [
  { name: 'EC-COUNCIL CEH CERTIFIED', icon: ShieldCheck, color: 'var(--cyan-bright)' },
  { name: 'OWASP MASVS L2 VERIFIED', icon: Lock, color: 'var(--amber-gold)' },
  { name: 'APPLE SECURE ENCLAVE (HSM)', icon: Cpu, color: 'var(--emerald-neon)' },
  { name: 'FLUTTER 3.24 ARCHITECTURE', icon: Smartphone, color: 'var(--blue-primary)' },
  { name: 'SUPABASE REALTIME RLS', icon: Database, color: 'var(--emerald-neon)' },
  { name: 'STRIPE CONNECT ESCROW', icon: Zap, color: 'var(--purple-accent)' },
  { name: 'CODERABBIT AST CODE AUDIT', icon: CheckCircle2, color: 'var(--cyan-bright)' },
  { name: 'BURP SUITE PRO PEN-TESTING', icon: Terminal, color: 'var(--crimson-alert)' },
  { name: 'CLAUDE 4.6 AGENTIC DEVSECOPS', icon: Sparkles, color: 'var(--amber-gold)' },
  { name: 'KALI LINUX BINARY FUZZING', icon: Radio, color: 'var(--cyan-bright)' },
]

export default function VelocityMarquee({
  items = BADGES,
  speed = 35,
  direction = 'left',
  className = '',
}) {
  return (
    <div
      className={`velocity-marquee-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        padding: '1.25rem 0',
        background: 'linear-gradient(180deg, rgba(3, 7, 16, 0.95) 0%, rgba(6, 12, 26, 0.95) 100%)',
        borderTop: '1px solid rgba(0, 240, 255, 0.12)',
        borderBottom: '1px solid rgba(0, 240, 255, 0.12)',
        display: 'flex',
        alignItems: 'center',
        userSelect: 'none',
      }}
    >
      {/* Side Fade Masks for Infinite Depth */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '120px',
          background: 'linear-gradient(90deg, #030712 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '120px',
          background: 'linear-gradient(270deg, #030712 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          display: 'flex',
          gap: '2.5rem',
          width: 'max-content',
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {/* Double array for seamless loop */}
        {[...items, ...items, ...items].map((badge, idx) => {
          const Icon = badge.icon
          return (
            <div
              key={idx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.45rem 1rem',
                borderRadius: '8px',
                background: 'rgba(8, 16, 32, 0.65)',
                border: '1px solid rgba(59, 130, 246, 0.15)',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                whiteSpace: 'nowrap',
              }}
            >
              {Icon && <Icon size={14} style={{ color: badge.color || 'var(--cyan-bright)' }} />}
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.06em',
                }}
              >
                {badge.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
