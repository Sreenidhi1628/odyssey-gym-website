import React, { useState } from 'react'
import { ArrowUpRight, Dumbbell, Flame, Shield, Target } from 'lucide-react'
import ProgramModal from './ProgramModal'

export default function Training({ onSelectProgramForInquiry }) {
  const [activeModalProgram, setActiveModalProgram] = useState(null)
  const [selectedFeaturedIndex, setSelectedFeaturedIndex] = useState(0)

  const programs = [
    {
      id: 'forge',
      number: '01',
      title: 'THE FORGE',
      subtitle: 'Strength training and progressive overload',
      description: 'Heavy barbell mechanics, neuromuscular power, and progressive overload cycles engineered to build an unyielding muscular chassis.',
      longDescription: 'The Forge is ODYSSEY’s flagship barbell strength curriculum. Centered around compound kinetic chains—squats, deadlifts, overhead presses, and bench presses—we apply rigorous periodized overload to maximize raw physical force and structural bone density.',
      image: '/images/prog-strength.jpg',
      alt: 'Athletic barbell strength training on the platform',
      intensity: 'MAXIMAL / PROGRESSIVE OVERLOAD',
      frequency: '4 SESSIONS / WEEK',
      level: 'ALL DETERMINED WARRIORS',
      highlights: [
        'Kinetic barbell path biomechanical analysis',
        '8-week periodized overload microcycles',
        'Plateau-breaking auxiliary strength blocks',
        'Nervous system recovery protocols',
      ],
      icon: Dumbbell,
    },
    {
      id: 'warmachine',
      number: '02',
      title: 'WAR MACHINE',
      subtitle: 'Conditioning, stamina, and endurance',
      description: 'Relentless aerobic and anaerobic conditioning. Heavy sleds, battle carries, and high-density metabolic intervals that forge an infinite gas tank.',
      longDescription: 'War Machine builds the cardiovascular and metabolic engine required to outlast any trial. Combining Prowler pushes, heavy sandbag carries, assault bikes, and brutal threshold circuits, this discipline conditions your mind and body to thrive under extreme fatigue.',
      image: '/images/arena-conditioning.jpg',
      alt: 'High work capacity sled and conditioning track',
      intensity: 'LACTATE THRESHOLD / HIGH',
      frequency: '3-4 SESSIONS / WEEK',
      level: 'INTERMEDIATE TO ADVANCED',
      highlights: [
        'High-density anaerobic threshold intervals',
        'Strongman carries & tactical sled pulls',
        'Zone-2 aerobic base fortification',
        'Heart-rate telemetry guided training',
      ],
      icon: Flame,
    },
    {
      id: 'gladiator',
      number: '03',
      title: 'THE GLADIATOR',
      subtitle: 'Athletic performance, power, and agility',
      description: 'Explosive triple extension, multi-planar agility, and reactive speed. Built for warriors who demand athletic coordination and ferocious rotational power.',
      longDescription: 'The Gladiator converts raw muscular strength into lethal athletic agility. Utilizing plyometric jumps, medicine ball strikes, kettlebell ballistics, and sprint mechanics, this program builds an explosive, coordinated athlete capable of moving with predatory speed.',
      image: '/images/prog-athletic.jpg',
      alt: 'Explosive athletic functional training in the arena',
      intensity: 'DYNAMIC POWER / ACCELERATION',
      frequency: '3 SESSIONS / WEEK',
      level: 'ALL WARRIOR LEVELS',
      highlights: [
        'Triple-extension plyometric force output',
        'Rotational torque and core strike mechanics',
        'Joint deceleration & injury mitigation',
        'Reactive spatial agility drills',
      ],
      icon: Shield,
    },
    {
      id: 'precision',
      number: '04',
      title: 'PRECISION',
      subtitle: 'Personal training and individualized fitness guidance',
      description: 'One-on-one custom coaching with a dedicated Centurion coach. Tailored periodization, nutritional strategy, and daily accountability.',
      longDescription: 'Precision offers direct 1-on-1 mentorship with ODYSSEY’s highest-ranking coaches. Every exercise selection, load parameter, recovery window, and nutritional macro is mapped exclusively to your physiological profile and specific battle objectives.',
      image: '/images/prog-personal.jpg',
      alt: '1-on-1 elite warrior coach guiding an athlete',
      intensity: 'CUSTOMIZED CALIBRATION',
      frequency: '2-5 SESSIONS / WEEK',
      level: 'BESPOKE TO INDIVIDUAL',
      highlights: [
        'Comprehensive mobility & movement screening',
        'Customized weekly macro & nutritional blueprint',
        'Direct coach comms & form verification',
        'Rapid physical transformation roadmap',
      ],
      icon: Target,
    },
  ]

  const featured = programs[selectedFeaturedIndex]

  return (
    <section
      id="training"
      className="relative bg-[#080808] py-28 sm:py-36 lg:py-44 overflow-hidden border-t border-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#1A1A1A]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#D10A20]" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#D10A20]">
                SECTION 04 — ARSENAL OF DISCIPLINES
              </span>
            </div>
            <h2 className="font-cinzel text-4xl sm:text-6xl font-black uppercase text-white tracking-[0.04em]">
              CHOOSE YOUR BATTLE
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#A6A6A6] max-w-md">
            Four real training disciplines engineered to conquer physical limitations.
          </p>
        </div>

        {/* Wide Horizontal Editorial Split-Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Large Featured Program Showcase (7 cols) */}
          <div className="lg:col-span-7 relative group overflow-hidden border border-[#1A1A1A] bg-[#111111] flex flex-col justify-between min-h-[480px] lg:min-h-[580px]">
            {/* Background Image with Cinematic Grading */}
            <div className="absolute inset-0 z-0">
              <img
                src={featured.image}
                alt={featured.alt}
                className="w-full h-full object-cover object-center filter contrast-125 brightness-[55%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-transparent to-transparent" />
            </div>

            {/* Top Bar with Number & Icon */}
            <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
              <span className="font-mono text-xs sm:text-sm tracking-[0.3em] text-[#D10A20] font-bold">
                PROGRAM // {featured.number}
              </span>
              <div className="p-3 bg-[#080808]/90 border border-[#1A1A1A] text-[#D10A20]">
                <featured.icon className="w-6 h-6" />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 p-6 sm:p-8 flex flex-col items-start">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D10A20] font-semibold mb-2">
                {featured.subtitle}
              </span>
              <h3 className="font-cinzel text-3xl sm:text-5xl font-black uppercase text-white tracking-wide mb-4">
                {featured.title}
              </h3>
              <p className="text-[#A6A6A6] text-sm sm:text-base font-light leading-relaxed max-w-xl mb-8">
                {featured.description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setActiveModalProgram(featured)}
                  className="bg-[#D10A20] hover:bg-[#FF1E35] text-white px-6 py-3 text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-red-glow flex items-center gap-2 cursor-pointer"
                >
                  <span>EXPLORE CURRICULUM</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onSelectProgramForInquiry(featured.title)}
                  className="border border-[#1A1A1A] hover:border-white text-white px-6 py-3 text-xs uppercase tracking-[0.25em] font-semibold transition-colors cursor-pointer"
                >
                  <span>ENLIST IN THIS PROTOCOL</span>
                </button>
              </div>
            </div>
          </div>

          {/* Supporting Program Panels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {programs.map((item, idx) => {
              const isSelected = selectedFeaturedIndex === idx
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedFeaturedIndex(idx)}
                  className={`p-6 border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#141414] border-[#D10A20] shadow-[0_0_20px_rgba(209,10,32,0.2)]'
                      : 'bg-[#111111]/90 border-[#1A1A1A] hover:border-[#333333] hover:bg-[#141414]'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className={`font-mono text-sm tracking-widest font-bold ${
                      isSelected ? 'text-[#D10A20]' : 'text-[#A6A6A6] group-hover:text-white'
                    }`}>
                      {item.number}
                    </span>
                    <div>
                      <h4 className="font-cinzel text-lg sm:text-xl font-bold uppercase text-white tracking-wider group-hover:text-[#D10A20] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#A6A6A6] uppercase tracking-[0.18em] mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveModalProgram(item)
                    }}
                    className="p-2 text-[#A6A6A6] hover:text-white hover:bg-[#D10A20] transition-colors border border-transparent hover:border-[#D10A20]"
                    aria-label={`View details for ${item.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              )
            })}
          </div>

        </div>

      </div>

      {/* Program Detail Modal */}
      {activeModalProgram && (
        <ProgramModal
          program={activeModalProgram}
          onClose={() => setActiveModalProgram(null)}
          onSelectProgram={(title) => {
            setActiveModalProgram(null)
            if (onSelectProgramForInquiry) {
              onSelectProgramForInquiry(title)
            }
          }}
        />
      )}
    </section>
  )
}
