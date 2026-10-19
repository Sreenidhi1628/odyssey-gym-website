import React, { useState, useEffect } from 'react'
import { Send, MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react'

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

    // Form submission processing with real feedback state
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  return (
    <section
      id="enlist"
      className="relative bg-[#080808] py-28 sm:py-36 lg:py-44 overflow-hidden border-t border-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Information & Real Facility Contact */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#D10A20]" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#D10A20]">
                  SECTION 09 — COMMUNICATIONS
                </span>
              </div>

              <h2 className="font-cinzel text-4xl sm:text-6xl font-black uppercase text-white tracking-[0.03em] leading-[0.98] mb-6">
                BEGIN YOUR <br />
                <span className="text-[#D10A20]">ODYSSEY.</span>
              </h2>

              <p className="font-cinzel text-base sm:text-lg text-[#E5E5E5] font-semibold tracking-wide mb-3">
                &ldquo;Your battle begins the moment you make contact.&rdquo;
              </p>

              <p className="text-[#A6A6A6] text-sm font-light leading-relaxed tracking-wide mb-10 max-w-md">
                Submit your credentials to commence your arena onboarding. A Centurion advisor will review your training history, answer any questions, and arrange your initial walkthrough.
              </p>

              {/* Facility Details */}
              <div className="space-y-6 pt-6 border-t border-[#1A1A1A]">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#111111] border border-[#1A1A1A] text-[#D10A20]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#A6A6A6] block font-mono">
                      ARENA SANCTUM LOCATION
                    </span>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      742 Gladiators Way, Iron District, Metropolis
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#111111] border border-[#1A1A1A] text-[#D10A20]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#A6A6A6] block font-mono">
                      DIRECT COMMS
                    </span>
                    <p className="text-sm font-semibold text-white mt-0.5 font-mono">
                      +1 (800) 480-ODYSSEY / +1 (555) 300-WARS
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#111111] border border-[#1A1A1A] text-[#D10A20]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#A6A6A6] block font-mono">
                      OFFICIAL DISPATCH
                    </span>
                    <p className="text-sm font-semibold text-white mt-0.5 font-mono">
                      enlist@odysseyarena.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#111111] border border-[#1A1A1A] text-[#FFFFFF]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#A6A6A6] block font-mono">
                      OPERATING HOURS
                    </span>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      24/7 Biometric Legionary Access &bull; Staffed Centurion Hours 05:00 - 23:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Enquiry Form */}
          <div className="lg:col-span-7 bg-[#111111] border border-[#1A1A1A] p-8 sm:p-12 relative">
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D10A20]" />

            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-[#D10A20]/20 border-2 border-[#D10A20] flex items-center justify-center text-[#D10A20] mb-6 shadow-red-glow">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-cinzel text-3xl font-black uppercase text-white tracking-wider mb-3">
                  ENQUIRY TRANSMITTED
                </h3>
                <p className="text-[#A6A6A6] text-sm max-w-md leading-relaxed mb-6">
                  Welcome, <strong className="text-white">{formData.fullName}</strong>. Your enquiry regarding <strong className="text-[#D10A20]">{formData.interest}</strong> has been received by our Centurion team. We will contact you at <strong className="text-white">{formData.email}</strong> shortly.
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
                  className="mt-4 text-xs uppercase tracking-[0.25em] text-[#D10A20] hover:text-white underline font-bold"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs uppercase tracking-[0.2em] text-[#A6A6A6] font-semibold mb-2 font-mono">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Marcus Aurelius"
                    className={`w-full bg-[#080808] border px-4 py-3.5 text-sm text-white placeholder-zinc-700 focus:outline-none transition-colors ${
                      errors.fullName ? 'border-[#D10A20] focus:ring-1 focus:ring-[#D10A20]' : 'border-[#1A1A1A] focus:border-[#D10A20]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-[#D10A20] mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-[#A6A6A6] font-semibold mb-2 font-mono">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="warrior@odyssey.com"
                      className={`w-full bg-[#080808] border px-4 py-3.5 text-sm text-white placeholder-zinc-700 focus:outline-none transition-colors ${
                        errors.email ? 'border-[#D10A20] focus:ring-1 focus:ring-[#D10A20]' : 'border-[#1A1A1A] focus:border-[#D10A20]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-[#D10A20] mt-1.5 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-[0.2em] text-[#A6A6A6] font-semibold mb-2 font-mono">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full bg-[#080808] border px-4 py-3.5 text-sm text-white placeholder-zinc-700 focus:outline-none transition-colors ${
                        errors.phone ? 'border-[#D10A20] focus:ring-1 focus:ring-[#D10A20]' : 'border-[#1A1A1A] focus:border-[#D10A20]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-[#D10A20] mt-1.5 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-xs uppercase tracking-[0.2em] text-[#A6A6A6] font-semibold mb-2 font-mono">
                    PREFERRED TRAINING PROGRAM
                  </label>
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-[#080808] border border-[#1A1A1A] focus:border-[#D10A20] px-4 py-3.5 text-sm text-white focus:outline-none"
                  >
                    <option value="01 — THE FORGE (Strength & Progressive Overload)">01 — THE FORGE (Strength & Progressive Overload)</option>
                    <option value="02 — WAR MACHINE (Conditioning & Engine)">02 — WAR MACHINE (Conditioning & Engine)</option>
                    <option value="03 — THE GLADIATOR (Athletic Performance & Power)">03 — THE GLADIATOR (Athletic Performance & Power)</option>
                    <option value="04 — PRECISION (Personal Training & Mentorship)">04 — PRECISION (Personal Training & Mentorship)</option>
                    <option value="General Arena Membership & Open Armory">General Arena Membership & Open Armory</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-[#A6A6A6] font-semibold mb-2 font-mono">
                    MESSAGE (OPTIONAL)
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share your current fitness level, previous training background, or specific goals..."
                    className="w-full bg-[#080808] border border-[#1A1A1A] focus:border-[#D10A20] px-4 py-3.5 text-sm text-white placeholder-zinc-700 focus:outline-none"
                  />
                </div>

                {/* Primary Submit Button: [ ENTER THE ARENA ] */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D10A20] hover:bg-[#FF1E35] text-white py-4 text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-red-glow flex items-center justify-center gap-3 cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'TRANSMITTING...' : 'ENTER THE ARENA'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}
