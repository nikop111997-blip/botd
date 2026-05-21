'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ProcessStep({ step, isRight }) {
  const ref = useRef(null);

  // Tracks the progress of this specific element entering the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '0.5 1'], // Animation starts when element enters bottom, finishes halfway up
  });

  // Maps scroll progress to opacity and vertical slide
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <div ref={ref} className="relative w-full py-16 md:py-24">
      {/* Flex container pushes content left or right depending on the prop */}
      <div className={`flex w-full ${isRight ? 'md:justify-end' : 'md:justify-start'}`}>
        
        <motion.div
          className={`w-full md:w-1/2 max-w-lg ${
            isRight ? 'md:pl-16 lg:pl-24' : 'md:pr-16 lg:pr-24'
          }`}
          style={{ opacity: textOpacity, y: textY }}
        >
          <div className="relative">
            {/* Number element positioned absolutely to the left of the title */}
            <span className="absolute -left-12 top-3 text-sm md:text-base font-medium text-white/50">
              {step.number}
            </span>
            
            <h3 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              {step.title}
            </h3>
          </div>
          
          <p className="text-lg text-white/80 leading-relaxed max-w-sm">
            {step.description}
          </p>
        </motion.div>
        
      </div>
    </div>
  );
}