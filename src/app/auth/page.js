'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, ArrowRight, ShieldCheck, Github } from 'lucide-react'
import Link from 'next/link'

export default function AuthPage() {
  const [mode, setMode] = useState('login') // 'login' | 'signup'
  const [form, setForm] = useState({ email: '', password: '', name: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    // Placeholder — connect to Supabase Auth when ready
    setTimeout(() => {
      setLoading(false)
      setStatus({
        type: 'success',
        message: mode === 'login'
          ? 'Login functionality will be available once Supabase is connected.'
          : 'Signup functionality will be available once Supabase is connected.',
      })
    }, 1000)
  }

  return (
    <div className="auth-page">
      <motion.div
        className="glass-card auth-card"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        id="auth-card"
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'block', textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--fs-2xl)',
            fontWeight: 800,
            letterSpacing: '0.05em',
          }}>
            REX<span style={{ color: 'var(--clr-blue)' }}>ER</span>
          </span>
        </Link>

        <h1 className="auth-title">
          {mode === 'login' ? 'Welcome Back' : 'Create Account'}
        </h1>
        <p className="auth-subtitle">
          {mode === 'login'
            ? 'Sign in to access your dashboard'
            : 'Join Rexer Studio to get started'}
        </p>

        {/* OAuth Buttons */}
        <button
          className="btn btn-outline"
          style={{ width: '100%', justifyContent: 'center' }}
          id="auth-google"
          onClick={() => setStatus({ type: 'success', message: 'OAuth will be available once Supabase is connected.' })}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <button
          className="btn btn-outline"
          style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--space-sm)' }}
          id="auth-github"
          onClick={() => setStatus({ type: 'success', message: 'OAuth will be available once Supabase is connected.' })}
        >
          <Github size={18} />
          Continue with GitHub
        </button>

        <div className="auth-divider">or</div>

        {/* Email form */}
        <form onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div className="form-group">
              <label className="form-label" htmlFor="auth-name">Full Name</label>
              <input
                id="auth-name"
                type="text"
                className="form-input"
                placeholder="Your name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label className="form-label" htmlFor="auth-email">Email</label>
            <input
              id="auth-email"
              type="email"
              className="form-input"
              placeholder="you@example.com"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="auth-password">Password</label>
            <input
              id="auth-password"
              type="password"
              className="form-input"
              placeholder="••••••••"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              required
              minLength={8}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg"
            style={{ width: '100%', justifyContent: 'center' }}
            disabled={loading}
            id="auth-submit"
          >
            {loading ? 'Please wait...' : (
              <>
                {mode === 'login' ? 'Sign In' : 'Create Account'}
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        {status && (
          <div className={`form-status ${status.type}`} style={{ marginTop: 'var(--space-md)' }}>
            {status.message}
          </div>
        )}

        <div className="auth-toggle">
          {mode === 'login' ? (
            <>
              Don&apos;t have an account?{' '}
              <button onClick={() => { setMode('signup'); setStatus(null) }}>
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button onClick={() => { setMode('login'); setStatus(null) }}>
                Sign in
              </button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  )
}
