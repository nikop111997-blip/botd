"use client";

import React, { useEffect, useRef } from "react";
import { motion, animate } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";

// --- Animated Counter Component ---
const AnimatedNumber = ({ value }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(val) {
        node.textContent = Intl.NumberFormat("en-US").format(Math.round(val));
      },
    });

    return () => controls.stop();
  }, [value]);

  return <span ref={nodeRef}>0</span>;
};

// --- Marquee Component ---
const MarqueeBanner = () => {
  return (
    <div className="bg-[#EF3E2E] text-white text-[9px] font-bold tracking-[0.2em] py-1 flex overflow-hidden whitespace-nowrap select-none w-full absolute top-0 left-0">
      <motion.div
        className="flex shrink-0"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      >
        {/* Repeating text to create a seamless loop */}
        <div className="flex gap-2 pr-2">
          <span>POPULAR •</span>
          <span>POPULAR •</span>
          <span>POPULAR •</span>
          <span>POPULAR •</span>
          <span>POPULAR •</span>
          <span>POPULAR •</span>
          <span>POPULAR •</span>
          <span>POPULAR •</span>
        </div>
        <div className="flex gap-2 pr-2">
          <span>POPULAR •</span>
          <span>POPULAR •</span>
          <span>POPULAR •</span>
          <span>POPULAR •</span>
          <span>POPULAR •</span>
          <span>POPULAR •</span>
          <span>POPULAR •</span>
          <span>POPULAR •</span>
        </div>
      </motion.div>
    </div>
  );
};

// --- Pricing Data ---
const plans = [
  {
    name: "STARTER",
    duration: "1-2 weeks",
    price: 1999,
    desc: "Perfect for startups and solo founders.",
    features: [
      "1-3 custom-designed pages",
      "Basic branding (colors, fonts, logo usage)",
      "Mobile responsive layout",
    ],
    isPopular: false,
  },
  {
    name: "GROWTH",
    duration: "3-4 weeks",
    price: 4999,
    desc: "Built for small businesses that want to look big.",
    features: [
      "1-3 custom-designed pages",
      "Basic branding (colors, fonts, logo usage)",
      "Mobile responsive layout",
      "Simple animations",
      "Contact form integration",
    ],
    isPopular: true,
  },
  {
    name: "PRO",
    duration: "4-6 weeks",
    price: 8999,
    desc: "For teams who want it all, fast.",
    features: [
      "1-3 custom-designed pages",
      "Brand toolkit & guidelines",
      "Mobile responsive layout",
      "Sleek animations",
      "Contact form integration",
    ],
    isPopular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-gradient-to-b from-[#A0D0EA] to-[#ffffff] min-h-screen py-20 px-2 font-sans text-black overflow-hidden flex flex-col justify-center">
      
      {/* --- Header Area --- */}
      <div className="w-full mb-16 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          
          <div className="flex flex-col">
            <h2 className="text-6xl md:text-[90px] font-bold text-white leading-[0.9] tracking-tighter mb-8">
              Transparent
              <br />
              pricing
            </h2>
            {/* Custom abstract thin arrow using SVG to match design perfectly */}
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 40 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white ml-2 mt-4 sm:mt-24"
            >
              <path d="M2 38L38 38M38 38V2M38 38L2 2" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>

          <div className="max-w-xs text-white text-lg leading-tight font-medium pb-2 mr-0 sm:mr-128">
            We keep things <br />
            simple—clear packages, fast <br />
            timelines, and results that <br />
            speak for themselves.
          </div>
          
        </div>
      </div>

      {/* --- Pricing Cards Grid --- */}
      <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-3 relative">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-[#F7F9F8] flex flex-col relative pt-[10px] ${
              plan.isPopular ? "border border-[#EF3E2E]" : ""
            }`}
          >
            {/* Conditional Marquee Banner for Popular Plan */}
            {plan.isPopular && <MarqueeBanner />}

            <div className="p-8 md:p-10 flex flex-col flex-grow">
              
              {/* Card Header (Name & Duration) */}
              <div className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase mb-16 mt-2">
                <span>[ {plan.name} ]</span>
                <span className="normal-case tracking-normal font-medium text-xs text-gray-700">
                  {plan.duration}
                </span>
              </div>

              {/* Price & Description */}
              <div className="mb-8">
                <div className="text-6xl md:text-7xl font-bold tracking-tighter mb-4 flex items-baseline">
                  <span className="text-5xl md:text-6xl mr-1">$</span>
                  <AnimatedNumber value={plan.price} />
                </div>
                <p className="text-sm text-gray-500 tracking-tight">
                  {plan.desc}
                </p>
              </div>

              {/* Divider */}
              <div className="h-[1px] w-full bg-gray-200 mb-8"></div>

              {/* Features List */}
              <ul className="flex flex-col gap-3 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-[13px] font-medium tracking-tight">
                    <span className="mr-2 text-black text-lg leading-none mt-[-2px]">
                      ▪
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-5 px-6 flex items-center justify-center relative transition-colors ${
                  plan.isPopular
                    ? "bg-[#EF3E2E] hover:bg-[#d83525] text-white"
                    : "bg-[#111111] hover:bg-black text-white"
                }`}
              >
                <span className="text-xs font-bold tracking-[0.1em] uppercase z-10">
                  Let's get started !
                </span>
                <div className="absolute right-6">
                  <Plus strokeWidth={1.5} className="w-5 h-5" />
                </div>
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}