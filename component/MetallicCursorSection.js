'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const GREETINGS = ["Hello", "Bonjour", "Hola", "Ciao", "Namaste"];

export default function MetallicCursorSection() {
  // 1. Mouse Tracking State
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the cursor movement
  const springX = useSpring(mouseX, { damping: 25, stiffness: 700 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 700 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset by half the estimated width/height to center the cursor
      mouseX.set(e.clientX - 40); 
      mouseY.set(e.clientY - 20);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // 2. Typing Effect Logic
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % GREETINGS.length;
      const fullText = GREETINGS[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      // Typing speed logic
      if (!isDeleting && text === fullText) {
        // Pause at the end of the word before deleting
        setTimeout(() => setIsDeleting(true), 1200);
        setTypingSpeed(50); // Faster delete speed
      } else if (isDeleting && text === '') {
        // Move to next word when fully deleted
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150); // Normal typing speed
      }
    };

    // Only run the typing effect if the section is being hovered
    if (isHovered) {
      const timer = setTimeout(handleTyping, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [text, isDeleting, loopNum, typingSpeed, isHovered]);

  return (
    <div className="relative min-h-screen bg-neutral-900 flex flex-col items-center justify-center font-sans">
      
      {/* THE HOVER SECTION 
        Notice 'cursor-none' — this hides the default browser mouse 
      */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full max-w-4xl h-[60vh] border border-neutral-700 bg-neutral-800 rounded-2xl flex items-center justify-center cursor-none overflow-hidden"
      >
        <h2 className="text-neutral-400 text-2xl tracking-widest uppercase">
          Hover over this area
        </h2>
      </div>

      {/* THE CUSTOM CURSOR
        This is conditionally rendered and styled to look metallic
      */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          // The CSS gradient creates the metallic shine
          background: "linear-gradient(135deg, #fdfdfd 0%, #a4a4a4 25%, #e6e6e6 50%, #8b8b8b 75%, #fdfdfd 100%)",
          boxShadow: "inset 0 1px 2px rgba(255,255,255,0.8), inset 0 -2px 4px rgba(0,0,0,0.3), 0 10px 15px -3px rgba(0,0,0,0.5)"
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.5,
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center px-4 py-2 rounded-full min-w-[80px]"
      >
        <span className="text-black font-bold text-sm tracking-wide min-w-[60px] text-center">
          {text}
          {/* Blinking cursor line */}
          <span className="animate-pulse ml-0.5 opacity-70">|</span>
        </span>
      </motion.div>

    </div>
  );
}