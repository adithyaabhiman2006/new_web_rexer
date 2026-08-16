'use client'

export default function ShinyText({
  text = '',
  disabled = false,
  speed = 4,
  className = '',
  color = '#F59E0B',
  shimmerColor = '#FFFFFF',
  style = {},
}) {
  const animationDuration = `${speed}s`

  return (
    <span
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{
        backgroundImage: `linear-gradient(120deg, ${color} 0%, ${color} 40%, ${shimmerColor} 50%, ${color} 60%, ${color} 100%)`,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: disabled ? 'none' : `shine ${animationDuration} linear infinite`,
        display: 'inline-block',
        ...style,
      }}
    >
      {text}
    </span>
  )
}
