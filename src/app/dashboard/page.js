'use client'
import { motion } from 'framer-motion'
import {
  LayoutDashboard, FolderOpen, MessageSquare,
  CreditCard, Settings, LogOut, Bell, ArrowUpRight
} from 'lucide-react'
import Link from 'next/link'

const QUICK_STATS = [
  { label: 'Active Projects', value: '3', color: 'var(--clr-blue)' },
  { label: 'Messages', value: '5', color: 'var(--clr-gold)' },
  { label: 'Invoices', value: '2', color: 'var(--clr-green)' },
]

const RECENT_ACTIVITY = [
  { text: 'Security audit completed for CryptoVault', time: '2 hours ago', icon: '🛡️' },
  { text: 'New design mockup uploaded for TradeX', time: '1 day ago', icon: '🎨' },
  { text: 'Payment received — Invoice #1042', time: '3 days ago', icon: '💳' },
  { text: 'Vello app v2.1 deployed to production', time: '1 week ago', icon: '🚀' },
]

export default function DashboardPage() {
  return (
    <div className="dashboard-page">
      <div className="container">
        {/* Header */}
        <motion.div
          className="dashboard-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
            <div>
              <h1 className="dashboard-greeting">
                Welcome back 👋
              </h1>
              <p style={{ color: 'var(--text-secondary)' }}>
                Here&apos;s what&apos;s happening with your projects.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
              <button className="btn btn-ghost" id="dashboard-notifications">
                <Bell size={18} />
              </button>
              <button className="btn btn-ghost" id="dashboard-settings">
                <Settings size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 'var(--space-lg)', marginBottom: 'var(--space-3xl)' }}>
          {QUICK_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card"
              style={{ padding: 'var(--space-xl)', textAlign: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div style={{ fontSize: 'var(--fs-4xl)', fontWeight: 800, color: stat.color, fontFamily: 'var(--font-heading)' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', marginTop: 'var(--space-xs)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Grid */}
        <div className="dashboard-grid">
          {/* Recent Activity */}
          <motion.div
            className="glass-card dashboard-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="dashboard-card-title">Recent Activity</h3>
            {RECENT_ACTIVITY.map((activity, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-md)',
                  padding: 'var(--space-md) 0',
                  borderBottom: i < RECENT_ACTIVITY.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{activity.icon}</span>
                <div>
                  <div style={{ fontSize: 'var(--fs-sm)' }}>{activity.text}</div>
                  <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)', marginTop: '2px' }}>{activity.time}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            className="glass-card dashboard-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="dashboard-card-title">Quick Actions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              {[
                { icon: FolderOpen, label: 'View Projects', href: '/portfolio' },
                { icon: MessageSquare, label: 'Send Message', href: '/contact' },
                { icon: CreditCard, label: 'View Plans', href: '/pricing' },
                { icon: LayoutDashboard, label: 'Admin Panel', href: '/admin' },
              ].map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className="btn btn-ghost"
                  style={{
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                    <action.icon size={16} /> {action.label}
                  </span>
                  <ArrowUpRight size={14} style={{ opacity: 0.5 }} />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Project Status */}
          <motion.div
            className="glass-card dashboard-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="dashboard-card-title">Active Projects</h3>
            {[
              { name: 'Vello Finance App', status: 'In Development', progress: 75, color: 'var(--clr-blue)' },
              { name: 'TradeX Dashboard', status: 'Design Review', progress: 40, color: 'var(--clr-gold)' },
              { name: 'SecAudit Platform', status: 'Testing', progress: 90, color: 'var(--clr-green)' },
            ].map((project, i) => (
              <div
                key={project.name}
                style={{
                  padding: 'var(--space-md) 0',
                  borderBottom: i < 2 ? '1px solid var(--border-subtle)' : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: 'var(--fs-sm)', fontWeight: 500 }}>{project.name}</span>
                  <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)' }}>{project.status}</span>
                </div>
                <div style={{
                  width: '100%',
                  height: '4px',
                  background: 'var(--bg-glass-strong)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    width: `${project.progress}%`,
                    height: '100%',
                    background: project.color,
                    borderRadius: '2px',
                    transition: 'width 1s ease',
                  }} />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Info Banner */}
        <motion.div
          className="glass-card"
          style={{
            padding: 'var(--space-xl)',
            marginTop: 'var(--space-3xl)',
            textAlign: 'center',
            borderColor: 'rgba(59,130,246,0.2)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--fs-sm)' }}>
            🔒 This dashboard will be fully functional once Supabase authentication is configured.
            <br />
            Add your Supabase credentials to <code style={{ color: 'var(--clr-blue)' }}>.env.local</code> to enable auth.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
