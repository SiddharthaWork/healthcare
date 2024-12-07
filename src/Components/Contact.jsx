import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-full'>
        <div className='w-full h-full lg:h-[370px] xl:h-[344px] bg-[#0D0B19] flex flex-col lg:flex-row px-4 md:px-12 lg:px-24 py-6 gap-8 lg:gap-36'>
            <div className='w-full lg:w-auto h-full flex justify-center lg:justify-start'>
                <img 
                    src="doctor.svg" 
                    alt="Doctor illustration" 
                    className='w-[300px] md:w-[400px] lg:w-[456px] h-auto lg:h-[475px] object-cover transform lg:-translate-y-[9.7rem]'
                />
            </div>

            <div className='w-full lg:w-1/2 h-full flex flex-col justify-center items-center lg:items-start space-y-3 lg:ml-24 px-4 lg:px-0 '>
                <h1 className='text-white text-3xl md:text-4xl xl:text-5xl font-semibold font-nunito leading-tight lg:leading-[3rem] text-center lg:text-left'>
                    Let's Build the Future of Health <br className='hidden lg:block' /> Care Together
                </h1>
                <p className='text-white text-base md:text-lg font-normal font-nunito text-center lg:text-left'>
                    Join WebStudio Nepla in shaping the health care industry with innovative mobile apps that improve lives.
                </p>
                <button className='rounded-md bg-[#29AAE1] text-white px-6 py-2 font-nunito font-semibold text-lg hover:bg-[#2090c0] transition-colors'>
                    Contact Us
                </button>
            </div>
        </div>
    </div>  
  )
}

export default Contact