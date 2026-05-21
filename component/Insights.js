import React from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';

const Insights = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-20 px-2 font-sans">
      <div className="">
        {/* Section Heading */}
        <h2 className="text-6xl md:text-[5.5rem] font-bold tracking-tighter text-black mb-16">
          Insights
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
          
          {/* Featured Article (Spans Full Width on Desktop) */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 group cursor-pointer border-b border-transparent pb-4">
            {/* Image Container */}
            <div className="relative aspect-[4/3] md:aspect-[20/9] w-full overflow-hidden bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1618042164219-62c820f10723?q=80&w=2000&auto=format&fit=crop"
                alt="Globe in hand"
                className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
            
            {/* Content Container */}
            <div className="flex flex-col justify-between relative py-4 pr-8">
                <div>
              <span className="text-xs font-medium text-gray-500 mb-4 tracking-wide uppercase">
                Sep 11, 2025
              </span>
              <h3 className="text-4xl md:text-4xl font-semibold tracking-tight text-black mb-6 leading-[1.1]">
                Bold Studio Wins "Agency Portfolio of the Year" Award
              </h3>
              </div>
              <div>
              <p className="text-gray-950 text-base md:text-lg max-w-sm leading-snug">
                Recognized by the International Creative Awards, Bold Studio sets a new benchmark for agency portfolios that balance design innovation with storytelling clarity.
              </p>
              
              {/* Corner Arrow */}
              <div className="absolute bottom-4 right-0 text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={24} strokeWidth={1.5} />
              </div>
              </div>
            </div>
          </div>

          {/* Sub Article 1 (Bottom Left) */}
          <div className="flex flex-col group cursor-pointer">
            <div className="relative aspect-[20/9] w-full overflow-hidden bg-gray-200 mb-6">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop"
                alt="Minimalist Architecture"
                className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105 filter grayscale-[20%]"
              />
            </div>
            <div className="relative flex-grow pr-8">
              <span className="text-xs font-medium text-gray-500 mb-3 block tracking-wide uppercase">
                Sep 11, 2025
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-black mb-4 leading-tight">
                Why Minimalism Still Wins in Branding
              </h3>
              <p className="text-gray-950 text-sm md:text-base leading-snug max-w-sm">
                In Bold Studio, minimalism becomes a powerful tool for agencies to communicate clarity, elegance, and professionalism.
              </p>
            </div>
          </div>

          {/* Sub Article 2 (Bottom Right) */}
          <div className="flex flex-col group cursor-pointer relative">
            <div className="relative aspect-[20/9] w-full overflow-hidden bg-gray-200 mb-6">
              <img
                src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format&fit=crop"
                alt="Two people looking cool"
                className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="relative flex-grow pr-8">
              <span className="text-xs font-medium text-gray-500 mb-3 block tracking-wide uppercase">
                Sep 11, 2025
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-black mb-4 leading-tight">
                Storytelling in Digital Portfolios
              </h3>
              <p className="text-gray-950 text-sm md:text-base leading-snug max-w-sm">
                A modern portfolio isn't just a collection of projects — it's a narrative of challenges, solutions, and results.
              </p>
              
              {/* Corner Arrow */}
              <div className="absolute bottom-0 right-0 text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={24} strokeWidth={1.5} />
              </div>
            </div>
          </div>

        </div>

        {/* View All Button */}
        <div className="mt-20 flex justify-center">
          <button className="group flex items-center gap-3 border border-black px-8 py-3 text-sm font-semibold tracking-wide text-black hover:bg-black hover:text-white transition-all duration-300 ease-out">
            ALL ARTICLES 
            <Plus size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:rotate-90" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Insights;