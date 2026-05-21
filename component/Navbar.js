'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="absolute bg-black lg:mix-blend-difference top-0 left-0 w-full flex items-center justify-between px-4 md:px-8 py-4 text-white z-50">

        {/* LOGO */}
        <div className='block sm:hidden'>
        <div className="flex items-center gap-2">
          <span className="text-lg md:text-xl font-bold tracking-tight">
            Frontpage <span className='font-normal'> misfits</span>
          </span>
        

          {/* Registered Circle */}
          <span className="flex items-center justify-center w-3 h-3 border border-white rounded-full text-[6px] leading-none font-medium mt-[-10px]">
            R
          </span>
        </div>
</div>
        {/* DESKTOP MENU */}
        <div className="hidden md:flex justify-between w-full gap-16 text-lg font-medium uppercase tracking-wider">
          <div className="flex items-center">
  <Image
    src="/log.png"
    alt="Frontpage Misfits"
    width={180}
    height={40}
    className="
      h-8 md:h-10 
      w-auto 
      invert
      object-contain 
      opacity-90
      mix-blend-difference
    "
    priority
  />
</div>
          <span className="cursor-pointer hover:opacity-70 transition">
            About
          </span>

          <span className="cursor-pointer hover:opacity-70 transition">
            Works
          </span>

          <span className="cursor-pointer hover:opacity-70 transition">
            Insights
          </span>

          <span className="cursor-pointer hover:opacity-70 transition">
            Contact
          </span>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative z-[60]"
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="fixed inset-0 bg-black text-white z-40 flex flex-col justify-center items-center"
          >

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ delay: 0.15 }}
              className="flex flex-col items-center gap-8 text-4xl font-bold tracking-tight"
            >

              <span className="cursor-pointer hover:opacity-60 transition">
                About
              </span>

              <span className="cursor-pointer hover:opacity-60 transition">
                Works
              </span>

              <span className="cursor-pointer hover:opacity-60 transition">
                Insights
              </span>

              <span className="cursor-pointer hover:opacity-60 transition">
                Contact
              </span>

            </motion.div>

            {/* Bottom Text */}
            <div className="absolute bottom-10 text-xs uppercase tracking-[0.3em] opacity-60">
              Based in NYC
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}