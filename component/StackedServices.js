import React from 'react';
import Image from 'next/image'; // Import if you are using next/image

export default function ServicesAccordion() {
  const services = [
    {
      id: 'brand-identity',
      title: '/ Brand Identity',
      description: "Logos, colors, and brand vibes that stick in people's heads.",
      tags: ['Logo Design', 'Design System', 'Brand Guidelines', 'Messaging & Tone'],
      // Replace with your actual image paths
      imageBg: 'https://framerusercontent.com/images/rFeDqb4Oo3xSfgYVyWBi6hwSkeg.png?scale-down-to=1024&width=2698&height=2698', 
    },
    {
      id: 'web-design',
      title: '/ Web Design',
      description: "Websites that are smooth, fast, and built to impress.",
      tags: ['Custom Landing Pages', 'Responsive Layouts', 'Animations & Interactions', 'Conversion-Driven Design'],
      imageBg: 'https://framerusercontent.com/images/L9tuuhXzfYDIqXfIaFjgaxjf50k.jpg?scale-down-to=1024&width=1600&height=1200', 
    },
    {
      id: 'creative-content',
      title: '/ Creative Content',
      description: "Visuals, campaigns, and social assets that get noticed.",
      tags: ['Social Media Design', 'Ad Campaign Graphics', 'Illustrations & Icons', 'Visual Direction'],
      imageBg: 'https://framerusercontent.com/images/TnvoXiqRfOGPmcw0GMzMJFXeUU.png?scale-down-to=1024&width=3000&height=3000', 
    },
    {
      id: 'strategy-growth',
      title: '/ Strategy & Growth',
      description: "Data-driven roadmaps to scale your digital presence.",
      tags: ['SEO Optimization', 'Performance Audits', 'Market Analysis', 'Growth Roadmaps'],
      imageBg: 'https://framerusercontent.com/images/MKUDRig6cUUuP28VcuywPr4s.png?scale-down-to=1024&width=3200&height=2048', 
    }
  ];

  return (
    // The main container needs a dark background to match the aesthetic
    <div className="relative w-full bg-[#0b0b0b] pb-24">
      {services.map((service, index) => (
        <section
          key={service.id}
          // The border-t creates a crisp line when the sections overlap
          className="sticky w-full h-screen overflow-hidden bg-[#0b0b0b] border-t border-[#1f1f1f]"
          style={{
            // This is the magic. Each section sticks slightly lower than the last one.
            // 6rem (96px) leaves exactly enough room for the heading above it to stay visible.
            top: `calc(${index} * 6rem)`, 
          }}
        >
          <div className="px-2 grid grid-cols-1 lg:grid-cols-2 gap-12 h-full pt-8">
            
            {/* Left Content Column */}
            <div className="flex flex-col h-full pb-32">
              {/* Heading sits at the top so it remains visible when the next section overlaps */}
              <h2 className="text-5xl md:text-[4.5rem] font-bold tracking-tighter text-white leading-none">
                {service.title}
              </h2>

              {/* Description and tags are pushed toward the middle/bottom of the available space */}
              <div className="my-auto pt-12">
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-sm leading-snug">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <div 
                      key={tag} 
                      className="flex items-center gap-2 bg-[#1a1a1a] px-3 py-1.5"
                    >
                      {/* The lime green square dot */}
                      <div className="w-1.5 h-1.5 bg-[#a3e635]"></div>
                      <span className="text-sm text-gray-300 font-medium tracking-wide">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="hidden lg:flex h-full items-center justify-center pb-32">
              <div className={`w-full aspect-[4/3] relative overflow-hidden shadow-2xl`}>
            
                  <Image src={service.imageBg} alt={service.title} fill className="object-cover" />
                  
              </div>
            </div>

          </div>
        </section>
      ))}
    </div>
  );
}