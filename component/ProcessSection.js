'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '(01)',
    title: 'Reach Out.',
    description:
      "Tell us what's on your mind. Big idea? Small project? We're listening.",
  },
  {
    number: '(02)',
    title: 'Research.',
    description:
      'We dig deep into your brand, audience, and competitors so every design decision is backed by insight, not guesswork.',
  },
  {
    number: '(03)',
    title: 'Create.',
    description:
      'Ideas become real here. We sketch, design, and shape everything until it feels just right.',
  },
  {
    number: '(04)',
    title: 'Launch.',
    description:
      'Your brand goes live, looking sharper than ever.',
  },
  {
    number: '(05)',
    title: 'Growth.',
    description:
      'We stick around to help you adapt, scale, and keep things fresh.',
  },
];

export default function TheProcess() {
  const listRef = useRef(null);

  // Main section progress
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 65%', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section className="bg-[#FA3824] relative overflow-hidden pt-16 md:pt-20 ">
      
      {/* Header */}
      <div className="text-center text-black text-xs md:text-sm font-semibold tracking-tighter mb-16 md:mb-24 relative z-20">
        [ THE PROCESS ]
      </div>

      <div className="max-w-7xl mx-auto relative">
        
        {/* Line wrapper */}
        <div
          ref={listRef}
          className="relative"
        >
          {/* Background line */}
          <div className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-px bg-black/20 md:-translate-x-1/2" />

          {/* Active line */}
          <motion.div
            className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-[2px] bg-black origin-top md:-translate-x-1/2"
            style={{
              scaleY: smoothProgress,
            }}
          />

          {/* Steps */}
          <div className="relative z-10">
            {steps.map((step, index) => (
              <StepItem key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'center center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

  const isRight = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className=" flex w-full pb-20 md:pb-32"
    >
      {/* MOBILE DESIGN */}
      <div className="md:hidden w-full pl-6 pr-6 relative">
        

        <motion.div
          style={{ opacity, y }}
          className="relative"
        >
          {/* Number */}
          <div className="text-black text-3xl font-bold mb-4">
            {step.number}
          </div>

          {/* Title */}
          <h3 className="text-[58px] leading-[0.95] tracking-[-0.06em] font-bold text-[#000000] mb-8 ">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-[#000000] text-lg leading-tight max-w-[300px]">
            {step.description}
          </p>
        </motion.div>
      </div>

      {/* DESKTOP DESIGN */}
      <div className="hidden md:flex w-full">
        {isRight ? (
          <>
            {/* Empty Left */}
            <div className="w-1/2" />

            {/* Right Content */}
            <div className="w-1/2 flex justify-start pl-24 lg:pl-20">
              <motion.div
                style={{ opacity, y }}
                className=" max-w-[4400px]"
              >
                {/* Number */}
                <span className="text-lg font-bold text-black">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="text-7xl font-bold leading-none tracking-[-0.06em] text-[#010101] mb-8 pl-8">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-lg leading-tight text-[#181818] pl-8">
                  {step.description}
                </p>
              </motion.div>
            </div>
          </>
        ) : (
          <>
            {/* Left Content */}
            <div className="w-1/2 flex justify-end pr-24 lg:pr-2">
              <motion.div
                style={{ opacity, y }}
                className="max-w-[440px]"
              >
                {/* Number */}
                <span className=" text-lg font-bold text-black ">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="text-7xl font-bold leading-none tracking-[-0.06em] text-[#040404] mb-8 pl-8">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-lg leading-tight text-[#000000] pl-8">
                  {step.description}
                </p>
              </motion.div>
            </div>

            {/* Empty Right */}
            <div className="w-1/2" />
          </>
        )}
      </div>
    </div>
  );
}