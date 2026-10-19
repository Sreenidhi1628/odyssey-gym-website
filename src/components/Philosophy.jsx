import React from 'react'
import { motion } from 'motion/react'
import { ArrowRight, ShieldCheck, Dumbbell, Flame, Trophy } from 'lucide-react'

export default function Philosophy({ onExploreClick }) {
  const stats = [
    { value: '14,000', unit: 'SQ FT', label: 'WAR ARENA FOOTPRINT' },
    { value: '12', unit: 'STATIONS', label: 'OLYMPIC PLATFORMS' },
    { value: '50', unit: 'METERS', label: 'TACTICAL SPRINT TURF' },
    { value: '24/7', unit: 'BIOMETRIC', label: 'UNRESTRICTED ACCESS' },
  ]

  return (
    <section
      id="philosophy"
      className="relative bg-[#080808] py-20 sm:py-28 overflow-hidden border-t border-[#A87942]/20"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#A87942_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#A87942]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-[2px] bg-[#A87942]" />
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#C6A16B] font-mono">
            SECTION 02 — THE PHILOSOPHY
          </span>
        </motion.div>

        {/* Visually Rich Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Bold Typography & Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="border-l-4 border-[#A87942] pl-6 sm:pl-8 mb-6">
              <h2 className="font-condensed text-4xl sm:text-6xl lg:text-7xl font-bold uppercase text-[#E8E2D8] tracking-[0.02em] leading-[0.95]">
                COMFORT <br />
                <span className="text-[#A87942] font-cinzel">BUILDS NOTHING.</span>
              </h2>
            </div>

            <p className="font-cinzel text-base sm:text-xl text-[#C6A16B] font-semibold leading-relaxed tracking-wide mb-6">
              &ldquo;Every generation has its arena. Ours is where discipline meets resistance, where limits are shattered, and where strength is conquered one repetition at a time.&rdquo;
            </p>

            <p className="text-[#9E9990] text-sm sm:text-base font-light leading-relaxed mb-8 max-w-xl">
              Commercial gyms encourage convenience and quiet complacency. ODYSSEY was forged for warriors who seek resistance. We combine the ruthless physical standard of ancient Spartan conditioning with the science of modern hypertrophy and biomechanics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mb-8">
              <div className="p-4 bg-[#141414] border border-[#1c1a17] hover:border-[#A87942]/40 transition-colors">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A87942] block mb-1">
                  LAW I: INTENTIONAL PAIN
                </span>
                <p className="text-xs text-[#E8E2D8] font-medium">
                  We don't negotiate with fatigue. We train through it.
                </p>
              </div>
              <div className="p-4 bg-[#141414] border border-[#1c1a17] hover:border-[#A87942]/40 transition-colors">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A87942] block mb-1">
                  LAW II: NO EXCUSES
                </span>
                <p className="text-xs text-[#E8E2D8] font-medium">
                  Show up when motivation fades. Rely on discipline.
                </p>
              </div>
            </div>

            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#C6A16B] hover:text-white font-bold transition-colors group cursor-pointer"
            >
              <span>INSPECT THE TRAINING ARSENAL</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Right Column: Architectural Roman Arena Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group overflow-hidden border border-[#A87942]/30 bg-[#141414]"
          >
            <div className="relative h-[380px] sm:h-[460px] overflow-hidden">
              <img
                src="/images/arena_colosseum.webp"
                alt="Ancient amphitheater arena with dramatic night lighting and stone architecture"
                className="w-full h-full object-cover object-center filter contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 via-transparent to-transparent" />
              
              {/* Corner Bronze Inscription */}
              <div className="absolute top-4 right-4 text-[9px] font-mono uppercase tracking-[0.3em] text-[#C6A16B] bg-[#080808]/80 px-2.5 py-1 border border-[#A87942]/30">
                ARENA SANCTUM // SECTOR I
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-10 border-t border-white/10 pt-4">
                <span className="font-cinzel text-lg sm:text-xl font-bold text-white uppercase tracking-wider block">
                  BUILT IN THE SPIRIT OF BATTLE
                </span>
                <span className="text-[11px] font-mono text-[#A87942] uppercase tracking-widest mt-1 block">
                  WHERE REPETITION FORGES LEGENDS
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Animated Gym Statistics Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 bg-[#141414]/90 border border-[#A87942]/25 shadow-bronze-subtle grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="font-cinzel text-3xl sm:text-4xl font-black text-[#E8E2D8]">
                {item.value} <span className="text-[#A87942] text-lg sm:text-xl font-normal">{item.unit}</span>
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#9E9990] mt-2 font-semibold">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
