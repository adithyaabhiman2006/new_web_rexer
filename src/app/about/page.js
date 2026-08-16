'use client'
import { motion } from 'framer-motion'
import {
  Shield, Code2, Palette, Zap, Server, Lock,
  Award, BookOpen, Users, Target,
  Smartphone, Globe, Cpu, Database, CheckCircle2, Sparkles
} from 'lucide-react'
import SpotlightCard from '@/components/ui/SpotlightCard'
import DecryptedText from '@/components/ui/DecryptedText'
import ShinyText from '@/components/ui/ShinyText'
import VelocityMarquee from '@/components/ui/VelocityMarquee'
import LetterPullup from '@/components/ui/LetterPullup'
import StarBorder from '@/components/ui/StarBorder'

const TECH_STACK = [
  { icon: Smartphone, label: 'Flutter 3.24', color: 'var(--cyan-bright)' },
  { icon: Server, label: 'Firebase Cloud', color: 'var(--amber-gold)' },
  { icon: Code2, label: 'Dart Engine', color: 'var(--blue-primary)' },
  { icon: Globe, label: 'Next.js 14', color: 'var(--cyan-bright)' },
  { icon: Lock, label: 'AES-256-GCM', color: 'var(--emerald-neon)' },
  { icon: Target, label: 'Burp Suite Pro', color: 'var(--crimson-alert)' },
  { icon: Shield, label: 'Kali Linux', color: 'var(--purple-accent)' },
  { icon: Palette, label: 'Figma Master', color: 'var(--amber-gold)' },
  { icon: Cpu, label: 'Claude 4.6 AI', color: 'var(--cyan-bright)' },
  { icon: Database, label: 'Supabase RLS', color: 'var(--emerald-neon)' },
  { icon: Zap, label: 'CodeRabbit AST', color: 'var(--cyan-bright)' },
  { icon: Lock, label: 'Apple Enclave', color: 'var(--emerald-neon)' },
]

const CERTIFICATIONS = [
  { name: 'Certified Ethical Hacker (CEH v12)', org: 'EC-Council', id: 'ECC-89421-CEH', color: 'var(--cyan-bright)' },
  { name: 'OWASP Mobile Security MASVS L2', org: 'OWASP Foundation', id: 'MASVS-L2-VERIFIED', color: 'var(--emerald-neon)' },
  { name: 'Google Flutter Certified Architect', org: 'Google Cloud & Flutter', id: 'G-FLUTTER-99', color: 'var(--amber-gold)' },
  { name: 'CompTIA Security+ Network Defense', org: 'CompTIA Global', id: 'COMPTIA-SEC-PLUS', color: 'var(--blue-primary)' },
  { name: 'ISO/IEC 27001 ISMS Lead Implementer', org: 'ISO International', id: 'ISO-27001-ISMS', color: 'var(--purple-accent)' },
  { name: 'SOC2 Type II Controls Practitioner', org: 'AICPA / SOC2', id: 'SOC2-TYPE-II-REC', color: 'var(--cyan-bright)' },
]

export default function AboutPage() {
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
            <Users size={12} /> The Cybersecurity & Engineering Doctrine
          </motion.div>
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Behind <ShinyText text="Rexer Studio" color="#F59E0B" shimmerColor="#ffffff" speed={3.5} />
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <DecryptedText
              text="Founded on sovereign cryptographic principles: client-side encryption, zero cloud telemetry, and 100% IP ownership."
              animateOn="view"
              speed={25}
            />
          </motion.p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Mission Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SpotlightCard style={{ padding: '2.5rem' }} tilt={true} maxTilt={5}>
                <div className="section-eyebrow" style={{ marginBottom: '1.25rem' }}>
                  <Shield size={12} /> The Security Doctrine
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-pure)', marginBottom: '1rem', lineHeight: 1.3 }}>
                  Security isn&apos;t a feature — it&apos;s the{' '}
                  <span className="text-gradient-cyan">irreversible baseline</span>.
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
                  At Rexer Studio, every Flutter codebase, Supabase database, and API gateway is engineered
                  with adversarial threat modeling. We assume the client device is hostile, memory is dumpable,
                  and networks are monitored by default.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  With an active YouTube community of <strong>60,000+ developers</strong> (@RexerLK) and certified
                  ethical hacking credentials (CEH), we bring verified rigor and transparency to every engagement.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--cyan-bright)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                  <CheckCircle2 size={15} />
                  <span>100% Unencumbered Source Code Ownership Guaranteed</span>
                </div>
              </SpotlightCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <SpotlightCard style={{ padding: '2.5rem' }} tilt={true} maxTilt={5}>
                <div className="section-eyebrow" style={{ marginBottom: '1.25rem' }}>
                  <Sparkles size={12} /> Core Competencies
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    { icon: Shield, title: 'Adversarial Threat Modeling', desc: 'Pre-flight STRIDE and OWASP Mobile Top 10 vector audits.', color: 'var(--cyan-bright)' },
                    { icon: Code2, title: 'Bespoke Flutter Enclaves', desc: 'Hardware Secure Enclave C++ bindings with zero cloud seed leakage.', color: 'var(--emerald-neon)' },
                    { icon: Award, title: '60K+ YouTube Developer Community', desc: 'Global reputation built on technical education and live code teardowns.', color: 'var(--amber-gold)' },
                    { icon: BookOpen, title: 'Continuous AST CI/CD Pipeline', desc: 'Deterministic CodeRabbit + Claude 4.6 DevSecOps integration.', color: 'var(--purple-accent)' },
                  ].map((item, i) => (
                    <div key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          background: 'rgba(4, 8, 18, 0.8)',
                          border: `1px solid ${item.color}44`,
                          color: item.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <item.icon size={20} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: 'var(--text-pure)', fontSize: '0.92rem', marginBottom: '2px' }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          </div>

          {/* Infinite Marquee of verified technologies */}
          <VelocityMarquee speed={30} className="mb-12" />

          {/* Tech Stack Grid */}
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginTop: '4rem' }}
          >
            <div className="section-eyebrow">
              <Cpu size={12} /> Technology Arsenal
            </div>
            <h2 className="section-title">
              Hardened <span className="text-gradient-cyan">Stack & Tooling</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1rem', marginBottom: '5rem' }}>
            {TECH_STACK.map((tech, i) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(245, 158, 11, 0.12)"
                  style={{
                    padding: '1.25rem 1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    textAlign: 'center',
                  }}
                >
                  <tech.icon size={26} style={{ color: tech.color || 'var(--cyan-bright)' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {tech.label}
                  </span>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-eyebrow">
              <Award size={12} /> Cryptographic Verification
            </div>
            <h2 className="section-title">
              Certifications & <span className="text-gradient-cyan">Compliance SLA</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(245, 158, 11, 0.15)"
                  tilt={true}
                  maxTilt={6}
                  style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(4, 8, 18, 0.8)',
                      border: `1px solid ${cert.color}44`,
                      color: cert.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Award size={22} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-pure)' }}>
                      {cert.name}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {cert.org} • <span style={{ color: cert.color }}>{cert.id}</span>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
