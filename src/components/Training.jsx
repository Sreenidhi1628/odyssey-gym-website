import React, { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight, Dumbbell, Flame, Shield, Target } from 'lucide-react'
import ProgramModal from './ProgramModal'

export default function Training({ onSelectProgramForInquiry }) {
  const [activeModalProgram, setActiveModalProgram] = useState(null)

  const programs = [
    {
      id: 'forge',
      number: '01',
      title: 'THE FORGE',
      subtitle: 'Strength & Progressive Overload',
      description: 'Heavy barbell mechanics, neuromuscular power, and periodized overload cycles engineered to forge an unyielding muscular chassis.',
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
      subtitle: 'Conditioning, Stamina & Work Capacity',
      description: 'Relentless aerobic and anaerobic conditioning. Heavy sleds, battle carries, and high-density metabolic intervals that build an infinite gas tank.',
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

  return (
    <section
      id="programs"
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
                SECTION 05 — ARSENAL OF DISCIPLINES
              </span>
            </div>
            <h2 className="font-condensed text-4xl sm:text-6xl font-bold uppercase text-[#E8E2D8] tracking-[0.02em] leading-[0.95]">
              CHOOSE YOUR BATTLE. <br />
              <span className="font-cinzel text-[#A87942]">DISCIPLINE WINS.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#9E9990] max-w-md lg:text-right">
            Four specialized training paths engineered to systematically dismantle physical limits.
          </p>
        </motion.div>

        {/* Distinctive Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {programs.map((program, idx) => {
            const Icon = program.icon
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-[#141414] border border-[#1c1a17] hover:border-[#A87942] transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-bronze-subtle"
              >
                {/* Image Header with Top Gradient */}
                <div className="relative h-48 overflow-hidden bg-[#080808]">
                  <img
                    src={program.image}
                    alt={program.alt}
                    className="w-full h-full object-cover object-center filter contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent" />
                  
                  {/* Top Bar with Number & Icon */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono text-xs tracking-widest text-[#C6A16B] font-bold bg-[#080808]/80 px-2.5 py-1 border border-[#A87942]/30">
                      {program.number}
                    </span>
                    <div className="p-2 bg-[#080808]/80 border border-[#A87942]/40 text-[#A87942]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A87942] block mb-1">
                      {program.subtitle}
                    </span>
                    <h3 className="font-cinzel text-xl font-bold uppercase text-[#E8E2D8] mb-3 group-hover:text-[#C6A16B] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-xs text-[#9E9990] font-light leading-relaxed mb-6">
                      {program.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#1c1a17] space-y-2.5">
                    <button
                      onClick={() => setActiveModalProgram(program)}
                      className="w-full py-2.5 bg-[#A87942]/15 hover:bg-[#A87942] text-[#E8E2D8] hover:text-[#080808] border border-[#A87942]/40 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>CURRICULUM INTEL</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onSelectProgramForInquiry(program.title)}
                      className="w-full py-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9E9990] hover:text-white transition-colors cursor-pointer text-center"
                    >
                      ENLIST IN THIS PROTOCOL &rarr;
                    </button>
                  </div>
                </div>

                {/* Bottom Bronze Edge Accent */}
                <div className="h-[2px] w-0 group-hover:w-full bg-[#A87942] transition-all duration-500 shadow-[0_0_8px_#A87942]" />
              </motion.div>
            )
          })}
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
