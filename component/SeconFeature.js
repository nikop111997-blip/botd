import React from 'react';

export default function Featured2Project() {
  return (
    <div className="flex flex-col justify-between w-full h-fit bg-black p-12 px-0 md:py-24 md:px-0 text-white overflow-hidden font-sans">
      
      {/* Top Row */}
      <div className='flex flex-col sm:flex-row gap-8'>
      <div className="flex justify-start mt-4">
        <span className="text-[10px] md:text-xs font-semibold tracking-tighter uppercase text-gray-50">
          [ Featured Project ]
        </span>
      </div>

      {/* Middle Row (Flex-1 allows it to take up all remaining vertical space and center contents) */}
      <div className="flex flex-1 flex-col justify-center items-start md:pl-[20%]">
        <h1 className="text-6xl md:text-7xl lg:text-[85px] font-bold leading-[0.9] tracking-tighter">
          When Vision<br />
          comes to life.
        </h1>
      </div>
</div>
      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-8 px-2 ">
        
        {/* Bottom Left Arrow Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-10 h-10 md:w-12 md:h-12 text-gray-50 order-2 sm:order-1 mt-8 sm:mt-0"
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
          <p className="text-sm md:text-[18px] font-medium leading-[1.2] text-gray-50">
           We don't just make things<br />
            look good - we make them<br />
            work. From-stopping<br/>
            visuals to brand strategies<br />
            that actually move the needle<br />
            game.
          </p>
        </div>
        
      </div>
    </div>
  );
}