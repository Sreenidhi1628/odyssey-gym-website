import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import SpartanHelmetIcon from './SpartanHelmetIcon'

export default function Navbar({ onClaimClick }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)

      const sections = ['hero', 'code', 'training', 'armory', 'ritual', 'legion', 'membership', 'enlist']
      const scrollPos = window.scrollY + 140

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'THE CODE', href: '#code', id: 'code' },
    { name: 'TRAINING', href: '#training', id: 'training' },
    { name: 'THE ARMORY', href: '#armory', id: 'armory' },
    { name: 'THE RITUAL', href: '#ritual', id: 'ritual' },
    { name: 'MEMBERSHIP', href: '#membership', id: 'membership' },
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const navHeight = 70
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050505]/92 backdrop-blur-md border-b border-[#9E1B1B]/30 py-2.5 sm:py-3 shadow-[0_10px_35px_rgba(0,0,0,0.9)]'
            : 'bg-gradient-to-b from-[#050505]/95 via-[#050505]/50 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Brand Wordmark & Helmet Emblem */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="group flex items-center gap-3.5 focus:outline-none"
            aria-label="ODYSSEY The War Arena"
          >
            <div className="p-1.5 bg-[#0D0D0D] border border-[#201E1C] group-hover:border-[#9E1B1B] transition-colors duration-300">
              <SpartanHelmetIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-xl sm:text-2xl font-black tracking-[0.25em] text-white leading-none">
                ODYSSEY
              </span>
              <span className="text-[8.5px] uppercase tracking-[0.35em] text-[#C1121F] mt-1 font-semibold">
                THE WAR ARENA
              </span>
            </div>
          </a>

          {/* Minimalist Chapter Navigation with Hover Underline */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-[10.5px] uppercase tracking-[0.22em] font-semibold transition-colors relative py-1 nav-link-underline ${
                    isActive ? 'text-white font-bold' : 'text-[#8E8A82] hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeChapterIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C1121F] shadow-[0_0_8px_#C1121F]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Primary Action Button with Shine Sweep & Glowing Pulse */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onClaimClick}
              className="relative group overflow-hidden bg-[#9E1B1B] hover:bg-[#C1121F] text-white px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] font-bold transition-all duration-300 shadow-crimson-subtle flex items-center gap-2 cursor-pointer active:scale-95 shine-sweep glow-pulse"
            >
              <span>CLAIM YOUR PLACE</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#E5E2DC] hover:text-[#C1121F] focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#C1121F]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-xl lg:hidden flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-5 text-left max-w-sm mx-auto w-full">
              <div className="flex items-center gap-3 pb-4 border-b border-[#9E1B1B]/30">
                <span className="w-2.5 h-2.5 bg-[#C1121F]" />
                <span className="text-[10px] tracking-[0.35em] text-[#C1121F] uppercase font-bold font-mono">
                  WAR ARENA COMMAND
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-cinzel text-xl font-bold tracking-[0.15em] text-[#E5E2DC] hover:text-[#C1121F] transition-colors py-2 border-b border-[#181818]"
                >
                  {link.name}
                </a>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  if (onClaimClick) onClaimClick()
                }}
                className="mt-6 bg-[#9E1B1B] hover:bg-[#C1121F] text-white py-3.5 text-xs font-bold uppercase tracking-[0.25em] shadow-crimson-glow text-center"
              >
                ENTER THE ARENA
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
