import React from 'react';

const features = [
    {
        title: "Data Privacy and Compliance",
        description: "End-to-End Encryption <br /> Regular Security Audits",
        icon: "icon1.svg"
    },
    {
        title: "Comprehensive Patient Engagement",
        description: "24/7 Access to Records <br /> Appointment Scheduling <br /> Queue Management",
        icon: "icon2.svg"
    },
    {
        title: "Advanced Diagnostics & Monitoring",
        description: "AI-Assisted Symptom Checker <br /> Chronic Disease Management <br /> Wearable Device Integration",
        icon: "icon3.svg"
    },
    {
        title: "Pharmacy Integration",
        description: "Virtual Consultations <br /> E-Prescriptions <br /> Online Ordering",
        icon: "icon4.svg"
    },
    {
        title: "Electronic Health Records (EHR)",
        description: "Centralized Data <br /> Doctor Sharing <br /> Real-Time Data Updates",
        icon: "icon5.svg"
    },
    {
        title: "Seamless Operational Efficiency",
        description: "Staff Scheduling <br /> Billing & Payments <br /> Inventory Management",
        icon: "icon6.svg"
    }
];




const Features = () => {
    return (
        <div className='w-full h-auto relative overflow-hidden px-4 sm:px-6 lg:px-8'>
            <div className='absolute h-full w-full'>
                <img src="nicebackground.svg" alt="" className='w-full h-full object-cover' />
            </div>

            <div className='w-full h-auto text-center font-nunito text-black md:text-4xl text-2xl font-semibold pt-10 pb-6 relative'>
                <h1>Our Healthcare App Features</h1>
            </div>



            <div className=' max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 my-12 lg:my-24 relative'>

                {/* Features List */}
                <div className='lg:hidden w-full flex flex-col lg:flex-row lg:w-2/3 gap-16 lg:gap-32 pt-8 lg:pt-16 justify-center items-center'>
                    {features.map((feature, index) => (
                        <div key={index} className='flex flex-col lg:flex-row gap-6 w-full max-w-[30rem] justify-center lg:justify-start items-center px-4'>
                            <div className={'w-20 h-20 lg:w-24 lg:h-24 '}>
                                <img src={feature.icon} alt="" className='w-full h-full object-contain' />
                            </div>
                            <div className={`flex flex-col gap-2 text-center lg:text-left ${index % 2 === 0 ? 'order-2 lg:order-none' : 'order-1 lg:order-none'}`}>
                                <h1 className='text-black font-nunito text-xl font-bold'>{feature.title}</h1>
                                <p className='font-nunito text-sm text-black' dangerouslySetInnerHTML={{ __html: feature.description }}></p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Left Side Features */}
                <div className='hidden lg:flex w-full lg:w-1/3 items-center flex-col gap-16 lg:gap-32 pt-8 lg:pt-16'>
                    <div className='flex flex-col-reverse lg:flex-row gap-6 w-full max-w-[30rem] lg:justify-end justify-center items-center px-4'>
                        <div className='flex flex-col gap-2 text-center lg:text-right'>
                            <h1 className='text-black font-nunito text-xl font-bold'>Data Privacy and Compliance</h1>
                            <p className='font-nunito text-sm text-black'>End-to-End Encryption <br /> Regular Security Audits</p>
                        </div>
                        <div className='w-20 h-20 lg:w-24 lg:h-24'>
                            <img src="icon1.svg" alt="" className='w-full h-full object-contain' />
                        </div>
                    </div>

                    <div className='flex flex-col-reverse lg:flex-row gap-6 w-full max-w-[30rem] lg:justify-end justify-center items-center px-4'>
                        <div className='flex flex-col gap-2 text-center lg:text-right'>
                            <h1 className='text-black font-nunito text-xl font-bold'>Advanced Diagnostics & Monitoring</h1>
                            <p className='font-nunito text-sm text-black'>AI-Assisted Symptom Checker <br /> Chronic Disease Management <br /> Wearable Device Integration</p>
                        </div>
                        <div className='w-20 h-20 lg:w-24 lg:h-24'>
                            <img src="icon3.svg" alt="" className='w-full h-full object-contain' />
                        </div>
                    </div>

                    <div className='flex flex-col-reverse lg:flex-row gap-6 w-full max-w-[30rem] lg:justify-end justify-center items-center px-4'>
                        <div className='flex flex-col gap-2 text-center lg:text-right'>
                            <h1 className='text-black font-nunito text-xl font-bold'>Electronic Health Records (EHR)</h1>
                            <p className='font-nunito text-sm text-black'>Centralized Data <br /> Doctor Sharing <br /> Real-Time Data Updates</p>
                        </div>
                        <div className='w-20 h-20 lg:w-24 lg:h-24'>
                            <img src="icon5.svg" alt="" className='w-full h-full object-contain' />
                        </div>
                    </div>
                </div>

                {/* Phone Icon */}
                <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col items-center justify-center mx-auto px-4'>
                    <div className='w-full h-full pb-12 lg:pb-24 pt-12 lg:pt-28 flex justify-center items-center'>
                        <img src="phone.svg" alt="" className='w-[80%] lg:w-auto h-auto object-contain transform scale-110 lg:scale-125' />
                    </div>
                    <div className='flex justify-center items-center mx-auto'>
                        <button className='rounded-md px-6 py-2 bg-[#29AAE1] text-white font-nunito font-semibold text-lg hover:bg-[#29AAE1]/80 transition-all duration-300'>
                            Get a Free Demo
                        </button>
                    </div>
                </div>

                {/* Right Side Features */}
                <div className='hidden lg:flex w-full lg:w-1/3 items-center flex-col gap-16 lg:gap-32 pt-8 lg:pt-16'>
                    <div className='flex flex-col lg:flex-row gap-6 w-full max-w-[30rem] justify-center lg:justify-start items-center px-4'>
                        <div className='w-20 h-20 lg:w-24 lg:h-24'>
                            <img src="icon2.svg" alt="" className='w-full h-full object-contain' />
                        </div>
                        <div className='flex flex-col gap-2 text-center lg:text-left'>
                            <h1 className='text-black font-nunito text-xl font-bold'>Comprehensive Patient Engagement</h1>
                            <p className='font-nunito text-sm text-black'>24/7 Access to Records <br /> Appointment Scheduling <br /> Queue Management</p>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-6 w-full max-w-[30rem] justify-center lg:justify-start items-center px-4'>
                        <div className='w-20 h-20 lg:w-24 lg:h-24'>
                            <img src="icon4.svg" alt="" className='w-full h-full object-contain' />
                        </div>
                        <div className='flex flex-col gap-2 text-center lg:text-left'>
                            <h1 className='text-black font-nunito text-xl font-bold'>Pharmacy Integration</h1>
                            <p className='font-nunito text-sm text-black'>Virtual Consultations <br /> E-Prescriptions <br /> Online Ordering</p>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-6 w-full max-w-[30rem] justify-center lg:justify-start items-center px-4'>
                        <div className='w-20 h-20 lg:w-24 lg:h-24'>
                            <img src="icon6.svg" alt="" className='w-full h-full object-contain' />
                        </div>
                        <div className='flex flex-col gap-2 text-center lg:text-left'>
                            <h1 className='text-black font-nunito text-xl font-bold'>Seamless Operational Efficiency</h1>
                            <p className='font-nunito text-sm text-black'>Staff Scheduling <br /> Billing & Payments <br /> Inventory Management</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
