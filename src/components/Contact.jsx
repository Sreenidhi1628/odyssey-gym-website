import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Send, MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle } from 'lucide-react'

export default function Contact({ preselectedInterest = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: '01 — THE FORGE (Strength & Progressive Overload)',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (preselectedInterest) {
      setFormData((prev) => ({ ...prev, interest: preselectedInterest }))
    }
  }, [preselectedInterest])

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required for enlistment.'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Valid battle communications email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.'
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    // Form submission simulation with real feedback
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  return (
    <section
      id="enlist"
      className="relative bg-[#080808] py-20 sm:py-28 overflow-hidden border-t border-[#A87942]/20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Pre-Form Final Cinematic Banner: "YOUR LEGEND STARTS HERE" */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="relative group overflow-hidden border border-[#A87942]/40 bg-[#141414] p-8 sm:p-14 mb-16 text-center flex flex-col items-center justify-center shadow-bronze-subtle"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/images/arena_colosseum.webp"
              alt="Nocturnal colosseum arena with dramatic mist"
              className="w-full h-full object-cover object-center filter contrast-125 brightness-[30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-[#141414]" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#C6A16B] block mb-3 font-bold">
              THE MOMENT OF DECISION
            </span>
            <h2 className="font-condensed text-4xl sm:text-6xl font-bold uppercase text-[#E8E2D8] mb-4 tracking-[0.02em]">
              YOUR LEGEND <br />
              <span className="font-cinzel text-[#A87942]">STARTS HERE.</span>
            </h2>
            <p className="font-cinzel text-sm sm:text-base text-[#9E9990] italic max-w-lg mb-2">
              &ldquo;Enter as you are. Leave as a weapon.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Contact Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Comms & Location */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#A87942]" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#C6A16B] font-mono">
                  SECTION 08 — COMMUNICATIONS
                </span>
              </div>

              <h3 className="font-condensed text-3xl sm:text-5xl font-bold uppercase text-[#E8E2D8] mb-4">
                BEGIN YOUR <br />
                <span className="font-cinzel text-[#A87942]">ODYSSEY.</span>
              </h3>

              <p className="text-[#9E9990] text-sm leading-relaxed mb-8 max-w-md">
                Transmit your credentials to commence your arena onboarding. A Centurion advisor will review your training targets and schedule your trial walkthrough within 24 hours.
              </p>

              {/* Facility Comms */}
              <div className="space-y-5 pt-6 border-t border-[#1c1a17]">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#141414] border border-[#A87942]/30 text-[#A87942]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#9E9990] block font-mono">
                      ARENA SANCTUM LOCATION
                    </span>
                    <p className="text-sm font-semibold text-[#E8E2D8] mt-0.5">
                      742 Gladiators Way, Iron District, Metropolis
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#141414] border border-[#A87942]/30 text-[#A87942]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#9E9990] block font-mono">
                      DIRECT TELEMETRY
                    </span>
                    <p className="text-sm font-semibold text-[#E8E2D8] mt-0.5 font-mono">
                      +1 (800) 480-ODYSSEY / +1 (555) 300-WARS
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#141414] border border-[#A87942]/30 text-[#A87942]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#9E9990] block font-mono">
                      OFFICIAL DISPATCH
                    </span>
                    <p className="text-sm font-semibold text-[#E8E2D8] mt-0.5 font-mono">
                      enlist@odysseyarena.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#141414] border border-[#A87942]/30 text-[#C6A16B]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#9E9990] block font-mono">
                      SANCTUM ACCESS
                    </span>
                    <p className="text-sm font-semibold text-[#E8E2D8] mt-0.5">
                      24/7 Biometric Legionary Access &bull; Staffed Centurion Hours 05:00 - 23:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-[#141414] border border-[#A87942]/30 p-8 sm:p-10 relative shadow-bronze-subtle"
          >
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#A87942]" />

            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-[#A87942]/15 border-2 border-[#A87942] flex items-center justify-center text-[#C6A16B] mb-5 shadow-bronze-glow">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-cinzel text-2xl font-bold uppercase text-[#E8E2D8] mb-2 tracking-wider">
                  ENLISTMENT DISPATCHED
                </h4>
                <p className="text-[#9E9990] text-sm max-w-md leading-relaxed mb-6">
                  Welcome to the arena, <strong className="text-white">{formData.fullName}</strong>. Your inquiry regarding <strong className="text-[#C6A16B]">{formData.interest}</strong> has been logged with Centurion command. We will initiate contact shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      interest: '01 — THE FORGE (Strength & Progressive Overload)',
                      message: '',
                    })
                  }}
                  className="text-xs uppercase tracking-[0.2em] text-[#A87942] hover:text-[#C6A16B] underline font-bold"
                >
                  TRANSMIT ANOTHER ENLISTMENT
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-[11px] uppercase tracking-[0.2em] text-[#9E9990] font-semibold mb-2 font-mono">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Odysseus of Ithaca"
                    className={`w-full bg-[#080808] border px-4 py-3 text-sm text-[#E8E2D8] placeholder-zinc-700 focus:outline-none transition-colors ${
                      errors.fullName ? 'border-[#7E1717] focus:ring-1 focus:ring-[#7E1717]' : 'border-[#1c1a17] focus:border-[#A87942]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-[#9B1C1C] mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-[11px] uppercase tracking-[0.2em] text-[#9E9990] font-semibold mb-2 font-mono">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="warrior@odyssey.com"
                      className={`w-full bg-[#080808] border px-4 py-3 text-sm text-[#E8E2D8] placeholder-zinc-700 focus:outline-none transition-colors ${
                        errors.email ? 'border-[#7E1717] focus:ring-1 focus:ring-[#7E1717]' : 'border-[#1c1a17] focus:border-[#A87942]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-[#9B1C1C] mt-1.5 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[11px] uppercase tracking-[0.2em] text-[#9E9990] font-semibold mb-2 font-mono">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full bg-[#080808] border px-4 py-3 text-sm text-[#E8E2D8] placeholder-zinc-700 focus:outline-none transition-colors ${
                        errors.phone ? 'border-[#7E1717] focus:ring-1 focus:ring-[#7E1717]' : 'border-[#1c1a17] focus:border-[#A87942]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-[#9B1C1C] mt-1.5 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-[11px] uppercase tracking-[0.2em] text-[#9E9990] font-semibold mb-2 font-mono">
                    PREFERRED BATTLE DISCIPLINE
                  </label>
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-[#080808] border border-[#1c1a17] focus:border-[#A87942] px-4 py-3 text-sm text-[#E8E2D8] focus:outline-none"
                  >
                    <option value="01 — THE FORGE (Strength & Progressive Overload)">01 — THE FORGE (Strength & Progressive Overload)</option>
                    <option value="02 — WAR MACHINE (Conditioning & Engine)">02 — WAR MACHINE (Conditioning & Engine)</option>
                    <option value="03 — THE GLADIATOR (Athletic Performance & Power)">03 — THE GLADIATOR (Athletic Performance & Power)</option>
                    <option value="04 — PRECISION (Personal Training & Mentorship)">04 — PRECISION (Personal Training & Mentorship)</option>
                    <option value="General Arena Membership & Open Armory">General Arena Membership & Open Armory</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] uppercase tracking-[0.2em] text-[#9E9990] font-semibold mb-2 font-mono">
                    TRAINING OBJECTIVES (OPTIONAL)
                  </label>
                  <textarea
                    id="message"
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current lifting benchmarks, athletic background, or targets..."
                    className="w-full bg-[#080808] border border-[#1c1a17] focus:border-[#A87942] px-4 py-3 text-sm text-[#E8E2D8] placeholder-zinc-700 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#A87942] hover:bg-[#C6A16B] text-[#080808] py-3.5 text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-bronze-glow flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'DISPATCHING...' : 'ENTER THE ARENA'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  )
}
