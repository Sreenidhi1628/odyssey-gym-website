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

    // Form submission processing with real feedback
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  return (
    <section
      id="enlist"
      className="relative bg-[#050505] py-24 sm:py-32 overflow-hidden border-t border-[#181818]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Pre-Form Monumental Banner: "YOUR LEGEND STARTS HERE" */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="relative group overflow-hidden border border-[#201E1C] bg-[#0D0D0D] p-8 sm:p-14 mb-16 text-center flex flex-col items-center justify-center shadow-stone-drop"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/images/arena_colosseum.webp"
              alt="Ancient colosseum arena with dramatic mist"
              className="w-full h-full object-cover object-center filter contrast-125 brightness-[25%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#C1121F] block mb-3 font-bold">
              THE FINAL TRIAL // THE WARRIOR'S OATH
            </span>
            <h2 className="font-condensed text-4xl sm:text-6xl font-bold uppercase text-white mb-4 tracking-[0.02em]">
              YOUR LEGEND <br />
              <span className="font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#C1121F] via-[#E5E2DC] to-[#9E1B1B]">
                STARTS HERE.
              </span>
            </h2>
            <p className="font-cinzel text-sm sm:text-base text-[#8E8A82] italic max-w-lg mb-2">
              &ldquo;Enter as you are. Leave as a weapon.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Contact Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Telemetry & Location */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#C1121F]" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#C1121F] font-mono">
                  DISPATCH // ARENA COMMUNICATIONS
                </span>
              </div>

              <h3 className="font-condensed text-3xl sm:text-5xl font-bold uppercase text-white mb-4">
                SWEAR THE OATH. <br />
                <span className="font-cinzel text-white">BEGIN THE ODYSSEY.</span>
              </h3>

              <p className="text-[#8E8A82] text-sm leading-relaxed mb-8 max-w-md">
                Transmit your credentials to commence your arena onboarding. A Centurion advisor will review your training targets and schedule your trial walkthrough within 24 hours.
              </p>

              {/* Facility Comms */}
              <div className="space-y-5 pt-6 border-t border-[#181818]">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#0D0D0D] border border-[#201E1C] text-[#C1121F]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#8E8A82] block font-mono">
                      ARENA SANCTUM LOCATION
                    </span>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      742 Gladiators Way, Iron District, Metropolis
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#0D0D0D] border border-[#201E1C] text-[#C1121F]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#8E8A82] block font-mono">
                      DIRECT TELEMETRY
                    </span>
                    <p className="text-sm font-semibold text-white mt-0.5 font-mono">
                      +1 (800) 480-ODYSSEY / +1 (555) 300-WARS
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#0D0D0D] border border-[#201E1C] text-[#C1121F]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#8E8A82] block font-mono">
                      OFFICIAL DISPATCH
                    </span>
                    <p className="text-sm font-semibold text-white mt-0.5 font-mono">
                      enlist@odysseyarena.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#0D0D0D] border border-[#201E1C] text-white">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#8E8A82] block font-mono">
                      SANCTUM ACCESS
                    </span>
                    <p className="text-sm font-semibold text-white mt-0.5">
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
            className="lg:col-span-7 bg-[#0D0D0D] border border-[#201E1C] p-8 sm:p-10 relative shadow-stone-drop"
          >
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C1121F]" />

            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-[#9E1B1B]/15 border-2 border-[#C1121F] flex items-center justify-center text-[#C1121F] mb-5 shadow-crimson-glow">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-cinzel text-2xl font-bold uppercase text-white mb-2 tracking-wider">
                  OATH TRANSMITTED
                </h4>
                <p className="text-[#8E8A82] text-sm max-w-md leading-relaxed mb-6">
                  Welcome to the arena, <strong className="text-white">{formData.fullName}</strong>. Your inquiry regarding <strong className="text-[#C1121F]">{formData.interest}</strong> has been logged with Centurion command. Prepare yourself.
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
                  className="text-xs uppercase tracking-[0.2em] text-[#C1121F] hover:text-white underline font-bold"
                >
                  TRANSMIT ANOTHER ENLISTMENT
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8A82] font-semibold mb-2 font-mono">
                    WARRIOR NAME *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Odysseus of Ithaca"
                    className={`w-full bg-[#050505] border px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none transition-colors ${
                      errors.fullName ? 'border-[#C1121F] focus:ring-1 focus:ring-[#C1121F]' : 'border-[#181818] focus:border-[#C1121F]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-[#C1121F] mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8A82] font-semibold mb-2 font-mono">
                      COMMUNICATIONS EMAIL *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="warrior@odyssey.com"
                      className={`w-full bg-[#050505] border px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none transition-colors ${
                        errors.email ? 'border-[#C1121F] focus:ring-1 focus:ring-[#C1121F]' : 'border-[#181818] focus:border-[#C1121F]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-[#C1121F] mt-1.5 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8A82] font-semibold mb-2 font-mono">
                      TELEPHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full bg-[#050505] border px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none transition-colors ${
                        errors.phone ? 'border-[#C1121F] focus:ring-1 focus:ring-[#C1121F]' : 'border-[#181818] focus:border-[#C1121F]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-[#C1121F] mt-1.5 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8A82] font-semibold mb-2 font-mono">
                    PREFERRED BATTLE DISCIPLINE
                  </label>
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-[#050505] border border-[#181818] focus:border-[#C1121F] px-4 py-3 text-sm text-white focus:outline-none"
                  >
                    <option value="01 — THE FORGE (Strength & Progressive Overload)">01 — THE FORGE (Strength & Progressive Overload)</option>
                    <option value="02 — WAR MACHINE (Conditioning & Engine)">02 — WAR MACHINE (Conditioning & Engine)</option>
                    <option value="03 — THE GLADIATOR (Athletic Performance & Power)">03 — THE GLADIATOR (Athletic Performance & Power)</option>
                    <option value="04 — PRECISION (Personal Training & Mentorship)">04 — PRECISION (Personal Training & Mentorship)</option>
                    <option value="General Arena Membership & Open Armory">General Arena Membership & Open Armory</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8A82] font-semibold mb-2 font-mono">
                    TRAINING TARGETS (OPTIONAL)
                  </label>
                  <textarea
                    id="message"
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current lifting benchmarks, athletic background, or targets..."
                    className="w-full bg-[#050505] border border-[#181818] focus:border-[#C1121F] px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#9E1B1B] hover:bg-[#C1121F] text-white py-3.5 text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-crimson-glow flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'DISPATCHING OATH...' : 'SWEAR THE OATH & ENTER'}</span>
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
