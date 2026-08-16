'use client'
import { useRef, useState, useCallback, useEffect } from 'react'

export default function TextPressure({
  text = 'Hello',
  className = '',
  fontFamily = 'var(--font-hero)',
  minWeight = 100,
  maxWeight = 900,
  minWidth = 75,
  maxWidth = 125,
  radius = 200,
  style = {},
}) {
  const containerRef = useRef(null)
  const [charStyles, setCharStyles] = useState([])
  const frameRef = useRef(null)
  const mousePos = useRef({ x: -9999, y: -9999 })
  const charRefs = useRef([])

  const updateStyles = useCallback(() => {
    if (!containerRef.current || !charRefs.current.length) return

    const mx = mousePos.current.x
    const my = mousePos.current.y

    const newStyles = charRefs.current.map((charEl) => {
      if (!charEl) return { fontWeight: minWeight, fontStretch: `${minWidth}%` }

      const rect = charEl.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dist = Math.sqrt((mx - cx) ** 2 + (my - cy) ** 2)
      const proximity = Math.max(0, 1 - dist / radius)
      const eased = proximity * proximity

      const weight = Math.round(minWeight + (maxWeight - minWeight) * eased)
      const width = Math.round(minWidth + (maxWidth - minWidth) * eased)

      return {
        fontWeight: weight,
        fontStretch: `${width}%`,
      }
    })

    setCharStyles(newStyles)
    frameRef.current = requestAnimationFrame(updateStyles)
  }, [minWeight, maxWeight, minWidth, maxWidth, radius])

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseLeave = () => {
      mousePos.current = { x: -9999, y: -9999 }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    frameRef.current = requestAnimationFrame(updateStyles)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [updateStyles])

  const chars = text.split('')

  return (
    <span
      ref={containerRef}
      className={className}
      style={{
        display: 'inline-flex',
        flexWrap: 'wrap',
        fontFamily,
        cursor: 'default',
        userSelect: 'none',
        ...style,
      }}
    >
      {chars.map((char, i) => (
        <span
          key={`${char}-${i}`}
          ref={(el) => (charRefs.current[i] = el)}
          style={{
            display: 'inline-block',
            fontWeight: charStyles[i]?.fontWeight || minWeight,
            fontStretch: charStyles[i]?.fontStretch || `${minWidth}%`,
            transition: 'font-weight 0.15s ease, font-stretch 0.15s ease',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
            lineHeight: 1.1,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}
