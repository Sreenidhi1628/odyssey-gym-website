import React, { useState } from 'react'
import { ArrowRight, ChevronDown, CheckCircle2, Shield } from 'lucide-react'

export default function ClaimYourPlace({ onJoinClick, onSpeakTeamClick, onSelectTier }) {
  const [showTiers, setShowTiers] = useState(false)

  const membershipTiers = [
    {
      name: 'LEGION ACCESS',
      category: 'STANDARD ARENA PASS',
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
      className="relative bg-[#080808] py-28 sm:py-36 lg:py-44 overflow-hidden border-t border-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Dramatic Conversion Card with Monumental Stone & Crimson Accent */}
        <div className="relative group overflow-hidden border border-[#1A1A1A] bg-[#111111] grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
          
          {/* Narrow Blood-Red Vertical Stripe */}
          <div className="hidden lg:block lg:col-span-1 bg-[#D10A20] shadow-[0_0_25px_#D10A20] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/40" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 -rotate-90 whitespace-nowrap text-[10px] tracking-[0.4em] text-white font-mono font-bold">
              ODYSSEY // CLAIM YOUR PLACE
            </div>
          </div>

          {/* Center Editorial Message (7 cols) */}
          <div className="lg:col-span-6 p-8 sm:p-14 lg:p-16 flex flex-col justify-center items-start z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#D10A20]" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#D10A20]">
                SECTION 08 — MEMBERSHIP & ENLISTMENT
              </span>
            </div>

            <h2 className="font-cinzel text-4xl sm:text-6xl font-black uppercase text-white tracking-[0.03em] leading-[0.98] mb-6">
              YOUR LEGACY <br />
              <span className="text-[#D10A20]">STARTS HERE.</span>
            </h2>

            <p className="font-cinzel text-lg sm:text-xl text-[#E5E5E5] font-semibold tracking-wide mb-4">
              &ldquo;Stop waiting for the perfect moment. Enter the arena.&rdquo;
            </p>

            <p className="text-[#A6A6A6] text-sm sm:text-base font-light leading-relaxed tracking-wide mb-10 max-w-lg">
              Every warrior who made history began with a singular decisive commitment. Step onto the floor, claim your place among the legion, and forge an unyielding standard.
            </p>

            {/* Dual CTAs: [ JOIN ODYSSEY ] & [ SPEAK TO OUR TEAM ] */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onJoinClick}
                className="bg-[#D10A20] hover:bg-[#FF1E35] text-white px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-red-glow flex items-center justify-center gap-3 cursor-pointer active:scale-95"
              >
                <span>JOIN ODYSSEY</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onSpeakTeamClick || onJoinClick}
                className="border border-[#1A1A1A] hover:border-white text-[#E5E5E5] hover:text-white bg-[#080808]/80 px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>SPEAK TO OUR TEAM</span>
              </button>
            </div>

            <button
              onClick={() => setShowTiers(!showTiers)}
              className="mt-6 text-xs uppercase tracking-[0.2em] text-[#A6A6A6] hover:text-[#D10A20] transition-colors flex items-center gap-2 font-mono"
            >
              <span>{showTiers ? 'COLLAPSE MEMBERSHIP TIERS' : 'EXPLORE MEMBERSHIP TIERS'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showTiers ? 'rotate-180 text-[#D10A20]' : ''}`} />
            </button>
          </div>

          {/* Right Dramatic Arena Visual (5 cols) */}
          <div className="lg:col-span-5 relative overflow-hidden min-h-[320px] lg:min-h-full">
            <img
              src="/images/arena_colosseum.webp"
              alt="Ancient Roman Colosseum war arena under dark red night sky"
              className="w-full h-full object-cover object-center filter contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-transparent to-transparent lg:w-1/2" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
          </div>

        </div>

        {/* Expandable Membership Options */}
        {showTiers && (
          <div className="mt-12 pt-12 border-t border-[#1A1A1A] grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {membershipTiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-8 border flex flex-col justify-between transition-all duration-300 ${
                  tier.featured
                    ? 'bg-[#141414] border-[#D10A20] shadow-[0_0_25px_rgba(209,10,32,0.25)] relative'
                    : 'bg-[#111111] border-[#1A1A1A] hover:border-[#333333]'
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 right-6 bg-[#D10A20] text-white text-[9px] uppercase tracking-[0.25em] font-bold px-3 py-1 shadow-red-glow">
                    MOST COMMANDED
                  </span>
                )}

                <div>
                  <h3 className="font-cinzel text-2xl font-bold uppercase text-white tracking-wider">
                    {tier.name}
                  </h3>
                  <p className="text-[10px] font-mono text-[#D10A20] uppercase tracking-[0.2em] mt-1 mb-4">
                    {tier.category}
                  </p>
                  <p className="text-xs text-[#A6A6A6] leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  <ul className="space-y-3 mb-8 pt-4 border-t border-[#1A1A1A]">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#A6A6A6]">
                        <CheckCircle2 className="w-4 h-4 text-[#D10A20] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectTier(tier.name)}
                  className={`w-full py-3.5 text-xs uppercase tracking-[0.22em] font-bold transition-all duration-300 text-center cursor-pointer ${
                    tier.featured
                      ? 'bg-[#D10A20] hover:bg-[#FF1E35] text-white shadow-red-glow'
                      : 'border border-[#1A1A1A] hover:border-white text-white'
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
