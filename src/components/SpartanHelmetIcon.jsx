import React from 'react'

export default function SpartanHelmetIcon({ className = "w-6 h-6", color = "currentColor", crestColor = "#D10A20" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Flowing Spartan Crimson Crest */}
      <path 
        d="M20 28 C26 12, 42 6, 58 8 C68 10, 78 16, 84 25 C88 32, 87 40, 84 48 C81 55, 76 60, 72 65 C70 67, 68 64, 69 61 C72 55, 74 48, 73 42 C71 34, 66 28, 58 24 C50 20, 36 21, 24 29 C21 31, 19 30, 20 28 Z" 
        fill={crestColor}
      />
      {/* Crest mount / base */}
      <path 
        d="M32 25 C42 19, 56 19, 68 25 C70 26, 68 28, 65 29 C54 24, 42 24, 34 29 C32 28, 30 26, 32 25 Z" 
        fill="#FFFFFF" 
      />
      {/* Corinthian Helmet Dome */}
      <path 
        d="M30 33 C36 27, 46 25, 56 26 C64 27, 71 31, 74 38 C77 44, 77 53, 76 60 C75 66, 73 70, 71 73 C69 70, 68 64, 68 59 C67 52, 65 48, 61 46 C55 43, 44 43, 38 46 C34 49, 31 54, 30 60 C29 66, 27 71, 26 73 C24 70, 23 63, 23 57 C22 47, 24 38, 30 33 Z" 
        fill={color}
      />
      {/* Nasal Bar & T-slit eye openings */}
      <path 
        d="M48 42 L52 42 L53 66 L59 66 L57 73 L43 73 L41 66 L47 66 Z" 
        fill={color}
      />
      {/* Cheek guards & Jawline */}
      <path 
        d="M26 62 C29 62, 33 65, 34 71 L36 82 C34 85, 30 83, 28 78 L26 69 Z" 
        fill={color} 
      />
      <path 
        d="M74 62 C71 62, 67 65, 66 71 L64 82 C66 85, 70 83, 72 78 L74 69 Z" 
        fill={color} 
      />
      {/* Dark battle accents */}
      <circle cx="50" cy="33" r="2" fill="#D10A20" />
      <path d="M42 35 C47 33, 53 33, 58 35" stroke="#D10A20" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
