'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, Zap, Lock, Terminal } from 'lucide-react'
import Link from 'next/link'
import {
  BookOpenGlass,
  AwardGlass,
  CalendarGlass,
  CartGlass,
  CodeEditorGlass,
  WalletGlass,
} from './GlassIcons'

export const DEFAULT_BOUNCY_ITEMS = [
  {
    id: 'zero-trust',
    title: 'Zero-Trust Enclave Hardening',
    subtitle: 'Hardware-backed biometric keystore & AES-256-GCM',
    icon: BookOpenGlass,
    accent: 'var(--cyan-bright)',
    badge: 'CRYPTOGRAPHY',
    desc: 'Client-side zero-knowledge architecture derivations with hardware Secure Enclave integration. Prevents memory extraction, jailbreak tampering, and dynamic hook injections.',
    specs: [
      'AES-256-GCM authenticated cipher',
      'Anti-debugging & Frida detection',
      'TLS 1.3 certificate pinning',
    ],
    actionText: 'View Security Specs',
    actionHref: '/about',
  },
  {
    id: 'offensive-sec',
    title: 'Offensive Penetration Testing',
    subtitle: 'Systematic OWASP Top 10 & CVSS v3.1 Exploitation',
    icon: AwardGlass,
    accent: 'var(--amber-gold)',
    badge: 'CEH CERTIFIED',
    desc: 'Deep black-box and white-box probing of API gateways, smart contracts, and mobile binaries with cryptographic verification receipts and 100% remediation audit guarantee.',
    specs: [
      'BOLA & Broken Object auth fuzzing',
      'Binary decompilation & AST analysis',
      'SOC2 / ISO compliance validation',
    ],
    actionText: 'Request Security Audit',
    actionHref: '/contact',
  },
  {
    id: 'hft-trading',
    title: 'Sub-Millisecond Order Routing',
    subtitle: 'Ultra-low latency WebSocket streams & WebGL Canvas',
    icon: CalendarGlass,
    accent: 'var(--emerald-neon)',
    badge: '120 FPS ENGINE',
    desc: 'High-frequency trading dashboards rendering 50K+ live ticks/second without CPU throttling. Engineered for institutional desks and algorithmic execution.',
    specs: [
      '< 16ms render loop on custom canvas',
      'Zero-latency hotkey execution',
      'Optimized memory buffer pooling',
    ],
    actionText: 'Inspect Trading Terminal',
    actionHref: '/portfolio',
  },
  {
    id: 'crypto-escrow',
    title: 'Institutional Escrow & Stripe Flow',
    subtitle: 'Cryptographic idempotency & multi-sig validation',
    icon: CartGlass,
    accent: 'var(--purple-accent)',
    badge: 'PAYMENTS',
    desc: 'End-to-end multi-currency payment pipelines supporting Stripe Webhooks, automated AML/KYC filters, and instant settlement verification with zero chargeback drift.',
    specs: [
      'Webhook signature cryptographic verification',
      'Automated rate-limiting & replay protection',
      'Global currency conversions',
    ],
    actionText: 'Explore Pricing Plans',
    actionHref: '/pricing',
  },
  {
    id: 'edge-pipeline',
    title: 'Automated CI/CD & CodeRabbit AST',
    subtitle: 'Sub-20ms Edge deployments & automated review',
    icon: CodeEditorGlass,
    accent: 'var(--blue-primary)',
    badge: 'DEVSECOPS',
    desc: 'Deterministic GitHub Actions pipeline enforcing automated AST linting, CVE checks, and zero-downtime immutable releases on global edge networks.',
    specs: [
      'Continuous AST security linting',
      'Immutable container artifact registry',
      'Sub-20ms edge cache invalidation',
    ],
    actionText: 'Review Infrastructure',
    actionHref: '/about',
  },
  {
    id: 'vault-wallet',
    title: 'Biometric Sovereign Wallet Vault',
    subtitle: 'Hardware Security Module (HSM) derivational keys',
    icon: WalletGlass,
    accent: 'var(--cyan-bright)',
    badge: 'SOVEREIGN OS',
    desc: 'Decentralized cryptographic storage pairing hardware secure enclaves with zero-cloud seed derivation. Your keys never leave local physical silicon.',
    specs: [
      'Multi-factor biometric derivation',
      'Hardware secure enclave mapping',
      'Zero third-party telemetry',
    ],
    actionText: 'Commission Vault App',
    actionHref: '/contact',
  },
]

