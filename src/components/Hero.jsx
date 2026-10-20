import React from 'react'
import { motion } from 'motion/react'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero({ onBeginClick, onDiscoverClick }) {
  const scrollToNext = () => {
    const nextSection = document.getElementById('code')
    if (nextSection) {
      const navOffset = 70
      const pos = nextSection.getBoundingClientRect().top + window.pageYOffset - navOffset
      window.scrollTo({ top: pos, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] lg:h-[100svh] lg:max-h-[920px] w-full flex items-center overflow-hidden bg-[#050505]"
    >
      {/* Background Architectural Canvas: Ancient Colosseum Arena at Night */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="/images/arena_colosseum.webp"
          alt="Ancient Roman Colosseum war arena under dark crimson sky"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-[28%]"
          loading="eager"
        />

        {/* Deep Obsidian Vignettes & Edge Shadow Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/75 to-transparent lg:w-3/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,transparent_10%,#050505_90%)]" />

        {/* Volumetric Dark Crimson Atmospheric Lighting */}
        <div 
          className="absolute top-1/4 right-1/4 w-[550px] h-[550px] bg-[#9E1B1B]/18 rounded-full blur-[150px] pointer-events-none animate-crimson-ember"
          aria-hidden="true" 
        />
        <div 
          className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-[#C1121F]/15 rounded-full blur-[120px] pointer-events-none animate-smoke-pulse"
          aria-hidden="true" 
        />
      </div>

      {/* Monumental Sculptural Background Wordmark Layer */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-cinzel text-[17vw] font-black text-white/[0.04] tracking-[0.2em] whitespace-nowrap select-none pointer-events-none z-0"
        aria-hidden="true"
      >
        ODYSSEY
      </div>

      {/* Main Grid: Asymmetrical Editorial Composition with Central/Right Sculptural Helmet */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-8 pt-20 pb-12 lg:py-0">
        
        {/* Left Column (7 cols): Cinematic Narrative & Chiseled Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start">
          
          {/* Chapter Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-8 h-[2px] bg-[#C1121F]" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.4em] text-[#C1121F] font-mono">
              PROLOGUE // THE WAR ARENA
            </span>
          </motion.div>

          {/* Monumental Headline with Masked Entrance */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-condensed text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-[0.02em] text-white leading-[0.9] drop-shadow-[0_12px_35px_rgba(0,0,0,0.95)]"
            >
              BECOME <br />
              <span className="font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E5E2DC] to-[#8E8A82]">
                THE WEAPON.
              </span>
            </motion.h1>
          </div>

          {/* Narrative Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mb-8 max-w-lg border-l-2 border-[#9E1B1B]/80 pl-5"
          >
            <p className="font-cinzel text-base sm:text-lg text-white font-semibold tracking-wide leading-snug">
              &ldquo;Born in ancient rage. Built for modern glory.&rdquo;
            </p>
            <p className="text-[#8E8A82] text-xs sm:text-sm font-light leading-relaxed mt-2">
              The arena does not reward comfort. It rewards the brutal consistency of warriors who conquer resistance every single day.
            </p>
          </motion.div>

          {/* Asymmetric Cinematic Action Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onBeginClick}
              className="group relative bg-[#9E1B1B] hover:bg-[#C1121F] text-white px-8 py-3.5 text-xs uppercase tracking-[0.22em] font-bold transition-all duration-300 shadow-crimson-glow flex items-center justify-center gap-3 cursor-pointer active:scale-95 shine-sweep glow-pulse"
            >
              <span>COMMENCE THE ODYSSEY</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onDiscoverClick}
              className="group border border-[#201E1C] hover:border-[#9E1B1B] text-[#E5E2DC] hover:text-white bg-[#050505]/80 hover:bg-[#121212] px-7 py-3.5 text-xs uppercase tracking-[0.22em] font-bold transition-all duration-300 backdrop-blur-md flex items-center justify-center cursor-pointer"
            >
              <span>EXPLORE THE ARENA</span>
            </button>
          </motion.div>

          {/* Technical Metadata Coordinate Tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-8 flex items-center gap-4 text-[9.5px] font-mono uppercase tracking-[0.3em] text-[#8E8A82]"
          >
            <span>LIBER I &bull; ATHENS 37°58'N</span>
            <span>&bull;</span>
            <span className="text-[#C1121F]">EST. MMXXVI</span>
          </motion.div>

        </div>

        {/* Right Column (5 cols): Sculptural Ancient Warrior Helmet with Crimson Crest Emerging From Darkness */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px]"
          >
            {/* Ambient Backlight Halo behind the helmet */}
            <div 
              className="absolute -inset-4 bg-gradient-to-t from-[#9E1B1B]/30 via-transparent to-transparent rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            {/* The Sculptural Ancient Helmet Visual */}
            <img
              src="/images/spartan_helmet_free.webp"
              alt="Sculptural ancient Corinthian Greek warrior helmet with blood-red crest emerging from shadows"
              className="w-full h-auto object-contain filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] contrast-[118%] brightness-[88%] hover:scale-102 transition-transform duration-700 ease-out"
              loading="eager"
            />

            {/* Inset Shadow Overlay to blend bottom into darkness */}
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent pointer-events-none" />
          </motion.div>
        </div>

      </div>

      {/* Subtle Scroll Indicator with Safety Clearance */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute bottom-6 left-6 sm:left-8 z-20 flex items-center gap-3 pointer-events-auto"
      >
        <button
          onClick={scrollToNext}
          className="flex items-center gap-3 text-[#8E8A82] hover:text-[#C1121F] transition-colors group cursor-pointer"
          aria-label="Scroll down to Chapter I"
        >
          <span className="w-6 h-[1.5px] bg-[#9E1B1B]/70 group-hover:bg-[#C1121F] transition-colors" />
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold group-hover:text-[#C1121F] transition-colors font-mono">
            DESCEND INTO THE CRUCIBLE
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-[#C1121F] animate-bounce" />
        </button>
      </motion.div>
    </section>
  )
}
