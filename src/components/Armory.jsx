import React from 'react'

export default function Armory({ onExploreClick }) {
  const armoryItems = [
    {
      id: 'barbells',
      title: 'BARBELLS & CALIBRATED STEEL',
      category: 'FREE WEIGHTS & PLATFORMS',
      spec: 'Competition-grade Olympic bars, calibrated steel plates, heavy-duty dumbbell racks up to 150 lbs, and chalk stations.',
      image: '/images/arena-freeweights.jpg',
      alt: 'Olympic barbells and heavy steel plates in dark industrial arena',
      span: 'lg:col-span-8',
    },
    {
      id: 'racks',
      title: 'MONOLITH POWER RACKS',
      category: 'STRENGTH STATIONS',
      spec: 'Heavy-gauge steel structural power cages with safety pin-pipes, band pegs, dip horns, and pull-up arrays.',
      image: '/images/arena-power.jpg',
      alt: 'Heavy duty power racks under directional red rim light',
      span: 'lg:col-span-4',
    },
    {
      id: 'functional',
      title: 'BATTLE TURF & TACTICAL RIGS',
      category: 'FUNCTIONAL TRAINING AREA',
      spec: 'Indoor turf track, climbing ropes, medicine ball ballistic walls, plyometric boxes, and heavy sandbags.',
      image: '/images/arena-functional.jpg',
      alt: 'Athletic sprint turf and functional training rigs',
      span: 'lg:col-span-5',
    },
    {
      id: 'conditioning',
      title: 'METABOLIC CONDITIONING TRACK',
      category: 'CARDIO & ENDURANCE',
      spec: 'Prowler sleds, curved manual treadmills, Concept2 rowers, ski ergs, and air bikes engineered for maximum work capacity.',
      image: '/images/arena-conditioning.jpg',
      alt: 'Conditioning sleds and heavy equipment track',
      span: 'lg:col-span-7',
    },
  ]

  return (
    <section
      id="armory"
      className="relative bg-[#080808] py-28 sm:py-36 lg:py-44 overflow-hidden border-t border-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#1A1A1A]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#D10A20]" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#D10A20]">
                SECTION 05 — THE ARMORY & EQUIPMENT
              </span>
            </div>
            <h2 className="font-cinzel text-4xl sm:text-6xl font-black uppercase text-white tracking-[0.03em] leading-[0.98]">
              PREPARE YOURSELF <br />
              <span className="text-[#D10A20]">FOR THE BATTLE.</span>
            </h2>
          </div>
          <div className="max-w-md lg:text-right">
            <p className="font-cinzel text-base sm:text-lg text-[#E5E5E5] font-semibold">
              &ldquo;Every tool has a purpose. Every session moves you forward.&rdquo;
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#A6A6A6] mt-2 font-mono">
              Industrial grade steel &bull; Calibrated iron &bull; Zero compromises
            </p>
          </div>
        </div>

        {/* Asymmetrical Editorial Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {armoryItems.map((item, idx) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden border border-[#1A1A1A] bg-[#111111] min-h-[360px] sm:min-h-[420px] flex flex-col justify-end p-6 sm:p-8 ${item.span}`}
            >
              {/* Background Photography */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center filter contrast-125 brightness-[55%] group-hover:scale-105 group-hover:brightness-[70%] transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/65 to-transparent" />
              </div>

              {/* Hard Directional Crimson Rim Highlight on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D10A20]/50 transition-colors pointer-events-none" />

              {/* Upper Index Tag */}
              <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
                <span className="font-mono text-xs text-[#D10A20] font-bold">
                  0{idx + 1} //
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/80 font-mono">
                  {item.category}
                </span>
              </div>

              {/* Lower Details */}
              <div className="relative z-10">
                <h3 className="font-cinzel text-2xl sm:text-3xl font-black uppercase text-white tracking-wide mb-2 group-hover:text-[#D10A20] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#A6A6A6] text-xs sm:text-sm font-light leading-relaxed max-w-md">
                  {item.spec}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Armory Specs Metric Ribbon */}
        <div className="mt-16 p-8 bg-[#111111] border border-[#1A1A1A] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-cinzel text-3xl sm:text-4xl font-black text-white">14,000<span className="text-[#D10A20] text-xl">SQ FT</span></div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#A6A6A6] mt-2 font-mono">ARENA CAPACITY</div>
          </div>
          <div>
            <div className="font-cinzel text-3xl sm:text-4xl font-black text-[#D10A20]">12<span className="text-white text-xl">PLATFORMS</span></div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#A6A6A6] mt-2 font-mono">OLYMPIC STATIONS</div>
          </div>
          <div>
            <div className="font-cinzel text-3xl sm:text-4xl font-black text-white">50<span className="text-[#D10A20] text-xl">M</span></div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#A6A6A6] mt-2 font-mono">TACTICAL SPRINT TURF</div>
          </div>
          <div>
            <div className="font-cinzel text-3xl sm:text-4xl font-black text-white">24<span className="text-[#D10A20] text-xl">/7</span></div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#A6A6A6] mt-2 font-mono">BIOMETRIC ACCESS</div>
          </div>
        </div>

      </div>
    </section>
  )
}
