'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  PenSquare, Trash2, Eye, Plus, Save,
  FileText, MessageSquare, FolderOpen, Settings
} from 'lucide-react'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

const TABS = [
  { id: 'posts', label: 'Blog Posts', icon: FileText },
  { id: 'messages', label: 'Messages', icon: MessageSquare },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
]

const SAMPLE_MESSAGES = [
  { id: 1, name: 'John Doe', email: 'john@example.com', service: 'Mobile Dev', message: 'Looking to build a fintech app...', read: false, date: '2025-03-15' },
  { id: 2, name: 'Sarah Chen', email: 'sarah@finvault.com', service: 'Pentesting', message: 'Need a security audit for our platform...', read: true, date: '2025-03-14' },
  { id: 3, name: 'Mike Johnson', email: 'mike@trading.io', service: 'UI/UX', message: 'Redesigning our trading dashboard...', read: false, date: '2025-03-12' },
]

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('posts')
  const posts = getAllPosts()

  return (
    <div className="dashboard-page">
      <div className="container">
        <motion.div
          className="dashboard-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="dashboard-greeting">Admin Panel</h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Manage your blog, messages, and projects.
          </p>
        </motion.div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 'var(--space-sm)', marginBottom: 'var(--space-2xl)', flexWrap: 'wrap' }}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`filter-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              id={`admin-tab-${tab.id}`}
            >
              <tab.icon size={14} style={{ marginRight: '6px' }} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Blog Posts Tab */}
        {activeTab === 'posts' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-xl)' }}>
              <h3 style={{ fontSize: 'var(--fs-xl)', fontWeight: 700 }}>Blog Posts ({posts.length})</h3>
              <button className="btn btn-primary btn-sm" id="admin-new-post">
                <Plus size={14} /> New Post
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {posts.map(post => (
                <div
                  key={post.slug}
                  className="glass-card"
                  style={{
                    padding: 'var(--space-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 'var(--space-md)',
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <h4 style={{ fontSize: 'var(--fs-sm)', fontWeight: 600, marginBottom: '4px' }}>{post.title}</h4>
                    <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)', display: 'flex', gap: 'var(--space-md)' }}>
                      <span>{post.created_at}</span>
                      <span className="service-tag">{post.category}</span>
                      <span style={{ color: post.published ? 'var(--clr-green)' : 'var(--clr-gold)' }}>
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--space-xs)' }}>
                    <Link href={`/blog/${post.slug}`} className="btn btn-ghost btn-sm">
                      <Eye size={14} />
                    </Link>
                    <button className="btn btn-ghost btn-sm">
                      <PenSquare size={14} />
                    </button>
                    <button className="btn btn-ghost btn-sm" style={{ color: 'var(--clr-red)' }}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 style={{ fontSize: 'var(--fs-xl)', fontWeight: 700, marginBottom: 'var(--space-xl)' }}>
              Messages ({SAMPLE_MESSAGES.length})
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {SAMPLE_MESSAGES.map(msg => (
                <div
                  key={msg.id}
                  className="glass-card"
                  style={{
                    padding: 'var(--space-lg)',
                    borderLeft: msg.read ? 'none' : '3px solid var(--clr-blue)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-sm)', flexWrap: 'wrap' }}>
                    <div>
                      <span style={{ fontWeight: 600, fontSize: 'var(--fs-sm)' }}>{msg.name}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-xs)', marginLeft: 'var(--space-sm)' }}>
                        {msg.email}
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center' }}>
                      <span className="service-tag">{msg.service}</span>
                      <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)' }}>{msg.date}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-secondary)' }}>{msg.message}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-xl)' }}>
              <h3 style={{ fontSize: 'var(--fs-xl)', fontWeight: 700 }}>Projects</h3>
              <button className="btn btn-primary btn-sm" id="admin-new-project">
                <Plus size={14} /> New Project
              </button>
            </div>

            <div className="glass-card" style={{ padding: 'var(--space-2xl)', textAlign: 'center' }}>
              <FolderOpen size={40} style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-lg)', margin: '0 auto var(--space-lg)' }} />
              <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
                Project management will be available once Supabase is connected.
              </p>
              <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)' }}>
                You&apos;ll be able to create, edit, and manage portfolio projects from here.
              </p>
            </div>
          </motion.div>
        )}

        {/* Info Banner */}
        <motion.div
          className="glass-card"
          style={{
            padding: 'var(--space-xl)',
            marginTop: 'var(--space-3xl)',
            textAlign: 'center',
            borderColor: 'rgba(245,166,35,0.2)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--fs-sm)' }}>
            ⚡ Admin features (create/edit/delete) will be fully functional once Supabase is configured.
            <br />
            Currently displaying placeholder data for demonstration.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
