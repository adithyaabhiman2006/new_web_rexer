'use client'
import { motion } from 'framer-motion'
import { BarChart3 } from 'lucide-react'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const STATS = [
  { end: 60, suffix: 'K+', label: 'YouTube Subscribers', color: 'blue' },
  { end: 50, suffix: '+', label: 'Projects Delivered', color: 'gold' },
  { end: 12, suffix: '+', label: 'Certifications', color: 'cyan' },
  { end: 5, suffix: '+', label: 'Years Experience', color: 'green' },
]

export default function Stats() {
  return (
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
            Proven <span className="text-gradient-blue">Results</span>
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
              id={`stat-${stat.color}`}
            >
              <AnimatedCounter
                end={stat.end}
                suffix={stat.suffix}
                color={stat.color}
              />
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
