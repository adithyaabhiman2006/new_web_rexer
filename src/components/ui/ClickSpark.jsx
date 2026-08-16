'use client'
import { useCallback, useEffect, useRef } from 'react'

export default function ClickSpark({ children, sparkColor = '#00F0FF', sparkCount = 10 }) {
  const canvasRef = useRef(null)
  const sparksRef = useRef([])
  const frameRef = useRef(null)

  const createSparks = useCallback((x, y) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const cx = x - rect.left
    const cy = y - rect.top

    for (let i = 0; i < sparkCount; i++) {
      const angle = (Math.PI * 2 * i) / sparkCount + (Math.random() - 0.5) * 0.5
      const velocity = 2 + Math.random() * 4
      sparksRef.current.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        life: 1,
        decay: 0.015 + Math.random() * 0.02,
        size: 1.5 + Math.random() * 2.5,
      })
    }
  }, [sparkCount])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let running = true

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const handleClick = (e) => {
      createSparks(e.clientX, e.clientY)
    }
    window.addEventListener('click', handleClick)

    const animate = () => {
      if (!running) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      sparksRef.current = sparksRef.current.filter((s) => s.life > 0)

      sparksRef.current.forEach((s) => {
        ctx.save()
        ctx.globalAlpha = s.life * 0.9
        ctx.fillStyle = sparkColor
        ctx.shadowColor = sparkColor
        ctx.shadowBlur = 6 * s.life
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        s.x += s.vx
        s.y += s.vy
        s.vy += 0.12 // gravity
        s.vx *= 0.98 // friction
        s.life -= s.decay
      })

      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      running = false
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('click', handleClick)
    }
  }, [sparkColor, createSparks])

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
      {children}
    </>
  )
}
