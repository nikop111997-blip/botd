'use client';

import { PlusIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';

// Reusable Project Section Component
const ProjectSection = ({
  number,
  title,
  categories,
  year,
  description,
  imageSrc,
  reverse = false,
  onImageEnter,
  onImageLeave,
}) => {
  return (
    <section 
      className={`relative flex flex-col md:flex-row w-full bg-[#F5F7F6] text-black border-b border-gray-200 ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* TEXT COLUMN */}
      {/* Set to h-auto for mobile so it flows normally, keeping h-[250vh] for desktop scrolling */}
      <div className="w-full md:w-1/2 relative h-auto md:h-[250vh] p-6 px-2 md:p-12 lg:p-0 lg:px-2 flex flex-col order-last md:order-none">
        
        {/* 1. Top Header */}
        <div className="relative md:sticky md:top-2 z-30 bg-[#F5F7F6] pb-2 md:mt-0">
          <span className="text-sm md:text-base font-medium text-gray-700">{number}</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mt-1 ml-5 sm:ml-0">
            {title}
          </h1>
        </div>

        {/* 2. Middle Content (Categories) */}
        {/* Removed giant top margins for mobile to stack it cleanly */}
      <div className="relative md:sticky md:top-[30vh] z-20 md:mt-[30vh] bg-[#F5F7F6] py-4">
          <p className="text-sm md:text-base font-medium text-gray-700">{categories}</p>
        </div>

        {/* 3. Bottom Content (Year & Description) */}
        {/* Changed top to 65vh so it stays strictly below the categories block */}
        <div className="relative md:sticky md:top-[65vh] z-10 md:mt-[40vh] flex justify-between items-start md:pr-4 bg-[#F5F7F6] py-4 mb-8 md:mb-0">
          <span className="text-sm font-medium text-gray-700 w-1/4">{year}</span>
          
          <div className="flex flex-col items-start w-3/4 md:w-auto">
            <p className="max-w-[260px] text-sm md:text-base leading-[1.3] font-medium">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* IMAGE COLUMN */}
      {/* order-first forces the image to the top on mobile. cursor-none is now applied ONLY here. */}
      <div
        className="w-full md:w-1/2 relative h-[50vh] md:h-screen md:sticky top-0 overflow-hidden order-first md:order-none md:cursor-none"
        onMouseEnter={onImageEnter}
        onMouseLeave={onImageLeave}
      >
        {/* Background Image Container */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageSrc})` }}
        >
           {/* Fallback overlay */}
           <div className="w-full h-full bg-[#0A2640] mix-blend-multiply opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

// Main Page Layout
export default function PortfolioPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  // Track global mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    // Removed global 'cursor-none' so the standard cursor works normally everywhere else
    <main className="bg-[#F5F7F6] min-h-screen relative font-sans">
      
      {/* Custom Cursor */}
      {/* Added opacity toggling based on hover state, and hidden on mobile entirely */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 hidden md:flex items-center justify-center rounded-full bg-white transition-all duration-300 ease-out will-change-transform ${
          isHoveringImage ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px) translate(-50%, -50%)`,
          mixBlendMode: 'difference',
          width: '100px',
          height: '80px',
        }}
      >
        <span className="text-black text-[10px] font-bold tracking-widest uppercase transition-opacity duration-300">
          View &rarr;
        </span>
      </div>

      {/* Section 1 */}
      <ProjectSection
        number="(01)"
        title="Club Edge"
        categories="/ Brand Identity / Web Design"
        year="(2022)"
        description="A premium golf club website designed to reflect elegance, exclusivity, and a passion for the sport."
        imageSrc="https://framerusercontent.com/images/4mFOGha5eKr7uWa9orRo17Yyw.png?width=2048&height=3072"
        reverse={false}
        onImageEnter={() => setIsHoveringImage(true)}
        onImageLeave={() => setIsHoveringImage(false)}
      />

      {/* Section 2 (Reversed) */}
      <ProjectSection
        number="(02)"
        title="Apex Minimal"
        categories="/ UX Research / App Design"
        year="(2023)"
        description="Redefining the fitness tracker experience through brutalist typography and monochromatic interfaces."
        imageSrc="https://framerusercontent.com/images/rvmqsA6uuSeb9n5kGC4m11ugTaA.png?width=2048&height=3072"
        reverse={true}
        onImageEnter={() => setIsHoveringImage(true)}
        onImageLeave={() => setIsHoveringImage(false)}
      />

      {/* Section 3 */}
      <ProjectSection
        number="(03)"
        title="Oasis Resort"
        categories="/ Art Direction / Web3"
        year="(2024)"
        description="A hospitality experience leveraging blockchain for seamless bookings and exclusive member perks."
        imageSrc="https://framerusercontent.com/images/WaEKxVML83n7CGbhZ2NZouWQ6s.png?width=1024&height=1536"
        reverse={false}
        onImageEnter={() => setIsHoveringImage(true)}
        onImageLeave={() => setIsHoveringImage(false)}
      />
        <ProjectSection
        number="(04)"
        title="Pyara"
        categories="/ Stragic Grwoth / Creative Content"
        year="(2025)"
        description="A hospitality experience leveraging blockchain for seamless bookings and exclusive member perks."
        imageSrc="https://framerusercontent.com/images/lFVQA6zz0HuBBySm0qG36iV2zA.png?width=1024&height=1536"
        reverse={true}
        onImageEnter={() => setIsHoveringImage(true)}
        onImageLeave={() => setIsHoveringImage(false)}
      />
      <div className='flex justify-center my-20'>
      <div className="group w-fit bg-black z-10 transition-transform duration-500 hover:translate-x-10 cursor-pointer">
            <button className="px-8 text-[#fffde5] py-2.5 flex justify-center items-center gap-2 group-hover:gap-3 transition-all duration-300 pointer-events-none">
              Start Project <PlusIcon size={16} className='group-hover:rotate-180 transition-all duration-300' />
            </button>
          </div>
          </div>
    </main>
  );
}