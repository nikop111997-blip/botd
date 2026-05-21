'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon } from 'lucide-react';

// Guaranteed-to-load images to avoid 404s
const images = [
  'https://picsum.photos/seed/agency1/600/800',
  'https://picsum.photos/seed/agency2/600/800',
  'https://picsum.photos/seed/agency3/600/800',
  'https://picsum.photos/seed/agency4/600/800',
  'https://picsum.photos/seed/agency5/600/800',
];

// The words to cycle through
const words = ["Wild.", "True.", "Bold.", "Free."];

export default function InteractiveHero() {
  const [trail, setTrail] = useState([]);
  const [isRed, setIsRed] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const lastMousePos = useRef({ x: 0, y: 0 });

  // Settings for the interaction
  const distanceThreshold = 50; 
  const imageLifespan = 1000; 

  // Timer to cycle through the words every 2.5 seconds
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(wordInterval);
  }, []);

  // Timer to change color to red after 3 seconds
  useEffect(() => {
    const colorTimer = setTimeout(() => {
      setIsRed(true);
    }, 3000);
    return () => clearTimeout(colorTimer);
  }, []);

  // Mouse trail logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      const dist = Math.hypot(
        clientX - lastMousePos.current.x,
        clientY - lastMousePos.current.y
      );

      if (dist > distanceThreshold) {
        const newImage = {
          id: Date.now() + Math.random(),
          x: clientX,
          y: clientY,
          src: images[Math.floor(Math.random() * images.length)],
        };

        setTrail((prev) => [...prev, newImage]);
        lastMousePos.current = { x: clientX, y: clientY };

        setTimeout(() => {
          setTrail((prev) => prev.filter((img) => img.id !== newImage.id));
        }, imageLifespan);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative w-full h-[400] sm:h-screen bg-gradient-to-b from-[#A0D0EA] to-[#f4fbff] overflow-hidden cursor-none selection:bg-black selection:text-white font-sans">
      
      {/* IMAGE TRAIL RENDERER - Set to Z-20 so it is above text but below button */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <AnimatePresence>
          {trail.map((img) => (
            <motion.img
              key={img.id}
              src={img.src}
              alt="trail"
              className="absolute w-48 md:w-40 h-36 md:h-36 object-cover shadow-2xl"
              style={{
                left: img.x,
                top: img.y,
                x: '-50%',
                y: '-50%',
              }}
              initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
              // OPEN: Very fast, snappy entrance
              animate={{ 
                opacity: 1, 
                scale: 1, 
                filter: 'blur(0px)',
                transition: { duration: 0.15, ease: 'easeOut' }
              }}
              // CLOSE: Slow, blurred exit
              exit={{ 
                opacity: 0, 
                scale: 0.8, 
                filter: 'blur(30px)',
                transition: { duration: 0.8, ease: 'easeIn' }
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* BACKGROUND TYPOGRAPHY & LAYOUT - Removed global z-index, allowing children to set their own */}
      <div className="relative flex flex-col items-center justify-center w-full h-full p-8 pointer-events-none">
        
        {/* Top Tag - Z-10 */}
        <div className="absolute top-16 md:top-48 [1110px]:top-64 z-10 text-xs md:text-sm tracking-tight uppercase text-gray-800">
          [ WE ARE BOLD AGENCY ]
        </div>

        {/* Left Tag - Z-10 */}
        <div className="absolute left-8 md:left-16 z-10 top-1/2 -translate-y-1/2 text-xs md:text-sm tracking-widest uppercase text-gray-800 hidden md:block">
          DESIGN-DRIVEN
        </div>

        {/* Right Tag - Z-10 */}
        <div className="absolute right-8 md:right-16 z-10 top-1/2 -translate-y-1/2 text-xs md:text-sm tracking-widest uppercase text-gray-800 hidden md:block">
          IMPACT-FOCUSED
        </div>

        {/* Center Main Content */}
        <div className="text-center flex flex-col items-center">
          
          {/* Main Title - Z-10 (Behind Images) */}
          <h1 className="relative z-10 text-[5rem] md:text-[12rem] font-semibold tracking-tighter leading-none text-black flex items-center justify-center">
            Be
            <span className="relative inline-flex overflow-hidden ml-3 md:ml-6 min-w-[200px] md:min-w-[400px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[wordIndex]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`transition-colors duration-700 ease-in-out ${isRed ? 'text-[#FF3333]' : 'text-black'}`}
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          {/* CTA Button - Z-30 (ABOVE Images) and pointer-events-auto so it can be clicked */}
          <button className="relative z-30 mt-8 bg-[#111] text-white px-8 py-4 text-sm font-bold tracking-wider uppercase flex items-center gap-6 hover:bg-black transition-colors pointer-events-auto cursor-pointer">
            LET'S TALK
            <PlusIcon size={16} />
          </button>
        </div>
      </div>
      
    </main>
  );
}