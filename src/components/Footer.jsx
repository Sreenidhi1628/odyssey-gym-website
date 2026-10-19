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
    <footer className="relative bg-[#080808] border-t border-[#A87942]/20 pt-16 pb-10 overflow-hidden">
      
      {/* Subtle Background Odyssey Watermark */}
      <div 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 font-cinzel text-[13vw] font-black text-white/[0.015] tracking-[0.2em] whitespace-nowrap pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        ODYSSEY
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1c1a17]">
          
          {/* Brand Bio */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-1.5 bg-[#141414] border border-[#A87942]/40">
                <SpartanHelmetIcon className="w-5 h-5 text-[#A87942]" />
              </div>
              <span className="font-cinzel text-xl font-bold tracking-[0.2em] text-[#E8E2D8]">
                ODYSSEY
              </span>
            </div>

            <p className="font-cinzel text-sm text-[#C6A16B] font-bold tracking-wider mb-2">
              FORGED IN RAGE. BUILT FOR GLORY.
            </p>

            <p className="text-[#9E9990] text-xs font-light leading-relaxed max-w-sm mb-4">
              An ancient Greek warrior saga transformed into a modern luxury high-performance fitness club. We do not negotiate with human potential.
            </p>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A87942]">
              &ldquo;BECOME THE WEAPON.&rdquo;
            </p>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-3">
            <span className="text-[9.5px] uppercase tracking-[0.3em] text-[#C6A16B] font-bold block mb-3 font-mono">
              THE ARENA
            </span>
            <ul className="space-y-2 text-xs uppercase tracking-[0.18em] text-[#9E9990]">
              <li><a href="#arena" onClick={(e) => handleLinkClick(e, '#arena')} className="hover:text-white transition-colors">THE TRAINING ARENA</a></li>
              <li><a href="#philosophy" onClick={(e) => handleLinkClick(e, '#philosophy')} className="hover:text-white transition-colors">THE PHILOSOPHY</a></li>
              <li><a href="#transformation" onClick={(e) => handleLinkClick(e, '#transformation')} className="hover:text-white transition-colors">THE CRUCIBLE</a></li>
              <li><a href="#programs" onClick={(e) => handleLinkClick(e, '#programs')} className="hover:text-white transition-colors">TRAINING DISCIPLINES</a></li>
              <li><a href="#trainers" onClick={(e) => handleLinkClick(e, '#trainers')} className="hover:text-white transition-colors">CENTURION TRAINERS</a></li>
              <li><a href="#membership" onClick={(e) => handleLinkClick(e, '#membership')} className="hover:text-white transition-colors">MEMBERSHIP</a></li>
            </ul>
          </div>

          {/* Communications & Back to Top */}
          <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end">
            <div>
              <span className="text-[9.5px] uppercase tracking-[0.3em] text-[#C6A16B] font-bold block mb-3 font-mono">
                COMMUNICATIONS
              </span>
              <div className="flex flex-col gap-1.5 text-xs uppercase tracking-[0.18em] text-[#9E9990]">
                <a href="#enlist" onClick={(e) => handleLinkClick(e, '#enlist')} className="hover:text-white transition-colors">ENQUIRIES & ADMISSIONS</a>
                <a href="#enlist" onClick={(e) => handleLinkClick(e, '#enlist')} className="hover:text-white transition-colors">INSTAGRAM &bull; @ODYSSEYWARARENA</a>
                <a href="#enlist" onClick={(e) => handleLinkClick(e, '#enlist')} className="hover:text-white transition-colors">YOUTUBE &bull; ODYSSEY PERFORMANCE</a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 lg:mt-0 p-2.5 bg-[#141414] border border-[#A87942]/30 hover:border-[#A87942] text-[#9E9990] hover:text-white transition-colors flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] cursor-pointer"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#A87942]" />
            </button>
          </div>

        </div>

        {/* Bottom Tier */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#9E9990]/60">
          <p>&copy; {new Date().getFullYear()} ODYSSEY ATHLETIC CLUB. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4 text-[9.5px] uppercase tracking-[0.2em]">
            <span>ANNO DOMINI MMXXVI</span>
            <span>&bull;</span>
            <span>YOUR BATTLE. YOUR LEGACY.</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
