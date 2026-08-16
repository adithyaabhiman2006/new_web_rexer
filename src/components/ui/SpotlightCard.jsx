'use client'
import React, { useRef, useState } from 'react'
import { soundFx } from './soundEffects'

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(0, 240, 255, 0.16)',
  borderColor = 'rgba(0, 240, 255, 0.3)',
  bracketCorners = true,
  tilt = false,
  maxTilt = 8,
  onClick,
  style = {},
  ...props
}) {
  const divRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)')

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return

    const rect = divRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setPosition({ x, y })

    if (tilt) {
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -maxTilt
      const rotateY = ((x - centerX) / centerX) * maxTilt
      setTransformStyle(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`)
    }
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
    soundFx.playHover()
  }

  const handleMouseLeave = () => {
    setOpacity(0)
    if (tilt) {
      setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
    }
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => {
        soundFx.playClick()
        if (onClick) onClick(e)
      }}
      className={`spotlight-card ${className}`}
      style={{
        position: 'relative',
        borderRadius: '16px',
        border: '1px solid rgba(59, 130, 246, 0.15)',
        background: 'linear-gradient(135deg, rgba(8, 16, 32, 0.85) 0%, rgba(4, 8, 18, 0.95) 100%)',
        overflow: 'hidden',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        transform: tilt ? transformStyle : 'none',
        transition: tilt ? 'transform 0.15s ease-out, box-shadow 0.3s ease' : 'border-color 0.3s ease, box-shadow 0.3s ease',
        transformStyle: 'preserve-3d',
        ...style,
      }}
      {...props}
    >
      {/* Specular Spotlight Radial Glow */}
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          opacity,
          transition: 'opacity 0.3s ease',
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
          zIndex: 1,
        }}
      />

      {/* Cyber Bracket Corners */}
      {bracketCorners && (
        <>
          <div className="bracket-corner bracket-tl" style={{ zIndex: 3 }} />
          <div className="bracket-corner bracket-tr" style={{ zIndex: 3 }} />
          <div className="bracket-corner bracket-bl" style={{ zIndex: 3 }} />
          <div className="bracket-corner bracket-br" style={{ zIndex: 3 }} />
        </>
      )}

      {/* Card Content Container */}
      <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>
        {children}
      </div>
    </div>
  )
}
