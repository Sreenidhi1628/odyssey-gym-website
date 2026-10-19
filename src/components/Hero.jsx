import React from 'react'
import { motion } from 'motion/react'
import { ArrowRight, ChevronDown, Compass } from 'lucide-react'

export default function Hero({ onBeginClick, onDiscoverClick }) {
  const scrollToNext = () => {
    const nextSection = document.getElementById('philosophy')
    if (nextSection) {
      const navOffset = 70
      const pos = nextSection.getBoundingClientRect().top + window.pageYOffset - navOffset
      window.scrollTo({ top: pos, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] lg:h-[100svh] lg:max-h-[900px] w-full flex items-center overflow-hidden bg-[#080808]"
    >
      {/* Background Visual Layer: Corinthian Helmet & Nocturnal Colosseum with Subtle Slow Motion Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full relative"
        >
          <img
            src="/images/hero_monumental.webp"
            alt="Corinthian Greek warrior bronze helmet with crest standing in monumental arena at night"
            className="w-full h-full object-cover object-[72%_center] lg:object-[64%_center] filter contrast-[122%] brightness-[72%]"
            loading="eager"
          />

          {/* Cinematic Asymmetrical Obsidian Vignette: Ensures Left Text Stays Razor-Sharp */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-transparent lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,transparent_20%,#080808_90%)]" />

          {/* Volumetric Aged Bronze & Crimson Atmosphere */}
          <div 
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#A87942]/15 rounded-full blur-[140px] pointer-events-none animate-bronze-pulse"
            aria-hidden="true" 
          />
          <div 
            className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-[#7E1717]/15 rounded-full blur-[100px] pointer-events-none"
            aria-hidden="true" 
          />
        </motion.div>
      </div>

      {/* Hero Content Container - Proportioned to fit comfortably in viewport */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-16 lg:py-0 w-full flex flex-col justify-center">
        
        <div className="max-w-3xl">
          
          {/* Eyebrow Label with Arena Coordinates */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-8 h-[2px] bg-[#A87942]" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#C6A16B] font-mono">
              ODYSSEY ATHLETIC CLUB // 37°58'N 23°43'E
            </span>
          </motion.div>

          {/* Staggered Line-by-Line Headline */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-condensed text-5xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-[0.02em] text-[#E8E2D8] leading-[0.92] drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]"
            >
              FORGED IN RAGE. <br />
              <span className="font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#C6A16B] via-[#E8E2D8] to-[#A87942] font-black">
                BUILT FOR GLORY.
              </span>
            </motion.h1>
          </div>

          {/* Supporting Copy & Motto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mb-8 max-w-xl"
          >
            <p className="font-body text-[#E8E2D8] text-base sm:text-lg font-light leading-relaxed">
              Step into the arena where modern athletic bodybuilding meets ancient warrior fortitude. Leave comfort behind.
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#A87942] mt-2 font-semibold">
              CHAPTER I: THE CALL &bull; BECOME THE WEAPON
            </p>
          </motion.div>

          {/* Dual CTAs: Primary & Secondary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onBeginClick}
              className="group relative bg-[#A87942] hover:bg-[#C6A16B] text-[#080808] px-8 py-3.5 text-xs uppercase tracking-[0.22em] font-bold transition-all duration-300 shadow-bronze-glow flex items-center justify-center gap-3 cursor-pointer active:scale-95"
            >
              <span>ENTER THE ARENA</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onDiscoverClick}
              className="group border border-[#A87942]/40 hover:border-[#C6A16B] text-[#E8E2D8] hover:text-[#C6A16B] bg-[#080808]/70 hover:bg-[#141414] px-8 py-3.5 text-xs uppercase tracking-[0.22em] font-bold transition-all duration-300 backdrop-blur-md flex items-center justify-center cursor-pointer"
            >
              <span>EXPLORE THE GYM</span>
            </button>
          </motion.div>

        </div>

      </div>

      {/* Subtle Scroll Indicator with Safety Clearance */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-6 sm:left-8 z-20 flex items-center gap-3 pointer-events-auto"
      >
        <button
          onClick={scrollToNext}
          className="flex items-center gap-3 text-[#9E9990] hover:text-[#C6A16B] transition-colors group cursor-pointer"
          aria-label="Scroll down to The Philosophy"
        >
          <span className="w-6 h-[1.5px] bg-[#A87942]/60 group-hover:bg-[#C6A16B] transition-colors" />
          <span className="text-[9.5px] uppercase tracking-[0.3em] font-bold group-hover:text-[#C6A16B] transition-colors font-mono">
            DESCEND INTO THE ARENA
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-[#A87942] animate-bounce" />
        </button>
      </motion.div>
    </section>
  )
}
