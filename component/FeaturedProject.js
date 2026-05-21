import React from 'react';

export default function FeaturedProject({content=false}) {
  return (
    <div className="flex flex-col justify-between w-full h-fit bg-[#F3F7F6] p-12 px-0 md:py-24 md:px-0 text-black overflow-hidden font-sans">
      
      {/* Top Row */}
      <div className='flex flex-col sm:flex-row gap-8'>
      <div className="flex justify-start mt-4">
        <span className="text-[10px] md:text-xs font-semibold tracking-tighter uppercase text-gray-800">
         {!content ? '[ Featured Project ]' : '[ Team]' }
        </span>
      </div>

      {/* Middle Row (Flex-1 allows it to take up all remaining vertical space and center contents) */}
      <div className="flex flex-1 flex-col justify-center items-start md:pl-[20%]">
        {!content ?   <h1 className="text-6xl md:text-7xl lg:text-[75px] font-bold leading-[0.9] tracking-tighter">
          Bold Ideas,<br />
          Real Results
        </h1> : <h1 className="text-6xl md:text-7xl lg:text-[85px] font-bold leading-[0.9] tracking-tighter">
          Meet the,<br />
          Minds behind
        </h1> }
      </div>
</div>
      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-8 px-2">
        
        {/* Bottom Left Arrow Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-10 h-10 md:w-12 md:h-12 text-black order-2 sm:order-1 mt-8 sm:mt-0"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" 
          />
        </svg>

        {/* Bottom Right Description Text */}
        {/* Added right margin on larger screens to mimic the original offset */}
        <div className="w-[260px] md:mr-8 lg:mr-48 order-1 sm:order-2">
         {!content ?   <p className="text-sm md:text-[18px] font-medium leading-[1.2] text-black">
            Every project tells a story.<br />
            Here are some highlights<br />
            where design, strategy, and a<br />
            little bravery changed the<br />
            game.
          </p> : 
          <p className="text-sm md:text-[18px] font-medium leading-[1.2] text-black">
            We’re designers, strategists, <br />
            and problem-solvers who<br />
            actually love what we do (and <br />
            it shows).<br />
          </p>
          } 
        </div>
        
      </div>
    </div>
  );
}