'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Navbar from './Navbar';
import { PlusIcon } from 'lucide-react';

const IMAGES = [
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1552168324-d612d77725e3?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1517462964-21fdce36acaa?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1600"
];

const GREETINGS = ["Hello!", "Bonjour!", "Hola!", "Ciao!", "Namaste!"];

export default function BeBoldHero() {
  const containerRef = useRef(null);
  
  // --- 1. Animation Sequence States ---
  const [activeIndex, setActiveIndex] = useState(-1);
  const [phase, setPhase] = useState('paused');

  useEffect(() => {
    let timeout;
    if (phase === 'opening') {
      timeout = setTimeout(() => {
        if (activeIndex >= IMAGES.length - 1) {
          setPhase('closing');
        } else {
          setActiveIndex((prev) => prev + 1);
        }
      }, 350);
    } else if (phase === 'closing') {
      timeout = setTimeout(() => {
        if (activeIndex <= 0) {
          setActiveIndex(-1);
          setPhase('paused');
        } else {
          setActiveIndex((prev) => prev - 1);
        }
      }, 350);
    } else if (phase === 'paused') {
      timeout = setTimeout(() => {
        setPhase('opening');
        setActiveIndex(0); 
      }, 350); 
    }
    return () => clearTimeout(timeout);
  }, [phase, activeIndex]);

  // --- 2. Desktop Scroll-to-Expand Logic ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const expandEnd = 0.8;
  const textStart = 0.8;
  const textEnd = 0.95;

  const width = useTransform(scrollYProgress, [0, expandEnd], ['25vw', '100vw']);
  const height = useTransform(scrollYProgress, [0, expandEnd], ['30vh', '100vh']);
  const left = useTransform(scrollYProgress, [0, expandEnd], ['2vw', '0vw']);
  const bottom = useTransform(scrollYProgress, [0, expandEnd], ['2vh', '0vh']);
  const innerLeft = useTransform(scrollYProgress, [0, expandEnd], ['-2vw', '0vw']);
  const innerBottom = useTransform(scrollYProgress, [0, expandEnd], ['-2vh', '0vh']);
  
  // UPDATED: Text is locked off-screen (100vh) and hidden (opacity 0) from 0 to 0.8
  // At 0.8, it animates to its final position (0vh) and becomes visible (opacity 1)
  const textY = useTransform(scrollYProgress, [0, textStart, textEnd], ['100vh', '100vh', '0vh']);
  const textOpacity = useTransform(scrollYProgress, [0, textStart, textEnd], [0, 1.5, 1.5]);

  // --- 3. Metallic Cursor Integration States ---
  const [isMousePresent, setIsMousePresent] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 25, stiffness: 700 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 700 });

  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Mouse Tracking Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 2); 
      mouseY.set(e.clientY - 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Typing Effect Loop
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % GREETINGS.length;
      const fullText = GREETINGS[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1200);
        setTypingSpeed(50);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    if (isMousePresent) {
      const timer = setTimeout(handleTyping, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [text, isDeleting, loopNum, typingSpeed, isMousePresent]);

  return (
    <main 
      onMouseEnter={() => setIsMousePresent(true)}
      onMouseLeave={() => setIsMousePresent(false)}
      className="bg-neutral-900 font-sans w-full relative md:cursor-none"
    >
      
      {/* ==================================================== */}
      {/* --- MOBILE ONLY UI --- */}
      {/* ==================================================== */}
      <div className="md:hidden relative w-full">
        <div className="sticky top-0 h-[100dvh] w-full bg-gradient-to-b from-[#95c6ed] to-[#eef8ff] flex flex-col pt-20 px-4 overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full z-50">
            <Navbar />
          </div>
          <h1 className="text-[12.3vw] sm:text-[13vw] leading-none text-[#f5311b] tracking-tighter flex items-start justify-center gap-2">
            <span className="font-bold">Frontpage</span>
            <span>misfits</span>
            <span className="mt-[1.5vw] flex items-center justify-center w-[18] h-[18] px-2 sm:w-[1.5vw] sm:h-[1.5vw] border border-[#f5311b] rounded-full text-[6px] sm:text-[0.7vw] leading-none font-medium">
              R
            </span>
          </h1>
          <div className="mt-[14vh] z-10">
            <h2 className="text-black text-4xl font-semibold tracking-tighter leading-[0.95]">
              We turn emerging brands into names people recognize.
            </h2>
          </div>
          <div className="mt-18 z-10">
            <p className="text-gray-950 text-lg text-center font-medium tracking-tight leading-snug">
              We work at the intersection of PR, culture, and visual identity — building brands that earn attention organically and stay relevant digitally.
            </p>
          </div>
          <div className="absolute bottom-6 left-4 right-4 max-w-[280px] bg-[#111] text-white flex items-center justify-between px-6 py-4 cursor-pointer shadow-xl z-30">
             <span className="font-bold tracking-tight text-sm">START A PROJECT</span>
             <PlusIcon size={20} className="text-white" />
          </div>
        </div>

        <div className="relative h-[100dvh] w-full bg-black overflow-hidden flex items-center justify-center z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          {IMAGES.map((src, i) => {
            const isActive = i === activeIndex;
            const isBehind = i < activeIndex;
            let scaleTarget = isActive ? 1 : (isBehind ? (phase === 'opening' ? 1.08 : 1) : 0);
            let opacityTarget = isActive || isBehind ? 1 : 0;

            return (
              <motion.img
                key={`mobile-img-${i}`}
                src={src}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: scaleTarget, opacity: opacityTarget }}
                transition={{
                  opacity: { duration: 0.25, ease: "easeOut" },
                  scale: isBehind ? { duration: 1.5, ease: "easeOut" } : { duration: 0.4, type: "spring", bounce: 0.1 } 
                }}
                style={{ zIndex: i }}
                className="absolute inset-0 h-full w-full object-cover will-change-transform origin-center"
                alt={`Showreel frame ${i + 1}`}
                suppressHydrationWarning
              />
            );
          })}
          <div className="absolute inset-0 z-50 flex flex-col justify-center items-start px-6 mix-blend-difference pointer-events-auto">
            <h2 className="text-white text-4xl font-bold tracking-tighter leading-[0.9]">
              Not just visibility. Cultural presence.
            </h2>
            <button className="mt-8 flex items-center justify-between gap-8 border border-white px-6 py-2 text-white text-xs font-semibold tracking-widest uppercase active:bg-white active:text-black transition-colors duration-300">
              Showreel<span className="text-lg leading-none pb-1">+</span>
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================== */}
      {/* --- DESKTOP ONLY UI --- */}
      {/* ==================================================== */}
      <div ref={containerRef} className="hidden md:block relative h-[1100vh]">
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#95c6ed] to-[#eef8ff]">
          <Navbar />
          <div className="absolute top-16 lg:top-8 w-full text-center z-0 select-none pointer-events-none">
            <h1 className="text-[12.5vw] sm:text-[13vw] leading-none text-[#f5311b] tracking-tighter flex items-start justify-center gap-2">
              <span className="font-bold">Frontpage</span>
              <span>misfits</span>
              <span className="mt-[1.5vw] flex items-center px-2.5 w-[14] h-[14] sm:w-[1.5vw] sm:h-[1.5vw] border border-[#f5311b] rounded-full text-[6px] sm:text-[0.7vw] leading-none font-medium">R</span>
            </h1>
          </div>
          <div className="absolute top-[47%] px-4 md:px-0 text-center lg:text-left lg:top-[45%] left-[1%] max-w-md text-zinc-900 z-10 pointer-events-none">
            <p className="text-lg lg:text-xl font-medium tracking-tight">We work at the intersection of PR, culture, and visual identity — building brands that earn attention organically and stay relevant digitally.</p>
          </div>
          <div className="absolute top-[25%] lg:top-[45%] right-[35%] md:right-[8%] text-black z-10 pointer-events-none">
            <h2 className="text-3xl md:text-5xl font-semibold uppercase leading-tight tracking-tighter">We turn emerging brands <br/>into names people recognize.</h2>
          </div>
          <div className="group absolute top-[65%] lg:top-[93%] right-[43%] bg-black z-10 transition-transform duration-500 hover:translate-x-10 cursor-pointer">
            <button className="px-8 text-[#fffde5] py-2.5 flex justify-center items-center gap-2 group-hover:gap-3 transition-all duration-300 pointer-events-none">
              Start Project <PlusIcon size={16} className='group-hover:rotate-180 transition-all duration-300' />
            </button>
          </div>
          <div className="group absolute top-[5%] lg:top-[65%] left-[1%] text-xs font-semibold px-4 z-10 transition-transform duration-500 hover:translate-x-10">
            [ Showreel ]
          </div>
          <div className="group absolute top-[5%] lg:top-[96%] left-[27%] text-xs font-semibold px-4 z-10 transition-transform duration-500 hover:translate-x-10">
            [ Scroll Down ]
          </div>
          
          <motion.div
            style={{ width, height, left, bottom }}
            className="absolute overflow-hidden shadow-2xl z-30 bg-black flex items-center justify-center pointer-events-none"
          >
            {IMAGES.map((src, i) => {
              const isActive = i === activeIndex;
              const isBehind = i < activeIndex;
              let scaleTarget = isActive ? 1 : (isBehind ? (phase === 'opening' ? 1.08 : 1) : 0);
              let opacityTarget = isActive || isBehind ? 1 : 0;

              return (
                <motion.img
                  key={`desktop-img-${i}`}
                  src={src}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: scaleTarget, opacity: opacityTarget }}
                  transition={{
                    opacity: { duration: 0.25, ease: "easeOut" },
                    scale: isBehind ? { duration: 1.5, ease: "easeOut" } : { duration: 0.4, type: "spring", bounce: 0.1 } 
                  }}
                  style={{ zIndex: i }}
                  className="absolute inset-0 h-full w-full object-contain will-change-transform origin-center"
                  alt={`Showreel frame ${i + 1}`}
                  suppressHydrationWarning
                />
              );
            })}
            
            <motion.div 
              style={{ width: '100vw', height: '100vh', left: innerLeft, bottom: innerBottom }}
              className="absolute pointer-events-none z-50"
            >
              <motion.div 
                style={{ y: textY, opacity: textOpacity }}
                className="absolute right-[10%] top-[35%] flex flex-col items-start mix-blend-difference pointer-events-auto"
              >
                <h2 className="text-white text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
                  Not just visibility. <br />Cultural presence.
                </h2>
                <button className="mt-8 flex items-center justify-between gap-8 border border-white px-6 py-2 text-white text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300">
                  Showreel<span className="text-lg leading-none pb-1">+</span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ==================================================== */}
      {/* --- CUSTOM IMAGE-MATCHED CURSOR (Desktop Only) --- */}
      {/* ==================================================== */}
      <motion.div
  style={{
    x: springX,
    y: springY,
  }}
  animate={{
    opacity: isMousePresent ? 1 : 0,
    scale: isMousePresent ? 1 : 0.8,
  }}
  transition={{
    duration: 0.18,
    ease: "easeOut",
  }}
  className="hidden md:flex fixed top-0 left-0 pointer-events-none z-[9999]"
