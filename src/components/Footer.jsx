import React from 'react'
import SpartanHelmetIcon from './SpartanHelmetIcon'
import { ArrowUp } from 'lucide-react'

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
    <footer className="relative bg-[#050505] border-t border-[#181818] pt-16 pb-10 overflow-hidden">
      
      {/* Background Odyssey Watermark */}
      <div 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 font-cinzel text-[14vw] font-black text-white/[0.015] tracking-[0.2em] whitespace-nowrap pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        ODYSSEY
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#181818]">
          
          {/* Brand Bio */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-1.5 bg-[#0D0D0D] border border-[#201E1C]">
                <SpartanHelmetIcon className="w-5 h-5" />
              </div>
              <span className="font-cinzel text-xl font-bold tracking-[0.2em] text-white">
                ODYSSEY
              </span>
            </div>

            <p className="font-cinzel text-sm text-[#C1121F] font-bold tracking-wider mb-2">
              YOUR BATTLE. YOUR LEGACY.
            </p>

            <p className="text-[#8E8A82] text-xs font-light leading-relaxed max-w-sm mb-4">
              An epic ancient warrior saga transformed into a modern high-performance arena. We do not negotiate with human potential.
            </p>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C1121F]">
              &ldquo;BECOME THE WEAPON.&rdquo;
            </p>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-3">
            <span className="text-[9.5px] uppercase tracking-[0.3em] text-[#C1121F] font-bold block mb-3 font-mono">
              WARRIOR CHAPTERS
            </span>
            <ul className="space-y-2 text-xs uppercase tracking-[0.18em] text-[#8E8A82]">
              <li><a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="hover:text-white transition-colors">PROLOGUE // THE CALL</a></li>
              <li><a href="#code" onClick={(e) => handleLinkClick(e, '#code')} className="hover:text-white transition-colors">I. THE SACRED CODE</a></li>
              <li><a href="#arena" onClick={(e) => handleLinkClick(e, '#arena')} className="hover:text-white transition-colors">II. THE ARENA SANCTUM</a></li>
              <li><a href="#disciplines" onClick={(e) => handleLinkClick(e, '#disciplines')} className="hover:text-white transition-colors">III. COMBAT DISCIPLINES</a></li>
              <li><a href="#crucible" onClick={(e) => handleLinkClick(e, '#crucible')} className="hover:text-white transition-colors">IV. THE CRUCIBLE</a></li>
              <li><a href="#legion" onClick={(e) => handleLinkClick(e, '#legion')} className="hover:text-white transition-colors">V. THE LEGION</a></li>
              <li><a href="#membership" onClick={(e) => handleLinkClick(e, '#membership')} className="hover:text-white transition-colors">VI. MEMBERSHIP</a></li>
            </ul>
          </div>

          {/* Communications & Back to Top */}
          <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end">
            <div>
              <span className="text-[9.5px] uppercase tracking-[0.3em] text-[#C1121F] font-bold block mb-3 font-mono">
                COMMUNICATIONS
              </span>
              <div className="flex flex-col gap-1.5 text-xs uppercase tracking-[0.18em] text-[#8E8A82]">
                <a href="#enlist" onClick={(e) => handleLinkClick(e, '#enlist')} className="hover:text-white transition-colors">ENQUIRIES & ADMISSIONS</a>
                <a href="#enlist" onClick={(e) => handleLinkClick(e, '#enlist')} className="hover:text-white transition-colors">INSTAGRAM &bull; @ODYSSEYWARARENA</a>
                <a href="#enlist" onClick={(e) => handleLinkClick(e, '#enlist')} className="hover:text-white transition-colors">YOUTUBE &bull; ODYSSEY WAR ROOM</a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 lg:mt-0 p-2.5 bg-[#0D0D0D] border border-[#201E1C] hover:border-[#9E1B1B] text-[#8E8A82] hover:text-white transition-colors flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] cursor-pointer"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C1121F]" />
            </button>
          </div>

        </div>

        {/* Bottom Tier */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#8E8A82]/60">
          <p>&copy; {new Date().getFullYear()} ODYSSEY WAR ARENA. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4 text-[9.5px] uppercase tracking-[0.2em]">
            <span>ANNO DOMINI MMXXVI</span>
            <span>&bull;</span>
            <span>AUT VINCERE AUT MORI</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
