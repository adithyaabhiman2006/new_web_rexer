'use client'

export default function StarBorder({
  children,
  className = '',
  color = '#00F0FF',
  speed = '6s',
  radius = 'var(--radius-md)',
  style = {},
}) {
  return (
    <div
      className={`star-border-wrapper ${className}`}
      style={{
        position: 'relative',
        borderRadius: radius,
        overflow: 'hidden',
        padding: '1px',
        ...style,
      }}
    >
      {/* Animated conic gradient border */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: radius,
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${color} 60deg, transparent 120deg, transparent 360deg)`,
          animation: `star-rotate ${speed} linear infinite`,
          opacity: 0.7,
        }}
      />
      {/* Static subtle border fallback */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: radius,
          background: `linear-gradient(135deg, ${color}22 0%, transparent 40%, transparent 60%, ${color}22 100%)`,
        }}
      />
      {/* Content area */}
      <div
        style={{
          position: 'relative',
          borderRadius: `calc(${radius} - 1px)`,
          background: 'var(--bg-secondary, #080E1A)',
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  )
}
