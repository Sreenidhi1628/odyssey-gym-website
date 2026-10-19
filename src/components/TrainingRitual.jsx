import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function TrainingRitual({ onEnlistClick }) {
  const stages = [
    {
      numeral: 'I',
      stage: 'STAGE I',
      title: 'PREPARE',
      summary: 'Warm up. Focus. Set your intention.',
      description: 'Movement prep, joint mobility, central nervous system activation, and mental calibration before the heavy iron descends.',
      image: '/images/prog-strength.jpg',
      alt: 'Warrior preparing focus and chalking hands on the platform',
    },
    {
      numeral: 'II',
      stage: 'STAGE II',
      title: 'CONQUER',
      summary: 'Train with purpose. Challenge your limits.',
      description: 'Unrelenting execution under load. Every repetition is fought with surgical precision, controlled rage, and total physical commitment.',
      image: '/images/arena-power.jpg',
      alt: 'Warrior attacking heavy barbell squat in power cage',
    },
    {
      numeral: 'III',
      stage: 'STAGE III',
      title: 'ASCEND',
      summary: 'Recover. Adapt. Return stronger.',
      description: 'Targeted recovery, nutrition replenishment, cold immersion, and neuromuscular adaptation. You rebuild into an elevated state of strength.',
      image: '/images/prog-athletic.jpg',
      alt: 'Warrior post-training recovery and mental focus',
    },
  ]

  return (
    <section
      id="ritual"
      className="relative bg-[#080808] py-28 sm:py-36 lg:py-44 overflow-hidden border-t border-[#1A1A1A]"
    >
      {/* Background Texture & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#D10A20_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#D10A20]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20 pb-8 border-b border-[#1A1A1A]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#D10A20]" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#D10A20]">
                SECTION 06 — THE PROGRESSION
              </span>
            </div>
            <h2 className="font-cinzel text-4xl sm:text-6xl font-black uppercase text-white tracking-[0.03em] leading-[0.98]">
              THE TRAINING <br />
              <span className="text-[#D10A20]">RITUAL.</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#A6A6A6] max-w-md lg:text-right">
            A three-stage physiological crucible repeated by every warrior who enters the arena.
          </p>
        </div>

        {/* Cinematic Horizontal Timeline on Desktop & Vertical Sequence on Mobile */}
        <div className="relative">
          
          {/* Connecting Thin Crimson Line across stages on Desktop */}
          <div className="hidden lg:block absolute top-[140px] left-0 right-0 h-[2px] bg-[#1A1A1A] z-0">
            <div className="h-full bg-gradient-to-r from-[#D10A20] via-[#FF1E35] to-[#D10A20] opacity-60" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative z-10">
            {stages.map((item, idx) => (
              <div
                key={item.numeral}
                className="group relative flex flex-col justify-between bg-[#111111] border border-[#1A1A1A] hover:border-[#D10A20] transition-all duration-500 overflow-hidden"
              >
                {/* Visual Top Preview Frame */}
                <div className="relative h-[220px] sm:h-[260px] overflow-hidden bg-[#080808]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center filter contrast-125 brightness-[55%] group-hover:scale-105 group-hover:brightness-[75%] transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                  
                  {/* Oversized Roman Numeral Watermark in Image */}
                  <div className="absolute top-4 right-6 font-cinzel text-7xl font-black text-white/10 select-none group-hover:text-[#D10A20]/30 transition-colors">
                    {item.numeral}
                  </div>

                  {/* Stage Label Tag */}
                  <div className="absolute bottom-4 left-6 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#D10A20]" />
                    <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white font-bold">
                      {item.stage}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-cinzel text-2xl sm:text-3xl font-black uppercase tracking-wide text-white mb-2 group-hover:text-[#D10A20] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-cinzel text-sm sm:text-base text-[#D10A20] font-semibold tracking-wide mb-4">
                      &ldquo;{item.summary}&rdquo;
                    </p>
                    <p className="text-[#A6A6A6] text-xs sm:text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#1A1A1A] flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A6A6A6]">
                      PHASE 0{idx + 1}
                    </span>
                    <span className="text-xs font-mono text-[#D10A20] font-bold group-hover:translate-x-1 transition-transform">
                      PROCEED &rarr;
                    </span>
                  </div>
                </div>

                {/* Bottom Crimson Accent Bar */}
                <div className="h-[2px] w-0 group-hover:w-full bg-[#D10A20] transition-all duration-500 shadow-[0_0_8px_#D10A20]" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
