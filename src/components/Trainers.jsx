import React from 'react'
import { motion } from 'motion/react'
import { Shield, Award, Users } from 'lucide-react'

export default function Trainers({ onEnlistClick }) {
  const trainers = [
    {
      name: 'MARCUS AURELIUS V.',
      rank: 'HEAD CENTURION // BIOMECHANICS',
      specialty: 'Olympic Barbell & Maximum Neuromuscular Overload',
      experience: '12+ Years High-Performance Coaching',
      image: '/images/trainer_marcus.webp',
      alt: 'Head Centurion Marcus in dark warrior gym atmosphere',
      quote: 'Flawless form is the foundation of devastating force.',
    },
    {
      name: 'CASSIA DRAKE',
      rank: 'CENTURION // METABOLIC WARFARE',
      specialty: 'High-Density Lactate Capacity & Tactical Conditioning',
      experience: 'Former Elite Tactical Conditioning Coach',
      image: '/images/trainer_cassia.webp',
      alt: 'Centurion Cassia in arena conditioning facility',
      quote: 'When your lungs scream, your mind decides who you are.',
    },
    {
      name: 'VALERIUS THORNE',
      rank: 'CENTURION // ATHLETIC POWER',
      specialty: 'Triple-Extension Force Output & Rotational Agility',
      experience: 'Strength & Conditioning Specialist (CSCS)',
      image: '/images/trainer_valerius.webp',
      alt: 'Centurion Valerius on the platform',
      quote: 'We don’t just move weight. We control kinetic energy.',
    },
  ]

  return (
    <section
      id="legion"
      className="relative bg-[#050505] py-24 sm:py-32 overflow-hidden border-t border-[#181818]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
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
                CHAPTER V // CENTURIONS & THE LEGION
              </span>
            </div>
            <h2 className="font-condensed text-4xl sm:text-6xl font-bold uppercase text-white tracking-[0.02em] leading-[0.95]">
              NO WARRIOR <br />
              <span className="font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#C1121F] via-[#E5E2DC] to-[#9E1B1B]">
                STANDS ALONE.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#8E8A82] max-w-sm lg:text-right">
            Led by elite battle-tested commanders. Backed by a community with zero ego and ruthless mutual accountability.
          </p>
        </motion.div>

        {/* Trainers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="group relative bg-[#0D0D0D] border border-[#201E1C] hover:border-[#9E1B1B] transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-stone-drop card-lift cursor-pointer"
            >
              {/* Portrait Photography with Smooth Zoom */}
              <div className="relative h-80 overflow-hidden bg-[#050505]">
                <img
                  src={trainer.image}
                  alt={trainer.alt}
                  className="w-full h-full object-cover object-top filter contrast-125 brightness-[78%] group-hover:brightness-[90%] transition-transform duration-700 ease-out card-bg-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent" />
                
                {/* Rank Tag */}
                <div className="absolute top-4 left-4 z-10 bg-[#050505]/90 px-3 py-1 border border-[#201E1C] group-hover:border-[#9E1B1B]/60 transition-colors">
                  <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#C1121F] font-bold">
                    {trainer.rank}
                  </span>
                </div>
              </div>

              {/* Coach Bio Details */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-condensed text-2xl font-bold uppercase text-white mb-1 group-hover:text-[#C1121F] transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-xs text-[#8E8A82] font-mono uppercase tracking-wider mb-4">
                    {trainer.specialty}
                  </p>
                  <p className="font-cinzel text-xs text-white/80 italic mb-6">
                    &ldquo;{trainer.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#181818] flex items-center justify-between text-[10px] font-mono text-[#8E8A82]">
                  <span>{trainer.experience}</span>
                  <span className="text-[#C1121F] font-bold uppercase">MENTOR &bull; 1-ON-1</span>
                </div>
              </div>

              {/* Bottom Crimson Edge */}
              <div className="h-[2px] w-0 group-hover:w-full bg-[#C1121F] transition-all duration-500 shadow-[0_0_8px_#C1121F]" />
            </motion.div>
          ))}
        </div>

        {/* Community Legion Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="relative group overflow-hidden border border-[#201E1C] bg-[#0D0D0D] min-h-[300px] sm:min-h-[360px] flex flex-col justify-end p-8 sm:p-12"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/images/legion_athletes.webp"
              alt="Legion athletes training together with sleds and barbells"
              className="w-full h-full object-cover object-center filter contrast-125 brightness-[45%]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/75 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C1121F] block mb-2 font-bold">
              THE UNITED LEGION
            </span>
            <h3 className="font-condensed text-3xl sm:text-4xl font-bold uppercase text-white mb-3">
              TRAIN WITH WARRIORS WHO DEMAND YOUR BEST.
            </h3>
            <p className="text-xs sm:text-sm text-[#8E8A82] font-light leading-relaxed max-w-xl mb-6">
              When you step through the arena gates, you leave your ego in the chalk box. We support every heavy attempt, celebrate every personal record, and push each other through the final rep.
            </p>

            <div className="flex items-center gap-6 text-[10px] font-mono text-white uppercase tracking-wider">
              <span>ZERO EGO &bull; ALL GRIND</span>
              <span>&bull;</span>
              <span className="text-[#C1121F]">100% SQUAD ACCOUNTABILITY</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
