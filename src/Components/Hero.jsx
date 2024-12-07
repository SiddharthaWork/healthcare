import React from 'react';
import Image from 'next/image';
const Hero = () => {
  return (
    <div className="bg-[#0F0B1E] relative w-full h-auto pt-12 pb-16 md:h-[26rem] overflow-hidden">
      <div className="absolute left-[30rem]  overflow-hidden overflow-x-hidden overflow-y-hidden">
        <img
          className="w-full pt-8 object-cover overflow-hidden opacity-80 mix-blend-overlay"
          src="background.svg"
          alt="background image"
        />
      </div>

      <div className='max-w-5xl mx-auto px-4 md:pt-8 space-y-2'>

        <div className='text-white font-bold text-2xl md:text-4xl lg:text-5xl pb-4 text-center uppercase font-openSans'>
          <h1>
          Healthcare Mobile Apps<br className='hidden md:block' />
          By WebStudio Nepal<br className='hidden lg:block' />
          </h1>
        </div>

        <div className='text-white text-sm md:text-base lg:text-lg text-center max-w-6xl mx-auto tracking-wide font-nunito '>
          <p>
          WebStudio Nepal develops secure, user-friendly healthcare mobile apps that streamline patient management, enhance access to care, and elevate healthcare service quality. Our solutions meet rigorous security and compliance standards, offering healthcare facilities a dependable digital tool to support both operational and clinical needs.
          </p>
        </div>

        <div className='flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0 justify-center items-center pt-6'>
          <button className='px-6 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 z-30 relative overflow-hidden group'>
          <span className="relative z-20 font-openSans">Quick Enquiry</span>
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-in-out z-10"></div>
          </button>
          <button className='px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-[#0F0B1E] transition duration-75 ease-in-out z-40 font-openSans'>
          Call Us: +977 9703958747
          </button>
        </div>

      </div>
    </div>
  );
}

export default Hero;
