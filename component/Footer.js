import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-6 md:px-12 py-16 md:py-20 font-sans min-h-screen flex flex-col justify-between">
      
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between w-full gap-16 lg:gap-0">
        
        {/* Newsletter Signup (Left) */}
        <div className="w-full max-w-md">
          <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
            Sign up for our newsletter today.
          </h3>
          <div className="flex h-[52px]">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-[#333333] text-white px-5 flex-1 focus:outline-none placeholder:text-gray-400 text-sm md:text-base"
            />
            {/* Note: Corrected the slight 'SUBSRIBE' typo from the design to 'SUBSCRIBE' */}
            <button className="bg-white text-black px-2 sm:px-8 font-semibold text-sm tracking-wide hover:bg-gray-200 transition-colors">
              SUBSCRIBE
            </button>
          </div>
          <p className="text-[#737373] text-sm mt-4">
            No spam. Just valued update.
          </p>
        </div>

        {/* Links Grid (Right) */}
        <div className="flex flex-col sm:flex-row gap-16 md:gap-24 text-[15px] font-medium tracking-wide">
          
          {/* Column 1 */}
          <div className="flex flex-col space-y-5">
            <a href="#" className="hover:text-gray-400 transition-colors">About</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Projects</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Insights</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Contact</a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-5">
            <a href="#" className="hover:text-gray-400 transition-colors">Term of Uses</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">404</a>
          </div>

          {/* Column 3 - Socials */}
          <div className="flex flex-col space-y-5">
            <a href="#" className="flex items-center gap-1 hover:text-gray-400 transition-colors group">
              LinkedIn <ArrowUpRight size={16} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-gray-400 transition-colors group">
              X/Twitter <ArrowUpRight size={16} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-gray-400 transition-colors group">
              Instagram <ArrowUpRight size={16} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-gray-400 transition-colors group">
              Behance <ArrowUpRight size={16} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-gray-400 transition-colors group">
              Dribbble <ArrowUpRight size={16} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mt-32 w-full gap-8 lg:gap-0">
        
        {/* Credits & Logo (Bottom Left) */}
        <div className="flex flex-col">
          <p className="text-[10px] text-[#737373] uppercase tracking-widest mb-1">
            MADE BY
          </p>
          <p className="text-base font-medium mb-1">
            Brand Hubble
          </p>
          
          {/* Custom BOLD Logo with the strikethrough 'O' */}
          <div className="text-[2rem] md:text-[7rem] font-black tracking-tighter leading-[0.8] flex items-center mt-2 select-none">
            Frontpage
            <span className="relative flex items-center justify-center mx-1">
              misfits
            </span>
            <span className="text-xl md:text-2xl align-top self-start mt-2 ml-1 font-normal">®</span>
          </div>
        </div>

        {/* Copyright (Bottom Center) */}
        <div className="order-last lg:order-none w-full lg:w-auto text-center lg:text-left pt-4 lg:pt-0 lg:pb-3">
          <p className="text-xs text-[#737373]">
            2025 © Brandhubble. All rights reserved.
          </p>
        </div>


      </div>
    </footer>
  );
};

export default Footer;