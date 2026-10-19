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
    <footer className="relative bg-[#080808] border-t border-[#1A1A1A] pt-20 pb-12 overflow-hidden">
      
      {/* Massive Background ODYSSEY Wordmark */}
      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-cinzel text-[14vw] font-black text-white/[0.02] tracking-[0.2em] whitespace-nowrap pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        ODYSSEY
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Tier: Brand Statement & Back to Top */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1A1A1A]">
          
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-1 rounded-none bg-[#111111] border border-[#1A1A1A]">
                <SpartanHelmetIcon className="w-6 h-6 text-[#D10A20]" />
              </div>
              <span className="font-cinzel text-2xl font-black tracking-[0.2em] text-white">
                ODYSSEY
              </span>
            </div>

            <p className="font-cinzel text-lg text-[#D10A20] font-bold tracking-wider mb-2">
              YOUR BATTLE. YOUR LEGACY.
            </p>
            <p className="text-[#A6A6A6] text-xs uppercase tracking-[0.25em] font-semibold mb-6 font-mono">
              &ldquo;BUILT FOR WAR. TRAINED FOR LIFE.&rdquo; &bull; THE WORK CONTINUES.
            </p>

            <p className="text-[#A6A6A6] text-xs sm:text-sm font-light leading-relaxed max-w-md">
              An ancient Roman and Spartan war epic reimagined as a modern high-performance fitness brand. Strength, discipline, rage, and relentless transformation.
            </p>
          </div>

          <div className="lg:col-span-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D10A20] font-bold block mb-4 font-mono">
              THE ARENA
            </span>
            <ul className="space-y-2.5 text-xs uppercase tracking-[0.2em] text-[#A6A6A6]">
              <li><a href="#ancient-arena" onClick={(e) => handleLinkClick(e, '#ancient-arena')} className="hover:text-white transition-colors">THE ARENA</a></li>
              <li><a href="#code" onClick={(e) => handleLinkClick(e, '#code')} className="hover:text-white transition-colors">THE CODE</a></li>
              <li><a href="#training" onClick={(e) => handleLinkClick(e, '#training')} className="hover:text-white transition-colors">TRAINING</a></li>
              <li><a href="#armory" onClick={(e) => handleLinkClick(e, '#armory')} className="hover:text-white transition-colors">THE ARMORY</a></li>
              <li><a href="#ritual" onClick={(e) => handleLinkClick(e, '#ritual')} className="hover:text-white transition-colors">THE RITUAL</a></li>
              <li><a href="#legion" onClick={(e) => handleLinkClick(e, '#legion')} className="hover:text-white transition-colors">THE LEGION</a></li>
              <li><a href="#membership" onClick={(e) => handleLinkClick(e, '#membership')} className="hover:text-white transition-colors">MEMBERSHIP</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D10A20] font-bold block mb-4 font-mono">
              TRAINING DISCIPLINES
            </span>
            <ul className="space-y-2.5 text-xs uppercase tracking-[0.2em] text-[#A6A6A6]">
              <li>01 — THE FORGE (Strength)</li>
              <li>02 — WAR MACHINE (Engine)</li>
              <li>03 — THE GLADIATOR (Power)</li>
              <li>04 — PRECISION (Personal Training)</li>
              <li>05 — COLD & CONTRAST RECOVERY</li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D10A20] font-bold block mb-4 font-mono">
                COMMUNICATIONS
              </span>
              <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-[#A6A6A6]">
                <a href="#enlist" onClick={(e) => handleLinkClick(e, '#enlist')} className="hover:text-white transition-colors">ENQUIRIES</a>
                <a href="#enlist" onClick={(e) => handleLinkClick(e, '#enlist')} className="hover:text-white transition-colors">INSTAGRAM</a>
                <a href="#enlist" onClick={(e) => handleLinkClick(e, '#enlist')} className="hover:text-white transition-colors">YOUTUBE</a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-8 lg:mt-0 p-3 bg-[#111111] border border-[#1A1A1A] hover:border-[#D10A20] text-[#A6A6A6] hover:text-white transition-colors flex items-center gap-2 text-xs uppercase tracking-[0.2em] cursor-pointer"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#D10A20]" />
            </button>
          </div>

        </div>

        {/* Bottom Tier: Legal & Heritage */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A6A6A6]/60">
          <p>&copy; {new Date().getFullYear()} ODYSSEY. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.25em]">
            <span>ANNO DOMINI MMXXVI</span>
            <span>&bull;</span>
            <span>YOUR BATTLE. YOUR LEGACY.</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
