'use client'
import { useEffect, useRef, useState } from 'react'

export default function LetterPullup({ text = '', className = '', delay = 0.04, as: Tag = 'div' }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const letters = text.split('')

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ display: 'inline-flex', flexWrap: 'wrap', overflow: 'hidden' }}
    >
      {letters.map((letter, i) => (
        <span
          key={`${letter}-${i}`}
          style={{
            display: 'inline-block',
            transform: isVisible ? 'translateY(0)' : 'translateY(110%)',
            opacity: isVisible ? 1 : 0,
            transition: `transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${i * delay}s, opacity 0.4s ease ${i * delay}s`,
            whiteSpace: letter === ' ' ? 'pre' : 'normal',
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </Tag>
  )
}
