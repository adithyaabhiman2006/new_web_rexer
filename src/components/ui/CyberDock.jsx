'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  Layers, 
  ShieldCheck, 
  Terminal, 
  Send, 
  ArrowUp,
  Volume2,
  VolumeX,
  Sparkles
} from 'lucide-react'
import { soundFx } from '@/components/ui/soundEffects'

const DOCK_ITEMS = [
  { href: '/', label: 'System OS', icon: Home },
  { href: '/portfolio', label: 'Case Studies', icon: Layers },
  { href: '/pricing', label: 'Investment', icon: ShieldCheck },
  { href: '/blog', label: 'Threat Intel', icon: Terminal },
  { href: '/contact', label: 'Commence', icon: Send },
]

export default function CyberDock() {
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const [isMuted, setIsMuted] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    setIsMuted(soundFx.muted)
  }, [])

  const toggleAudio = () => {
    const newState = soundFx.toggleMute()
    setIsMuted(newState)
    if (!newState) {
      soundFx.playPowerUp()
    }
  }

  const scrollToTop = () => {
    soundFx.playClick()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!mounted) return null

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
        background: 'rgba(17, 20, 28, 0.85)',
        border: '1px solid rgba(245, 158, 11, 0.25)',
        borderRadius: '20px',
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.65), 0 0 25px -5px rgba(245, 158, 11, 0.2)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
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
                ? 'rgba(245, 158, 11, 0.15)'
                : isHovered
                ? 'rgba(255, 255, 255, 0.08)'
                : 'transparent',
              border: active
                ? '1px solid rgba(245, 158, 11, 0.35)'
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
                    padding: '0.2rem 0.55rem',
                    borderRadius: '6px',
                    background: '#0B0D12',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: 'var(--cyan-bright)',
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.6)',
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
          background: 'rgba(255, 255, 255, 0.12)',
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
          border: '1px solid rgba(255, 255, 255, 0.1)',
          background: isMuted ? 'rgba(244, 63, 94, 0.12)' : 'rgba(245, 158, 11, 0.08)',
          color: isMuted ? 'var(--crimson-alert)' : 'var(--cyan-bright)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to Top"
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(255, 255, 255, 0.04)',
          color: 'var(--text-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--cyan-bright)'
          e.currentTarget.style.borderColor = 'var(--cyan-bright)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--text-secondary)'
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
        }}
      >
        <ArrowUp size={16} />
      </button>
    </div>
  )
}
