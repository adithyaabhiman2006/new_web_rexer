'use client'
import { useEffect, useRef } from 'react'

export default function AuroraBackground({ children, className = '', style = {} }) {
  const containerRef = useRef(null)

  useEffect(() => {
    // Organic harmonic motion via CSS custom properties
    let frame
    let t = 0
    const animate = () => {
      t += 0.003
      if (containerRef.current) {
        containerRef.current.style.setProperty('--aurora-x1', `${50 + Math.sin(t * 0.7) * 25}%`)
        containerRef.current.style.setProperty('--aurora-y1', `${30 + Math.cos(t * 0.5) * 20}%`)
        containerRef.current.style.setProperty('--aurora-x2', `${50 + Math.cos(t * 0.6) * 30}%`)
        containerRef.current.style.setProperty('--aurora-y2', `${60 + Math.sin(t * 0.8) * 25}%`)
        containerRef.current.style.setProperty('--aurora-x3', `${40 + Math.sin(t * 0.9) * 20}%`)
        containerRef.current.style.setProperty('--aurora-y3', `${50 + Math.cos(t * 0.4) * 30}%`)
      }
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div
      ref={containerRef}
      className={`aurora-bg ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Blob 1 — Amber Gold */}
      <div
        className="aurora-blob"
        style={{
          position: 'absolute',
          width: '60%',
          height: '60%',
          left: 'var(--aurora-x1, 50%)',
          top: 'var(--aurora-y1, 30%)',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.16) 0%, transparent 70%)',
          filter: 'blur(80px)',
          mixBlendMode: 'screen',
          pointerEvents: 'none',
        }}
      />
      {/* Blob 2 — Electric Violet */}
      <div
        className="aurora-blob"
        style={{
          position: 'absolute',
          width: '55%',
          height: '55%',
          left: 'var(--aurora-x2, 50%)',
          top: 'var(--aurora-y2, 60%)',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          filter: 'blur(90px)',
          mixBlendMode: 'screen',
          pointerEvents: 'none',
        }}
      />
      {/* Blob 3 — Luminescent Sage */}
      <div
        className="aurora-blob"
        style={{
          position: 'absolute',
          width: '50%',
          height: '50%',
          left: 'var(--aurora-x3, 40%)',
          top: 'var(--aurora-y3, 50%)',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          mixBlendMode: 'screen',
          pointerEvents: 'none',
        }}
      />
      {/* Content rendered above aurora */}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  )
}
