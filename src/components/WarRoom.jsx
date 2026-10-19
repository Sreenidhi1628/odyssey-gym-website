import React from 'react'
import { ArrowRight, Compass, Activity, TrendingUp } from 'lucide-react'

export default function WarRoom({ onBuildPlanClick }) {
  const stages = [
    {
      num: 'STAGE I',
      title: 'PREPARE',
      subtitle: 'DIAGNOSTIC & BASELINE',
      desc: 'Understand your physical goals and establish your starting baseline. We conduct comprehensive biomechanical movement screening, structural balance tests, and metabolic baseline measurements.',
      actionPoint: '01. Kinetic assessment & goal calibration',
      icon: Compass,
    },
    {
      num: 'STAGE II',
      title: 'TRAIN',
      subtitle: 'STRUCTURED EXECUTION',
      desc: 'Follow a structured training blueprint with unyielding consistency. Work capacity, barbell intensity, and conditioning microcycles are sequenced with precision.',
      actionPoint: '02. Progressive overload & daily execution',
      icon: Activity,
    },
    {
      num: 'STAGE III',
      title: 'ADVANCE',
      subtitle: 'REASSESS & EXPAND',
      desc: 'Continuously measure performance metrics and calibrate your protocol. We review strength progression curves, cardiovascular endurance benchmarks, and adjust recovery parameters.',
      actionPoint: '03. Benchmark verification & new thresholds',
      icon: TrendingUp,
    },
  ]

  return (
    <section
      id="war-room"
      className="relative bg-[#080808] py-28 sm:py-36 lg:py-40 overflow-hidden border-t border-[#191919]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20 pb-8 border-b border-[#191919]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#D10A20]" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#D10A20]">
                SECTION 06 — TRAINING STRUCTURE
              </span>
            </div>
            <h2 className="font-cinzel text-4xl sm:text-6xl font-black uppercase text-white tracking-[0.04em]">
              THE WAR ROOM
            </h2>
          </div>
          <p className="text-[#A6A6A6] text-xs sm:text-sm uppercase tracking-[0.2em] max-w-sm">
            Architecture of a warrior. How victory is engineered step by step.
          </p>
        </div>

        {/* Timeline Architecture: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          
          {/* Thin Connecting Red Guideline (Desktop) */}
          <div 
            className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#D10A20] via-[#FF1E35] to-[#D10A20] z-0 opacity-40 shadow-[0_0_10px_#D10A20]" 
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {stages.map((stage, idx) => (
              <div
                key={stage.num}
                className="relative flex flex-col items-start bg-[#101010] p-8 border border-[#191919] hover:border-[#D10A20]/50 transition-all duration-300 group"
              >
                {/* Node Indicator with Icon */}
                <div className="flex items-center justify-between w-full mb-8">
                  <div className="w-14 h-14 bg-[#080808] border-2 border-[#D10A20] flex items-center justify-center text-[#D10A20] group-hover:bg-[#D10A20] group-hover:text-white transition-colors shadow-red-subtle">
                    <stage.icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs tracking-[0.25em] text-[#A6A6A6] uppercase font-bold">
                    {stage.num}
                  </span>
                </div>

                {/* Stage Titles */}
                <span className="text-xs uppercase tracking-[0.25em] text-[#8C7045] font-semibold mb-2">
                  {stage.subtitle}
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-black uppercase text-white tracking-wider mb-4 group-hover:text-[#D10A20] transition-colors">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="text-[#A6A6A6] text-sm leading-relaxed font-light mb-8 flex-grow">
                  {stage.desc}
                </p>

                {/* Milestone Detail Footer */}
                <div className="w-full pt-4 border-t border-[#191919] flex items-center gap-2 text-xs font-mono tracking-wider text-white">
                  <span className="w-2 h-2 rounded-full bg-[#D10A20] animate-pulse" />
                  <span className="text-[#A6A6A6]">{stage.actionPoint}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* CTA Bar to Form */}
        <div className="mt-16 pt-10 border-t border-[#191919] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="w-3 h-3 bg-[#D10A20] rotate-45" />
            <p className="font-cinzel text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
              Ready to map your path to physical dominance?
            </p>
          </div>

          <button
            onClick={onBuildPlanClick}
            className="w-full sm:w-auto bg-[#D10A20] hover:bg-[#FF1E35] text-white px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-red-glow flex items-center justify-center gap-3 cursor-pointer active:scale-95"
          >
            <span>BUILD YOUR PLAN</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  )
}
