'use client'
import React from 'react'

export default function ShinyText({
  text,
  disabled = false,
  speed = 5,
  className = '',
  color = '#00f0ff',
  shimmerColor = '#ffffff',
  style = {},
  ...props
}) {
  const animationDuration = `${speed}s`

  return (
    <span
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{
        display: 'inline-block',
        backgroundImage: `linear-gradient(120deg, ${color} 0%, ${color} 35%, ${shimmerColor} 50%, ${color} 65%, ${color} 100%)`,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: disabled ? 'none' : `shine ${animationDuration} linear infinite`,
        ...style,
      }}
      {...props}
    >
      {text}
    </span>
  )
}
