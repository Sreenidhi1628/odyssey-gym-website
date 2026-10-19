import React from 'react'
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react'

export default function ProgramModal({ program, onClose, onSelectProgram }) {
  if (!program) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
      <div 
        className="relative w-full max-w-2xl bg-[#0D0D0D] border border-[#9E1B1B]/40 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#050505]/80 text-[#8E8A82] hover:text-white hover:bg-[#9E1B1B] transition-colors border border-[#181818] cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Image */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden flex-shrink-0">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover object-center filter contrast-125 brightness-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent" />
          <div className="absolute bottom-4 left-6 sm:left-8 right-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-4 h-[2px] bg-[#C1121F]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C1121F] font-mono font-bold">
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
          <p className="text-[#8E8A82] text-sm leading-relaxed">
            {program.longDescription || program.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-3 border-y border-[#181818]">
            <div className="bg-[#050505] p-3 border border-[#181818]">
              <div className="text-[9px] uppercase tracking-[0.2em] text-[#8E8A82] font-mono">INTENSITY</div>
              <div className="font-cinzel text-sm font-bold text-white mt-1">{program.intensity || 'ELITE / HIGH'}</div>
            </div>
            <div className="bg-[#050505] p-3 border border-[#181818]">
              <div className="text-[9px] uppercase tracking-[0.2em] text-[#8E8A82] font-mono">FREQUENCY</div>
              <div className="font-cinzel text-sm font-bold text-white mt-1">{program.frequency || '4 SESSIONS / WK'}</div>
            </div>
            <div className="bg-[#050505] p-3 border border-[#181818]">
              <div className="text-[9px] uppercase tracking-[0.2em] text-[#8E8A82] font-mono">LEVEL</div>
              <div className="font-cinzel text-sm font-bold text-[#C1121F] mt-1">{program.level || 'ALL WARRIORS'}</div>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-white mb-3 flex items-center gap-2 font-mono">
              <ShieldCheck className="w-4 h-4 text-[#C1121F]" />
              <span>CORE ARCHITECTURAL PILLARS</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(program.highlights || [
                'Biomechanical movement assessment',
                'Periodized progressive overload cycles',
                'Spartan conditioning engine blocks',
                'High-density recovery guidance'
              ]).map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#8E8A82]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C1121F] flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#181818]">
            <span className="text-xs text-[#8E8A82]">
              Ready to enroll in <strong className="text-white">{program.title}</strong>?
            </span>
            <button
              onClick={() => {
                onSelectProgram(program.title)
                onClose()
              }}
              className="w-full sm:w-auto bg-[#9E1B1B] hover:bg-[#C1121F] text-white px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-crimson-subtle flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>ENLIST IN THIS PROTOCOL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
