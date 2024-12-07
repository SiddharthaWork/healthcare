"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Things = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqData = [
    {
      question: "What services does the web app development company in Nepal offer?",
      answer: "We offer a wide range of web app development services, including custom web app development, e-commerce solutions, web app maintenance, and more."
    },
    {
      question: "What types of web applications can I get from Web Studio Nepal?",
      answer: "We can develop various web applications, such as e-commerce platforms, content management systems, web portals, and custom business applications."
    },
    {
      question: "Is Web Studio Nepal reliable for web app development in Nepal?",
      answer: "Yes, we have a proven track record of delivering high-quality web applications on time and within budget."
    },
    {
      question: "Why choose Web Studio Nepal for web app development in Nepal?",
      answer: "We offer expert developers, cutting-edge technologies, and a client-centric approach to ensure your web application meets your specific needs."
    }
  ];

  return (
    <div className="relative h-auto bg-[#34333f]/60 p-6 flex flex-col items-center pb-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/world.svg" 
          alt="Background"
          className="absolute inset-0 w-full h-full object-contain"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <h2 className="text-3xl md:text-4xl font-medium text-white my-12 font-nunito">
        Things You Might Be Wondering
      </h2>
      <div className="w-full max-w-6xl">
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-none">
              <button
                className={`
                  bg-zinc-600/50 hover:bg-zinc-600/70 
                  rounded-lg px-6 py-4 text-white text-left font-montserrat font-semibold w-full 
                  focus:outline-none flex flex-col
                  transform transition-all duration-100 ease-in-out
                  hover:scale-[1.01] active:scale-[0.99]
                  ${expandedIndex === index ? 'items-start' : 'items-center'}
                `}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="w-full flex justify-between items-center">
                  {item.question}
                  <div className={`
                    transform transition-transform duration-100 ease-in-out
                    ${expandedIndex === index ? 'rotate-180' : 'rotate-0'}
                  `}>
                    <IoIosArrowDown className="ml-2 text-white" />
                  </div>
                </div>
                
                <div 
                  className="w-full overflow-hidden"
                  style={{
                    transition: 'all 200ms ease-in-out',
                    maxHeight: expandedIndex === index ? '200px' : '0',
                    opacity: expandedIndex === index ? 1 : 0,
                    transform: `translateY(${expandedIndex === index ? '0' : '-10px'})`,
                  }}
                >
                  <div className="mt-4 text-sm text-gray-300  pt-4 w-full">
                    {item.answer}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Things;