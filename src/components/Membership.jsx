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
      className="relative bg-[#050505] py-24 sm:py-32 overflow-hidden border-t border-[#181818]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#181818]"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#C1121F]" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#C1121F] font-mono">
                CHAPTER VI // EARN YOUR LEGACY
              </span>
            </div>
            <h2 className="font-condensed text-4xl sm:text-6xl font-bold uppercase text-white tracking-[0.02em] leading-[0.95]">
              CLAIM YOUR PLACE <br />
              <span className="font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#C1121F] via-[#E5E2DC] to-[#9E1B1B]">
                IN THE ARENA.
              </span>
            </h2>
          </div>
          <div className="max-w-md lg:text-right">
            <p className="font-cinzel text-base text-white font-semibold">
              &ldquo;Stop waiting for the perfect moment. Enter the arena.&rdquo;
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#8E8A82] mt-1 font-mono">
              Transparent terms &bull; Zero contracts &bull; Dedicated standards
            </p>
          </div>
        </motion.div>

        {/* Monumental Stone Tablet Composition */}
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
                  ? 'bg-[#101010] border-[#9E1B1B] shadow-crimson-glow scale-100 lg:scale-[1.03] z-10'
                  : 'bg-[#0D0D0D] border-[#181818] hover:border-[#201E1C]'
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3.5 right-6 bg-[#9E1B1B] text-white text-[9px] uppercase tracking-[0.25em] font-bold px-3 py-1 font-mono shadow-crimson-subtle">
                  {tier.badge}
                </span>
              )}

              <div>
                <h3 className="font-condensed text-3xl font-bold uppercase text-white tracking-wider">
                  {tier.name}
                </h3>
                <p className="text-[10px] font-mono text-[#C1121F] uppercase tracking-[0.2em] mt-1 mb-3">
                  {tier.tagline}
                </p>
                <p className="text-xs text-[#8E8A82] font-light leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-[#181818]">
                  <span className="text-sm font-mono text-[#C1121F] font-bold">$</span>
                  <span className="font-cinzel text-4xl sm:text-5xl font-black text-white">{tier.price}</span>
                  <span className="text-xs font-mono text-[#8E8A82] tracking-wider">{tier.period}</span>
                </div>

                {/* Feature List */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#8E8A82]">
                      <CheckCircle2 className="w-4 h-4 text-[#C1121F] flex-shrink-0 mt-0.5" />
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
                    ? 'bg-[#9E1B1B] hover:bg-[#C1121F] text-white shadow-crimson-subtle'
                    : 'border border-[#201E1C] hover:border-[#9E1B1B] text-white hover:bg-[#141414]'
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Advisor Enlistment Link */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#8E8A82]">
            Need a tailored corporate or squad enlistment?{' '}
            <button
              onClick={onSpeakTeamClick}
              className="text-[#C1121F] hover:text-white underline font-semibold transition-colors cursor-pointer"
            >
              Speak to our Centurion advisor &rarr;
            </button>
          </p>
        </div>

      </div>
    </section>
  )
}
