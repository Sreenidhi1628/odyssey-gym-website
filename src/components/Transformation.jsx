import React, { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Flame, Shield, CheckCircle2 } from 'lucide-react'

export default function Transformation({ onEnlistClick }) {
  const [activeTab, setActiveTab] = useState('hypertrophy')

  const transformationPillars = [
    {
      id: 'hypertrophy',
      label: '01. STRUCTURAL HYPERTROPHY',
      title: 'DENSE MUSCULAR CHASSIS',
      description: 'Systematic high-tension microcycles focused on mechanical overload, deep eccentric control, and structural bone remodeling.',
      stat: '+18.4%',
      statLabel: 'AVERAGE LEAN MASS INCREASE ACROSS 16-WEEK CYCLE',
      image: '/images/trial_after.webp',
      alt: 'Athletic warrior physique post-training progression',
    },
    {
      id: 'strength',
      label: '02. NEUROMUSCULAR POWER',
      title: 'ABSOLUTE FORCE OUTPUT',
      description: 'Progressive overload of foundational compound movements. Converting raw neurological drive into maximum kinetic leverage.',
      stat: '+35 KG',
      statLabel: 'AVERAGE COMPOUND TOTAL INCREASE',
      image: '/images/prog-strength.jpg',
      alt: 'Heavy barbell deadlift on the wooden platform',
    },
    {
      id: 'conditioning',
      label: '03. METABOLIC SIEGE',
      title: 'THE UNRELENTING ENGINE',
      description: 'High-density lactate threshold intervals and strongman sled carries engineered to conquer fatigue in deep water.',
      stat: 'SUB 6:00',
      statLabel: 'MILE SLED DRAG BENCHMARK',
      image: '/images/arena-conditioning.jpg',
      alt: 'Athlete driving heavy prowler sled under intense arena light',
    },
  ]

  const current = transformationPillars.find(p => p.id === activeTab) || transformationPillars[0]

  return (
    <section
      id="crucible"
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
                CHAPTER IV // THE CRUCIBLE
              </span>
            </div>
            <h2 className="font-condensed text-4xl sm:text-6xl font-bold uppercase text-white tracking-[0.02em] leading-[0.95]">
              PHYSICAL PROGRESS <br />
              <span className="font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#C1121F] via-[#E5E2DC] to-[#9E1B1B]">
                IS CONQUERED.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#8E8A82] max-w-sm lg:text-right">
            Every repetition leaves an irreversible mark. You do not find your limits; you build past them.
          </p>
        </motion.div>

        {/* Tab Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {transformationPillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActiveTab(pillar.id)}
              className={`p-4 border text-left transition-all duration-300 cursor-pointer ${
                activeTab === pillar.id
                  ? 'bg-[#121212] border-[#9E1B1B] text-white shadow-crimson-subtle'
                  : 'bg-[#0D0D0D] border-[#181818] text-[#8E8A82] hover:text-white hover:border-[#201E1C]'
              }`}
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C1121F] block mb-1">
                {pillar.label}
              </span>
              <span className="font-condensed text-lg uppercase tracking-wider font-bold">
                {pillar.title}
              </span>
            </button>
          ))}
        </div>

        {/* Interactive Feature Display */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0D0D0D] border border-[#201E1C] p-8 sm:p-12"
        >
          {/* Details Column */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C1121F] block mb-2">
                SCIENTIFIC PROGRESSION // 16-WEEK PROTOCOL
              </span>
              <h3 className="font-cinzel text-3xl sm:text-4xl font-bold uppercase text-white mb-4">
                {current.title}
              </h3>
              <p className="text-[#8E8A82] text-sm sm:text-base font-light leading-relaxed mb-8">
                {current.description}
              </p>

              {/* Stat Highlight */}
              <div className="p-6 bg-[#050505] border border-[#181818] mb-8">
                <div className="font-cinzel text-4xl sm:text-5xl font-black text-white">
                  {current.stat}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8E8A82] mt-1 font-semibold">
                  {current.statLabel}
                </div>
              </div>
            </div>

            <button
              onClick={onEnlistClick}
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-bold text-white hover:text-[#C1121F] transition-colors cursor-pointer"
            >
              <span>COMMENCE THIS TRANSFORMATION</span>
              <ArrowRight className="w-4 h-4 text-[#C1121F]" />
            </button>
          </div>

          {/* Photographic Visual */}
          <div className="lg:col-span-6 relative overflow-hidden h-[340px] sm:h-[420px] border border-[#181818]">
            <img
              src={current.image}
              alt={current.alt}
              className="w-full h-full object-cover object-center filter contrast-125 brightness-[75%]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-75" />
            
            <div className="absolute bottom-4 left-4 text-[9px] font-mono uppercase tracking-[0.25em] text-white bg-[#050505]/90 px-3 py-1 border border-[#9E1B1B]/40">
              WARRIOR BIOMECHANICAL AUDIT &bull; MMXXVI
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
