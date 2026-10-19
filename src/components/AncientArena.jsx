import React from 'react'
import { ArrowRight, Shield } from 'lucide-react'

export default function AncientArena({ onExploreClick }) {
  return (
    <section
      id="ancient-arena"
      className="relative bg-[#080808] py-28 sm:py-36 lg:py-44 overflow-hidden border-t border-[#1A1A1A]"
    >
      {/* Background Architectural Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#D10A20_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D10A20]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-[2px] bg-[#D10A20]" />
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#D10A20]">
            SECTION 02 — THE ARENA
          </span>
        </div>

        {/* Asymmetrical Editorial Composition: Oversized Typography & Wide Cinematic Scene */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Monumental Headline with Crimson Blade Divider */}
          <div className="lg:col-span-7 flex items-stretch gap-6 sm:gap-8">
            <div className="w-[3px] sm:w-[4px] bg-[#D10A20] shadow-[0_0_15px_#D10A20] flex-shrink-0" />
            
            <div>
              <h2 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase text-white tracking-[0.03em] leading-[0.98] mb-6">
                BUILT IN THE <br />
                <span className="text-[#D10A20]">SPIRIT OF</span> <br />
                BATTLE.
              </h2>

              <p className="font-cinzel text-lg sm:text-xl text-[#E5E5E5] font-semibold tracking-wide leading-relaxed max-w-xl">
                &ldquo;Every generation has its arena. Ours is where discipline meets resistance, where limits are challenged, and where strength is earned one repetition at a time.&rdquo;
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#D10A20]" />
                  <span className="text-xs uppercase tracking-[0.25em] text-[#A6A6A6] font-mono">
                    RAW IRON ONLY
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#D10A20]" />
                  <span className="text-xs uppercase tracking-[0.25em] text-[#A6A6A6] font-mono">
                    NO COMPROMISE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Manifesto Copy */}
          <div className="lg:col-span-5 flex flex-col justify-end pt-4 lg:pt-8">
            <div className="border-l border-[#1A1A1A] pl-6 sm:pl-8 space-y-6">
              <p className="text-[#A6A6A6] text-sm sm:text-base font-light leading-relaxed tracking-wide">
                Within these stone walls, ordinary expectations do not survive. We have stripped away commercial fluff, comfortable machines, and empty trends to resurrect the primal crucible of athletic fortitude.
              </p>
              <p className="text-[#A6A6A6] text-sm sm:text-base font-light leading-relaxed tracking-wide">
                Whether you step onto the lifting platform, grip the knurled steel, or sprint the battle turf, you are entering a legacy forged over two millennia.
              </p>
              <div className="pt-2">
                <span className="text-xs uppercase tracking-[0.3em] text-white font-bold block">
                  &ldquo;ENTER AS YOU ARE. LEAVE AS A WARRIOR.&rdquo;
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Wide Cinematic Amphitheater / Arena Scene */}
        <div className="mt-16 sm:mt-20 relative group overflow-hidden border border-[#1A1A1A] bg-[#111111] min-h-[380px] sm:min-h-[480px] lg:min-h-[540px]">
          <img
            src="/images/arena_colosseum.webp"
            alt="Ancient Roman amphitheater arena stone arches under dark red cinematic night sky with dust and smoke"
            className="w-full h-full object-cover object-center filter contrast-125 brightness-[65%] group-hover:scale-105 transition-transform duration-1000 ease-out"
            loading="lazy"
          />
          
          {/* Atmospheric Dark Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/80 via-transparent to-[#080808]/80" />

          {/* Overlay Inscription Plate */}
          <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-white/10 pt-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#D10A20] block mb-1">
                AMPHITHEATRUM MEMORIA // ODYSSEY GROUND ZERO
              </span>
              <h3 className="font-cinzel text-xl sm:text-3xl font-black text-white uppercase tracking-wider">
                COLOSSEUM ARCHITECTURE &bull; MODERN STRENGTH
              </h3>
            </div>
            
            <span className="text-xs font-mono text-[#A6A6A6] tracking-widest uppercase">
              SECTOR I &bull; 14,000 SQ FT
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
