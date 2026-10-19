import React from 'react'

export default function LegionCommunity() {
  return (
    <section
      id="legion"
      className="relative bg-[#080808] py-28 sm:py-36 lg:py-44 overflow-hidden border-t border-[#191919]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-[2px] bg-[#D10A20]" />
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#D10A20]">
            SECTION 07 — THE BROTHERHOOD & SISTERHOOD
          </span>
        </div>

        {/* Large Photographic Composition */}
        <div className="relative group overflow-hidden border border-[#191919] bg-[#101010] min-h-[460px] sm:min-h-[580px] lg:min-h-[640px] flex flex-col justify-end p-8 sm:p-14 lg:p-20">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/legion_athletes.webp"
              alt="Elite athletes and warriors training together with barbells and sleds in dark arena"
              className="w-full h-full object-cover object-center filter contrast-125 brightness-[50%] group-hover:scale-102 transition-transform duration-1000"
              loading="lazy"
            />
            {/* Dark atmospheric gradient so text is razor-sharp */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/40 to-transparent" />
          </div>

          {/* Foreground Oversized Statement */}
          <div className="relative z-10 max-w-3xl">
            <h2 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase text-white tracking-[0.03em] leading-[0.98] mb-8">
              STRONGER TOGETHER. <br />
              <span className="text-[#D10A20]">UNSTOPPABLE</span> <br />
              IN THE ARENA.
            </h2>

            <p className="text-[#A6A6A6] text-base sm:text-xl font-light leading-relaxed tracking-wide max-w-xl">
              &ldquo;Surround yourself with people who respect the work, challenge your limits, and show up consistently.&rdquo;
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-8 pt-8 border-t border-[#191919]">
              <div>
                <span className="font-cinzel text-2xl sm:text-3xl font-black text-white">ZERO</span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#A6A6A6] mt-1">EGO &bull; ALL WORK</p>
              </div>
              <div className="h-8 w-[1px] bg-[#262626]" />
              <div>
                <span className="font-cinzel text-2xl sm:text-3xl font-black text-[#D10A20]">100%</span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#A6A6A6] mt-1">COMMITMENT</p>
              </div>
              <div className="h-8 w-[1px] bg-[#262626]" />
              <div>
                <span className="font-cinzel text-2xl sm:text-3xl font-black text-white">ONE</span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#A6A6A6] mt-1">UNITED LEGION</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
