'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Zap,
  Lock,
  Layers,
  Sparkles,
  Terminal,
  Activity,
  Cpu,
  RefreshCw,
  HelpCircle,
} from 'lucide-react'
import BouncyAccordion, { DEFAULT_BOUNCY_ITEMS } from '@/components/ui/BouncyAccordion'
import SplitFlapText from '@/components/ui/SplitFlapText'
import {
  BookOpenGlass,
  AwardGlass,
  CalendarGlass,
  CartGlass,
  CodeEditorGlass,
  WalletGlass,
} from '@/components/ui/GlassIcons'

const FINTECH_MATRIX_ITEMS = [
  {
    id: 'flutter-biometric',
    title: 'Flutter Biometric Keystore Enclave',
    subtitle: 'Cross-platform hardware enclave mapping',
    icon: WalletGlass,
    accent: 'var(--cyan-bright)',
    badge: 'MOBILE CORE',
    desc: 'Bespoke Flutter 3.24 plugin interfacing with iOS Secure Enclave (kSecAccessControlBiometryAny) and Android Keystore StrongBox with biometric user presence verification.',
    specs: [
      'Encrypted SharedPreferences via SQLCipher',
      'Hardware backed cryptographic key generation',
      'Zero plaintext exposure in heap RAM',
    ],
    actionText: 'Inspect Flutter Architecture',
    actionHref: '/services',
  },
  {
    id: 'webgl-orderbook',
    title: 'WebGL High-Frequency Chart Canvas',
    subtitle: '120 FPS real-time candlestick & depth engine',
    icon: CalendarGlass,
    accent: 'var(--emerald-neon)',
    badge: 'TRADING UX',
    desc: 'Zero-latency institutional trading chart engine built with custom WebGL shaders, sub-millisecond WebSocket buffer queues, and zero garbage-collection stutter.',
    specs: [
      'Render throughput: 50,000 orders/sec',
      'GPU-accelerated technical indicators',
      'Adaptive dark mode color calibrator',
    ],
    actionText: 'View Trading Terminal Demo',
    actionHref: '/portfolio',
  },
  {
    id: 'smart-contract-audit',
    title: 'Smart Contract & EVM Bytecode Fuzzing',
    subtitle: 'Automated formal verification & reentrancy shields',
    icon: CodeEditorGlass,
    accent: 'var(--amber-gold)',
    badge: 'WEB3 SEC',
    desc: 'Static & dynamic symbolic execution of Solidity bytecode, checking for integer overflow, flash-loan vulnerabilities, and access control privilege escalations.',
    specs: [
      'Slither & Mythril automated heuristics',
      'Formal mathematical property validation',
      'Immutable cryptographic verification proof',
    ],
    actionText: 'Commission Smart Contract Audit',
    actionHref: '/contact',
  },
  {
    id: 'stripe-escrow-engine',
    title: 'Multi-Currency Escrow & Stripe Connect',
    subtitle: 'Cryptographically signed webhook pipelines',
    icon: CartGlass,
    accent: 'var(--purple-accent)',
    badge: 'FINTECH RAILS',
    desc: 'Institutional payment gateway orchestration with Stripe Connect custom accounts, automated tax collection, and HMAC-SHA256 signature verification.',
    specs: [
      'Idempotent transaction deduplication',
      'Automated PCI-DSS compliance auditing',
      'Instant settlement webhooks',
    ],
    actionText: 'Review Payment Gateway',
    actionHref: '/pricing',
  },
]

const INSTITUTIONAL_FAQ_ITEMS = [
  {
    id: 'faq-security-guarantee',
    title: 'How do you guarantee 0 unresolved CVEs?',
    subtitle: 'Continuous AST auditing & dual-phase red teaming',
    icon: AwardGlass,
    accent: 'var(--crimson-alert)',
    badge: 'SECURITY SLA',
    desc: 'Every project goes through automated CodeRabbit AST scans, continuous dependency vulnerability monitoring, and a manual CEH-certified penetration audit before mainnet deployment.',
    specs: [
      'Automated CodeRabbit AST pull request verification',
      'CVSS v3.1 actionable remediation report',
      'Cryptographic deployment signature',
    ],
    actionText: 'Learn About Our CEH Process',
    actionHref: '/about',
  },
  {
    id: 'faq-delivery-timeline',
    title: 'What is the typical deployment timeline?',
    subtitle: 'From zero-trust blueprint to live hardened release',
    icon: BookOpenGlass,
    accent: 'var(--cyan-bright)',
    badge: 'VELOCITY',
    desc: 'MVPs are engineered within 2–4 weeks; institutional trading platforms and full cross-platform fintech architectures typically deploy in 6–10 weeks with dedicated sprints.',
    specs: [
      'Week 1: Threat modeling & Figma UI/UX system',
      'Week 2-5: Core Flutter / Backend sprint with CI/CD',
      'Week 6: Red teaming audit & production rollout',
    ],
    actionText: 'Calculate Project Timeline',
    actionHref: '/contact',
  },
  {
    id: 'faq-source-ownership',
    title: 'Do clients retain 100% source code ownership?',
    subtitle: 'Zero vendor lock-in, full cryptographic repository transfer',
    icon: CodeEditorGlass,
    accent: 'var(--emerald-neon)',
    badge: 'OWNERSHIP',
    desc: 'Yes. All intellectual property, Flutter source code, Supabase/Firebase architectures, design systems, and CI/CD pipelines are transferred directly to your organization repository.',
    specs: [
      'Complete Git commit history with PGP signed commits',
      'Comprehensive architectural documentation',
      '30 to 90 days post-launch support included',
    ],
    actionText: 'View Commission Agreement',
    actionHref: '/pricing',
  },
]

