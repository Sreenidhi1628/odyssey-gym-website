import React, { useState } from 'react'
import { motion } from 'motion/react'
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
      subtitle: 'Strength & Progressive Overload',
      description: 'Heavy barbell mechanics, neuromuscular power, and progressive overload cycles engineered to build an unyielding muscular chassis.',
      longDescription: 'The Forge is ODYSSEY’s flagship barbell strength curriculum. Centered around compound kinetic chains—squats, deadlifts, overhead presses, and cleans—we apply rigorous periodized overload to maximize raw physical force and structural bone density.',
      image: '/images/prog-strength.jpg',
      alt: 'Barbell strength training on competition platform',
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
      subtitle: 'Conditioning, Stamina & Work Capacity',
      description: 'Relentless aerobic and anaerobic conditioning. Heavy sleds, battle carries, and high-density metabolic intervals that build an infinite gas tank.',
      longDescription: 'War Machine builds the cardiovascular and metabolic engine required to outlast any trial. Combining Prowler pushes, heavy sandbag carries, assault bikes, and brutal threshold circuits, this discipline conditions your mind and body to thrive in deep water.',
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
      subtitle: 'Athletic Performance, Power & Agility',
      description: 'Explosive triple extension, multi-planar agility, and reactive speed. Built for warriors who demand athletic coordination and rotational power.',
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
      subtitle: '1-on-1 Centurion Mentorship & Programming',
      description: 'Bespoke one-on-one coaching with a dedicated Centurion coach. Tailored periodization, nutritional strategy, and daily accountability.',
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
  const FeaturedIcon = featured.icon

  return (
    <section
      id="disciplines"
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
                CHAPTER III // THE COMBAT DISCIPLINES
              </span>
            </div>
            <h2 className="font-condensed text-4xl sm:text-6xl font-bold uppercase text-white tracking-[0.02em] leading-[0.95]">
              THE DISCIPLINE <br />
              <span className="font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#C1121F] via-[#E5E2DC] to-[#9E1B1B]">
                OF A WARRIOR.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#8E8A82] max-w-md lg:text-right">
            Four rigorous training paths engineered to forge raw kinetic force, endurance, and mental invincibility.
          </p>
        </motion.div>

        {/* Asymmetrical Horizontal Editorial Split-Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Large Featured Program Showcase (7 cols) */}
          <motion.div
            key={featured.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 relative group overflow-hidden border border-[#201E1C] bg-[#0D0D0D] flex flex-col justify-between min-h-[460px] lg:min-h-[560px] p-8 sm:p-10"
          >
            {/* Background Image with Cinematic Grading */}
            <div className="absolute inset-0 z-0">
              <img
                src={featured.image}
                alt={featured.alt}
                className="w-full h-full object-cover object-center filter contrast-125 brightness-[45%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-transparent to-transparent" />
            </div>

            {/* Top Bar with Number & Icon */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs sm:text-sm tracking-[0.3em] text-[#C1121F] font-bold bg-[#050505]/80 px-3 py-1 border border-[#201E1C]">
                  DISCIPLINE // {featured.number}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8A82]">
                  {featured.intensity}
                </span>
              </div>
              <div className="p-3 bg-[#050505]/90 border border-[#201E1C] text-[#C1121F]">
                <FeaturedIcon className="w-5 h-5" />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 flex flex-col items-start pt-16">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C1121F] font-semibold mb-2 font-mono">
                {featured.subtitle}
              </span>
              <h3 className="font-condensed text-3xl sm:text-5xl font-bold uppercase text-white tracking-wide mb-4">
                {featured.title}
              </h3>
              <p className="text-[#8E8A82] text-sm sm:text-base font-light leading-relaxed max-w-xl mb-8">
                {featured.description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setActiveModalProgram(featured)}
                  className="bg-[#9E1B1B] hover:bg-[#C1121F] text-white px-6 py-3 text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-crimson-glow flex items-center gap-2 cursor-pointer"
                >
                  <span>EXPLORE CURRICULUM</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onSelectProgramForInquiry(featured.title)}
                  className="border border-[#201E1C] hover:border-white text-white px-6 py-3 text-xs uppercase tracking-[0.25em] font-semibold transition-colors cursor-pointer"
                >
                  <span>ENLIST IN THIS PROTOCOL</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Supporting Program Selection Panels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {programs.map((item, idx) => {
              const isSelected = selectedFeaturedIndex === idx
              const ItemIcon = item.icon
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedFeaturedIndex(idx)}
                  className={`p-5 sm:p-6 border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#121212] border-[#9E1B1B] shadow-[0_0_20px_rgba(158,27,27,0.3)]'
                      : 'bg-[#0D0D0D] border-[#181818] hover:border-[#201E1C] hover:bg-[#121212]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-sm tracking-widest font-bold ${
                      isSelected ? 'text-[#C1121F]' : 'text-[#8E8A82] group-hover:text-white'
                    }`}>
                      {item.number}
                    </span>
                    <div>
                      <h4 className="font-condensed text-lg sm:text-xl font-bold uppercase text-white tracking-wider group-hover:text-[#C1121F] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#8E8A82] uppercase tracking-[0.16em] mt-0.5 font-mono">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveModalProgram(item)
                    }}
                    className="p-2 text-[#8E8A82] hover:text-white hover:bg-[#9E1B1B] transition-colors border border-transparent hover:border-[#9E1B1B]"
                    aria-label={`View curriculum details for ${item.title}`}
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
