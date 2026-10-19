import React from 'react'
import { Shield, Flame, Target } from 'lucide-react'

export default function Philosophy() {
  const pillars = [
    {
      number: '01',
      title: 'DISCIPLINE',
      quote: 'Show up when motivation disappears.',
      description:
        'Motivation is fleeting; discipline is forged through repetitive defiance of fatigue. A warrior shows up before dawn, performs when exhausted, and obeys the covenant of self-mastery.',
      icon: Target,
      accent: 'border-[#D10A20]/40',
    },
    {
      number: '02',
      title: 'STRENGTH',
      quote: 'Build a body capable of overcoming challenges.',
      description:
        'Physical strength without mental fortitude is hollow. We forge functional, resilient bodies engineered to withstand external chaos, heavy loads, and grueling trials with unyielding grace.',
      icon: Flame,
      accent: 'border-[#8C7045]/40',
    },
    {
      number: '03',
      title: 'RESILIENCE',
      quote: 'Every setback becomes another opportunity to rise.',
      description:
        'Pain is data; failure is refinement. The Spartan ethos does not fear friction—it seeks it, transforming obstacles into fuel to return hardened, calculated, and indomitable.',
      icon: Shield,
      accent: 'border-[#D10A20]/40',
    },
  ]

  return (
    <section id="philosophy" className="relative py-28 sm:py-36 bg-[#080808] border-t border-[#1B1B1B]/70 overflow-hidden">
      {/* Subtle Atmospheric Red Fog */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D10A20]/8 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#D10A20]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D10A20] font-semibold">
              THE WARRIOR CREED
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-wide leading-tight mb-6">
            MORE THAN MUSCLE. <br />
            <span className="text-[#A6A6A6]">A WARRIOR MINDSET.</span>
          </h2>

          <p className="font-body text-[#A6A6A6] text-base sm:text-lg lg:text-xl font-light leading-relaxed border-l-2 border-[#8C7045] pl-5 italic">
            "Greatness is not given. It is built through discipline, consistency, and the courage to return stronger every day."
          </p>
        </div>

        {/* Three Philosophy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon
            return (
              <div
                key={pillar.number}
                className="group relative bg-[#141414] border border-[#1B1B1B] hover:border-[#D10A20]/60 p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-red-subtle flex flex-col justify-between"
              >
                {/* Decorative Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D10A20]/0 group-hover:via-[#D10A20] to-transparent transition-all duration-500" />

                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#1B1B1B]/80">
                    <span className="text-sm font-mono tracking-widest text-[#D10A20] font-bold">
                      {pillar.number} — DOCTRINE
                    </span>
                    <IconComponent className="w-5 h-5 text-[#8C7045] group-hover:text-[#FF1E35] transition-colors" />
                  </div>

                  {/* Pillar Title */}
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-black uppercase text-white tracking-wider mb-4 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Core Quote */}
                  <p className="text-white font-medium text-sm sm:text-base leading-snug mb-5">
                    "{pillar.quote}"
                  </p>

                  {/* Editorial Description */}
                  <p className="text-[#A6A6A6] text-sm leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom subtle Spartan Roman Numerals */}
                <div className="mt-8 pt-4 border-t border-[#1B1B1B]/40 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-[#A6A6A6]">
                  <span>FOUNDATIONAL ETHOS</span>
                  <span className="text-[#8C7045] group-hover:text-[#D10A20] transition-colors">
                    ODYSSEY CODE
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
