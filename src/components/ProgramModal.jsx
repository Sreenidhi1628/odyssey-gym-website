import React from 'react'
import { X, CheckCircle2, ArrowRight, ShieldCheck, Flame, Dumbbell } from 'lucide-react'

export default function ProgramModal({ program, onClose, onSelectProgram }) {
  if (!program) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-[#141414] border border-[#1B1B1B] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#080808]/80 text-[#A6A6A6] hover:text-white hover:bg-[#D10A20] transition-colors border border-[#1B1B1B]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden flex-shrink-0">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent" />
          <div className="absolute bottom-4 left-6 sm:left-8 right-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-[2px] bg-[#D10A20]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D10A20] font-bold">
                WARRIOR DISCIPLINE PROTOCOL
              </span>
            </div>
            <h3 id="modal-title" className="font-cinzel text-2xl sm:text-3xl font-black uppercase text-white tracking-wider">
              {program.title}
            </h3>
          </div>
        </div>

        {/* Modal Content Details */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <p className="text-[#A6A6A6] text-sm sm:text-base leading-relaxed">
            {program.longDescription || program.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-y border-[#1B1B1B]">
            <div className="bg-[#1B1B1B]/50 p-4 border border-[#1B1B1B]">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#A6A6A6]">INTENSITY</div>
              <div className="font-cinzel text-lg font-bold text-white mt-1">{program.intensity || 'ELITE / HIGH'}</div>
            </div>
            <div className="bg-[#1B1B1B]/50 p-4 border border-[#1B1B1B]">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#A6A6A6]">FREQUENCY</div>
              <div className="font-cinzel text-lg font-bold text-white mt-1">{program.frequency || '4-5 SESSIONS / WK'}</div>
            </div>
            <div className="bg-[#1B1B1B]/50 p-4 border border-[#1B1B1B]">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#A6A6A6]">LEVEL</div>
              <div className="font-cinzel text-lg font-bold text-[#D10A20] mt-1">{program.level || 'ALL DETERMINED'}</div>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D10A20]" />
              <span>CORE ARCHITECTURAL PILLARS</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(program.highlights || [
                'Biomechanical movement assessment',
                'Periodized progressive overload cycles',
                'Spartan conditioning engine blocks',
                'High-density recovery guidance'
              ]).map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#A6A6A6]">
                  <CheckCircle2 className="w-4 h-4 text-[#D10A20] flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#A6A6A6]">
              Ready to enroll in <strong className="text-white">{program.title}</strong>?
            </span>
            <button
              onClick={() => {
                onSelectProgram(program.title)
                onClose()
              }}
              className="w-full sm:w-auto bg-[#D10A20] hover:bg-[#FF1E35] text-white px-6 py-3 text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-red-glow flex items-center justify-center gap-2"
            >
              <span>APPLY FOR THIS DISCIPLINE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
