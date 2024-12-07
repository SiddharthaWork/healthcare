import React from 'react'

const item = [
    {
        img: "p1.svg",
        title: "Personalized Health Plans",
        desc: "Help patients manage their health with personalized plans based on their conditions, history, and goals"
    },
    {
        img: "p2.svg",
        title: "AI-Powered Diagnostics",
        desc: "Enable faster, smarter diagnostics with integrated AI tools for image analysis and symptom evaluation"
    },
    {
        img: "p3.svg",
        title: "Health & Wellness Apps",
        desc: "Support preventive care with apps focused on fitness, mental well-being, and nutrition tracking"
    },
];





const Solutions = () => {
  return (
    <div className='w-full min-h-[62rem] xl:min-h-[30rem] px-4 sm:px-8 md:px-20 py-8 md:py-16 bg-[#F5F5F5] overflow-hidden'>
        <div className='relative w-full'>
            <div className='w-full h-auto md:h-[12rem] bg-white rounded-3xl md:rounded-full shadow-md border-2 border-[#29AAE1] flex justify-center items-center p-6 md:p-0'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-nunito font-semibold text-black text-center'>Innovative Solutions Tailored for Health Care</h1>
            </div>

            <div className='w-full md:w-[70rem] mt-8 md:mt-0 md:h-[230px] md:mx-auto md:absolute md:top-36 md:left-[25%] lg:left-[35%] xl:left-[16%]'>
                <div className='grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-2'>
                    {item.map((item, index) => (
                        <div key={index} className='flex flex-col gap-4'>
                            <div className='w-full md:w-[288px] h-auto min-h-[230px] bg-white border-2 border-[#29AAE1] rounded-lg flex flex-col justify-center place-items-center p-4 md:p-3 space-y-3 text-center'>
                                <img src={item.img} alt="" className='w-16 md:w-auto' />
                                <h1 className='text-xl md:text-2xl font-nunito font-semibold text-black'>{item.title}</h1>
                                <p className='text-sm font-nunito font-normal text-black'>{item.desc}</p>
                            </div>  
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Solutions