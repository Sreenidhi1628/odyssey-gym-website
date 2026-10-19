import React from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero({ onBeginClick, onDiscoverClick }) {
  const scrollToNext = () => {
    const nextSection = document.getElementById('ancient-arena')
    if (nextSection) {
      const navOffset = 70
      const pos = nextSection.getBoundingClientRect().top + window.pageYOffset - navOffset
      window.scrollTo({ top: pos, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex items-center overflow-hidden bg-[#080808]"
    >
      {/* Background Monumental Spartan Helmet in Ancient Roman Arena */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="/images/hero_monumental.webp"
          alt="Ancient bronze Spartan warrior helmet with vivid red horsehair crest standing in dark Roman war arena at night"
          className="w-full h-full object-cover object-[70%_center] lg:object-[62%_center] filter contrast-[124%] brightness-[78%] scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
        />

        {/* Cinematic Asymmetrical Obsidian Shadows: Keep left text ultra-readable while helmet glows on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-transparent lg:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,transparent_20%,#080808_90%)]" />

        {/* Atmospheric Blood-Red Rim Lighting around Helmet Crest */}
        <div 
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#D10A20]/20 rounded-full blur-[140px] pointer-events-none animate-pulse"
          aria-hidden="true" 
        />
      </div>

      {/* Hero Content Container - Editorial Asymmetrical Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-36 lg:py-28 w-full flex flex-col justify-center">
        
        <div className="max-w-3xl">
          {/* Small Top Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-[#D10A20]" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.4em] text-[#D10A20]">
              THE ARENA AWAITS
            </span>
          </div>

          {/* Enormous Bold Cinematic Main Headline */}
          <h1 className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-[0.03em] text-white leading-[0.9] mb-8 drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
            ENTER THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-[#F2F0EA] to-[#A6A6A6]">
              ARENA.
            </span>
          </h1>

          {/* Supporting Text */}
          <div className="mb-10 max-w-xl">
            <p className="font-cinzel text-lg sm:text-xl lg:text-2xl text-[#E5E5E5] font-semibold tracking-wide leading-relaxed">
              &ldquo;Strength is not given. It is conquered.&rdquo;
            </p>
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#A6A6A6] mt-3 font-mono">
              FORGED THROUGH RAGE &bull; BUILT FOR WAR. TRAINED FOR LIFE.
            </p>
          </div>

          {/* Dual Primary & Secondary Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <button
              onClick={onBeginClick}
              className="group relative bg-[#D10A20] hover:bg-[#FF1E35] text-white px-9 py-4 text-xs sm:text-sm uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-red-glow flex items-center justify-center gap-3 cursor-pointer active:scale-95"
            >
              <span>BEGIN YOUR ODYSSEY</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onDiscoverClick}
              className="group border border-white/20 hover:border-[#D10A20] text-white hover:text-[#FF1E35] bg-[#080808]/70 hover:bg-[#080808]/90 px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.25em] font-bold transition-all duration-300 backdrop-blur-md flex items-center justify-center cursor-pointer"
            >
              <span>EXPLORE THE ARENA</span>
            </button>
          </div>
        </div>

      </div>

      {/* Subtle Red Line & Scroll Indicator safely anchored at bottom */}
      <div className="absolute bottom-6 left-6 sm:left-8 z-20 flex items-center gap-3 pointer-events-auto">
        <button
          onClick={scrollToNext}
          className="flex items-center gap-3 text-[#A6A6A6] hover:text-white transition-colors group cursor-pointer"
          aria-label="Scroll down to The Ancient Arena"
        >
          <span className="w-8 h-[1.5px] bg-[#D10A20]" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#A6A6A6] group-hover:text-[#D10A20] transition-colors font-mono">
            DESCEND INTO THE ARENA
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-[#D10A20] animate-bounce" />
        </button>
      </div>
    </section>
  )
}
