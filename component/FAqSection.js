"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// --- Custom Sharp Arrow SVG to match the design perfectly ---
const SharpArrow = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.2"
  >
    <path d="M6 6h12v12M18 6L6 18" />
  </svg>
);

const faqs = [
  "How long does a typical project take from start to finish?",
  "Do you only work with startups?",
  "What if I need something outside your packages?",
  "Do you offer ongoing support?",
  "Why should I choose Bold Studio?",
];

// --- Individual FAQ Row with Interactive Arrow ---
const FaqRow = ({ question, isLast }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group flex items-center justify-between py-8 cursor-pointer transition-colors ${
        isLast ? "border-none" : "border-b border-neutral-800"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-lg text-white font-medium tracking-tight group-hover:text-neutral-300 transition-colors">
        {question}
      </h3>

      {/* --- Animated Arrow Container --- */}
      <div className="relative w-6 h-6 overflow-hidden flex-shrink-0">
        
        {/* Arrow flying OUT (Top Right) */}
        <motion.div
          initial={false}
          animate={{
            x: isHovered ? 24 : 0,
            y: isHovered ? -24 : 0,
            scale: isHovered ? 0.5 : 1,
            opacity: isHovered ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }} // Smooth snappy easing
          className="absolute inset-0"
        >
          <SharpArrow className="w-full h-full text-white" />
        </motion.div>

        {/* Arrow flying IN (From Bottom Left) */}
        <motion.div
          initial={false}
          animate={{
            x: isHovered ? 0 : -24,
            y: isHovered ? 0 : 24,
            scale: isHovered ? 1 : 0.5,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
          className="absolute inset-0"
        >
          <SharpArrow className="w-full h-full text-white" />
        </motion.div>

      </div>
    </div>
  );
};

export default function FAQSection() {
  return (
    <section className="bg-[#0a0a0a]  py-24 px-2 font-sans text-white flex justify-center">
      <div className=" w-full flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* --- Left Column: Sticky Headers --- */}
        <div className="w-full md:w-2/3 flex flex-col justify-between">
          <div className="sticky top-24">
            <h2 className="text-7xl md:text-[100px] font-medium tracking-tighter leading-none mb-12 md:mb-0">
              FAQ
            </h2>
          </div>
          
          <div className="mt-12 md:mt-0">
            <p className="text-xl md:text-2xl font-medium tracking-tight leading-tight max-w-[480px]">
              Answers to the stuff people usually ask and space to ask your own.
            </p>
          </div>
        </div>

        {/* --- Right Column: FAQ List --- */}
        <div className="w-full md:w-2/3 border-t border-neutral-800 md:border-none">
          {faqs.map((q, index) => (
            <FaqRow 
              key={index} 
              question={q} 
              isLast={index === faqs.length - 1} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}