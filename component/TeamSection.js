'use client'
import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
// --- SVG Icons ---
const XIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.404Z" />
  </svg>
);

const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 17V10.5H6.16V17H8.34ZM7.25 9.56A1.27 1.27 0 1 0 7.22 7 1.27 1.27 0 0 0 7.25 9.56ZM17.84 17V13.42C17.84 11.5 16.81 10.32 15.06 10.32A2.52 2.52 0 0 0 12.79 11.57V10.5H10.61V17H12.79V13.76C12.79 12.91 13.25 12.42 13.97 12.42C14.67 12.42 15.05 12.9 15.05 13.76V17H17.84Z" />
  </svg>
);

// --- Data ---
const teamMembers = [
  {
    id: 1,
    name: "Alex Carter",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600&h=600",
    socials: ["x", "linkedin"],
    stagger: false,
  },
  {
    id: 2,
    name: "Jordan Lee",
    role: "Web Designer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600&h=600",
    socials: ["x"],
    stagger: true,
  },
  {
    id: 3,
    name: "Maya Nguyen",
    role: "Brand Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600&h=600",
    socials: ["x"],
    stagger: false,
  },
  {
    id: 4,
    name: "Sofia Martinez",
    role: "Content Strategist",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600&h=600",
    socials: ["x", "linkedin"],
    stagger: true,
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#F3F7F6] py-2 px-2 font-sans">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-4  gap-y-1 items-start ">
          
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              // The magic happens here: 100% = image height. 4.5rem = text height below it.
              className={`flex flex-col ${
                member.stagger ? 'mt-8 md:mt-[calc(100%+0.1rem)]' : ''
              }`}
            >
              {/* Image Container */}
              <div className="w-full aspect-square overflow-hidden bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover ${
                    !member.stagger ? 'grayscale hover:grayscale-0 transition-all duration-500' : ''
                  }`}
                />
              </div>

              {/* Text & Socials Footer */}
              <div className="flex justify-between items-start mt-3">
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-black tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-[11px] text-gray-600 mt-0.5">
                    {member.role}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-black">
                  {member.socials.includes("x") && (
                    <a href="#" className="hover:opacity-70 transition-opacity" aria-label="X Profile">
                      <XIcon className="w-[14px] h-[14px]" />
                    </a>
                  )}
                  {member.socials.includes("linkedin") && (
                    <a href="#" className="hover:opacity-70 transition-opacity" aria-label="LinkedIn Profile">
                      <LinkedInIcon className="w-[14px] h-[14px]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      <section className="relative w-full h-[40vh] min-h-[400px] overflow-hidden mt-16 group font-sans">
      {/* --- Background Image --- */}
      <div className="absolute inset-0 w-full h-full">
        <img
          // Using a high-quality Unsplash placeholder that matches the office vibe
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
          alt="Team collaborating in the office"
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        />
        {/* Subtle dark gradient overlay to ensure the button pops perfectly */}
        <div className="absolute inset-0 bg-black/10 transition-colors duration-[1.5s] group-hover:bg-black/20" />
      </div>

      {/* --- Centered Button Overlay --- */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#0a0a0a] text-white flex items-center gap-12 px-8 py-5 transition-colors hover:bg-black"
        >
          <span className="text-[13px] font-bold tracking-[0.15em] uppercase mt-0.5">
            About Us
          </span>
          <Plus strokeWidth={2} className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
    </section>
  );
}