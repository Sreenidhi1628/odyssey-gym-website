import React, { useEffect, useState } from 'react'

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (windowHeight > 0) {
        const progress = (totalScroll / windowHeight) * 100
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#9E1B1B] via-[#C1121F] to-[#FF1E35] z-[9999] shadow-[0_0_12px_#C1121F] transition-[width] duration-75 ease-out pointer-events-none"
      style={{ width: `${scrollProgress}%` }}
    />
  )
}
