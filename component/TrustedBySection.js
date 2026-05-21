'use client';

import React from 'react';

// Real Brand SVGs
const VercelLogo = () => (
  <svg className="h-6 md:h-7 w-auto text-black" viewBox="0 0 116 100" fill="currentColor">
    <path d="M57.5 0L115 100H0L57.5 0z" />
  </svg>
);

const FigmaLogo = () => (
  <svg className="h-7 md:h-8 w-auto text-black" viewBox="0 0 38 57" fill="currentColor">
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0zM0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v19H9.5A9.5 9.5 0 0 1 0 47.5zM0 28.5a9.5 9.5 0 0 1 9.5-9.5H19v19H9.5A9.5 9.5 0 0 1 0 28.5zM0 9.5A9.5 9.5 0 0 1 9.5 0H28.5a9.5 9.5 0 0 1 0 19H9.5A9.5 9.5 0 0 1 0 9.5z" />
  </svg>
);

const GitHubLogo = () => (
  <svg className="h-8 md:h-9 w-auto text-black" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const FramerLogo = () => (
  <svg className="h-7 md:h-8 w-auto text-black" viewBox="0 0 14 21" fill="currentColor">
    <path d="M0 0h14v7H7zm0 7h7l7 7H0zm7 7h7v7l-7-7z" />
  </svg>
);

const ReactLogo = () => (
  <svg className="h-8 md:h-9 w-auto text-black" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
    <circle cx="0" cy="0" r="2.05" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export default function TrustedBySection() {
  // Array of real logos
  const logoSet = [VercelLogo, FigmaLogo, GitHubLogo, FramerLogo, ReactLogo];
  
  // Duplicated to create the infinite seamless loop
  const row = [...logoSet, ...logoSet, ...logoSet, ...logoSet]; 
  const infiniteLogos = [...row, ...row]; 

  return (
    <section className="relative w-full bg-[#ffffff] py-16 font-sans overflow-hidden flex flex-col items-center">
      
      <style>
        {`
          @keyframes scrollRight {
            /* Start shifted left (-50%), end at 0% to move left-to-right */
            100% { transform: translateX(-50%); }
            0% { transform: translateX(0%); }
          }
          .animate-marquee-right {
            /* Increased speed slightly for a better visual flow with tighter spacing */
            animation: scrollRight 100s linear infinite;
          }
          .fade-edges {
            -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          }
        `}
      </style>

      {/* Top Header */}
      <div className="text-[10px] md:text-xs font-semibold tracking-tight uppercase text-black mb-12">
        [ Trusted By ]
      </div>

      {/* Scrolling Container */}
      <div className="w-full max-w-5xl mx-auto fade-edges overflow-hidden">
        
        {/* The Track */}
        <div className="flex w-max animate-marquee-right items-center">
          
          {infiniteLogos.map((Logo, index) => (
            <div 
              key={index} 
              // TIGHTER SPACING: Reduced widths from 200px down to 130px
              className="flex items-center justify-center w-[100px] md:w-[130px] opacity-70 transition-opacity duration-300 hover:opacity-100"
            >
              <Logo />
            </div>
          ))}
          
        </div>
      </div>

    </section>
  );
}