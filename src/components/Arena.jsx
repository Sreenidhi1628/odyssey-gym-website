import React from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

export default function Arena({ onEnlistClick }) {
  const arenaZones = [
    {
      id: 'free-weights',
      title: 'CALIBRATED STEEL & FREE WEIGHTS',
      category: 'ZONE 01 // HEAVY RESISTANCE',
      spec: 'Olympic competition barbells, calibrated steel discs, precision dumbbell array up to 150 lbs, and dedicated chalk stations.',
      image: '/images/arena-freeweights.jpg',
      alt: 'Olympic barbells and heavy steel plates in dark industrial arena',
      span: 'lg:col-span-7',
    },
    {
      id: 'power-cages',
      title: 'MONOLITH POWER RACKS',
      category: 'ZONE 02 // STRUCTURAL CAGES',
      spec: 'Heavy-gauge steel structural power cages equipped with safety straps, band attachments, and multi-grip pullup rigs.',
      image: '/images/arena-power.jpg',
      alt: 'Heavy duty power racks under directional warm lighting',
      span: 'lg:col-span-5',
    },
    {
      id: 'turf-rigs',
      title: 'BATTLE TURF & TACTICAL RIGS',
      category: 'ZONE 03 // FUNCTIONAL WARFARE',
      spec: '50-meter indoor sprint track, climbing ropes, medicine ball ballistic stations, and heavy strongman sandbags.',
      image: '/images/arena-functional.jpg',
      alt: 'Athletic sprint turf and functional training rigs',
      span: 'lg:col-span-5',
    },
    {
      id: 'conditioning',
      title: 'METABOLIC ENGINE TRACK',
      category: 'ZONE 04 // WORK CAPACITY',
      spec: 'Prowler push sleds, curved manual treadmills, Concept2 rowers, ski ergs, and air bikes engineered for cardiovascular siege.',
      image: '/images/arena-conditioning.jpg',
      alt: 'Conditioning sleds and heavy equipment track',
      span: 'lg:col-span-7',
    },
  ]

  return (
    <section
      id="arena"
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
                SECTION 03 — THE TRAINING ARENA
              </span>
            </div>
            <h2 className="font-condensed text-4xl sm:text-6xl font-bold uppercase text-[#E8E2D8] tracking-[0.02em] leading-[0.95]">
              PREPARE YOURSELF <br />
              <span className="font-cinzel text-[#A87942]">FOR THE BATTLE.</span>
            </h2>
          </div>
          <div className="max-w-md lg:text-right">
            <p className="font-cinzel text-base text-[#C6A16B] font-semibold">
              &ldquo;Every tool has a purpose. Every session moves you forward.&rdquo;
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#9E9990] mt-1 font-mono">
              Raw iron &bull; Zero compromises &bull; Engineered for progress
            </p>
          </div>
        </motion.div>

        {/* Asymmetrical Editorial Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {arenaZones.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`relative group overflow-hidden border border-[#1c1a17] hover:border-[#A87942]/60 bg-[#141414] min-h-[340px] sm:min-h-[400px] flex flex-col justify-end p-6 sm:p-8 transition-colors duration-500 ${item.span}`}
            >
              {/* Background Photography with Smooth Zoom on Hover */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center filter contrast-125 brightness-[55%] group-hover:scale-105 group-hover:brightness-[70%] transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent" />
              </div>

              {/* Directional Bronze Rim Accent on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#A87942]/40 transition-colors pointer-events-none" />

              {/* Upper Category Label */}
              <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-[#080808]/80 px-3 py-1 border border-[#A87942]/30 backdrop-blur-sm">
                <span className="text-[9.5px] uppercase tracking-[0.25em] text-[#C6A16B] font-mono font-bold">
                  {item.category}
                </span>
              </div>

              {/* Lower Content */}
              <div className="relative z-10">
                <h3 className="font-condensed text-2xl sm:text-3xl font-bold uppercase text-[#E8E2D8] tracking-wider mb-2 group-hover:text-[#C6A16B] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#9E9990] text-xs sm:text-sm font-light leading-relaxed max-w-lg mb-4">
                  {item.spec}
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-[#A87942] group-hover:text-white uppercase tracking-widest font-semibold">
                  <span>INSPECT SPECIFICATIONS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
