'use client'
import { motion } from 'framer-motion'
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { getAllPosts, getAllCategories } from '@/lib/blog'
import { useState } from 'react'

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? posts
    : posts.filter(p => p.category === filter)

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
            <BookOpen size={12} /> Insights
          </motion.div>
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The Rexer <span className="text-gradient-blue">Blog</span>
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Deep dives into cybersecurity, Flutter development,
            and fintech design.
          </motion.p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Filter bar */}
          <div className="portfolio-filter-bar" id="blog-filters">
            <button
              className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
              onClick={() => setFilter('All')}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog grid */}
          <div className="blog-grid">
            {filtered.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link href={`/blog/${post.slug}`} style={{ display: 'block' }}>
                  <div className="glass-card blog-card" id={`blog-card-${post.slug}`}>
                    <div className="blog-card-image" style={{
                      background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.08))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <BookOpen size={40} style={{ opacity: 0.2 }} />
                    </div>
                    <div style={{ padding: 'var(--space-lg)' }}>
                      <div className="blog-card-meta">
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Calendar size={12} /> {post.created_at}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={12} /> {post.read_time}
                        </span>
                        <span className="service-tag" style={{ marginLeft: 'auto' }}>
                          {post.category}
                        </span>
                      </div>
                      <h3 className="blog-card-title">{post.title}</h3>
                      <p className="blog-card-excerpt">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
