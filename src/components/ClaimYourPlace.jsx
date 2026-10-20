import React, { useState } from 'react'
import { ArrowRight, ChevronDown, CheckCircle2, Shield, Flame } from 'lucide-react'

export default function ClaimYourPlace({ onJoinClick, onSpeakTeamClick, onSelectTier }) {
  const [showTiers, setShowTiers] = useState(false)

  const membershipTiers = [
    {
      name: 'LEGION ACCESS',
      category: 'STANDARD ARENA PASS',
      price: '149',
      period: '/ MO',
      description: 'Full 24/7 access to the weight floor, calibrated platforms, and industrial armory.',
      features: [
        '24/7 biometric arena sanctum access',
        'Olympic platforms, calibrated steel & dumbbells up to 150 lbs',
        'Locker rooms, cold recovery showers & storage',
        'ODYSSEY training log app & movement tracking',
      ],
      featured: false,
    },
    {
      name: 'WARRIOR COMMAND',
      category: 'ALL INCLUSIVE PROGRAMMING',
      price: '229',
      period: '/ MO',
      description: 'Unrestricted access to all four training disciplines, coaching guidance, and recovery.',
      features: [
        'All Legion Access privileges',
        'Unlimited sessions in The Forge, War Machine, & The Gladiator',
        'Weekly form diagnosis and load progression reviews',
        'Recovery suite & contrast therapy access',
      ],
      featured: true,
    },
    {
      name: 'CENTURION PROTOCOL',
      category: '1-ON-1 BESPOKE COACHING',
      price: '389',
      period: '/ MO',
      description: 'Dedicated personal Centurion mentor, customized periodization, and continuous telemetry.',
      features: [
        'All Warrior Command privileges',
        'Dedicated 1-on-1 Centurion coaching sessions',
        'Customized nutrition, macro calibration & sleep recovery protocols',
        'Reserved platform booking & priority facility access',
      ],
      featured: false,
    },
  ]

  return (
    <section
      id="membership"
      className="relative bg-[#050505] py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-[#181818]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Dramatic Conversion Card with Monumental Stone & Crimson Accent */}
        <div className="relative group overflow-hidden border border-[#201E1C] hover:border-[#9E1B1B] transition-colors duration-500 bg-[#0D0D0D] grid grid-cols-1 lg:grid-cols-12 min-h-[520px] shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
          
          {/* Narrow Blood-Red Vertical Stripe */}
          <div className="hidden lg:block lg:col-span-1 bg-[#9E1B1B] shadow-[0_0_25px_#9E1B1B] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/60" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 -rotate-90 whitespace-nowrap text-[10px] tracking-[0.4em] text-white font-mono font-bold">
              ODYSSEY // CLAIM YOUR PLACE
            </div>
          </div>

          {/* Center Editorial Message (7 cols) */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-center items-start z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C1121F]" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#C1121F] font-mono">
                MEMBERSHIP & ENLISTMENT
              </span>
            </div>

            <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-[0.03em] leading-[0.98] mb-6">
              YOUR LEGACY <br />
              <span className="text-[#C1121F]">STARTS HERE.</span>
            </h2>

            <p className="font-cinzel text-base sm:text-lg text-white font-semibold tracking-wide mb-3">
              &ldquo;Stop waiting for the perfect moment. Enter the arena.&rdquo;
            </p>

            <p className="text-[#8E8A82] text-xs sm:text-sm font-light leading-relaxed tracking-wide mb-8 max-w-lg">
              Every warrior who made history began with a singular decisive commitment. Step onto the floor, claim your place among the legion, and forge an unyielding standard.
            </p>

            {/* Dual CTAs: [ JOIN ODYSSEY ] & [ SPEAK TO OUR TEAM ] */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onJoinClick}
                className="bg-[#9E1B1B] hover:bg-[#C1121F] text-white px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-crimson-subtle flex items-center justify-center gap-3 cursor-pointer active:scale-95 shine-sweep glow-pulse"
              >
                <span>JOIN ODYSSEY</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onSpeakTeamClick || onJoinClick}
                className="border border-[#201E1C] hover:border-white text-[#E5E2DC] hover:text-white bg-[#050505]/80 px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shine-sweep"
              >
                <span>SPEAK TO OUR TEAM</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => setShowTiers(!showTiers)}
              className="mt-6 text-xs uppercase tracking-[0.2em] text-[#8E8A82] hover:text-[#C1121F] transition-colors flex items-center gap-2 font-mono cursor-pointer"
            >
              <span>{showTiers ? 'COLLAPSE MEMBERSHIP TIERS' : 'EXPLORE MEMBERSHIP TIERS'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showTiers ? 'rotate-180 text-[#C1121F]' : ''}`} />
            </button>
          </div>

          {/* Right Dramatic Helmet Visual (Dark, aesthetic Odyssey Spartan helmet with red rim lighting and particles) */}
          <div className="lg:col-span-5 relative overflow-hidden min-h-[360px] lg:min-h-full flex items-center justify-center bg-[#070707]">
            
            {/* Soft Ambient Crimson Halo Glow behind helmet */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-gradient-to-t from-[#9E1B1B]/40 via-[#C1121F]/25 to-transparent rounded-full blur-[80px] pointer-events-none"
              aria-hidden="true" 
            />

            {/* Spartan / Gladiator Helmet Image */}
            <img
              src="/images/hero-helmet.jpg"
              alt="Dark aesthetic Spartan gladiator helmet with blood red crest, rim lighting and smoke embers"
              className="w-full h-full object-cover object-center filter contrast-[118%] brightness-[85%] group-hover:scale-105 transition-transform duration-1000 ease-out card-bg-zoom"
              loading="lazy"
            />

            {/* Gradient fade on left edge so text stays completely readable */}
            <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/85 to-transparent pointer-events-none" />
            
            {/* Gradient fade on bottom & top */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0D0D0D]/40 to-transparent pointer-events-none" />

            {/* Corner Inscription Plate */}
            <div className="absolute bottom-5 right-5 z-10 hidden sm:flex items-center gap-2 bg-[#050505]/85 px-3 py-1.5 border border-[#201E1C]">
              <span className="w-1.5 h-1.5 bg-[#C1121F] animate-pulse" />
              <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#8E8A82]">
                LEGION EMBLEM MMXXVI
              </span>
            </div>
          </div>

        </div>

        {/* Expandable Membership Tiers */}
        {showTiers && (
          <div className="mt-12 pt-12 border-t border-[#181818] grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {membershipTiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-8 border flex flex-col justify-between transition-all duration-300 card-lift ${
                  tier.featured
                    ? 'bg-[#101010] border-[#9E1B1B] shadow-crimson-glow relative'
                    : 'bg-[#0D0D0D] border-[#201E1C] hover:border-[#9E1B1B]/60'
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3.5 right-6 bg-[#9E1B1B] text-white text-[9px] uppercase tracking-[0.25em] font-bold px-3 py-1 shadow-crimson-subtle font-mono">
                    MOST COMMANDED
                  </span>
                )}

                <div>
                  <h3 className="font-cinzel text-2xl font-bold uppercase text-white tracking-wider">
                    {tier.name}
                  </h3>
                  <p className="text-[10px] font-mono text-[#C1121F] uppercase tracking-[0.2em] mt-1 mb-4">
                    {tier.category}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-5 pb-5 border-b border-[#181818]">
                    <span className="text-sm font-mono text-[#C1121F] font-bold">$</span>
                    <span className="font-cinzel text-4xl font-black text-white">{tier.price}</span>
                    <span className="text-xs font-mono text-[#8E8A82] tracking-wider">{tier.period}</span>
                  </div>

                  <p className="text-xs text-[#8E8A82] font-light leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  <ul className="space-y-3 mb-8 pt-4 border-t border-[#181818]">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#8E8A82]">
                        <CheckCircle2 className="w-4 h-4 text-[#C1121F] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectTier(tier.name)}
                  className={`w-full py-3.5 text-xs uppercase tracking-[0.22em] font-bold transition-all duration-300 text-center cursor-pointer shine-sweep ${
                    tier.featured
                      ? 'bg-[#9E1B1B] hover:bg-[#C1121F] text-white shadow-crimson-subtle glow-pulse'
                      : 'border border-[#201E1C] hover:border-white text-white bg-[#050505]'
                  }`}
                >
                  ENQUIRE FOR {tier.name}
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
