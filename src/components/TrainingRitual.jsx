import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight, CheckCircle2, AlertCircle, RotateCcw, Shield, Flame, Activity } from 'lucide-react'

export default function TrainingRitual({ onEnlistClick, onExploreTrainingClick }) {
  const [selectedStageId, setSelectedStageId] = useState(null)
  const [activePathway, setActivePathway] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const stages = [
    {
      id: 'prepare',
      numeral: 'I',
      stage: 'STAGE I',
      title: 'PREPARE',
      summary: 'Warm up. Focus. Set your intention.',
      description: 'Movement prep, joint mobility, central nervous system activation, and mental calibration before the heavy iron descends.',
      image: '/images/prog-strength.jpg',
      alt: 'Warrior preparing focus and chalking hands on the platform',
      targetDiscipline: '01 — THE FORGE (Strength & Progressive Overload)',
      recommendation: {
        eyebrow: 'RECOMMENDED PROTOCOL: THE KINETIC PRIMER',
        badge: 'PHASE 01 // PRIMING & MOTOR RECRUITMENT',
        match: '01 — THE FORGE (Strength & Progressive Overload)',
        objective: 'Transform passive physiology into high-arousal neuromuscular readiness before loading the musculoskeletal frame.',
        focus: 'Biomechanical joint articulation, hip capsule mobilization, and CNS potentiation via dynamic band work.',
        cadence: '4 Sessions / Week • 20 Min Pre-Lift Activation',
        prescriptions: [
          'Dynamic multi-planar joint articulation & thoracic opening',
          'Post-activation potentiation jumps & medicine ball velocity throws',
          'Psychological calibration & sensory tunnel focus',
          'Barbell warm-up progression up to 80% working load'
        ]
      }
    },
    {
      id: 'conquer',
      numeral: 'II',
      stage: 'STAGE II',
      title: 'CONQUER',
      summary: 'Train with purpose. Challenge your limits.',
      description: 'Unrelenting execution under load. Every repetition is fought with surgical precision, controlled rage, and total physical commitment.',
      image: '/images/arena-power.jpg',
      alt: 'Warrior attacking heavy barbell squat in power cage',
      targetDiscipline: '02 — WAR MACHINE (Conditioning, Stamina & Work Capacity)',
      recommendation: {
        eyebrow: 'RECOMMENDED PROTOCOL: MAXIMUM TENSION OVERLOAD',
        badge: 'PHASE 02 // INTENSITY & METAMORPHOSIS',
        match: '02 — WAR MACHINE & THE FORGE',
        objective: 'Apply progressive mechanical tension to induce permanent muscular adaptation and anaerobic endurance.',
        focus: 'Heavy calibrated competition steel working sets, controlled rage, and lactate threshold sled pushes.',
        cadence: '4-5 Sessions / Week • High Density Volume',
        prescriptions: [
          'Calibrated steel working sets inside structural monolith cages',
          'RPE 8.5–9.5 training thresholds with zero technical breakdown',
          'Heavy Prowler sled drives & sandbag carries for metabolic dominance',
          'Strict lockout standard: zero half-reps, total physical accountability'
        ]
      }
    },
    {
      id: 'ascend',
      numeral: 'III',
      stage: 'STAGE III',
      title: 'ASCEND',
      summary: 'Recover. Adapt. Return stronger.',
      description: 'Targeted recovery, nutrition replenishment, cold immersion, and neuromuscular adaptation. You rebuild into an elevated state of strength.',
      image: '/images/prog-athletic.jpg',
      alt: 'Warrior post-training recovery and mental focus',
      targetDiscipline: '03 — THE GLADIATOR (Athletic Performance & Explosive Power)',
      recommendation: {
        eyebrow: 'RECOMMENDED PROTOCOL: SYSTEMIC RESTORATION',
        badge: 'PHASE 03 // ADAPTATION & REGENERATION',
        match: 'CENTURION PROTOCOL & RECOVERY SUITE',
        objective: 'Accelerate physiological recovery to ensure maximum strength supercompensation and injury immunity.',
        focus: 'Contrast hydrotherapy, myofascial decompression, and parasympathetic nervous system down-regulation.',
        cadence: 'Daily Restoration • 3 Contrast Sessions / Week',
        prescriptions: [
          '45°F cold plunge combined with 190°F traditional dry sauna',
          'Decompression traction, tissue release, and targeted diaphragmatic breathing',
          'Anabolic glycogen synthesis & clinical electrolyte restoration',
          'Heart rate variability (HRV) telemetry tracking & sleep calibration'
        ]
      }
    },
  ]

  const handleStageSelect = (stage) => {
    setSelectedStageId(stage.id)
    setErrorMessage('')
  }

  const handleProceedClick = (stage = null) => {
    const targetStage = stage || stages.find((s) => s.id === selectedStageId)

    if (!targetStage) {
      setErrorMessage('SELECTION REQUIRED: Please choose a training phase (Prepare, Conquer, or Ascend) before proceeding.')
      return
    }

    setErrorMessage('')
    setSelectedStageId(targetStage.id)
    setActivePathway(targetStage)
  }

  const handleEnlistProceed = () => {
    if (!activePathway) return
    if (onEnlistClick) {
      onEnlistClick(activePathway.targetDiscipline)
    }
  }

  const handleReset = () => {
    setActivePathway(null)
    setErrorMessage('')
  }

  return (
    <section
      id="ritual"
      className="relative bg-[#080808] py-28 sm:py-36 lg:py-44 overflow-hidden border-t border-[#1A1A1A]"
    >
      {/* Background Texture & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#D10A20_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#D10A20]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#1A1A1A]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#D10A20]" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#D10A20]">
                SECTION 06 — THE PROGRESSION
              </span>
            </div>
            <h2 className="font-cinzel text-4xl sm:text-6xl font-black uppercase text-white tracking-[0.03em] leading-[0.98]">
              THE TRAINING <br />
              <span className="text-[#D10A20]">RITUAL.</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#A6A6A6] max-w-md lg:text-right">
            Select your training phase to proceed with your personalized warrior pathway.
          </p>
        </div>

        {/* Dynamic Experience: Switch between Stage Selection and Active Pathway */}
        <AnimatePresence mode="wait">
          {!activePathway ? (
            /* VIEW 1: 3-STAGE SELECTION VIEW */
            <motion.div
              key="stage-selection"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-10"
            >
              {/* Cinematic Horizontal Timeline on Desktop & Vertical Sequence on Mobile */}
              <div className="relative">
                {/* Connecting Thin Crimson Line across stages on Desktop */}
                <div className="hidden lg:block absolute top-[140px] left-0 right-0 h-[2px] bg-[#1A1A1A] z-0">
                  <div className="h-full bg-gradient-to-r from-[#D10A20] via-[#FF1E35] to-[#D10A20] opacity-60" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative z-10">
                  {stages.map((item, idx) => {
                    const isSelected = selectedStageId === item.id

                    return (
                      <div
                        key={item.numeral}
                        onClick={() => handleStageSelect(item)}
                        className={`group relative flex flex-col justify-between bg-[#111111] border transition-all duration-300 cursor-pointer overflow-hidden ${
                          isSelected
                            ? 'border-[#D10A20] shadow-[0_0_25px_rgba(209,10,32,0.35)] ring-1 ring-[#D10A20]'
                            : 'border-[#1A1A1A] hover:border-[#D10A20]/70'
                        }`}
                      >
                        {/* Visual Top Preview Frame */}
                        <div className="relative h-[220px] sm:h-[260px] overflow-hidden bg-[#080808]">
                          <img
                            src={item.image}
                            alt={item.alt}
                            className={`w-full h-full object-cover object-center filter contrast-125 transition-all duration-700 ease-out ${
                              isSelected
                                ? 'brightness-[75%] scale-105'
                                : 'brightness-[55%] group-hover:scale-105 group-hover:brightness-[75%]'
                            }`}
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                          
                          {/* Oversized Roman Numeral Watermark in Image */}
                          <div className="absolute top-4 right-6 font-cinzel text-7xl font-black text-white/10 select-none group-hover:text-[#D10A20]/30 transition-colors">
                            {item.numeral}
                          </div>

                          {/* Stage Label Tag & Active Indicator */}
                          <div className="absolute bottom-4 left-6 flex items-center gap-2">
                            <span className={`w-2.5 h-2.5 ${isSelected ? 'bg-[#D10A20] shadow-[0_0_8px_#D10A20]' : 'bg-[#D10A20]'}`} />
                            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white font-bold">
                              {item.stage}
                            </span>
                          </div>

                          {isSelected && (
                            <div className="absolute top-4 left-6 bg-[#D10A20] text-white text-[9px] font-mono uppercase tracking-[0.2em] font-bold px-2.5 py-1 shadow-md">
                              SELECTED PHASE
                            </div>
                          )}
                        </div>

                        {/* Content Box */}
                        <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                          <div>
                            <h3 className="font-cinzel text-2xl sm:text-3xl font-black uppercase tracking-wide text-white mb-2 group-hover:text-[#D10A20] transition-colors">
                              {item.title}
                            </h3>
                            <p className="font-cinzel text-sm sm:text-base text-[#D10A20] font-semibold tracking-wide mb-4">
                              &ldquo;{item.summary}&rdquo;
                            </p>
                            <p className="text-[#A6A6A6] text-xs sm:text-sm font-light leading-relaxed">
                              {item.description}
                            </p>
                          </div>

                          {/* PROCEED Trigger Button */}
                          <div className="mt-8 pt-6 border-t border-[#1A1A1A] flex items-center justify-between">
                            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A6A6A6]">
                              PHASE 0{idx + 1}
                            </span>
                            
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleProceedClick(item)
                              }}
                              className="group/btn inline-flex items-center gap-2 text-xs font-mono text-[#D10A20] font-bold tracking-wider cursor-pointer transition-all duration-300 drop-shadow-[0_0_8px_rgba(209,10,32,0.3)] hover:text-[#FF1E35] hover:drop-shadow-[0_0_15px_rgba(209,10,32,0.85)]"
                              aria-label={`Proceed with ${item.title}`}
                            >
                              <span>PROCEED</span>
                              <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1.5 font-bold">
                                &rarr;
                              </span>
                            </button>
                          </div>
                        </div>

                        {/* Bottom Crimson Accent Bar */}
                        <div className={`h-[2px] transition-all duration-500 bg-[#D10A20] ${isSelected ? 'w-full shadow-[0_0_8px_#D10A20]' : 'w-0 group-hover:w-full'}`} />
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Validation Feedback & Global Proceed Action */}
              <div className="pt-6 flex flex-col items-center justify-center space-y-4">
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 text-xs font-mono text-[#FF334B] bg-[#1A0A0A] border border-[#D10A20]/60 px-5 py-3 rounded-none tracking-wide text-center"
                    role="alert"
                  >
                    <AlertCircle className="w-4 h-4 text-[#D10A20] flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="button"
                    onClick={() => handleProceedClick()}
                    className="bg-[#D10A20] hover:bg-[#FF1E35] text-white px-8 py-3.5 text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-red-glow flex items-center justify-center gap-3 cursor-pointer active:scale-95"
                  >
                    <span>PROCEED WITH SELECTED PROTOCOL</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <span className="text-[11px] font-mono text-[#A6A6A6] uppercase tracking-[0.2em]">
                    {selectedStageId
                      ? `Selected: ${stages.find((s) => s.id === selectedStageId)?.title}`
                      : 'Click any phase card or button to select'}
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            /* VIEW 2: ACTIVATED WARRIOR PATHWAY & PERSONALIZED RECOMMENDATION */
            <motion.div
              key="active-pathway"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-[#111111] border border-[#D10A20] p-8 sm:p-12 lg:p-14 relative shadow-[0_0_40px_rgba(209,10,32,0.2)]"
            >
              {/* Corner Watermark */}
              <div className="absolute top-6 right-8 font-cinzel text-7xl sm:text-9xl font-black text-white/[0.04] select-none pointer-events-none">
                {activePathway.numeral}
              </div>

              {/* Status Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#1A1A1A]">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-[#D10A20] animate-pulse" />
                  <span className="text-xs font-mono text-[#D10A20] uppercase tracking-[0.3em] font-bold">
                    WARRIOR PATHWAY ACTIVATED // {activePathway.stage} : {activePathway.title}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#A6A6A6] hover:text-white transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>RETURN TO STAGE SELECTION</span>
                </button>
              </div>

              {/* Two Column Pathway Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left Column: Recommendation Narrative */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#A6A6A6] block mb-2">
                      {activePathway.recommendation.eyebrow}
                    </span>
                    <h3 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-wide">
                      {activePathway.recommendation.match}
                    </h3>
                  </div>

                  <p className="font-cinzel text-base sm:text-lg text-[#E5E5E5] font-semibold leading-relaxed">
                    &ldquo;{activePathway.recommendation.objective}&rdquo;
                  </p>

                  <p className="text-[#A6A6A6] text-sm leading-relaxed">
                    {activePathway.recommendation.focus}
                  </p>

                  <div className="p-4 bg-[#080808] border border-[#1A1A1A] flex items-center gap-3">
                    <Activity className="w-5 h-5 text-[#D10A20] flex-shrink-0" />
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A6A6A6]">
                        TRAINING CADENCE & WORKLOAD
                      </div>
                      <div className="font-mono text-xs sm:text-sm text-white font-bold">
                        {activePathway.recommendation.cadence}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Tactical Prescriptions & Final Action */}
                <div className="lg:col-span-5 bg-[#080808] border border-[#1A1A1A] p-6 sm:p-8 space-y-6">
                  <div>
                    <h4 className="font-cinzel text-lg font-bold text-white uppercase tracking-wider mb-1">
                      EXECUTION PROTOCOLS
                    </h4>
                    <p className="text-[11px] font-mono text-[#A6A6A6] uppercase tracking-[0.2em]">
                      Mandatory phase standards
                    </p>
                  </div>

                  <ul className="space-y-3.5">
                    {activePathway.recommendation.prescriptions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#E5E5E5]">
                        <CheckCircle2 className="w-4 h-4 text-[#D10A20] flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-[#1A1A1A] space-y-3">
                    <button
                      type="button"
                      onClick={handleEnlistProceed}
                      className="w-full bg-[#D10A20] hover:bg-[#FF1E35] text-white py-4 text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-red-glow flex items-center justify-center gap-3 cursor-pointer active:scale-95"
                    >
                      <span>PROCEED TO ENLISTMENT FOR THIS PROTOCOL</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full border border-[#1A1A1A] hover:border-white text-[#A6A6A6] hover:text-white py-3 text-xs uppercase tracking-[0.2em] font-semibold transition-colors text-center cursor-pointer"
                    >
                      CHOOSE A DIFFERENT PHASE
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
