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

      const sections = ['hero', 'philosophy', 'arena', 'transformation', 'programs', 'armory', 'trainers', 'membership', 'enlist']
      const scrollPos = window.scrollY + 120

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
    { name: 'THE ARENA', href: '#arena', id: 'arena' },
    { name: 'PHILOSOPHY', href: '#philosophy', id: 'philosophy' },
    { name: 'PROGRAMS', href: '#programs', id: 'programs' },
    { name: 'ARMORY', href: '#armory', id: 'armory' },
    { name: 'TRAINERS', href: '#trainers', id: 'trainers' },
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
            ? 'bg-[#080808]/92 backdrop-blur-md border-b border-[#A87942]/25 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.85)]'
            : 'bg-gradient-to-b from-[#080808]/90 via-[#080808]/40 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Brand Wordmark on Left */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="ODYSSEY Athletic Club"
          >
            <div className="p-1.5 bg-[#141414] border border-[#A87942]/40 group-hover:border-[#A87942] group-hover:shadow-bronze-subtle transition-all duration-300">
              <SpartanHelmetIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-xl sm:text-2xl font-black tracking-[0.25em] text-[#E8E2D8] leading-none group-hover:text-white transition-colors">
                ODYSSEY
              </span>
              <span className="text-[8.5px] uppercase tracking-[0.35em] text-[#A87942] mt-1 font-semibold">
                WAR FITNESS ARENA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-[11px] uppercase tracking-[0.22em] font-semibold transition-colors relative py-1 ${
                    isActive ? 'text-[#C6A16B]' : 'text-[#9E9990] hover:text-[#E8E2D8]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#A87942] shadow-[0_0_8px_#A87942]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Primary Navigation CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onClaimClick}
              className="relative group overflow-hidden border border-[#A87942] bg-[#A87942]/10 hover:bg-[#A87942] text-[#E8E2D8] hover:text-[#080808] px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] font-bold transition-all duration-300 shadow-bronze-subtle hover:shadow-bronze-glow flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>ENTER THE ARENA</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#E8E2D8] hover:text-[#A87942] focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#A87942]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-xl lg:hidden flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-6 text-left max-w-sm mx-auto w-full">
              <div className="flex items-center gap-3 pb-4 border-b border-[#A87942]/20">
                <span className="w-2.5 h-2.5 bg-[#A87942]" />
                <span className="text-[10px] tracking-[0.35em] text-[#C6A16B] uppercase font-bold">
                  WAR ARENA COMMAND
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-cinzel text-2xl font-bold tracking-[0.15em] text-[#E8E2D8] hover:text-[#C6A16B] transition-colors py-1.5 border-b border-[#1c1a17]"
                >
                  {link.name}
                </a>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  if (onClaimClick) onClaimClick()
                }}
                className="mt-4 bg-[#A87942] hover:bg-[#C6A16B] text-[#080808] py-4 text-xs font-bold uppercase tracking-[0.25em] shadow-bronze-glow text-center"
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
