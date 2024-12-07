import React from 'react'

const item = [
    {
      title: "Tailored Development Process",
      des: "Our step-by-step collaboration ensures every app aligns with your unique requirements.",
      num: "01",
    },
    {
      title: "Cutting-Edge Technology",
      des: "We employ the latest tech—AI, IoT, blockchain, and cloud computing—for scalable and secure solutions.",
      num: "02",
      color: "#3B939A"
    },
    {
      title: "Regulatory Compliance",
      des: "We guarantee adherence to healthcare regulations such as HIPAA, GDPR, and other local standards.",
      num: "03",
      color: "#2EA697"
    },
    {
      title: "Post-Launch Support",
      des: "From updates to performance optimization, we ensure your app evolves with your needs.",
      num: "04",
      color: "#52B7A7"
    },
    {
      title: "Focus on User Experience",
      des: "We design with simplicity in mind, ensuring seamless navigation for both patients and healthcare professionals.",
      num: "05",
      color: "#1181B8"
    },
  ];

const Choice = () => {
    return (
        <div className='w-full h-full px-4 md:px-24 py-10 bg-[#F5F5F5] overflow-hidden'>
            <div className='w-full h-full flex justify-center mb-8 md:mb-16'>
                <h1 className='text-2xl md:text-4xl font-semibold text-center font-nunito'>Why WebStudio Nepal is the Right Choice</h1>
            </div>

            <div className='flex flex-col md:flex-row w-full h-full justify-center gap-6 md:gap-12'>
                <div className='flex justify-center md:justify-start'>
                    <img src="question.svg" alt="question" className='w-48 md:w-auto' />
                </div>
                <div className='flex flex-col gap-8 md:gap-14 py-5 md:py-10 max-w-full md:max-w-[40rem]'>
                    {
                        item.map((item, index) => (
                            <div key={index} className='flex flex-col md:flex-row justify-center gap-3 md:gap-6'>
                                <div className='flex justify-center md:justify-start'>
                                    <h1 className='text-4xl md:text-6xl font-bold text-[#3E94B9]' style={{color: item.color}}>{item.num}</h1>
                                </div>
                                <div className='flex flex-col gap-2 items-center md:items-start text-center md:text-left'>
                                    <h1 className='text-xl md:text-2xl font-semibold font-nunito'>{item.title}</h1>
                                    <p className='text-sm md:text-md font-nunito'>{item.des}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Choice