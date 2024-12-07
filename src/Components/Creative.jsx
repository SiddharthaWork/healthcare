import React from 'react'

const Creative = () => {
    return (
        <div className='w-full h-full px-6 md:px-12 lg:px-24 py-10 bg-[#F5F5F5] overflow-hidden'>
            <div className='w-full h-full flex flex-col justify-center gap-4 items-center mb-10 md:mb-20'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold font-nunito'>The Creative Process: From Idea to Impact</h1>
                <p className='text-base md:text-lg font-nunito text-center'>At Webstudio Nepal, our design process is focused on collaboration, creativity, and communication. Here's a glimpse <br /> of how we work:</p>
            </div>

            <div className='w-full h-[123rem] md:h-[35rem] relative mb-10 sm:mb-0'>
                <div className='w-full flex justify-center md:rotate-0 rotate-[160deg]'>
                    <img src="creative.svg" alt="creative" className='w-full md:w-[70rem] h-auto' />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-5 w-full h-full absolute top-20 md:top-24 md:gap-6 xl:gap-0'>
                    <div className='row-span-1 w-full h-full mb-8 md:mb-0'>
                        <div className='flex flex-col justify-center items-start gap-4 max-w-full md:max-w-[250px]'>
                            <div className='rotate-[52deg] md:rotate-0 mb-9 md:mb-0'>
                            <img src="step1.svg" alt="idea" />
                            </div>
                            <h1 className='text-lg md:text-xl font-semibold font-nunito'>Ideation & Strategy</h1>
                            <p className='text-sm font-nunito'>We start by understanding your business, your customers, and your competitors.</p>
                        </div>
                    </div>
                    <div className='row-span-1 w-full h-full mb-8 md:mb-0 mt-0 md:mt-24'>
                        <div className='flex flex-col justify-center items-start gap-4 max-w-full md:max-w-[250px]'>
                        <div className='rotate-[52deg] md:rotate-0 mb-9 md:mb-0'>
                            <img src="step2.svg" alt="idea" />
                            </div>
                            <h1 className='text-lg md:text-xl font-semibold font-nunito'>Design & User Experience</h1>
                            <p className='text-sm font-nunito'>We create intuitive, user-friendly designs for seamless experiences for patients and professionals alike.</p>
                        </div>
                    </div>
                    <div className='row-span-1 w-full h-full mb-8 md:mb-0 mt-0 md:mt-36'>
                        <div className='flex flex-col justify-center items-start gap-4 max-w-full md:max-w-[250px]'>
                            <div className='rotate-[120deg] md:rotate-0 mb-9 md:mb-0'>
                            <img src="step3.svg" alt="idea" />
                            </div>
                            <h1 className='text-lg md:text-xl font-semibold font-nunito'>Development</h1>
                            <p className='text-sm font-nunito'>We use modern tools to build secure, scalable apps with top-notch functionality and performance.</p>
                        </div>
                    </div>
                    <div className='row-span-1 w-full h-full mb-8 md:mb-0 mt-0 md:mt-[6rem]'>
                        <div className='flex flex-col justify-center items-start gap-4 max-w-full md:max-w-[250px]'>
                            <div className='rotate-[90deg] md:rotate-0 mb-9 md:mb-0'>
                            <img src="step4.svg" alt="idea" />
                            </div>
                            <h1 className='text-lg md:text-xl font-semibold font-nunito'>Testing & Quality Assurance</h1>
                            <p className='text-sm font-nunito'>We rigorously test your app to ensure flawless performance, security, and compliance across devices.</p>
                        </div>
                    </div>
                    <div className='row-span-1 w-full h-full'>
                        <div className='flex flex-col justify-center items-start gap-4 max-w-full md:max-w-[250px]'>
                            <div className='rotate-[130deg] md:rotate-0 mb-9 md:mb-0'>
                            <img src="step5.svg" alt="idea" />
                            </div>
                            <h1 className='text-lg md:text-xl font-semibold font-nunito'>Launch & Support</h1>
                            <p className='text-sm font-nunito'>We manage deployment and provide ongoing support for updates, maintenance, and enhancements.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Creative