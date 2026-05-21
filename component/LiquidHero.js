"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function LiquidHero() {
  const [mounted, setMounted] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth cursor physics
  const springConfig = {
    damping: 25,
    stiffness: 400,
    mass: 0.5,
  };

  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Liquid distortion
  const filterScale = useSpring(0, {
    damping: 15,
    stiffness: 150,
  });

  useEffect(() => {
    setMounted(true);

    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    let lastTime = performance.now();
    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;
    let animationFrameId;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      mouseX.set(clientX);
      mouseY.set(clientY);

      // VELOCITY FOR LIQUID EFFECT
      const now = performance.now();

      const dt = Math.max(now - lastTime, 1);

      const dx = clientX - lastX;
      const dy = clientY - lastY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      const velocity = (distance / dt) * 100;

      filterScale.set(Math.min(velocity, 120));

      lastX = clientX;
      lastY = clientY;
      lastTime = now;
    };

    // RESET DISTORTION
    const decayLoop = () => {
      if (performance.now() - lastTime > 50) {
        filterScale.set(0);
      }

      animationFrameId = requestAnimationFrame(decayLoop);
    };

    decayLoop();

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY, filterScale]);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-[#ef3322] cursor-none font-sans flex flex-col justify-start pt-0 sm:pt-8 px-2">
      
      {/* SVG FILTER */}
      <svg className="hidden" aria-hidden="true">
        <filter id="liquid-distortion">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04"
            numOctaves="3"
            result="noise"
          />

          <motion.feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={filterScale}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* CROSSHAIR LINES */}
      {mounted && (
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            filter: "url(#liquid-distortion)",
          }}
        >
          {/* HORIZONTAL LINE */}
          <motion.div
            className="absolute left-0 right-0 h-[4px] bg-[#00e5ff]"
            style={{
              top: smoothY,
              translateY: "-50%",
            }}
          />

          {/* VERTICAL LINE */}
          <motion.div
            className="absolute top-0 bottom-0 w-[4px] bg-[#00e5ff]"
            style={{
              left: smoothX,
              translateX: "-50%",
            }}
          />
        </div>
      )}

      {/* CURSOR */}
      {mounted && (
        <motion.div
          className="fixed top-0 left-0 z-[9999] pointer-events-none"
          style={{
            x: smoothX,
            y: smoothY,
          }}
        >
          {/* PERFECT CENTER ALIGNMENT */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            
            <motion.div
              className="bg-[#00e5ff] rounded-full px-6 py-2 shadow-lg"
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: hoveredItem ? 1 : 0,
                scale: hoveredItem ? 1 : 0.5,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
            >
              <span className="text-[#ef3322] font-black text-xs md:text-sm tracking-widest whitespace-nowrap uppercase">
                {hoveredItem === "vision"
                  ? "OUR PROJECTS →"
                  : "CONTACT US →"}
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* TEXT CONTENT */}
      <div className="relative z-20 flex flex-col w-full uppercase text-[#151515] text-[88px] sm:text-[7.5vw] leading-[0.85] font-black tracking-tighter">
        
        {/* TOP ROW */}
        <div className="self-start flex flex-wrap gap-x-4">
          <span>Turn.</span>

          <HoverText
            id="vision"
            setHoveredItem={setHoveredItem}
          >
            Vision.
          </HoverText>
        </div>

        {/* BOTTOM ROW */}
        <div className="self-end flex flex-wrap gap-x-4 mt-4 md:mt-8">
          <span>Into.</span>

          <HoverText
            id="reality"
            setHoveredItem={setHoveredItem}
          >
            Reality.
          </HoverText>
        </div>
      </div>
    </section>
  );
}

/* HOVER TEXT */
const HoverText = ({
  children,
  id,
  setHoveredItem,
}) => {
  return (
    <span
      className="relative inline-block cursor-none group transition-colors duration-500 hover:text-white"
      onMouseEnter={() => setHoveredItem(id)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      {/* TOP LEFT */}
      <span className="absolute -top-4 -left-4 w-8 h-8 border-t-[6px] border-l-[6px] border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* TOP RIGHT */}
      <span className="absolute -top-4 -right-4 w-8 h-8 border-t-[6px] border-r-[6px] border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* BOTTOM LEFT */}
      <span className="absolute -bottom-4 -left-4 w-8 h-8 border-b-[6px] border-l-[6px] border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* BOTTOM RIGHT */}
      <span className="absolute -bottom-4 -right-4 w-8 h-8 border-b-[6px] border-r-[6px] border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* TEXT */}
      <span className="relative z-10">
        {children}
      </span>
    </span>
  );
};