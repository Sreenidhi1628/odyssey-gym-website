import React, { useEffect, useState, useRef } from 'react'

export default function AnimatedCounter({ end, duration = 1800, separator = '' }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(end)
      setHasAnimated(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTimestamp = null

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)
            // Ease-out expo
            const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            const current = Math.floor(easeOutProgress * end)
            setCount(current)

            if (progress < 1) {
              window.requestAnimationFrame(step)
            } else {
              setCount(end)
            }
          }

          window.requestAnimationFrame(step)
        }
      },
      { threshold: 0.25 }
    )

    const currentEl = elementRef.current
    if (currentEl) {
      observer.observe(currentEl)
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl)
      }
    }
  }, [end, duration, hasAnimated])

  const formattedCount = separator ? count.toLocaleString('en-US') : count

  return (
    <span ref={elementRef} className="tabular-nums">
      {hasAnimated ? formattedCount : 0}
    </span>
  )
}