export default function BouncyAccordion({
  items = DEFAULT_BOUNCY_ITEMS,
  defaultActive = 0,
  allowMultiple = false,
  className = '',
  maxWidth = '580px',
}) {
  const [activeIndices, setActiveIndices] = useState(
    defaultActive !== null && defaultActive !== undefined ? [defaultActive] : []
  )

  const toggleItem = (index) => {
    if (allowMultiple) {
      if (activeIndices.includes(index)) {
        setActiveIndices(activeIndices.filter((i) => i !== index))
      } else {
        setActiveIndices([...activeIndices, index])
      }
    } else {
      if (activeIndices.includes(index)) {
        setActiveIndices([])
      } else {
        setActiveIndices([index])
      }
    }
  }

  const getItemBorderRadius = (index, total, isActive) => {
    if (isActive) {
      return '20px'
    }
    if (total === 1) {
      return '20px'
    }
    if (index === 0) {
      return '20px 20px 0px 0px'
    }
    if (index === total - 1) {
      return '0px 0px 20px 20px'
    }
    return '0px'
  }

  return (
    <div
      className={`bouncy-accordion-wrapper ${className}`}
      style={{
        width: '100%',
        maxWidth: maxWidth,
        margin: '0 auto',
      }}
    >
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {items.map((item, index) => {
          const isActive = activeIndices.includes(index)
          const IconComponent = item.icon
          const total = items.length
          const borderRadius = getItemBorderRadius(index, total, isActive)
          const marginBlock = isActive ? '12px' : '0px'
          const accentColor = item.accent || 'var(--cyan-bright)'

          return (
            <motion.li
              key={item.id || index}
              layout
              transition={{
                layout: {
                  type: 'spring',
                  stiffness: 380,
                  damping: 28,
                  mass: 0.8,
                },
              }}
              style={{
                borderRadius: borderRadius,
                marginBlock: marginBlock,
                position: 'relative',
                overflow: 'hidden',
                background: isActive
                  ? 'linear-gradient(135deg, rgba(13, 24, 48, 0.95) 0%, rgba(8, 14, 26, 0.98) 100%)'
                  : 'rgba(8, 16, 32, 0.75)',
                border: isActive
                  ? `1px solid ${accentColor}44`
                  : '1px solid rgba(59, 130, 246, 0.12)',
                boxShadow: isActive
                  ? `0 12px 36px -8px ${accentColor}22, 0 0 0 1px ${accentColor}22`
                  : '0 4px 16px rgba(0, 0, 0, 0.3)',
                cursor: 'pointer',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
              }}
              className="bouncy-item group"
              onClick={() => toggleItem(index)}
              id={`bouncy-item-${item.id || index}`}
            >
              {/* Top Accent Line when Active */}
              {isActive && (
                <motion.div
                  layoutId={`active-accent-bar-${item.id}`}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '10%',
                    right: '10%',
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                    zIndex: 2,
                  }}
                />
              )}

              {/* Header Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 1.15rem',
                  minHeight: '52px',
                  userSelect: 'none',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    flex: 1,
                  }}
                >
                  {/* Glass Icon with Spring Hover Scale */}
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      filter: isActive ? `drop-shadow(0 0 8px ${accentColor}55)` : 'none',
                      transition: 'filter 0.3s ease',
                    }}
                  >
                    {typeof IconComponent === 'function' ? (
                      <IconComponent size={24} />
                    ) : (
                      IconComponent
                    )}
                  </motion.div>

                  {/* Title & Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        letterSpacing: '-0.01em',
                        color: isActive ? 'var(--text-pure)' : 'var(--text-primary)',
                        transition: 'color 0.25s ease',
                      }}
                    >
                      {item.title}
                    </span>

                    {item.badge && (
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.62rem',
                          fontWeight: 700,
                          padding: '0.15rem 0.45rem',
                          borderRadius: '4px',
                          background: isActive ? `${accentColor}22` : 'rgba(255, 255, 255, 0.05)',
                          color: isActive ? accentColor : 'var(--text-muted)',
                          border: `1px solid ${isActive ? `${accentColor}44` : 'rgba(255, 255, 255, 0.08)'}`,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Chevron Indicator with Spring Rotate */}
                <motion.div
                  animate={{
                    rotate: isActive ? 180 : 0,
                    scale: isActive ? 1.1 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                  style={{
                    color: isActive ? accentColor : 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    flexShrink: 0,
                    marginLeft: '0.5rem',
                  }}
                >
                  <ChevronDown size={17} strokeWidth={2.2} />
                </motion.div>
              </div>

              {/* Animated Expandable Body */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                      transition: {
                        height: {
                          type: 'spring',
                          stiffness: 380,
                          damping: 28,
                          mass: 0.8,
                        },
                        opacity: { duration: 0.25, delay: 0.08 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: {
                          type: 'spring',
                          stiffness: 420,
                          damping: 32,
                        },
                        opacity: { duration: 0.15 },
                      },
                    }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      style={{
                        padding: '0 1.25rem 1.25rem 1.25rem',
                        borderTop: '1px solid rgba(59, 130, 246, 0.08)',
                        paddingTop: '0.9rem',
                      }}
                    >
                      {item.subtitle && (
                        <div
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            color: accentColor,
                            marginBottom: '0.5rem',
                            letterSpacing: '0.02em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                          }}
                        >
                          <Sparkles size={12} />
                          {item.subtitle}
                        </div>
                      )}

                      <p
                        style={{
                          fontSize: '0.86rem',
                          lineHeight: '1.55',
                          color: 'var(--text-secondary)',
                          marginBottom: '0.9rem',
                        }}
                      >
                        {item.desc}
                      </p>

                      {/* Technical Specs Pills / Bullets */}
                      {item.specs && item.specs.length > 0 && (
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.4rem',
                            marginBottom: '1rem',
                            background: 'rgba(4, 8, 16, 0.5)',
                            padding: '0.65rem 0.85rem',
                            borderRadius: '8px',
                            border: '1px solid rgba(59, 130, 246, 0.1)',
                          }}
                        >
                          {item.specs.map((spec, sIdx) => (
                            <div
                              key={sIdx}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontSize: '0.78rem',
                                color: 'var(--text-primary)',
                                fontFamily: 'var(--font-mono)',
                              }}
                            >
                              <CheckCircle2 size={13} style={{ color: accentColor, flexShrink: 0 }} />
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Action Button */}
                      {item.actionText && (
                        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '0.2rem' }}>
                          <Link
                            href={item.actionHref || '#'}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.4rem',
                              padding: '0.45rem 0.9rem',
                              fontSize: '0.78rem',
                              fontWeight: 600,
                              fontFamily: 'var(--font-display)',
                              borderRadius: '6px',
                              background: `linear-gradient(135deg, ${accentColor}22, ${accentColor}11)`,
                              color: accentColor,
                              border: `1px solid ${accentColor}55`,
                              textDecoration: 'none',
                              transition: 'all 0.2s ease',
                            }}
                            className="hover:scale-105"
                          >
                            <span>{item.actionText}</span>
                            <ArrowUpRight size={14} />
                          </Link>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          )
        })}
      </ul>
    </div>
  )
}

export { BouncyAccordion as Skiper103 }
