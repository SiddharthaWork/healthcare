'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'



const content = [
    {
        title: "Patient-Centered Design",
        des: "An intuitive user experience that makes healthcare access simple and efficient.",
        button: "FEATURE 1",
    },
    {
        title: "Data Security and Compliance",
        des: "Apps developed to meet HIPAA and GDPR compliance, ensuring patient data is secure.",
        button: "FEATURE 2",
    },
    {
        title: "24/7 Access to Care",
        des: "Allow patients to book appointment, access medical recors, and consult with healthcare providers anytime, anywhere.",
        button: "FEATURE 3",
    }
]

const iconContent = [
    {
        icon: "o1.svg",
        text: "Healthcare Solutions"
    },
    {
        icon: "o2.svg",
        text: "Medical Services"
    },
    {
        icon: "o3.svg",
        text: "Digital Health"
    }
];

const logoImages = [
    '/glowlogo.svg',
    '/glowlogo2.svg',
    '/glowlogo3.svg'
];

const Overview = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % iconContent.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='w-full h-auto lg:p-12 p-6 overflow-hidden lg:mb-12 '>
            <div className='w-full lg:w-6xl mx-auto'>

                <div className='text-black text-center font-nunito text-2xl md:text-4xl lg:text-5xl font-semibold'>
                    <h1>
                        Overview of Our Healthcare Apps
                    </h1>
                </div>


                <div className='flex flex-col gap-6 space-y-10 md:space-y-0 md:flex-row justify-center items-center py-16 max-w-full md:max-w-6xl mx-auto overflow-hidden'>
                    <div className='relative flex items-center justify-center w-[20rem] md:w-[40rem] h-[20rem] md:h-auto mt-16 my-28 md:mb-0'>
                        {/* Animated icon with fade in/out */}
                        <motion.div
                            key={currentIndex}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            transition={{
                                duration: 0.5,
                                opacity: { duration: 0.3 }  // Separate duration for opacity
                            }}
                            className="absolute xl:top-[5rem] top-2 lg:top-[3rem] md:top-[6rem] xl:right-35 text-4xl"
                        >
                            <img
                                src={iconContent[currentIndex].icon}
                                alt=""
                                className="object-contain"
                            />
                        </motion.div>


                        {/* Center logo that changes with content */}
                        <motion.div
                            key={`logo-${currentIndex}`}
                            animate={{ 
                                scale: currentIndex === 0 ? 1 : 
                                currentIndex === 1 ? 1.1 : 
                                1.2 
                            }}
                            transition={{
                                duration: 0.2
                            }}
                            className="absolute xl:top-[11rem] lg:top-[6rem] lg:left-7 top-[7rem] md:top-[12rem] xl:left-[7rem] border-blue-700 w-[100px] h-[100px]"
                        >
                            <img
                                src={logoImages[currentIndex]}
                                alt="Logo"
                                className="object-contain xl:w-full xl:h-full lg:w-[3rem] lg:h-[3rem]"
                            />
                        </motion.div>





                        {/* Animated text with fade in/out */}
                        <motion.div
                            key={`text-${currentIndex}`}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            transition={{
                                duration: 0.5,
                                opacity: { duration: 0.3 },
                                delay: 0.2
                            }}
                            className="absolute xl:top-[20rem] lg:top-[10rem] lg:text-[8px] xl:text-lg top-[16rem] md:top-[20rem] xl:right-25 text-lg font-nunito text-white"
                        >
                            {iconContent[currentIndex].text}
                        </motion.div>

                        <img src="mobile.svg" alt="overview1" />
                    </div>
                    <div className='flex flex-col gap-10 w-full '>
                        {
                            content.map((con, index) => (
                                <div key={index} className='space-y-4 flex flex-col h-fit w-full lg:w-[50rem] '>
                                    <div className='flex w-full h-auto lg:h-12 relative  '>
                                        <div className='flex items-center w-full text-black font-nunito text lg:text-2xl py-2 font-bold border-b-2 border-[#1181B8] pl-0 md:pl-6 pr-1'>
                                            <h1>
                                                {con.title}
                                            </h1>
                                        </div>
                                        <button className='flex items-center justify-center w-[5rem] h-[5rem] lg:h-12 md:w-[230px] text-white bg-[#1181B8] rounded-t-2xl hover:bg-sky-600 uppercase text-sm px-2 md:px-0 md:text-lg '>
                                            {con.button}
                                        </button>
                                    </div>
                                    <div className='text-black md:px-6 px-0 font-nunito text-base '>
                                        <p>
                                            {con.des}
                                        </p>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>

                <div className='w-full flex justify-center'>
                    <button className='md:px-12 px-6 py-2 text-sky-500 rounded-lg border-2 border-sky-500 text-sm md:text-lg hover:bg-black hover:text-white'>
                        Hire Us To Build Your App
                    </button>
                </div>


            </div>



        </div>
    )
}

export default Overview