>
  {/* Cursor Wrapper */}
  <div className="relative flex items-start">

 <svg
  width="30"
  height="38"
  viewBox="0 0 30 38"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="relative z-20"
  style={{
    filter: `
      drop-shadow(0px 1px 0px rgba(255,255,255,0.8))
      drop-shadow(0px 4px 8px rgba(0,0,0,0.45))
      drop-shadow(0px 12px 18px rgba(0,0,0,0.18))
    `,
  }}
>
  <defs>
    {/* Main metallic body */}
    <linearGradient
      id="cursorMain"
      x1="0%"
      y1="0%"
      x2="100%"
      y2="100%"
    >
      <stop offset="0%" stopColor="#ffffff" />
      <stop offset="18%" stopColor="#f5f5f5" />
      <stop offset="40%" stopColor="#d6d6d6" />
      <stop offset="65%" stopColor="#9c9c9c" />
      <stop offset="100%" stopColor="#5a5a5a" />
    </linearGradient>

    {/* Dark inside depth */}
    <linearGradient
      id="innerShadow"
      x1="0%"
      y1="0%"
      x2="100%"
      y2="100%"
    >
      <stop offset="0%" stopColor="#00000000" />
      <stop offset="100%" stopColor="#00000055" />
    </linearGradient>

    {/* Reflection shine */}
    <linearGradient
      id="glassReflection"
      x1="0%"
      y1="0%"
      x2="0%"
      y2="100%"
    >
      <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
      <stop offset="30%" stopColor="rgba(255,255,255,0.35)" />
      <stop offset="100%" stopColor="rgba(255,255,255,0)" />
    </linearGradient>

    {/* Border metallic */}
    <linearGradient
      id="metalStroke"
      x1="0%"
      y1="0%"
      x2="100%"
      y2="100%"
    >
      <stop offset="0%" stopColor="#ffffff" />
      <stop offset="100%" stopColor="#2d2d2d" />
    </linearGradient>
  </defs>

  {/* Base depth shadow */}
  <path
    d="M5 4L23 20L15 22.5L19 31L14 33L10 24.5L5 29V4Z"
    fill="#000000"
    opacity="0.22"
    transform="translate(1.5 1.8)"
    blur="3"
  />

  {/* Main body */}
  <path
    d="M4 3L22 20L14 22.5L18 31L13 33L9 24.5L4 29V3Z"
    fill="url(#cursorMain)"
    stroke="url(#metalStroke)"
    strokeWidth="1.3"
    strokeLinejoin="round"
  />

  {/* Inner dark bevel */}
  <path
    d="M7 8L18 19L13.5 20.5L16.5 27L13 28.5L10 22L7 24.5V8Z"
    fill="url(#innerShadow)"
    opacity="0.9"
  />

  {/* Gloss reflection */}
  <path
    d="M6 5L17 16"
    stroke="url(#glassReflection)"
    strokeWidth="2.2"
    strokeLinecap="round"
    opacity="0.95"
  />

  {/* Small sharp edge reflection */}
  <path
    d="M10 23L13 30"
    stroke="rgba(255,255,255,0.6)"
    strokeWidth="1"
    strokeLinecap="round"
  />
</svg>

    {/* Floating Label */}
    <div
      className="
        ml-2 mt-3
        bg-[#0f0f0f]
        border border-white/10
        rounded-[12px]
        px-3 py-[7px]
        shadow-[0_10px_30px_rgba(0,0,0,0.35)]
        backdrop-blur-md
      "
    >
      <span className="text-white text-[11px] font-medium tracking-tight whitespace-nowrap flex items-center">
        {text}
        <span className="ml-[3px] opacity-70 animate-pulse">
          |
        </span>
      </span>
    </div>
  </div>
</motion.div>

    </main>
  );
}