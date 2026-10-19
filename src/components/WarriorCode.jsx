import React from 'react'
import { motion } from 'motion/react'

export default function WarriorCode() {
  const principles = [
    {
      numeral: 'I',
      title: 'DISCIPLINE',
      quote: 'Show up when motivation disappears.',
      description: 'Motivation is fleeting emotion. Immutable discipline is law. In this arena, you execute your protocol regardless of fatigue, doubt, or temptation to relent.',
      image: '/images/prog-strength.jpg',
      alt: 'Warrior gripping heavy steel barbell with intense discipline',
      alignLeft: true,
    },
    {
      numeral: 'II',
      title: 'RAGE',
      quote: 'Channel your intensity. Control your power.',
      description: 'Unchecked anger is weakness. Channeled rage is kinetic fuel. We teach the mastery of ferocious aggression focused into flawless biomechanical force that obliterates physical limits.',
      image: '/images/arena-power.jpg',
      alt: 'Athletic power cage under crimson directional light',
      alignLeft: false,
    },
    {
      numeral: 'III',
      title: 'RESILIENCE',
      quote: 'Fall. Rise. Return stronger.',
      description: 'The iron will challenge every fiber of your being. When a rep halts your momentum, it is not defeat; it is the physiological threshold where true adaptation begins.',
      image: '/images/arena-conditioning.jpg',
      alt: 'Warrior conditioning sled track under dark stone atmosphere',
      alignLeft: true,
    },
    {
      numeral: 'IV',
      title: 'CONSISTENCY',
      quote: 'Greatness is built in the repetitions nobody sees.',
      description: 'There are no spectators when legends are forged. The quiet hours before dawn, the solitary grind, the identical standard held rep after rep, day after day.',
      image: '/images/prog-athletic.jpg',
      alt: 'Explosive athletic movement in functional performance arena',
      alignLeft: false,
    },
  ]

  return (
    <section
      id="code"
      className="relative bg-[#050505] py-24 sm:py-32 overflow-hidden border-t border-[#181818]"
    >
      {/* Background Subtle Stone Ambient Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#9E1B1B_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-24 pb-6 border-b border-[#181818]"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#C1121F]" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#C1121F] font-mono">
                CHAPTER I // THE SACRED CODE
              </span>
            </div>
            <h2 className="font-condensed text-4xl sm:text-6xl font-bold uppercase text-white tracking-[0.02em] leading-[0.95]">
              THE CODE IS <br />
              <span className="font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#C1121F] via-[#E5E2DC] to-[#9E1B1B]">
                NON-NEGOTIABLE.
              </span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#8E8A82] max-w-sm lg:text-right">
            Four unbending laws of the ancient arena. Etched in stone. No retreat. No surrender.
          </p>
        </motion.div>

        {/* Asymmetrical Editorial Sequence Resembling Ancient Stone Inscriptions */}
        <div className="flex flex-col gap-28 sm:gap-36">
          {principles.map((item) => (
            <div
              key={item.numeral}
              className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                item.alignLeft ? '' : 'lg:grid-flow-dense'
              }`}
            >
              {/* Massive Translucent Roman Numeral Watermark in Background */}
              <div
                className={`absolute -top-14 sm:-top-24 font-cinzel text-9xl sm:text-[15rem] font-black text-white/[0.02] select-none pointer-events-none ${
                  item.alignLeft ? 'left-0' : 'right-0'
                }`}
                aria-hidden="true"
              >
                {item.numeral}
              </div>

              {/* Text Editorial Column */}
              <motion.div
                initial={{ opacity: 0, x: item.alignLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8 }}
                className={`relative z-10 lg:col-span-6 flex flex-col ${item.alignLeft ? '' : 'lg:col-start-7'}`}
              >
                {/* Code Tag & Blood Red Line */}
                <div className="flex items-center gap-4 mb-3">
                  <span className="font-cinzel text-lg tracking-widest text-[#C1121F] font-black">
                    {item.numeral}.
                  </span>
                  <div className="h-[2px] w-12 bg-[#C1121F]" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E8A82] font-mono">
                    LAW OF ODYSSEY
                  </span>
                </div>

                <h3 className="font-condensed text-3xl sm:text-5xl font-bold uppercase tracking-[0.03em] text-white mb-3">
                  {item.title}
                </h3>

                <p className="font-cinzel text-lg sm:text-xl text-[#C1121F] font-semibold mb-4 tracking-wide leading-snug">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <p className="text-[#8E8A82] text-sm sm:text-base font-light leading-relaxed tracking-wide">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#C1121F]" />
                  <span className="text-[9.5px] uppercase tracking-[0.25em] text-[#E5E2DC] font-mono">
                    INSCRIPTION VERIFIED &bull; IRREVOCABLE
                  </span>
                </div>
              </motion.div>

              {/* Cinematic Image Frame (Asymmetrical Architectural Framing) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8 }}
                className={`relative z-10 lg:col-span-6 ${
                  item.alignLeft ? '' : 'lg:col-start-1 lg:row-start-1'
                }`}
              >
                <div className="relative group overflow-hidden border border-[#201E1C] bg-[#0D0D0D]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-[300px] sm:h-[400px] object-cover filter contrast-125 brightness-[65%] group-hover:scale-105 group-hover:brightness-[80%] transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-85" />
                  
                  {/* Crimson Corner Notch */}
                  <div className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2 border-[#C1121F]" />
                  <div className="absolute bottom-4 left-4 text-[9.5px] tracking-[0.25em] text-[#8E8A82] uppercase font-mono">
                    ARENA PROTOCOL // {item.numeral}
                  </div>
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
