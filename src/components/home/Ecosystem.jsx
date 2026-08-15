'use client'
import { motion } from 'framer-motion'
import { Cpu, Globe, GitBranch, Database, ShieldCheck, CreditCard, Sparkles, Zap, Flame } from 'lucide-react'

const ECOSYSTEM_STACK = [
  {
    name: 'Claude 4.6',
    role: 'Coding Intelligence',
    icon: Sparkles,
    desc: 'Autonomous agentic architecture & vulnerability-resistant algorithm design.',
    status: 'ACTIVE',
    color: 'var(--amber-gold)',
  },
  {
    name: 'GitHub',
    role: 'Source Control & CI/CD',
    icon: GitBranch,
    desc: 'Zero-trust repository automation, cryptographic commits, and GitHub Actions.',
    status: 'CONNECTED',
    color: 'var(--text-pure)',
  },
  {
    name: 'Supabase',
    role: 'Backend & PostgreSQL',
    icon: Database,
    desc: 'Row-Level Security (RLS), real-time encrypted data sync, and instant edge auth.',
    status: 'SYNCED',
    color: 'var(--emerald-neon)',
  },
  {
    name: 'Stripe',
    role: 'Monetization & Billing',
    icon: CreditCard,
    desc: 'Institutional-grade payment security, webhook verification, and global subscriptions.',
    status: 'SECURE',
    color: 'var(--cyan-bright)',
  },
  {
    name: 'Vercel / Netlify',
    role: 'Edge Hosting',
    icon: Globe,
    desc: 'Sub-20ms global edge delivery, DDoS mitigation, and immutable deployments.',
    status: 'DEPLOYED',
    color: 'var(--blue-primary)',
  },
  {
    name: 'CodeRabbit',
    role: 'AI Code Review',
    icon: ShieldCheck,
    desc: 'Continuous automated AST auditing, CVE prevention, and code cleanliness enforcement.',
    status: 'VERIFIED',
    color: 'var(--emerald-neon)',
  },
  {
    name: 'SideShift',
    role: 'Marketing Engine',
    icon: Flame,
    desc: 'High-conversion growth vectors, viral technical telemetry, and distribution.',
    status: 'OPTIMIZED',
    color: 'var(--crimson-alert)',
  },
]

export default function Ecosystem() {
  return (
    <section className="section tech-grid-bg" id="ecosystem">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <Cpu size={12} /> Institutional Infrastructure
          </div>
          <h2 className="section-title">
            The <span className="text-gradient-cyan">Hardened Stack</span>
          </h2>
          <p className="section-subtitle">
            Every Rexer Studio product is engineered on a military-grade toolchain
            spanning autonomous AI coding, real-time database encryption, and automated AST review.
          </p>
        </motion.div>

        <div className="ecosystem-grid">
          {ECOSYSTEM_STACK.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.name}
                className="cyber-card ecosystem-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                id={`ecosystem-${item.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                <div className="bracket-corner bracket-tl" />
                <div className="bracket-corner bracket-tr" />
                <div className="bracket-corner bracket-bl" />
                <div className="bracket-corner bracket-br" />

                <div className="ecosystem-icon" style={{ borderColor: item.color }}>
                  <Icon size={24} style={{ color: item.color }} />
                </div>

                <div>
                  <div className="ecosystem-title">{item.name}</div>
                  <div className="ecosystem-role">{item.role}</div>
                </div>

                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {item.desc}
                </p>

                <div style={{
                  marginTop: 'auto',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  background: 'rgba(255,255,255,0.04)',
                  color: item.color,
                  border: '1px solid var(--border-subtle)',
                }}>
                  ● {item.status}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
