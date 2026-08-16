'use client'
import { motion } from 'framer-motion'
import { BookOpen, Calendar, Clock, ArrowRight, Shield, Terminal, Zap } from 'lucide-react'
import Link from 'next/link'
import { getAllPosts, getAllCategories } from '@/lib/blog'
import { useState } from 'react'
import SpotlightCard from '@/components/ui/SpotlightCard'
import DecryptedText from '@/components/ui/DecryptedText'
import ShinyText from '@/components/ui/ShinyText'
import LetterPullup from '@/components/ui/LetterPullup'
import StarBorder from '@/components/ui/StarBorder'

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? posts
    : posts.filter((p) => p.category === filter)

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
            <Terminal size={12} /> Threat Intelligence & CVE Research
          </motion.div>
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Threat <ShinyText text="Intel Journal" color="#F59E0B" shimmerColor="#ffffff" speed={3.5} />
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <DecryptedText
              text="Offensive security teardowns, Flutter Secure Enclave whitepapers, and high-frequency fintech architecture patterns."
              animateOn="view"
              speed={25}
            />
          </motion.p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Filter bar */}
          <div className="portfolio-filter-bar" id="blog-filters" style={{ justifyContent: 'center', marginBottom: '3rem' }}>
            <button
              className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
              onClick={() => setFilter('All')}
            >
              All Research
            </button>
            {categories.map((cat) => (
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {filtered.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{ height: '100%' }}
              >
                <Link href={`/blog/${post.slug}`} style={{ display: 'block', textDecoration: 'none', height: '100%' }}>
                  <SpotlightCard
                    spotlightColor="rgba(245, 158, 11, 0.16)"
                    tilt={true}
                    maxTilt={6}
                    style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}
                    id={`blog-card-${post.slug}`}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          color: 'var(--cyan-bright)',
                          background: 'rgba(245, 158, 11, 0.1)',
                          border: '1px solid rgba(245, 158, 11, 0.25)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '4px',
                          textTransform: 'uppercase',
                        }}
                      >
                        {post.category}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={12} /> {post.read_time}
                        </span>
                      </div>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.3rem',
                        fontWeight: 700,
                        color: 'var(--text-pure)',
                        lineHeight: 1.35,
                        marginBottom: '0.85rem',
                      }}
                    >
                      {post.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.88rem',
                        lineHeight: 1.6,
                        color: 'var(--text-secondary)',
                        marginBottom: '1.5rem',
                        flex: 1,
                      }}
                    >
                      {post.excerpt}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '1rem',
                        borderTop: '1px solid rgba(59, 130, 246, 0.1)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      <span>{post.created_at}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--cyan-bright)', fontWeight: 600 }}>
                        Read Intelligence <ArrowRight size={13} />
                      </span>
                    </div>
                  </SpotlightCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
