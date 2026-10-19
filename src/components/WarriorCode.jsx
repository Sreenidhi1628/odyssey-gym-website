import React from 'react'

export default function WarriorCode() {
  const principles = [
    {
      numeral: 'I',
      title: 'DISCIPLINE',
      quote: 'Show up when motivation disappears.',
      description: 'Motivation is fleeting emotion. Discipline is an immutable law. In this arena, you execute your protocol regardless of fatigue, doubt, or temptation to relent.',
      image: '/images/prog-strength.jpg',
      alt: 'Warrior gripping calibrated steel barbell with total discipline',
      alignLeft: true,
    },
    {
      numeral: 'II',
      title: 'RAGE',
      quote: 'Channel your intensity. Control your power.',
      description: 'Unchecked anger is weakness. Channeled rage is kinetic fuel. We teach the mastery of ferocious aggression focused into flawless biomechanical force that obliterates physical limits.',
      image: '/images/arena-power.jpg',
      alt: 'Athletic power cage with heavy plates under red cinematic rim light',
      alignLeft: false,
    },
    {
      numeral: 'III',
      title: 'RESILIENCE',
      quote: 'Fall. Rise. Return stronger.',
      description: 'The iron will challenge every fiber of your being. When a rep halts your momentum, it is not defeat; it is the physiological threshold where true transformation begins.',
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
      className="relative bg-[#080808] py-28 sm:py-36 lg:py-44 overflow-hidden border-t border-[#1A1A1A]"
    >
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#D10A20_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-24 pb-8 border-b border-[#1A1A1A]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#D10A20]" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#D10A20]">
                SECTION 03 — SACRED INSCRIPTION
              </span>
            </div>
            <h2 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-[0.03em] leading-[0.98]">
              THE CODE IS <br />
              <span className="text-[#D10A20]">NON-NEGOTIABLE.</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#A6A6A6] max-w-sm lg:text-right">
            Four unbending laws of the ancient arena. No retreat. No surrender.
          </p>
        </div>

        {/* Editorial Sequence Resembling Ancient Stone Inscriptions */}
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
                className={`absolute -top-14 sm:-top-24 font-cinzel text-9xl sm:text-[15rem] font-black text-white/[0.03] select-none pointer-events-none ${
                  item.alignLeft ? 'left-0' : 'right-0'
                }`}
                aria-hidden="true"
              >
                {item.numeral}
              </div>

              {/* Text Editorial Column */}
              <div className={`relative z-10 lg:col-span-6 flex flex-col ${item.alignLeft ? '' : 'lg:col-start-7'}`}>
                {/* Code Tag & Blood Red Line */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-cinzel text-lg tracking-widest text-[#D10A20] font-black">
                    {item.numeral}.
                  </span>
                  <div className="h-[2px] w-12 bg-[#D10A20]" />
                  <span className="text-[11px] uppercase tracking-[0.3em] text-[#A6A6A6] font-semibold">
                    LAW OF ODYSSEY
                  </span>
                </div>

                <h3 className="font-cinzel text-3xl sm:text-5xl font-black uppercase tracking-[0.04em] text-white mb-4">
                  {item.title}
                </h3>

                <p className="font-cinzel text-xl sm:text-2xl text-[#D10A20] font-bold mb-5 tracking-wide leading-snug">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <p className="text-[#A6A6A6] text-sm sm:text-base font-light leading-relaxed tracking-wide">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#D10A20]" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#E5E5E5] font-mono">
                    ETCHED IN STONE &bull; IRREVOCABLE
                  </span>
                </div>
              </div>

              {/* Cinematic Image Frame (Asymmetrical Architectural Framing) */}
              <div
                className={`relative z-10 lg:col-span-6 ${
                  item.alignLeft ? '' : 'lg:col-start-1 lg:row-start-1'
                }`}
              >
                <div className="relative group overflow-hidden border border-[#1A1A1A] bg-[#111111]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-[320px] sm:h-[420px] object-cover filter contrast-125 brightness-[65%] group-hover:scale-105 group-hover:brightness-[80%] transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
                  
                  {/* Crimson Corner Accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D10A20]" />
                  <div className="absolute bottom-4 left-4 text-[10px] tracking-[0.25em] text-[#A6A6A6] uppercase font-mono">
                    ARENA PROTOCOL // {item.numeral}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
