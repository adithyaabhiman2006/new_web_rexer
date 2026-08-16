'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Shield,
  Terminal,
  Layers,
  Calculator,
  Crown,
  Send,
  Volume2,
  VolumeX,
  FileCode2,
  Sparkles,
  ArrowUp,
} from 'lucide-react'
import { soundFx } from './soundEffects'

const DOCK_ITEMS = [
  { href: '/#hero', label: 'Kernel', icon: Shield, shortcut: '1' },
  { href: '/#protocols', label: 'Protocols', icon: Layers, shortcut: '2' },
  { href: '/#live-scanner', label: 'Scanner', icon: Terminal, shortcut: '3' },
  { href: '/portfolio', label: 'Case Studies', icon: FileCode2, shortcut: '4' },
  { href: '/#calculator', label: 'Estimator', icon: Calculator, shortcut: '5' },
  { href: '/pricing', label: 'Investment', icon: Crown, shortcut: '6' },
  { href: '/contact', label: 'Commence', icon: Send, shortcut: '7' },
]

export default function CyberDock() {
  const [isMuted, setIsMuted] = useState(false)
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleAudio = () => {
    const nextState = soundFx.toggleMute()
    setIsMuted(nextState)
    if (!nextState) soundFx.playSuccess()
  }

  const scrollToTop = () => {
    soundFx.playClick()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className="cyber-dock-container"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 99,
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '0.4rem 0.6rem',
        background: 'rgba(6, 12, 26, 0.85)',
        border: '1px solid rgba(0, 240, 255, 0.25)',
        borderRadius: '20px',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6), 0 0 20px -5px rgba(0, 240, 255, 0.25)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {DOCK_ITEMS.map((item, idx) => {
        const Icon = item.icon
        const isHovered = hoveredIdx === idx
        const isNeighbour =
          hoveredIdx !== null && Math.abs(hoveredIdx - idx) === 1
        const scale = isHovered ? 1.3 : isNeighbour ? 1.15 : 1
        const active = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            onMouseEnter={() => {
              setHoveredIdx(idx)
              soundFx.playHover()
            }}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => soundFx.playClick()}
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              color: active ? 'var(--cyan-bright)' : 'var(--text-secondary)',
              background: active
                ? 'rgba(0, 240, 255, 0.15)'
                : isHovered
                ? 'rgba(255, 255, 255, 0.08)'
                : 'transparent',
              border: active
                ? '1px solid rgba(0, 240, 255, 0.3)'
                : '1px solid transparent',
              textDecoration: 'none',
              transform: `scale(${scale})`,
              transformOrigin: 'bottom center',
              transition: 'all 0.2s cubic-bezier(0.2, 1, 0.3, 1)',
            }}
            id={`dock-item-${item.label.toLowerCase()}`}
          >
            <Icon size={18} />

            {/* Hover Tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: -38, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    padding: '0.2rem 0.5rem',
                    borderRadius: '6px',
                    background: '#040814',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: 'var(--cyan-bright)',
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {item.label}
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
        )
      })}

      <div
        style={{
          width: '1px',
          height: '24px',
          background: 'rgba(59, 130, 246, 0.2)',
          margin: '0 0.2rem',
        }}
      />

      {/* Audio Haptics Toggle Button */}
      <button
        onClick={toggleAudio}
        aria-label="Toggle Audio Feedback"
        title={isMuted ? 'Unmute Audio Haptics' : 'Mute Audio Haptics'}
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          background: isMuted ? 'rgba(255, 68, 68, 0.1)' : 'rgba(0, 240, 255, 0.08)',
          color: isMuted ? 'var(--crimson-alert)' : 'var(--cyan-bright)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        className="hover:scale-110 active:scale-95"
        id="dock-audio-toggle"
      >
        {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
      </button>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Return to top"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            border: '1px solid rgba(0, 255, 136, 0.3)',
            background: 'rgba(0, 255, 136, 0.1)',
            color: 'var(--emerald-neon)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          className="hover:scale-110 active:scale-95"
          id="dock-scroll-top"
        >
          <ArrowUp size={15} />
        </button>
      )}
    </div>
  )
}
