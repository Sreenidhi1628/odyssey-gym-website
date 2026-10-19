import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Arena from './components/Arena'
import Transformation from './components/Transformation'
import Training from './components/Training'
import Membership from './components/Membership'
import Trainers from './components/Trainers'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [selectedInterest, setSelectedInterest] = useState('01 — THE FORGE (Strength & Progressive Overload)')

  const scrollToSection = (id, interest = null) => {
    if (interest) {
      setSelectedInterest(interest)
    }
    const element = document.getElementById(id)
    if (element) {
      const navOffset = 70
      const pos = element.getBoundingClientRect().top + window.pageYOffset - navOffset
      window.scrollTo({
        top: pos,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#080808] text-[#E8E2D8] flex flex-col selection:bg-[#A87942] selection:text-[#080808] font-body antialiased">
      
      {/* Command Center Navigation */}
      <Navbar
        onClaimClick={() => scrollToSection('enlist', 'Legionary Membership Enlistment')}
      />

      {/* Main Experience: A Cinematic Greek Warrior's Journey */}
      <main className="flex-grow">
        
        {/* Section 01: Hero — Enter the Arena */}
        <Hero
          onBeginClick={() => scrollToSection('enlist', 'General Arena Enlistment')}
          onDiscoverClick={() => scrollToSection('philosophy')}
        />

        {/* Section 02: The Philosophy — Comfort Builds Nothing */}
        <Philosophy onExploreClick={() => scrollToSection('arena')} />

        {/* Section 03: The Training Arena — Editorial Hardware Grid */}
        <Arena onEnlistClick={() => scrollToSection('enlist')} />

        {/* Section 04: The Transformation — The Crucible */}
        <Transformation onEnlistClick={() => scrollToSection('enlist')} />

        {/* Section 05: Training Programs — Choose Your Battle */}
        <Training
          onSelectProgramForInquiry={(programTitle) => scrollToSection('enlist', programTitle)}
        />

        {/* Section 06: Membership — Claim Your Place */}
        <Membership
          onSelectTier={(tierName) => scrollToSection('enlist', `${tierName} Membership`)}
          onSpeakTeamClick={() => scrollToSection('enlist', 'Custom Squad Enlistment')}
        />

        {/* Section 07: Centurion Trainers & The Legion Community */}
        <Trainers onEnlistClick={() => scrollToSection('enlist', '1-on-1 Centurion Mentorship')} />

        {/* Section 08: Final CTA & Communications Enlistment */}
        <Contact preselectedInterest={selectedInterest} />

      </main>

      {/* Compact Elegant Footer */}
      <Footer />

    </div>
  )
}
