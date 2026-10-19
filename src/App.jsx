import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WarriorCode from './components/WarriorCode'
import Arena from './components/Arena'
import Training from './components/Training'
import Transformation from './components/Transformation'
import Trainers from './components/Trainers'
import Membership from './components/Membership'
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
    <div className="min-h-screen bg-[#050505] text-[#E5E2DC] flex flex-col selection:bg-[#9E1B1B] selection:text-white font-body antialiased">
      
      {/* Chapter-Based Ancient War Command Navigation */}
      <Navbar
        onClaimClick={() => scrollToSection('enlist', 'Legionary Membership Enlistment')}
      />

      {/* Main Experience: A Cinematic Warrior's Journey */}
      <main className="flex-grow">
        
        {/* Prologue: The Call to War (Sculptural Helmet & Monumental Typography) */}
        <Hero
          onBeginClick={() => scrollToSection('enlist', 'General Arena Enlistment')}
          onDiscoverClick={() => scrollToSection('code')}
        />

        {/* Chapter I: The Sacred Code (Ancient Stone Inscription) */}
        <WarriorCode />

        {/* Chapter II: Forged in Battle (The Training Sanctum & Hardware) */}
        <Arena onEnlistClick={() => scrollToSection('enlist')} />

        {/* Chapter III: Combat Disciplines (The 4 Training Curricula) */}
        <Training
          onSelectProgramForInquiry={(programTitle) => scrollToSection('enlist', programTitle)}
        />

        {/* Chapter IV: The Crucible (Physical Progress & Metamorphic Overload) */}
        <Transformation onEnlistClick={() => scrollToSection('enlist')} />

        {/* Chapter V: Centurions & The Legion (Commanders & Community) */}
        <Trainers onEnlistClick={() => scrollToSection('enlist', '1-on-1 Centurion Mentorship')} />

        {/* Chapter VI: Earn Your Legacy (Stone Tablet Membership) */}
        <Membership
          onSelectTier={(tierName) => scrollToSection('enlist', `${tierName} Membership`)}
          onSpeakTeamClick={() => scrollToSection('enlist', 'Custom Squad Enlistment')}
        />

        {/* The Final Trial: The Warrior's Oath & Enlistment */}
        <Contact preselectedInterest={selectedInterest} />

      </main>

      {/* The Final Oath Footer */}
      <Footer />

    </div>
  )
}
