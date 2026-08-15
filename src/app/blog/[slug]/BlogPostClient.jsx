'use client'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import Link from 'next/link'

export default function BlogPostClient({ post }) {
  if (!post) {
    return (
      <div className="blog-post" style={{ textAlign: 'center', paddingTop: 'calc(var(--nav-height) + 8rem)' }}>
        <h1 style={{ fontSize: 'var(--fs-3xl)', marginBottom: 'var(--space-lg)' }}>Post Not Found</h1>
        <p className="text-muted" style={{ marginBottom: 'var(--space-xl)' }}>
          The blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/blog" className="btn btn-primary">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <article className="blog-post">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/blog"
            className="btn btn-ghost"
            style={{ marginBottom: 'var(--space-2xl)', display: 'inline-flex' }}
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="blog-post-header">
            <span className="service-tag" style={{ marginBottom: 'var(--space-md)', display: 'inline-block' }}>
              {post.category}
            </span>
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-meta">
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={14} /> {post.author}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={14} /> {post.created_at}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={14} /> {post.read_time}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="blog-post-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          dangerouslySetInnerHTML={{
            __html: post.content
              .replace(/^## (.*$)/gim, '<h2>$1</h2>')
              .replace(/^### (.*$)/gim, '<h3>$1</h3>')
              .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/\*(.*?)\*/g, '<em>$1</em>')
              .replace(/`(.*?)`/g, '<code>$1</code>')
              .replace(/^- (.*$)/gim, '<li>$1</li>')
              .replace(/^(\d+)\. (.*$)/gim, '<li>$2</li>')
              .replace(/\n\n/g, '</p><p>')
              .replace(/^(?!<[hluop])/gim, '<p>')
          }}
        />

        {/* Back CTA */}
        <div style={{
          textAlign: 'center',
          padding: 'var(--space-4xl) 0',
          borderTop: '1px solid var(--border-subtle)',
          marginTop: 'var(--space-4xl)',
        }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
            Want to work with us?
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </article>
  )
}
