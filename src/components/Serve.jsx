import React from 'react';
import Title from './Title';

const Serve = () => {
  return (
    <div className="py-10">
      {/* Section Title */}
      <div className="text-center text-4xl font-bold py-4">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      {/* Content Cards */}
      <div className="flex flex-col gap-6 md:flex-row text-sm mb-20 px-4">
        {[
          {
            title: 'QUALITY ASSURANCE:',
            description:
              'Delivering excellence through meticulous testing and reliable, high-performance solutions. We ensure every product meets the highest standards, empowering businesses with tools they can trust. Our dedication to quality drives customer satisfaction and builds lasting relationships.',
          },
          {
            title: 'CONVENIENCE:',
            description:
              'Making life easier with seamless, user-friendly designs and efficient services tailored to your needs. From intuitive interfaces to streamlined processes, we prioritize your comfort and efficiency at every step, enabling you to focus on what truly matters.',
          },
          {
            title: 'EXCEPTIONAL CUSTOMER SERVICE:',
            description:
              'Committed to providing personalized support that consistently exceeds expectations. We go the extra mile to understand your needs, resolve issues promptly, and ensure your experience with us is smooth and rewarding. Your success is our priority.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="border px-8 md:px-10 lg:px-16 py-8 sm:py-12 flex flex-col gap-4 text-gray-800 hover:bg-[#57c4f0] hover:text-white transition duration-300 hover:-translate-y-2"
          >
            <b className="text-lg">{item.title}</b>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Serve;
