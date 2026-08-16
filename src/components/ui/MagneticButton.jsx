'use client'
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { soundFx } from './soundEffects'

export default function MagneticButton({
  children,
  className = '',
  distance = 0.35,
  onClick,
  style = {},
  ...props
}) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * distance, y: middleY * distance })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onMouseEnter={() => soundFx.playHover()}
      onClick={(e) => {
        soundFx.playClick()
        if (onClick) onClick(e)
      }}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 20, mass: 0.5 }}
      className={`inline-block ${className}`}
      style={{ display: 'inline-block', ...style }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
