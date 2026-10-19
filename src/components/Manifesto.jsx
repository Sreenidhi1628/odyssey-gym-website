import React from 'react'

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative bg-[#101010] py-28 sm:py-36 lg:py-44 overflow-hidden border-t border-[#191919]"
    >
      {/* Subtle Stone & Crimson Atmosphere Overlays */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#D10A20_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#D10A20]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#8C7045]">
            SECTION 02 — THE ARENA MANIFESTO
          </span>
          <span className="h-[1px] w-12 bg-[#8C7045]/40" />
        </div>

        {/* Editorial Headline with Vertical Red Divider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          <div className="lg:col-span-9 flex items-stretch gap-6 sm:gap-10">
            {/* Narrow Vertical Blood-Red Divider */}
            <div className="w-[3px] sm:w-[4px] bg-[#D10A20] shadow-[0_0_12px_#D10A20] flex-shrink-0" />

            <div className="flex flex-col">
              <h2 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase text-white tracking-[0.03em] leading-[1.04]">
                COMFORT <br />
                <span className="text-[#A6A6A6]">BUILDS NOTHING.</span> <br />
                <span className="text-[#D10A20]">DISCIPLINE</span> <br />
                BUILDS WARRIORS.
              </h2>
            </div>
          </div>

          {/* Supporting Copy & Brand Statement */}
          <div className="lg:col-span-3 flex flex-col justify-end pt-4 lg:pt-12">
            <p className="font-body text-[#A6A6A6] text-base sm:text-lg font-light leading-relaxed tracking-wide border-l border-[#262626] pl-6 lg:border-l-0 lg:pl-0">
              &ldquo;The arena does not reward excuses. It rewards the work you put in when nobody is watching.&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.25em] text-white font-semibold">
                NO MERCY FOR YOUR LIMITS.
              </span>
            </div>
          </div>

        </div>

        {/* Secondary Supporting Banner */}
        <div className="mt-20 sm:mt-28 pt-10 border-t border-[#191919] grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="font-cinzel text-2xl sm:text-3xl font-black text-white">01. PURPOSE</div>
            <p className="text-xs text-[#A6A6A6] uppercase tracking-[0.2em] mt-2">
              Every rep serves your conquest.
            </p>
          </div>
          <div>
            <div className="font-cinzel text-2xl sm:text-3xl font-black text-[#D10A20]">02. RAGE</div>
            <p className="text-xs text-[#A6A6A6] uppercase tracking-[0.2em] mt-2">
              Channeled aggression under control.
            </p>
          </div>
          <div>
            <div className="font-cinzel text-2xl sm:text-3xl font-black text-white">03. GLORY</div>
            <p className="text-xs text-[#A6A6A6] uppercase tracking-[0.2em] mt-2">
              Strength that cannot be broken.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
