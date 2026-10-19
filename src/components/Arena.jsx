import React from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

export default function Arena({ onEnlistClick }) {
  const arenaChambers = [
    {
      id: 'platform',
      title: 'CALIBRATED STEEL & LIFTING PLATFORMS',
      chamber: 'CHAMBER I // HEAVY RESISTANCE',
      spec: 'Competition-grade Eleiko & Rogue power bars, calibrated steel discs to 0.25kg tolerances, massive dumbbell arsenal to 150 lbs, and chalk blocks.',
      image: '/images/arena-freeweights.jpg',
      alt: 'Barbells and calibrated iron plates on solid oak platforms',
      span: 'lg:col-span-8',
      height: 'min-h-[380px]',
    },
    {
      id: 'cages',
      title: 'MONOLITH POWER RACKS',
      chamber: 'CHAMBER II // MAXIMUM LOADS',
      spec: '3x3 heavy-gauge structural steel cages with safety suspension straps, band pegs, dip horns, and pullup arrays.',
      image: '/images/arena-power.jpg',
      alt: 'Power cages under directional arena lighting',
      span: 'lg:col-span-4',
      height: 'min-h-[380px]',
    },
    {
      id: 'turf',
      title: 'BATTLE TURF & TACTICAL RIGS',
      chamber: 'CHAMBER III // FUNCTIONAL WARFARE',
      spec: '50-meter indoor sprint turf, climbing ropes, medicine ball ballistic target walls, and heavy sandbag strongman station.',
      image: '/images/arena-functional.jpg',
      alt: 'Athletic sprint turf and functional training rigs',
      span: 'lg:col-span-5',
      height: 'min-h-[400px]',
    },
    {
      id: 'metabolic',
      title: 'METABOLIC SIEGE ENGINES',
      chamber: 'CHAMBER IV // WORK CAPACITY',
      spec: 'Heavy Prowler sleds, curved manual treadmills, Concept2 rowers, ski ergs, and assault bikes built for lactate endurance.',
      image: '/images/arena-conditioning.jpg',
      alt: 'Conditioning sleds and heavy equipment track',
      span: 'lg:col-span-7',
      height: 'min-h-[400px]',
    },
  ]

  return (
    <section
      id="arena"
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
                CHAPTER II // FORGED IN BATTLE
              </span>
            </div>
            <h2 className="font-condensed text-4xl sm:text-6xl font-bold uppercase text-white tracking-[0.02em] leading-[0.95]">
              THE TRAINING <br />
              <span className="font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#C1121F] via-[#E5E2DC] to-[#9E1B1B]">
                SANCTUM.
              </span>
            </h2>
          </div>
          <div className="max-w-md lg:text-right">
            <p className="font-cinzel text-base text-white font-semibold">
              &ldquo;Every tool has a purpose. Every session moves you forward.&rdquo;
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#8E8A82] mt-1 font-mono">
              Raw iron &bull; Calibrated steel &bull; No recreational toys
            </p>
          </div>
        </motion.div>

        {/* Asymmetrical Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {arenaChambers.map((chamber, idx) => (
            <motion.div
              key={chamber.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`relative group overflow-hidden border border-[#201E1C] hover:border-[#9E1B1B] bg-[#0D0D0D] ${chamber.height} flex flex-col justify-end p-6 sm:p-8 transition-colors duration-500 ${chamber.span}`}
            >
              {/* Background Photography with Slow Motion Scale */}
              <div className="absolute inset-0 z-0">
                <img
                  src={chamber.image}
                  alt={chamber.alt}
                  className="w-full h-full object-cover object-center filter contrast-125 brightness-[52%] group-hover:scale-105 group-hover:brightness-[68%] transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/65 to-transparent" />
              </div>

              {/* Upper Inscription Badge */}
              <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-[#050505]/90 px-3 py-1 border border-[#201E1C] group-hover:border-[#9E1B1B]/60 transition-colors">
                <span className="w-1.5 h-1.5 bg-[#C1121F]" />
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#E5E2DC] font-mono font-bold">
                  {chamber.chamber}
                </span>
              </div>

              {/* Lower Chamber Details */}
              <div className="relative z-10">
                <h3 className="font-condensed text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide mb-2 group-hover:text-[#C1121F] transition-colors">
                  {chamber.title}
                </h3>
                <p className="text-[#8E8A82] text-xs sm:text-sm font-light leading-relaxed max-w-lg mb-4">
                  {chamber.spec}
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-[#C1121F] group-hover:text-white uppercase tracking-widest font-semibold">
                  <span>CHAMBER SPECIFICATIONS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Crimson Accent Notch */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-[#C1121F] transition-all duration-500 shadow-[0_0_10px_#C1121F]" />
            </motion.div>
          ))}
        </div>

        {/* Tactical Facility Metrics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="mt-14 p-8 bg-[#0D0D0D] border border-[#201E1C] grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div>
            <div className="font-cinzel text-3xl sm:text-4xl font-black text-white">
              14,000<span className="text-[#C1121F] text-xl">SQ FT</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#8E8A82] mt-1 font-mono">
              ARENA CAPACITY
            </div>
          </div>
          <div>
            <div className="font-cinzel text-3xl sm:text-4xl font-black text-[#C1121F]">
              12<span className="text-white text-xl">STATIONS</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#8E8A82] mt-1 font-mono">
              OLYMPIC PLATFORMS
            </div>
          </div>
          <div>
            <div className="font-cinzel text-3xl sm:text-4xl font-black text-white">
              50<span className="text-[#C1121F] text-xl">M</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#8E8A82] mt-1 font-mono">
              TACTICAL SPRINT TURF
            </div>
          </div>
          <div>
            <div className="font-cinzel text-3xl sm:text-4xl font-black text-white">
              24<span className="text-[#C1121F] text-xl">/7</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#8E8A82] mt-1 font-mono">
              BIOMETRIC ACCESS
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
