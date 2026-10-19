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
      id="trainers"
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
                SECTION 07 — CENTURIONS & THE LEGION
              </span>
            </div>
            <h2 className="font-condensed text-4xl sm:text-6xl font-bold uppercase text-[#E8E2D8] tracking-[0.02em] leading-[0.95]">
              NO WARRIOR <br />
              <span className="font-cinzel text-[#A87942]">STANDS ALONE.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#9E9990] max-w-sm lg:text-right">
            Led by elite battle-tested coaches. Backed by a community with zero ego and relentless mutual respect.
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
              className="group relative bg-[#141414] border border-[#1c1a17] hover:border-[#A87942] transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-bronze-subtle"
            >
              {/* Portrait Photography with Smooth Zoom */}
              <div className="relative h-80 overflow-hidden bg-[#080808]">
                <img
                  src={trainer.image}
                  alt={trainer.alt}
                  className="w-full h-full object-cover object-top filter contrast-125 brightness-[78%] group-hover:scale-105 group-hover:brightness-[90%] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
                
                {/* Rank Tag */}
                <div className="absolute top-4 left-4 z-10 bg-[#080808]/85 px-3 py-1 border border-[#A87942]/40 backdrop-blur-sm">
                  <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#C6A16B] font-bold">
                    {trainer.rank}
                  </span>
                </div>
              </div>

              {/* Coach Bio Details */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-cinzel text-xl font-bold uppercase text-[#E8E2D8] mb-1 group-hover:text-[#C6A16B] transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-xs text-[#A87942] font-mono uppercase tracking-wider mb-4">
                    {trainer.specialty}
                  </p>
                  <p className="font-cinzel text-xs text-[#9E9990] italic mb-6">
                    &ldquo;{trainer.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1c1a17] flex items-center justify-between text-[10px] font-mono text-[#9E9990]">
                  <span>{trainer.experience}</span>
                  <span className="text-[#A87942] font-bold uppercase">MENTOR &bull; 1-ON-1</span>
                </div>
              </div>

              {/* Bottom Bronze Edge */}
              <div className="h-[2px] w-0 group-hover:w-full bg-[#A87942] transition-all duration-500 shadow-[0_0_8px_#A87942]" />
            </motion.div>
          ))}
        </div>

        {/* Community Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="relative group overflow-hidden border border-[#A87942]/30 bg-[#141414] min-h-[300px] sm:min-h-[360px] flex flex-col justify-end p-8 sm:p-12"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/images/legion_athletes.webp"
              alt="Legion athletes training together with sleds and barbells"
              className="w-full h-full object-cover object-center filter contrast-125 brightness-[50%]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/95 via-[#080808]/75 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#A87942] block mb-2">
              THE BROTHERHOOD & SISTERHOOD
            </span>
            <h3 className="font-condensed text-3xl sm:text-4xl font-bold uppercase text-[#E8E2D8] mb-3">
              TRAIN WITH WARRIORS WHO DEMAND YOUR BEST.
            </h3>
            <p className="text-xs sm:text-sm text-[#9E9990] font-light leading-relaxed max-w-xl mb-6">
              When you step through the arena gates, you leave your ego in the chalk box. We support every heavy attempt, celebrate every personal record, and push each other through the final rep.
            </p>

            <div className="flex items-center gap-6 text-[10px] font-mono text-[#C6A16B] uppercase tracking-wider">
              <span>ZERO EGO &bull; ALL GRIND</span>
              <span>&bull;</span>
              <span>100% SQUAD ACCOUNTABILITY</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
