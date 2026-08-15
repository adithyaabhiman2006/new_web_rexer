'use client'
import { motion } from 'framer-motion'
import {
  Shield, Code2, Palette, Zap, Server, Lock,
  Award, BookOpen, Users, Target,
  Smartphone, Globe, Cpu, Database
} from 'lucide-react'

const TECH_STACK = [
  { icon: Smartphone, label: 'Flutter' },
  { icon: Server, label: 'Firebase' },
  { icon: Code2, label: 'Dart' },
  { icon: Globe, label: 'React' },
  { icon: Lock, label: 'AES-256' },
  { icon: Target, label: 'Burp Suite' },
  { icon: Shield, label: 'Kali Linux' },
  { icon: Palette, label: 'Figma' },
  { icon: Cpu, label: 'Python' },
  { icon: Database, label: 'PostgreSQL' },
  { icon: Zap, label: 'CI/CD' },
  { icon: Globe, label: 'Next.js' },
]

const CERTIFICATIONS = [
  { name: 'Certified Ethical Hacker (CEH)', org: 'EC-Council', color: 'blue' },
  { name: 'OWASP Mobile Security', org: 'OWASP Foundation', color: 'blue' },
  { name: 'Google Flutter Certified', org: 'Google', color: 'gold' },
  { name: 'CompTIA Security+', org: 'CompTIA', color: 'blue' },
  { name: 'Firebase Expert', org: 'Google Cloud', color: 'gold' },
  { name: 'ISO 27001 Practitioner', org: 'ISO', color: 'blue' },
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
            <Users size={12} /> About Us
          </motion.div>
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The <span className="text-gradient-blue">Rexer</span> Studio
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A cybersecurity-focused development studio building
            secure digital empires since day one.
          </motion.p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Mission */}
          <div className="about-page-grid">
            <motion.div
              className="about-mission"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-eyebrow" style={{ marginBottom: 'var(--space-lg)' }}>
                <Shield size={12} /> Our Mission
              </div>
              <h3>
                Security isn&apos;t an afterthought — it&apos;s the{' '}
                <span className="text-gradient-blue">foundation</span>.
              </h3>
              <p>
                At Rexer Studio, we believe every digital product should be built
                on a foundation of security. From the first line of code to the
                final deployment, we embed institutional-grade security practices
                into everything we build.
              </p>
              <p>
                With a community of 60,000+ YouTube subscribers and years of
                experience in ethical hacking, Flutter development, and fintech
                design, we bring both technical depth and educational transparency
                to every engagement.
              </p>
              <p>
                Our work spans from secure mobile applications and penetration
                testing to designing institutional trading dashboards — always
                with the same unwavering commitment to quality and security.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.05))',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-3xl)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-xl)',
              }}
            >
              {[
                { icon: Shield, value: 'Security First', desc: 'Every project starts with threat modeling' },
                { icon: Code2, value: 'Full Stack', desc: 'From Flutter to Firebase to APIs' },
                { icon: Award, value: '60K+ Community', desc: 'YouTube subscribers and growing' },
                { icon: BookOpen, value: 'Open Knowledge', desc: 'We teach what we build' },
              ].map((item, i) => (
                <motion.div
                  key={item.value}
                  style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--clr-blue-dim)',
                    color: 'var(--clr-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <item.icon size={22} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: '2px' }}>{item.value}</div>
                    <div style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-muted)' }}>{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Tech Stack */}
          <div className="section-divider" style={{ margin: 'var(--space-3xl) 0' }} />

          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-eyebrow">
              <Cpu size={12} /> Tech Stack
            </div>
            <h2 className="section-title">Tools We Master</h2>
          </motion.div>

          <div className="about-tech-grid">
            {TECH_STACK.map((tech, i) => (
              <motion.div
                key={tech.label}
                className="glass-card about-tech-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <tech.icon size={28} />
                <span>{tech.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="section-divider" style={{ margin: 'var(--space-3xl) 0' }} />

          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-eyebrow">
              <Award size={12} /> Credentials
            </div>
            <h2 className="section-title">Certifications & Expertise</h2>
          </motion.div>

          <div className="certs-grid">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.name}
                className="glass-card cert-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className={`cert-icon ${cert.color}`}>
                  <Award size={20} />
                </div>
                <div>
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-org">{cert.org}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
