'use client'
import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const CHARS = 'ABCDEF0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~`'

export default function DecryptedText({
  text,
  speed = 40,
  maxIterations = 12,
  sequential = true,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = CHARS,
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover', // 'view' | 'hover' | 'both'
  ...props
}) {
  const [displayText, setDisplayText] = useState(text)
  const [isHovering, setIsHovering] = useState(false)
  const [isScrambling, setIsScrambling] = useState(false)
  const [revealedIndices, setRevealedIndices] = useState(new Set())
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef(null)

  const availableChars = useOriginalCharsOnly
    ? Array.from(new Set(text.split(''))).filter((char) => char !== ' ')
    : characters.split('')

  const shuffleText = (originalText, currentRevealed) => {
    return originalText
      .split('')
      .map((char, i) => {
        if (char === ' ') return ' '
        if (currentRevealed.has(i)) return originalText[i]
        return availableChars[Math.floor(Math.random() * availableChars.length)]
      })
      .join('')
  }

  const triggerAnimation = () => {
    if (isScrambling) return
    setIsScrambling(true)
    let currentIteration = 0

    const interval = setInterval(() => {
      setRevealedIndices((prevRevealed) => {
        if (sequential) {
          if (prevRevealed.size < text.length) {
            const nextIndex =
              revealDirection === 'start'
                ? prevRevealed.size
                : revealDirection === 'end'
                ? text.length - 1 - prevRevealed.size
                : Math.floor(Math.random() * text.length)
            const nextRevealed = new Set(prevRevealed)
            nextRevealed.add(nextIndex)
            setDisplayText(shuffleText(text, nextRevealed))
            return nextRevealed
          } else {
            clearInterval(interval)
            setIsScrambling(false)
            setDisplayText(text)
            return prevRevealed
          }
        } else {
          setDisplayText(shuffleText(text, prevRevealed))
          currentIteration++
          if (currentIteration >= maxIterations) {
            clearInterval(interval)
            setIsScrambling(false)
            setDisplayText(text)
          }
          return prevRevealed
        }
      })
    }, speed)
  }

  useEffect(() => {
    if (animateOn === 'view' || animateOn === 'both') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              triggerAnimation()
              setHasAnimated(true)
            }
          })
        },
        { threshold: 0.2 }
      )

      if (containerRef.current) {
        observer.observe(containerRef.current)
      }

      return () => observer.disconnect()
    }
  }, [animateOn, hasAnimated, text])

  return (
    <motion.span
      ref={containerRef}
      className={`decrypted-text-container ${parentClassName}`}
      onMouseEnter={() => {
        if (animateOn === 'hover' || animateOn === 'both') {
          setIsHovering(true)
          setRevealedIndices(new Set())
          triggerAnimation()
        }
      }}
      onMouseLeave={() => setIsHovering(false)}
      style={{ display: 'inline-block', whiteSpace: 'pre-wrap', cursor: 'default' }}
      {...props}
    >
      <span className={className}>
        {displayText.split('').map((char, index) => {
          const isRevealedOrDone =
            revealedIndices.has(index) || !isScrambling || char === ' '
          return (
            <span
              key={index}
              className={isRevealedOrDone ? '' : encryptedClassName || 'text-cyan-400 opacity-80'}
              style={{
                fontFamily: isRevealedOrDone ? 'inherit' : 'var(--font-mono)',
                color: isRevealedOrDone ? 'inherit' : 'var(--cyan-bright)',
                transition: 'color 0.15s ease',
              }}
            >
              {char}
            </span>
          )
        })}
      </span>
    </motion.span>
  )
}