export default function ArchitectureShowcase() {
  const [activeTab, setActiveTab] = useState('protocols')

  const getCurrentItems = () => {
    switch (activeTab) {
      case 'fintech':
        return FINTECH_MATRIX_ITEMS
      case 'faq':
        return INSTITUTIONAL_FAQ_ITEMS
      default:
        return DEFAULT_BOUNCY_ITEMS
    }
  }

  return (
    <section className="section" id="protocols" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Subtle Background Glow Accent */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, rgba(139, 92, 246, 0.04) 50%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <Layers size={12} /> Bouncy Interactive Architecture Matrix
          </div>
          <h2 className="section-title">
            Fortified <span className="text-gradient-cyan">Enclave Protocols</span>
          </h2>
          <p className="section-subtitle">
            Click on any item below to experience spring-physics bouncy expand/collapse transitions,
            glassmorphism optics, and technical capability breakdowns.
          </p>
        </motion.div>

        {/* Tab Controls / Category Switcher */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
          }}
        >
          {[
            { id: 'protocols', label: 'Security & Encryption', icon: ShieldCheck },
            { id: 'fintech', label: 'Fintech & Trading Matrix', icon: Activity },
            { id: 'faq', label: 'Institutional FAQ', icon: HelpCircle },
          ].map((tab) => {
            const Icon = tab.icon
            const isSelected = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.15rem',
                  borderRadius: '12px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  border: isSelected
                    ? '1px solid var(--cyan-bright)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  background: isSelected
                    ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(139, 92, 246, 0.12) 100%)'
                    : 'rgba(17, 20, 28, 0.7)',
                  color: isSelected ? 'var(--cyan-bright)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '0 0 20px -4px rgba(245, 158, 11, 0.35)' : 'none',
                  transition: 'all 0.25s ease',
                }}
                className="hover:scale-105 active:scale-95"
                id={`protocol-tab-${tab.id}`}
              >
                <Icon size={15} />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Interactive Showcase Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Live Telemetry & Component Details */}
          <motion.div
            className="cyber-card"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bracket-corner bracket-tl" />
            <div className="bracket-corner bracket-tr" />
            <div className="bracket-corner bracket-bl" />
            <div className="bracket-corner bracket-br" />

            {/* Header info */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="telemetry-dot" />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--cyan-bright)',
                    letterSpacing: '0.05em',
                  }}
                >
                  LIVE SPRING DYNAMICS ENGINE
                </span>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '4px',
                  background: 'rgba(0, 255, 136, 0.12)',
                  color: 'var(--emerald-neon)',
                  border: '1px solid rgba(0, 255, 136, 0.25)',
                }}
              >
                120 FPS STIFFNESS 380
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--text-pure)',
                lineHeight: 1.3,
              }}
            >
              Elastic Layout Physics with Layered Glass Optics
            </h3>

            {/* Split Flap Operational Telemetry Ticker */}
            <div
              style={{
                padding: '0.65rem 0.95rem',
                background: 'rgba(11, 13, 18, 0.9)',
                borderRadius: '8px',
                border: '1px solid rgba(245, 158, 11, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                overflowX: 'auto',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                }}
              >
                <span>VECTOR FLAP STATUS:</span>
                <span style={{ color: 'var(--cyan-bright)' }}>LIVE STREAM</span>
              </div>
              <SplitFlapText
                words={
                  activeTab === 'protocols'
                    ? ['ENCLAVE HARDENED ', 'AES-256 ENCRYPTED', 'ZERO TRUST ACTIVE']
                    : activeTab === 'fintech'
                    ? ['120 FPS ENGINE   ', 'SUB-1MS TRADING  ', 'WEBGL CANVAS OK  ']
                    : ['0 CVE GUARANTEED ', 'FULL IP TRANSFER ', 'INSTITUTIONAL SLA']
                }
                fontSize={16}
                gap={3}
                tileRadius={4}
                flipsPerChar={5}
                cycleDelay={2600}
                flipDuration={0.08}
                stagger={0.035}
                tileColor="#11141C"
                textColor="#FBBF24"
                padTo={17}
              />
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              This component employs dynamic spring mass-damping calculations.
              When an item is clicked, the accordion items physically separate with a responsive bouncy gap,
              corner radiuses morph seamlessly, and the content flows naturally without jarring frame skips.
            </p>

            {/* Spec breakdown */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                marginTop: '0.5rem',
              }}
            >
              <div
                style={{
                  background: 'rgba(4, 8, 16, 0.6)',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(59, 130, 246, 0.12)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                  SPRING DAMPING
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--cyan-bright)' }}>
                  28 (Zero Wobble)
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(4, 8, 16, 0.6)',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(59, 130, 246, 0.12)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                  OPTIC LAYERS
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--emerald-neon)' }}>
                  4-Layer Gaussian SVG
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(4, 8, 16, 0.6)',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(59, 130, 246, 0.12)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                  EXPAND GAP
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--amber-gold)' }}>
                  12px Elastic
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(4, 8, 16, 0.6)',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(59, 130, 246, 0.12)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                  CORNER MORPH
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--purple-accent)' }}>
                  0px ➔ 20px Round
                </div>
              </div>
            </div>

            {/* Interactive hint */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.76rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                paddingTop: '0.5rem',
                borderTop: '1px solid rgba(59, 130, 246, 0.08)',
              }}
            >
              <Sparkles size={13} style={{ color: 'var(--cyan-bright)' }} />
              <span>Try clicking multiple items or switching category tabs.</span>
            </div>
          </motion.div>

          {/* Right Column: Live Interactive Bouncy Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ width: '100%' }}
          >
            <BouncyAccordion
              key={activeTab}
              items={getCurrentItems()}
              defaultActive={0}
              maxWidth="100%"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
