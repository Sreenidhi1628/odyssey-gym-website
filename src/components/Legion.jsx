import React from 'react'

export default function Legion() {
  return (
    <section
      id="legion"
      className="relative bg-[#080808] py-28 sm:py-36 lg:py-44 overflow-hidden border-t border-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-[2px] bg-[#D10A20]" />
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#D10A20]">
            SECTION 07 — THE ODYSSEY LEGION
          </span>
        </div>

        {/* Large Photographic Cinematic Composition */}
        <div className="relative group overflow-hidden border border-[#1A1A1A] bg-[#111111] min-h-[480px] sm:min-h-[580px] lg:min-h-[660px] flex flex-col justify-end p-8 sm:p-14 lg:p-20">
          
          {/* Background Real Athletes Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/legion_athletes.webp"
              alt="Athletes and members training together with barbells and sleds in dark cinematic arena"
              className="w-full h-full object-cover object-center filter contrast-125 brightness-[50%] group-hover:scale-102 transition-transform duration-1000 ease-out"
              loading="lazy"
            />
            {/* Dark atmospheric gradient for razor-sharp typography contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/95 via-[#080808]/50 to-transparent" />
          </div>

          {/* Foreground Oversized Statement */}
          <div className="relative z-10 max-w-3xl">
            <h2 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase text-white tracking-[0.03em] leading-[0.98] mb-8">
              NO WARRIOR <br />
              <span className="text-[#D10A20]">STANDS</span> <br />
              ALONE.
            </h2>

            <p className="font-cinzel text-base sm:text-xl text-[#E5E5E5] font-semibold leading-relaxed tracking-wide max-w-2xl mb-6">
              &ldquo;Surround yourself with those who respect the work, embrace the grind, and elevate your standard every single day.&rdquo;
            </p>

            <p className="text-[#A6A6A6] text-sm sm:text-base font-light leading-relaxed tracking-wide max-w-xl mb-10">
              In ODYSSEY, individual strength becomes unstoppable when united. We celebrate every personal record, support every exhausting recovery, and push each other through the final repetition.
            </p>

            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-[#1A1A1A]">
              <div>
                <span className="font-cinzel text-2xl sm:text-3xl font-black text-white">ZERO</span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#A6A6A6] mt-1 font-mono">EGO &bull; ALL WORK</p>
              </div>
              <div className="h-8 w-[1px] bg-[#1A1A1A]" />
              <div>
                <span className="font-cinzel text-2xl sm:text-3xl font-black text-[#D10A20]">100%</span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#A6A6A6] mt-1 font-mono">MUTUAL RESPECT</p>
              </div>
              <div className="h-8 w-[1px] bg-[#1A1A1A]" />
              <div>
                <span className="font-cinzel text-2xl sm:text-3xl font-black text-white">ONE</span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#A6A6A6] mt-1 font-mono">UNITED BROTHERHOOD</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
