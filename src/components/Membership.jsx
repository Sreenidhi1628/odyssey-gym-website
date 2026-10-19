import React, { useState } from 'react'
import { Check, Shield, Flame, Crown, ArrowRight } from 'lucide-react'

export default function Membership({ onSelectTier }) {
  const [billingCycle, setBillingCycle] = useState('monthly') // 'monthly' | 'annual'

  const tiers = [
    {
      id: 'warrior',
      title: 'WARRIOR',
      tagline: 'Standard Arena Membership',
      description: 'Full uncompromised access to the Odyssey iron floor, platforms, and conditioning zones.',
      priceMonthly: 120,
      priceAnnual: 99,
      isFeatured: false,
      benefits: [
        'Complete Arena floor & power rack access',
        'Locker rooms, rain showers & recovery saunas',
        'Odyssey Member digital access keycard',
        'Standard training hours (5:00 AM – 11:00 PM)',
        'Bi-monthly movement evaluation',
      ],
      ctaText: 'ENLIST AS WARRIOR',
      badge: null,
    },
    {
      id: 'spartan',
      title: 'SPARTAN',
      tagline: 'Comprehensive Performance Legion',
      description: 'For dedicated athletes demanding structured programming, combat group sessions, and priority arena perks.',
      priceMonthly: 195,
      priceAnnual: 165,
      isFeatured: true,
      benefits: [
        'Everything in Warrior membership',
        'Unlimited access to all 4 Training Disciplines',
        '24/7 Unlimited Arena access with biometric key',
        'Monthly 1-on-1 performance coaching review',
        'Cold plunge & infrared contrast therapy suite',
        'Customized progressive overload program tracking',
      ],
      ctaText: 'JOIN THE PHALANX',
      badge: 'MOST CHOSEN BY THE LEGION',
    },
    {
      id: 'legend',
      title: 'LEGEND',
      tagline: 'Elite Bespoke Executive Tier',
      description: 'The pinnacle of warrior development. Bespoke one-on-one coaching, dedicated nutrition, and VIP arena privileges.',
      priceMonthly: 340,
      priceAnnual: 285,
      isFeatured: false,
      benefits: [
        'Everything in Spartan membership',
        '4 Dedicated private 1-on-1 coaching sessions/mo',
        'Personal locker with laundry and kit prep',
        'Comprehensive bloodwork biomarker & nutrition plan',
        'VIP private recovery suite booking',
        'Unlimited guest arena day-passes',
      ],
      ctaText: 'BECOME A LEGEND',
      badge: 'ELITE APEX',
    },
  ]

  return (
    <section id="membership" className="relative py-28 sm:py-36 bg-[#080808] border-t border-[#1B1B1B]/70 overflow-hidden">
      {/* Background Ambience */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D10A20]/8 blur-[180px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 z-10">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#D10A20]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D10A20] font-semibold">
              JOIN THE LEGION
            </span>
            <span className="w-6 h-[2px] bg-[#D10A20]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-wide mb-6">
            CLAIM YOUR PLACE.
          </h2>

          <p className="font-body text-[#A6A6A6] text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Choose your level of commitment. Every membership grants access to an uncompromising training sanctuary built for warriors.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="inline-flex items-center p-1.5 bg-[#141414] border border-[#1B1B1B] rounded-none">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-[#1B1B1B] text-white shadow-sm border border-white/10'
                  : 'text-[#A6A6A6] hover:text-white'
              }`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-[#D10A20] text-white shadow-red-subtle'
                  : 'text-[#A6A6A6] hover:text-white'
              }`}
            >
              <span>ANNUAL</span>
              <span className="text-[9px] bg-black/40 px-1.5 py-0.5 text-white/90 font-mono">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Membership Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => {
            const price = billingCycle === 'annual' ? tier.priceAnnual : tier.priceMonthly

            return (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between p-8 sm:p-10 transition-all duration-500 ${
                  tier.isFeatured
                    ? 'bg-[#161616] border-2 border-[#D10A20] shadow-red-glow lg:-translate-y-4'
                    : 'bg-[#141414] border border-[#1B1B1B] hover:border-[#D10A20]/40'
                }`}
              >
                {/* Top Badge for Featured Spartan Plan */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#D10A20] text-white text-[9px] uppercase tracking-[0.25em] font-bold px-4 py-1 shadow-md">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Tier Title & Tagline */}
                  <div className="pb-6 border-b border-[#1B1B1B]">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C7045] font-semibold block mb-1">
                      {tier.tagline}
                    </span>
                    <h3 className="font-cinzel text-2xl sm:text-3xl font-black uppercase text-white tracking-wider">
                      {tier.title}
                    </h3>
                  </div>

                  {/* Pricing Display */}
                  <div className="py-6 border-b border-[#1B1B1B]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs uppercase tracking-widest text-[#A6A6A6]">$</span>
                      <span className="font-cinzel text-5xl font-black text-white tracking-tight">
                        {price}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-[#A6A6A6]">
                        / MONTH
                      </span>
                    </div>
                    <p className="text-[11px] text-[#A6A6A6] mt-2 font-light">
                      {billingCycle === 'annual'
                        ? 'Billed annually ($' + price * 12 + '/yr). Editable placeholder.'
                        : 'Billed monthly. Cancel anytime with 30 days notice.'}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A6A6A6] font-light leading-relaxed my-6">
                    {tier.description}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-3.5 mb-8">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white font-semibold block">
                      INCLUDED PRIVILEGES:
                    </span>
                    {tier.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#A6A6A6]">
                        <Check className="w-4 h-4 text-[#D10A20] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-6 border-t border-[#1B1B1B]">
                  <button
                    onClick={() => onSelectTier(tier.title)}
                    className={`w-full py-4 text-xs uppercase tracking-[0.22em] font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      tier.isFeatured
                        ? 'bg-[#D10A20] hover:bg-[#FF1E35] text-white shadow-red-subtle hover:shadow-red-glow'
                        : 'bg-[#1B1B1B] hover:bg-[#D10A20] text-white border border-[#1B1B1B] hover:border-[#D10A20]'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Note regarding configurable pricing */}
        <p className="text-center text-[11px] uppercase tracking-[0.2em] text-[#A6A6A6]/60 mt-12">
          * Membership rates and benefits are editable placeholders. Corporate & private cohort rates available upon application.
        </p>
      </div>
    </section>
  )
}
