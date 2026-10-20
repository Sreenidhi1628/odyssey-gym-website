import React, { useEffect, useRef } from 'react'

export default function EmberCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Check prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // Particle pool
    const particleCount = Math.min(Math.floor(window.innerWidth / 40), 45)
    const particles = []

    const colors = [
      'rgba(193, 18, 31, ', // blood red
      'rgba(255, 30, 53, ',  // crimson glow
      'rgba(158, 27, 27, ',  // dark crimson
      'rgba(230, 100, 40, ', // amber spark
    ]

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.8,
        speedY: -(Math.random() * 0.45 + 0.15),
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.45 + 0.15,
        fadeSpeed: Math.random() * 0.005 + 0.002,
        growing: Math.random() > 0.5,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    let isDocumentVisible = true
    const handleVisibility = () => {
      isDocumentVisible = !document.hidden
    }
    document.addEventListener('visibilitychange', handleVisibility)

    const render = () => {
      if (!isDocumentVisible) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.y += p.speedY
        p.x += p.speedX

        // Subtle opacity pulsing
        if (p.growing) {
          p.opacity += p.fadeSpeed
          if (p.opacity >= 0.6) p.growing = false
        } else {
          p.opacity -= p.fadeSpeed
          if (p.opacity <= 0.1) p.growing = true
        }

        // Wrap around
        if (p.y < -10) {
          p.y = height + 10
          p.x = Math.random() * width
        }
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10

        // Draw soft glowing ember
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `${p.colorBase}${p.opacity})`
        ctx.shadowColor = 'rgba(209, 10, 32, 0.6)'
        ctx.shadowBlur = p.size * 3
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-75"
      aria-hidden="true"
    />
  )
}
