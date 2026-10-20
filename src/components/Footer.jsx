import React from 'react'
import SpartanHelmetIcon from './SpartanHelmetIcon'
import { ArrowUp, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLinkClick = (e, href) => {
    e.preventDefault()
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
    <footer className="relative bg-[#050505] border-t border-[#1A1A1A] py-12 sm:py-16 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Clean Row: Brand + Essential Gym Details + Return To Top */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-[#1A1A1A]">
          
          {/* Brand Identity & Motto */}
          <div className="flex items-center gap-4">
            <div className="p-2 bg-[#0D0D0D] border border-[#201E1C]">
              <SpartanHelmetIcon className="w-6 h-6 text-[#D10A20]" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <span className="font-cinzel text-xl font-black tracking-[0.25em] text-white">
                  ODYSSEY
                </span>
                <span className="w-1.5 h-1.5 bg-[#D10A20]" />
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D10A20] font-bold">
                  WAR ARENA
                </span>
              </div>
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#8E8A82] mt-0.5">
                ENTER WITH PURPOSE &bull; LEAVE STRONGER
              </p>
            </div>
          </div>

          {/* Key Arena Info: 24/7 Access & Location */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-xs font-mono text-[#A6A6A6]">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#D10A20] flex-shrink-0" />
              <span>24/7 BIOMETRIC ACCESS</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#D10A20] flex-shrink-0" />
              <span>ARENA GROUND ZERO &bull; SECTOR I</span>
            </div>
          </div>

          {/* Return to top */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0D0D0D] border border-[#201E1C] hover:border-[#D10A20] text-xs font-mono uppercase tracking-[0.2em] text-[#A6A6A6] hover:text-white transition-all cursor-pointer group"
              aria-label="Back to top"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#D10A20] transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Functional Navigation Bar & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono uppercase tracking-[0.2em]" aria-label="Footer Navigation">
            <a href="#code" onClick={(e) => handleLinkClick(e, '#code')} className="text-[#8E8A82] hover:text-[#D10A20] transition-colors">THE CODE</a>
            <a href="#training" onClick={(e) => handleLinkClick(e, '#training')} className="text-[#8E8A82] hover:text-[#D10A20] transition-colors">TRAINING</a>
            <a href="#armory" onClick={(e) => handleLinkClick(e, '#armory')} className="text-[#8E8A82] hover:text-[#D10A20] transition-colors">THE ARMORY</a>
            <a href="#ritual" onClick={(e) => handleLinkClick(e, '#ritual')} className="text-[#8E8A82] hover:text-[#D10A20] transition-colors">THE RITUAL</a>
            <a href="#membership" onClick={(e) => handleLinkClick(e, '#membership')} className="text-[#8E8A82] hover:text-[#D10A20] transition-colors">MEMBERSHIP</a>
            <a href="#enlist" onClick={(e) => handleLinkClick(e, '#enlist')} className="text-[#D10A20] hover:text-white font-bold transition-colors">ENLIST</a>
          </nav>

          <div className="text-[10px] font-mono tracking-[0.2em] text-[#8E8A82]/60 uppercase text-center md:text-right">
            &copy; {new Date().getFullYear()} ODYSSEY WAR ARENA &bull; ANNO DOMINI MMXXVI
          </div>
        </div>

      </div>
    </footer>
  )
}
