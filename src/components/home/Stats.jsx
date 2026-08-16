'use client'
import { motion } from 'framer-motion'
import { BarChart3 } from 'lucide-react'
import CountUp from '@/components/ui/CountUp'
import AuroraBackground from '@/components/ui/AuroraBackground'
import LetterPullup from '@/components/ui/LetterPullup'

const STATS = [
  { end: 60, suffix: 'K+', label: 'YouTube Subscribers', color: '#3B82F6' },
  { end: 50, suffix: '+', label: 'Projects Delivered', color: '#FFB800' },
  { end: 12, suffix: '+', label: 'Certifications', color: '#00F0FF' },
  { end: 5, suffix: '+', label: 'Years Experience', color: '#00FF88' },
]

export default function Stats() {
  return (
    <AuroraBackground>
      <section className="stats-section" id="stats">
        <div className="section-divider" />
        <div className="container" style={{ paddingTop: 'var(--space-4xl)' }}>
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-eyebrow">
              <BarChart3 size={12} /> By The Numbers
            </div>
            <h2 className="section-title">
              <LetterPullup text="Proven " delay={0.03} />
              <span className="text-gradient-blue">
                <LetterPullup text="Results" delay={0.04} />
              </span>
            </h2>
          </motion.div>

          <div className="stats-grid">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass-card stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                id={`stat-${i}`}
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                {/* Glow accent behind number */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '60px',
                    background: `radial-gradient(circle, ${stat.color}22, transparent)`,
                    filter: 'blur(20px)',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.8rem',
                    fontWeight: 800,
                    color: stat.color,
                    lineHeight: 1,
                    position: 'relative',
                  }}
                >
                  <CountUp end={stat.end} suffix={stat.suffix} duration={2000 + i * 300} />
                </div>
                <div className="stat-label" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.5rem' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AuroraBackground>
  )
}
