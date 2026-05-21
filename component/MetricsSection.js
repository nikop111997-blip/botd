'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

// Reusable Animated Counter Component
const AnimatedCounter = ({ value, prefix = "", suffix = "" }) => {
  const ref = useRef(null);
  // Trigger animation when the component comes into view
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration: 2, // 2 second animation
        ease: [0.22, 1, 0.36, 1], // Smooth ease-out
      });
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref} className="inline-flex">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export default function MetricsSection() {
  return (
    // Background matches the light blue to white gradient
    <section className="w-full flex items-center justify-center bg-gradient-to-b from-[#f1fbff] to-[#ffffff] py-20 px-4 font-sans">
      
      {/* Grid container for the cards. 
        items-center ensures the middle card naturally extends higher/lower if we give it a larger height.
      */}
      <div className=" w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
        
        {/* CARD 1 */}
        <div className="bg-white h-[380px] p-10 flex flex-col justify-between ">
          <div>
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-black mb-2">
              <AnimatedCounter value={100} prefix="+ " suffix="K" />
            </h2>
            <p className="text-lg text-black font-medium tracking-tight">
              Increase in Value
            </p>
          </div>
          
          <p className="text-[#666666] text-sm leading-relaxed max-w-[220px]">
            Because bold design doesn't just look good—it builds real business worth.
          </p>
        </div>

        {/* CARD 2 (Taller, prominent middle card) */}
        <div className="bg-white h-[460px] p-10 flex flex-col justify-between  relative z-10">
          <div>
            <h2 className="text-7xl md:text-8xl font-bold tracking-tighter text-black mb-2">
              <AnimatedCounter value={120} suffix="%" />
            </h2>
            <p className="text-lg text-black font-medium tracking-tight">
              Increase in Engagement
            </p>
          </div>
          
          <p className="text-[#666666] text-sm leading-relaxed max-w-[240px]">
            When design is playful, scroll-stopping, and human, people can't help but interact.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white h-[380px] p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-black mb-2">
              <AnimatedCounter value={6} suffix="X" />
            </h2>
            <p className="text-lg text-black font-medium tracking-tight">
              Return on Investment
            </p>
          </div>
          
          <p className="text-[#666666] text-sm leading-relaxed max-w-[220px]">
            Smart design drives smart growth—and the numbers always back it up.
          </p>
        </div>

      </div>
    </section>
  );
}