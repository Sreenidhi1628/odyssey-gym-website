import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AncientArena from './components/AncientArena'
import WarriorCode from './components/WarriorCode'
import Training from './components/Training'
import Armory from './components/Armory'
import TrainingRitual from './components/TrainingRitual'
import Legion from './components/Legion'
import ClaimYourPlace from './components/ClaimYourPlace'
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
    <div className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-[#D10A20] selection:text-white font-body antialiased">
      
      {/* Ancient Roman/Spartan War Command Navigation */}
      <Navbar
        onClaimClick={() => scrollToSection('membership')}
        onJoinClick={() => scrollToSection('membership')}
      />

      {/* Main Experience: A Cinematic Warrior's Journey */}
      <main className="flex-grow">
        
        {/* Section 01: Full-Screen Opening with Monumental Spartan Helmet */}
        <Hero
          onBeginClick={() => scrollToSection('enlist', 'General Arena Membership & Open Armory')}
          onDiscoverClick={() => scrollToSection('ancient-arena')}
        />

        {/* Section 02: The Ancient Arena */}
        <AncientArena onExploreClick={() => scrollToSection('training')} />

        {/* Section 03: The Warrior's Code (Inscribed In Stone) */}
        <WarriorCode />

        {/* Section 04: Choose Your Battle (Training Disciplines) */}
        <Training
          onSelectProgramForInquiry={(programTitle) => scrollToSection('enlist', programTitle)}
        />

        {/* Section 05: The Armory (Modern Steel Meets Ancient Atmosphere) */}
        <Armory onExploreClick={() => scrollToSection('training')} />

        {/* Section 06: The Training Ritual (3-Stage Horizontal Timeline) */}
        <TrainingRitual onEnlistClick={() => scrollToSection('enlist')} />

        {/* Section 07: The Legion (Camaraderie & Real Community) */}
        <Legion />

        {/* Section 08: Claim Your Place (Membership) */}
        <ClaimYourPlace
          onJoinClick={() => scrollToSection('enlist', 'Warrior Command Membership')}
          onSpeakTeamClick={() => scrollToSection('enlist', 'Membership Enquiry / Team Discussion')}
          onSelectTier={(tierName) => scrollToSection('enlist', `${tierName} Membership`)}
        />

        {/* Section 09: Begin Your Odyssey (Contact & Communications) */}
        <Contact preselectedInterest={selectedInterest} />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}
