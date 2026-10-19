import React, { useState } from 'react'
import { Maximize2, X, ChevronRight } from 'lucide-react'

export default function Arena() {
  const [activePhoto, setActivePhoto] = useState(null)

  const facilities = [
    {
      id: 'power',
      title: 'HEAVY POWER RACKS & OLYMPIC PLATFORMS',
      category: 'STRENGTH SUITE',
      description: 'Precision laser-cut matte black power cages with competition oak lifting inserts and calibrated Olympic iron.',
      image: '/images/arena-power.jpg',
      colSpan: 'lg:col-span-8',
      height: 'h-80 sm:h-96 lg:h-[450px]',
    },
    {
      id: 'freeweights',
      title: 'PRECISION FREE WEIGHT ARSENAL',
      category: 'FREE WEIGHTS',
      description: 'Hand-calibrated solid urethane dumbbells extending through heavyweight ranges, flanked by multi-angle adjustable benches.',
      image: '/images/arena-freeweights.jpg',
      colSpan: 'lg:col-span-4',
      height: 'h-80 sm:h-96 lg:h-[450px]',
    },
    {
      id: 'functional',
      title: 'KINETIC COMBAT TURF & SLED TRACK',
      category: 'FUNCTIONAL ARENA',
      description: 'Indoor sprint turf with custom yardage markings, competition sleds, battle ropes, and kettlebell combat stations.',
      image: '/images/arena-functional.jpg',
      colSpan: 'lg:col-span-6',
      height: 'h-80 sm:h-96 lg:h-96',
    },
    {
      id: 'conditioning',
      title: 'METABOLIC CONDITIONING & ERG BATTERY',
      category: 'CONDITIONING ZONE',
      description: 'Curved motorless treadmills, ski ergs, and air bikes engineered for explosive anaerobic intervals.',
      image: '/images/arena-conditioning.jpg',
      colSpan: 'lg:col-span-6',
      height: 'h-80 sm:h-96 lg:h-96',
    },
  ]

  return (
    <section id="arena" className="relative py-28 sm:py-36 bg-[#080808] border-t border-[#1B1B1B]/70 overflow-hidden">
      {/* Red Atmospheric Glow */}
      <div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-[#D10A20]/8 blur-[170px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#D10A20]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#D10A20] font-semibold">
                FACILITY ARCHITECTURE
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-wide">
              ENTER THE ARENA.
            </h2>
          </div>
          <p className="text-[#A6A6A6] text-sm sm:text-base font-light max-w-md mt-4 md:mt-0">
            A cathedral of iron and discipline. Every square foot is engineered for high-performance training without distraction or compromise.
          </p>
        </div>

        {/* Varied Editorial Grid Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              onClick={() => setActivePhoto(facility)}
              className={`${facility.colSpan} ${facility.height} group relative rounded-none overflow-hidden border border-[#1B1B1B] hover:border-[#D10A20]/60 bg-[#141414] cursor-pointer transition-all duration-500`}
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-108 filter brightness-90 group-hover:brightness-100"
                loading="lazy"
              />

              {/* Dark Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/70 via-transparent to-transparent opacity-60" />

              {/* Category Pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-[#080808]/80 backdrop-blur-md border border-[#1B1B1B] text-[9px] uppercase tracking-[0.25em] text-[#A6A6A6] group-hover:text-[#D10A20] transition-colors font-medium">
                  {facility.category}
                </span>
              </div>

              {/* Expand Hint Icon */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-none bg-[#080808]/80 border border-[#1B1B1B] flex items-center justify-center text-[#A6A6A6] group-hover:text-white group-hover:border-[#D10A20] transition-colors opacity-0 group-hover:opacity-100">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <h3 className="font-cinzel text-lg sm:text-2xl font-bold uppercase text-white tracking-wide mb-2 group-hover:text-white transition-colors">
                  {facility.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A6A6] font-light leading-relaxed line-clamp-2 max-w-xl">
                  {facility.description}
                </p>
                <div className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#D10A20] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>VIEW ARENA SPACE</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-lg animate-fadeIn"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-[#141414] border border-[#1B1B1B] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-[#080808] text-white hover:text-[#D10A20] border border-[#1B1B1B] transition-colors"
              aria-label="Close photo view"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative max-h-[75vh] w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="w-full h-auto max-h-[75vh] object-contain"
              />
            </div>
            <div className="p-6 bg-[#141414] border-t border-[#1B1B1B]">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D10A20] font-semibold block mb-1">
                {activePhoto.category}
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold uppercase text-white mb-2">
                {activePhoto.title}
              </h3>
              <p className="text-sm text-[#A6A6A6] font-light">
                {activePhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
