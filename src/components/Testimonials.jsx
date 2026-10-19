import React from 'react'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        'Odyssey stripped away the trivial distractions of commercial gyms. Walking through these doors demands total presence. My squat, work capacity, and mental discipline have reached heights I did not believe possible at 36.',
      author: 'Marcus V.',
      tag: 'Sample Member Placeholder',
      goal: 'Competitive Strength & Powerlifting',
      tenure: 'Member Since Jan 2025',
    },
    {
      id: 2,
      quote:
        'The atmosphere here is electric yet stoic. No loud influencers or egos—just serious athletes and dedicated coaches who hold you to the highest standard. The Phalanx conditioning sessions completely changed my mindset.',
      author: 'Elena K.',
      tag: 'Sample Member Placeholder',
      goal: 'Hyrox Pro & Athletic Conditioning',
      tenure: 'Member Since Nov 2024',
    },
    {
      id: 3,
      quote:
        'As an executive with relentless demands, Odyssey is my sanctuary. The Spartan discipline taught here carries directly into boardrooms and life. The equipment, darkness, and red lighting create pure focus.',
      author: 'Alexander D.',
      tag: 'Sample Member Placeholder',
      goal: 'Executive Hypertrophy & Longevity',
      tenure: 'Member Since Mar 2025',
    },
  ]

  return (
    <section className="relative py-28 sm:py-36 bg-[#080808] border-t border-[#1B1B1B]/70 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#D10A20]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D10A20] font-semibold">
              LEGION DISPATCHES
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-wide mb-6">
            BUILT THROUGH DISCIPLINE.
          </h2>

          <p className="font-body text-[#A6A6A6] text-sm sm:text-base font-light max-w-xl">
            Unfiltered reflections from those who inhabit the arena daily.
            <span className="block text-[11px] text-[#8C7045] mt-1 uppercase tracking-wider">
              * Editable sample athlete testimonials. Replace with verified member dispatches.
            </span>
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#141414] border border-[#1B1B1B] hover:border-[#D10A20]/50 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-red-subtle"
            >
              <div>
                {/* Quote Icon */}
                <div className="mb-6 flex justify-between items-center">
                  <Quote className="w-8 h-8 text-[#D10A20]/40 group-hover:text-[#D10A20] transition-colors" />
                  <span className="text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 bg-[#1B1B1B] text-[#A6A6A6] border border-white/5">
                    {item.tag}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed mb-8 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Goal Meta */}
              <div className="pt-6 border-t border-[#1B1B1B]/80">
                <div className="font-cinzel text-lg font-bold text-white tracking-wider">
                  {item.author}
                </div>
                <div className="text-xs text-[#D10A20] font-medium tracking-wide mt-1">
                  {item.goal}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#A6A6A6] mt-1">
                  {item.tenure}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
