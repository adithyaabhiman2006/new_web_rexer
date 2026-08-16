'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShieldCheck,
  Cpu,
  Lock,
  Database,
  CheckCircle2,
  Zap,
  Activity,
  Layers,
  Code2,
  Radio,
  Terminal,
} from 'lucide-react'
import { soundFx } from './soundEffects'

const LAYERS = [
  {
    id: 'silicon-enclave',
    num: '01',
    name: 'Hardware Secure Enclave',
    tech: 'iOS Secure Enclave / Android StrongBox',
    color: 'var(--cyan-bright)',
    badge: 'SILICON ROOT',
    desc: 'Bespoke Flutter C++ bindings direct to device hardware cryptographic co-processor. Private keys are generated and stored in isolated silicon.',
    telemetry: 'Zero-Knowledge • kSecAccessControlBiometryAny',
  },
  {
    id: 'memory-cipher',
    num: '02',
    name: 'AES-256-GCM Memory Cipher',
    tech: 'Dynamic Heap RAM Scrambler & SQLCipher',
    color: 'var(--emerald-neon)',
    badge: 'MEMORY DEFENSE',
    desc: 'All in-memory strings, tokens, and local SQLite caches are encrypted at rest with rotating ephemeral initialization vectors (IVs).',
    telemetry: 'Anti-Frida • Anti-Memory-Dump • Zero Heap Plaintext',
  },
  {
    id: 'network-pinning',
    num: '03',
    name: 'TLS 1.3 Certificate Pinning',
    tech: 'ECDSA SPKI Public Key Hash Pinning',
    color: 'var(--amber-gold)',
    badge: 'TRANSPORT SHIELD',
    desc: 'Custom HTTP transport layer rejecting proxy certificates, Burp Suite MITM injections, and DNS spoofing attempts on API routes.',
    telemetry: 'SPKI-SHA256 Hash Matching • Zero Cleartext Traffic',
  },
  {
    id: 'database-rls',
    num: '04',
    name: 'Supabase Row-Level Security (RLS)',
    tech: 'PostgreSQL Realtime + Cryptographic JWT',
    color: 'var(--purple-accent)',
    badge: 'DATA VAULT',
    desc: 'Strict tenant isolation enforced at database kernel level. Even compromised API client tokens cannot read adjacent database rows.',
    telemetry: '100% RLS Coverage • BOLA/BFLA Attack Invalidation',
  },
  {
    id: 'coderabbit-ai',
    num: '05',
    name: 'Continuous AST Red Teaming',
    tech: 'CodeRabbit AI + Claude 4.6 DevSecOps',
    color: 'var(--blue-primary)',
    badge: 'CONTINUOUS AUDIT',
    desc: 'Every pull request passes automated abstract syntax tree (AST) vulnerability heuristics and CVSS v3.1 compliance tests.',
    telemetry: '0 CVE Production Policy • Automated Pull Request Proof',
  },
]

export default function EnclaveVaultVisualizer() {
  const [selectedLayer, setSelectedLayer] = useState(0)

  const active = LAYERS[selectedLayer]

  return (
    <div
      className="enclave-visualizer cyber-card"
      style={{
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="bracket-corner bracket-tl" />
      <div className="bracket-corner bracket-tr" />
      <div className="bracket-corner bracket-bl" />
      <div className="bracket-corner bracket-br" />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span className="telemetry-dot" />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--cyan-bright)',
              letterSpacing: '0.06em',
            }}
          >
            DEFENSE-IN-DEPTH ENCLAVE ARCHITECTURE
          </span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            padding: '0.2rem 0.5rem',
            borderRadius: '4px',
            background: 'rgba(0, 240, 255, 0.1)',
            color: 'var(--cyan-bright)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
          }}
        >
          5-LAYER HARDENING
        </span>
      </div>

      {/* 5-Layer Stack Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          alignItems: 'center',
        }}
      >
        {/* Interactive Stack Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {LAYERS.map((layer, idx) => {
            const isSelected = selectedLayer === idx
            return (
              <button
                key={layer.id}
                onClick={() => {
                  soundFx.playClick()
                  setSelectedLayer(idx)
                }}
                onMouseEnter={() => soundFx.playHover()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: isSelected
                    ? `1px solid ${layer.color}`
                    : '1px solid rgba(59, 130, 246, 0.12)',
                  background: isSelected
                    ? `linear-gradient(90deg, ${layer.color}18 0%, rgba(8, 16, 32, 0.9) 100%)`
                    : 'rgba(6, 12, 24, 0.65)',
                  boxShadow: isSelected
                    ? `0 0 20px -5px ${layer.color}33, inset 0 0 10px ${layer.color}11`
                    : 'none',
                  color: isSelected ? 'var(--text-pure)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                }}
                className="hover:scale-[1.01]"
                id={`enclave-layer-${layer.id}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: layer.color,
                      width: '22px',
                    }}
                  >
                    L{layer.num}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                    }}
                  >
                    {layer.name}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    padding: '0.15rem 0.45rem',
                    borderRadius: '4px',
                    background: `${layer.color}22`,
                    color: layer.color,
                    border: `1px solid ${layer.color}44`,
                  }}
                >
                  {layer.badge}
                </span>
              </button>
            )
          })}
        </div>

        {/* Selected Layer Inspection Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            style={{
              padding: '1.5rem',
              borderRadius: '12px',
              background: 'rgba(4, 8, 16, 0.9)',
              border: `1px solid ${active.color}44`,
              boxShadow: `0 12px 36px -8px ${active.color}22`,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: active.color,
                  letterSpacing: '0.04em',
                }}
              >
                LAYER {active.num} SPECIFICATION
              </span>
              <Activity size={14} style={{ color: active.color }} />
            </div>

            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--text-pure)',
              }}
            >
              {active.name}
            </h4>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--cyan-bright)',
                background: 'rgba(0, 240, 255, 0.06)',
                padding: '0.4rem 0.75rem',
                borderRadius: '6px',
                border: '1px solid rgba(0, 240, 255, 0.15)',
              }}
            >
              TECH: {active.tech}
            </div>

            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {active.desc}
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                paddingTop: '0.75rem',
                borderTop: '1px solid rgba(59, 130, 246, 0.1)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
              }}
            >
              <CheckCircle2 size={13} style={{ color: active.color }} />
              <span>{active.telemetry}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
