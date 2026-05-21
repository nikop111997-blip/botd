"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Twitter = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.404Z" />
  </svg>
);

const Linkedin = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 17V10.5H6.16V17H8.34ZM7.25 9.56A1.27 1.27 0 1 0 7.22 7 1.27 1.27 0 0 0 7.25 9.56ZM17.84 17V13.42C17.84 11.5 16.81 10.32 15.06 10.32A2.52 2.52 0 0 0 12.79 11.57V10.5H10.61V17H12.79V13.76C12.79 12.91 13.25 12.42 13.97 12.42C14.67 12.42 15.05 12.9 15.05 13.76V17H17.84Z" />
  </svg>
);

const testimonials = [
  {
    id: 1,
    quote:
      "Bold Studio didn't just give us a website, they gave us confidence. Our brand finally feels like us, and our customers noticed right away.",
    author: "Jenna K.",
    role: "CEO · BrightPath",
    avatar: "https://i.pravatar.cc/150?img=1",
    socials: ["x", "linkedin"],
  },
  {
    id: 2,
    quote:
      "The team moves fast but never cuts corners. Every detail felt intentional, and the final result blew us away.",
    author: "Daniel R.",
    role: "Founder · FintechLabs",
    avatar: "https://i.pravatar.cc/150?img=11",
    socials: ["linkedin"],
  },
  {
    id: 3,
    quote:
      "Working with BOLD was actually fun. No jargon, no stress — just clear communication and a killer outcome.",
    author: "Maria G.",
    role: "Marketing Lead · Flowly",
    avatar: "https://i.pravatar.cc/150?img=5",
    socials: ["x", "linkedin"],
  },
  {
    id: 4,
    quote:
      "Their attention to the micro-interactions transformed our entire user journey. Absolutely top-tier work.",
    author: "Alex D.",
    role: "Product Head · Innovate",
    avatar: "https://i.pravatar.cc/150?img=8",
    socials: ["x"],
  },
];

// DUPLICATE FOR LOOP
const duplicatedTestimonials = [
  ...testimonials,
  ...testimonials,
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-2 overflow-hidden font-sans">
      
      {/* TOP SECTION */}
      <div className="max-w-xl mx-auto text-center mb-20 flex flex-col items-center">
        
        <span className="text-xs font-semibold tracking-tighter text-neutral-50 mb-8 uppercase">
          [ Hear from our clients ]
        </span>

        <Quote className="w-12 h-12 text-neutral-600 mb-6 fill-current opacity-50" />

        <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-8">
          Working with Bold Studio was a game-changer. They turned our messy
          ideas into a brand we're actually proud of.
        </h2>

        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/150?img=33"
            alt="Mike B."
            className="w-12 h-12 rounded-full object-cover grayscale"
          />

          <div className="text-left">
            <p className="font-semibold text-sm">Mike B.</p>

            <p className="text-xs text-neutral-400">
              Founder · StartupCo
            </p>
          </div>

          <div className="flex items-center gap-2 ml-4 text-neutral-400">
            <Twitter className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />

            <Linkedin className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>
      </div>

      {/* SLIDER */}
      <div className="relative overflow-hidden">
        
        <motion.div
          className="flex gap-3"
          animate={{
            x: `calc(-${currentIndex * 33.333}% - ${
              currentIndex * 1.5
            }rem)`,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          onAnimationComplete={() => {
            // RESET FOR INFINITE LOOP
            if (currentIndex >= testimonials.length) {
              setCurrentIndex(0);
            }
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full md:min-w-[calc(33.333%-1rem)] bg-[#1a1a1a] p-8 md:p-10 flex flex-col justify-between min-h-[550px]"
            >
              <div>
                <Quote className="w-10 h-10 text-neutral-700 mb-6 fill-current opacity-50" />

                <p className="text-lg leading-relaxed text-neutral-200 font-medium">
                  {testimonial.quote}
                </p>
              </div>

              <div className="flex items-center justify-between mt-8">
                
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full object-cover grayscale"
                  />

                  <div>
                    <p className="font-semibold text-sm">
                      {testimonial.author}
                    </p>

                    <p className="text-xs text-neutral-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-neutral-400">
                  
                  {testimonial.socials.includes("x") && (
                    <Twitter className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                  )}

                  {testimonial.socials.includes("linkedin") && (
                    <Linkedin className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* NAVIGATION */}
        <div className="flex justify-center items-center gap-4 mt-12">
          
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-neutral-400 hover:text-white transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-neutral-400 hover:text-white transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}