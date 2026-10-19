import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import SpartanHelmetIcon from './SpartanHelmetIcon'

export default function Navbar({ onClaimClick }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      const sections = ['hero', 'ancient-arena', 'warrior-code', 'training', 'armory', 'ritual', 'legion', 'claim', 'enlist']
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
    { name: 'THE ARENA', href: '#ancient-arena', id: 'ancient-arena' },
    { name: 'THE CODE', href: '#code', id: 'code' },
    { name: 'TRAINING', href: '#training', id: 'training' },
    { name: 'THE ARMORY', href: '#armory', id: 'armory' },
    { name: 'MEMBERSHIP', href: '#membership', id: 'membership' },
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const navHeight = 72
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
            ? 'bg-[#080808]/96 backdrop-blur-md border-b border-[#1A1A1A] py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#080808]/90 via-[#080808]/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark on Left */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="group flex items-center gap-3.5 focus:outline-none focus:ring-1 focus:ring-[#D10A20]"
            aria-label="ODYSSEY Home"
          >
            <div className="p-1.5 rounded-none bg-[#111111] border border-[#1A1A1A] group-hover:border-[#D10A20] transition-colors">
              <SpartanHelmetIcon className="w-5 h-5 text-[#D10A20] transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-xl sm:text-2xl font-black tracking-[0.25em] text-[#FFFFFF] leading-none">
                ODYSSEY
              </span>
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#A6A6A6] mt-1 font-semibold group-hover:text-[#D10A20] transition-colors">
                WAR FITNESS ARENA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-9" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-xs uppercase tracking-[0.25em] font-semibold transition-colors relative py-1.5 ${
                    isActive ? 'text-[#FFFFFF]' : 'text-[#A6A6A6] hover:text-[#FFFFFF]'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#D10A20] transition-all duration-300 ${
                      isActive ? 'w-full shadow-[0_0_8px_#D10A20]' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              )
            })}
          </nav>

          {/* Primary Navigation CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onClaimClick}
              className="relative group bg-[#D10A20] hover:bg-[#FF1E35] text-[#FFFFFF] px-6 py-2.5 text-xs uppercase tracking-[0.22em] font-bold transition-all duration-300 shadow-red-glow flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>CLAIM YOUR PLACE</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#A6A6A6] hover:text-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#D10A20] cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#D10A20]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Custom Responsive Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-xl lg:hidden transition-all duration-300 flex flex-col justify-center px-8 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 text-left max-w-sm mx-auto w-full">
          <div className="flex items-center gap-3 pb-4 border-b border-[#1A1A1A]">
            <span className="w-3 h-3 bg-[#D10A20]" />
            <span className="text-[10px] tracking-[0.35em] text-[#D10A20] uppercase font-bold">
              WAR COMMAND CENTER
            </span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-cinzel text-2xl font-bold tracking-[0.15em] text-[#FFFFFF] hover:text-[#D10A20] transition-colors py-1.5 border-b border-[#1A1A1A]"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false)
              if (onClaimClick) onClaimClick()
            }}
            className="mt-4 bg-[#D10A20] hover:bg-[#FF1E35] text-[#FFFFFF] py-4 text-xs font-bold uppercase tracking-[0.25em] shadow-red-glow text-center"
          >
            CLAIM YOUR PLACE
          </button>
        </div>
      </div>
    </>
  )
}
