import React from 'react'
import { motion } from 'motion/react'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function Membership({ onSelectTier, onSpeakTeamClick }) {
  const tiers = [
    {
      name: 'RECRUIT',
      tagline: 'Standard Arena Access & Armory',
      price: '79',
      period: '/ MO',
      description: 'Full unrestricted access to the arena floor, competition platforms, and free weights.',
      features: [
        '24/7 biometric arena sanctum access',
        'Olympic platforms, calibrated steel & dumbbells',
        'Locker rooms, cold recovery showers & storage',
        'ODYSSEY training log app & tracking',
      ],
      featured: false,
      cta: 'ENLIST AS RECRUIT',
    },
    {
      name: 'LEGIONARY',
      tagline: 'Complete Arsenal & Class Programming',
      price: '139',
      period: '/ MO',
      description: 'Our flagship membership. All equipment plus unlimited access to all battle disciplines.',
      features: [
        'All Recruit privileges included',
        'Unlimited sessions in The Forge, War Machine & Gladiator',
        'Weekly coach movement diagnostics & loading reviews',
        'Recovery sanctum & contrast therapy access',
      ],
      featured: true,
      badge: 'MOST COMMANDED',
      cta: 'CLAIM LEGIONARY STATUS',
    },
    {
      name: 'CENTURION',
      tagline: '1-on-1 Dedicated Mentorship',
      price: '249',
      period: '/ MO',
      description: 'Direct personal mentorship with ODYSSEY’s highest-ranking coaches and bespoke periodization.',
      features: [
        'All Legionary privileges included',
        'Dedicated 1-on-1 Centurion coaching sessions',
        'Customized nutrition & macro telemetry protocol',
        'Reserved platform booking & priority facility access',
      ],
      featured: false,
      cta: 'APPLY FOR CENTURION',
    },
  ]

  return (
    <section
      id="membership"
      className="relative bg-[#080808] py-20 sm:py-28 overflow-hidden border-t border-[#A87942]/20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#1c1a17]"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#A87942]" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#C6A16B] font-mono">
                SECTION 06 — MEMBERSHIP & ENLISTMENT
              </span>
            </div>
            <h2 className="font-condensed text-4xl sm:text-6xl font-bold uppercase text-[#E8E2D8] tracking-[0.02em] leading-[0.95]">
              CLAIM YOUR PLACE <br />
              <span className="font-cinzel text-[#A87942]">IN THE ARENA.</span>
            </h2>
          </div>
          <div className="max-w-md lg:text-right">
            <p className="font-cinzel text-base text-[#C6A16B] font-semibold">
              &ldquo;Stop waiting for the perfect moment. Enter the arena.&rdquo;
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#9E9990] mt-1 font-mono">
              Transparent terms &bull; Zero contracts &bull; Dedicated standards
            </p>
          </div>
        </motion.div>

        {/* Differentiated Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className={`p-8 border flex flex-col justify-between transition-all duration-300 relative ${
                tier.featured
                  ? 'bg-[#141414] border-[#A87942] shadow-bronze-glow scale-100 lg:scale-[1.03] z-10'
                  : 'bg-[#100F0D] border-[#1c1a17] hover:border-[#A87942]/50'
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3.5 right-6 bg-[#A87942] text-[#080808] text-[9px] uppercase tracking-[0.25em] font-bold px-3 py-1 font-mono shadow-bronze-subtle">
                  {tier.badge}
                </span>
              )}

              <div>
                <h3 className="font-cinzel text-2xl font-bold uppercase text-[#E8E2D8] tracking-wider">
                  {tier.name}
                </h3>
                <p className="text-[10px] font-mono text-[#A87942] uppercase tracking-[0.2em] mt-1 mb-3">
                  {tier.tagline}
                </p>
                <p className="text-xs text-[#9E9990] font-light leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-[#1c1a17]">
                  <span className="text-sm font-mono text-[#A87942] font-bold">$</span>
                  <span className="font-cinzel text-4xl sm:text-5xl font-black text-[#E8E2D8]">{tier.price}</span>
                  <span className="text-xs font-mono text-[#9E9990] tracking-wider">{tier.period}</span>
                </div>

                {/* Feature List */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#9E9990]">
                      <CheckCircle2 className="w-4 h-4 text-[#A87942] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectTier(tier.name)}
                className={`w-full py-3.5 text-xs uppercase tracking-[0.22em] font-bold transition-all duration-300 text-center cursor-pointer ${
                  tier.featured
                    ? 'bg-[#A87942] hover:bg-[#C6A16B] text-[#080808] shadow-bronze-glow'
                    : 'border border-[#A87942]/40 hover:border-[#A87942] text-[#E8E2D8] hover:bg-[#A87942]/10'
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Secondary Question CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#9E9990]">
            Need a tailored corporate or squad enlistment?{' '}
            <button
              onClick={onSpeakTeamClick}
              className="text-[#C6A16B] hover:text-white underline font-semibold transition-colors cursor-pointer"
            >
              Speak to our Centurion advisor &rarr;
            </button>
          </p>
        </div>

      </div>
    </section>
  )
}
