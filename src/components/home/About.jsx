'use client'
import { motion } from 'framer-motion'
import { Shield, Code2, Palette, Zap, Server, Lock } from 'lucide-react'

const BADGES = [
  { icon: Code2, label: 'Flutter' },
  { icon: Shield, label: 'Kali Linux' },
  { icon: Server, label: 'Firebase' },
  { icon: Lock, label: 'AES-256' },
  { icon: Palette, label: 'Figma' },
  { icon: Zap, label: 'CI/CD' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Text Side */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-eyebrow">
              <Shield size={12} /> About Rexer Studio
            </div>
            <h3>
              Where <span className="text-gradient-blue">Security</span> Meets{' '}
              <span className="text-gradient-gold">Design</span>
            </h3>
            <p>
              Rexer Studio is a cybersecurity-focused development studio specializing in
              building secure, beautiful, and performant digital products. From fintech
              apps to institutional trading dashboards, every line of code is written with
              security-first architecture.
            </p>
            <p>
              With certifications in ethical hacking and a community of 60,000+ YouTube
              subscribers, we bring both technical depth and educational transparency to
              every project.
            </p>

            <div className="about-badges">
              {BADGES.map((badge, i) => (
                <motion.span
                  key={badge.label}
                  className="about-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <badge.icon size={12} />
                  {badge.label}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            className="about-image-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(6,182,212,0.05), rgba(139,92,246,0.08))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: 900,
                letterSpacing: '0.05em',
                opacity: 0.08,
              }}>
                REXER
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                padding: '2rem',
                width: '100%',
                maxWidth: '300px',
              }}>
                {[Shield, Code2, Lock, Zap, Palette, Server].map((Icon, i) => (
                  <motion.div
                    key={i}
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-glass)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--clr-blue)',
                      margin: '0 auto',
                    }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: 'easeInOut',
                    }}
                  >
                    <Icon size={24} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
