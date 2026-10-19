import React from 'react'
import SpartanHelmetIcon from './SpartanHelmetIcon'

export default function BrandStatement({ onCtaClick }) {
  return (
    <section className="relative py-36 sm:py-48 overflow-hidden bg-[#080808] border-y border-[#1B1B1B]">
      {/* Background Cinematic Helmet Image with Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/statement-bg.jpg"
          alt="Ancient Spartan warrior helmet resting in dark stone arena with scarlet crest and cinematic embers"
          className="w-full h-full object-cover object-center filter brightness-45 contrast-125 scale-105"
          loading="lazy"
        />
        {/* Gradients to blend smoothly into surrounding pitch black sections */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/60 to-[#080808]/90" />
        <div className="absolute inset-0 bg-[#D10A20]/10 mix-blend-multiply" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 z-10 text-center flex flex-col items-center">
        {/* Subtle Spartan Mark */}
        <div className="mb-8 p-3 rounded-full bg-[#080808]/80 border border-[#8C7045]/40 backdrop-blur-md">
          <SpartanHelmetIcon className="w-8 h-8 text-white" crestColor="#D10A20" />
        </div>

        {/* Eyebrow */}
        <span className="text-xs sm:text-sm uppercase tracking-[0.4em] text-[#D10A20] font-bold mb-6">
          THE SPARTAN IMPERATIVE
        </span>

        {/* Oversized Cinematic Statement */}
        <h2 className="font-cinzel text-3xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-[0.05em] leading-[1.12] mb-8 max-w-4xl">
          “THE WEAK WAIT FOR TOMORROW.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1E35] to-[#D10A20]">
            WARRIORS BEGIN TODAY.”
          </span>
        </h2>

        {/* Small Red Divider */}
        <div className="w-16 h-[3px] bg-[#D10A20] mb-8 shadow-red-glow" />

        {/* Short Supporting Line */}
        <p className="font-body text-[#A6A6A6] text-lg sm:text-2xl font-light tracking-wide max-w-xl mb-10">
          Your transformation begins with one decision.
        </p>

        {/* Action Button */}
        <button
          onClick={onCtaClick}
          className="bg-[#D10A20] hover:bg-[#FF1E35] text-white px-10 py-4 text-xs sm:text-sm uppercase tracking-[0.25em] font-bold shadow-red-glow hover:shadow-2xl transition-all duration-300 active:scale-95 cursor-pointer"
        >
          STEP INTO THE ARENA
        </button>
      </div>
    </section>
  )
}
