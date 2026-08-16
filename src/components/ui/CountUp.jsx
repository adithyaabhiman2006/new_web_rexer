'use client'
import { useEffect, useRef, useState, useCallback } from 'react'

export default function CountUp({
  end = 100,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
  style = {},
}) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)
  const rafRef = useRef(null)

  const easeOutExpo = useCallback((t) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutExpo(progress)
      const currentValue = easedProgress * end

      setCount(currentValue)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [hasStarted, end, duration, easeOutExpo])

  const formattedValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count)

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{formattedValue}{suffix}
    </span>
  )
}
