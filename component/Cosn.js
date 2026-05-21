"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row  font-sans">
      
      {/* Left Column */}
      <div className="w-full md:w-1/2 flex flex-col ">
        
        {/* Top Marquee Banner */}
        <div className="bg-black text-white py-3 overflow-hidden flex whitespace-nowrap">
          <motion.div 
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          >
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-sm font-medium tracking-wide">
                and let's discuss your next project. Contact us today for a free consultation.
              </span>
            ))}
          </motion.div>
        </div>

        {/* Contact Details */}
        <div className="flex-1 bg-gradient-to-b from-[#c0e4f6] to-white p-8 md:p-12 flex flex-col justify-center space-y-4 ">
          <a 
            href="tel:1234567890" 
            className="group flex items-start text-xl md:text-2xl font-medium text-black w-fit hover:opacity-70 transition-opacity"
          >
            P: (123) 456 7890 
            <ArrowUpRight size={16} strokeWidth={2} className="ml-1 mt-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <a 
            href="mailto:hello@bold.agency" 
            className="group flex items-start text-xl md:text-2xl font-medium text-black w-fit hover:opacity-70 transition-opacity"
          >
            M: hello@bold.agency
            <ArrowUpRight size={16} strokeWidth={2} className="ml-1 mt-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>

      {/* Right Column - The Hover Reveal */}
      <div className="w-full md:w-1/2 relative group cursor-pointer overflow-hidden bg-white  flex items-center justify-center">
        
        {/* Striped Background (Expands in place on hover) */}
        <div className="absolute inset-0 flex flex-col">
          {[...Array(7)].map((_, i) => (
            <div 
              key={i} 
              // Alternates between black expanding rows and transparent rows
              className={`flex-1 ${
                i % 2 === 0 
                  ? 'bg-black origin-center transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]' 
                  : 'bg-black opacity-0 group-hover:opacity-100'
              }`} 
            />
          ))}
        </div>

        {/* Difference Text Overlay */}
        <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none mix-blend-difference">
          <h2 className="text-white text-6xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter uppercase whitespace-nowrap leading-none">
            Let's Talk
          </h2>
        </div>

        {/* Top Right Corner Arrow */}
        <div className="absolute top-6 right-6 z-20 mix-blend-difference text-white">
          <ArrowUpRight size={40} strokeWidth={1.5} className="transform group-hover:rotate-45 transition-transform duration-500 ease-out" />
        </div>

      </div>

    </section>
  );
};

export default ContactSection;