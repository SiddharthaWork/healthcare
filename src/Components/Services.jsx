import React from 'react'

const item = [
    {
        title: "For Hospitals and Clinics",
        des: "Digitize patient flow, medical records, and appointment scheduling.",
        icon: "services1.svg",
        smallicons: "s11.svg",
    },
    {
        title: "For Doctors and Specialists",
        des: "Empower seamless communication, data access, and care delivery.",
        icon: "s2.svg",
        smallicons: "s12.svg",    
    },
    {
        title: "For Patients",
        des: "Provide a holistic view of their health journey with easy-to-use tools.",
        icon: "s3.svg",
        smallicons: "s13.svg",
    },
    {
        title: "For Laboratories",
        des: "Enable online test bookings, sample tracking, and instant reporting.",
        icon: "s4.svg",
        smallicons: "s14.svg",
    },
];

const Services = () => {
    return (
        <div className='w-full h-full md:px-24 md:py-10 bg-[#F5F5F5] overflow-hidden'>
            <div className='w-full h-full mx-auto lg:mb-10 mb-24'>
                <h1 className='text-4xl font-semibold text-center font-nunito'>Our Healthcare App Features</h1>
            </div>

            <div className='w-full h-full flex flex-col lg:flex-row justify-center gap-2'>
                <div className='w-full h-full flex justify-center'>
                <div className='flex flex-col md:gap-32 lg:gap-10 md:max-w-6xl'>
                    {
                        item.map((item, index) => (
                            <div key={index} className='flex md:flex-row flex-col  gap-6 '>
                                <div className='relative hidden md:block'>
                                    <img src={item.icon} alt="services1" />
                                </div>
                                <div className='flex flex-col gap-2 md:absolute md:left-[180px] pt-0 xl:pt-4 md:ml-6 xl:ml-0 ml-0 xl:left-[22rem] p-4 md:p-0'>
                                        <img 
                                            src={item.smallicons} 
                                            alt="square" 
                                            className='w-8 h-8 md:hidden mx-auto'
                                        />
                                        <h1 className='text-lg md:text-xl font-semibold font-nunito text-center md:text-left'>
                                            {item.title}
                                        </h1>
                                        <p className='text-sm md:text-md font-nunito text-center md:text-left'>
                                            {item.des}
                                        </p>
                                    </div>
                            </div>


                        ))}
                    </div>

                </div>

                <div className='w-full md:w-1/3 xl:w-1/2 mt-8 lg:mt-0 flex justify-center mx-auto'>
                    <img src="phones.svg" alt="phones" />

                </div>



            </div>


        </div>
    )
}

export default Services