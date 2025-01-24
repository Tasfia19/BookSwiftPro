import React from 'react';
import Title from './Title.jsx';

const About = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="text-4xl pt-6 text-center">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* First Section: Image on the Left */}
      <div className="my-10 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 mb-20 px-4 sm:px-8 lg:px-16">
        <img
          className="w-full md:max-w-[480px] lg:max-w-[780px] rounded-lg shadow-md"
          src="about.jpg"
          alt="about"
        />
        <div className="flex flex-col justify-center gap-6 lg:gap-8 w-full sm:w-4/5 md:w-2/4 lg:w-2/5">
          <h1 className="text-gray-800 font-bold text-2xl sm:text-3xl lg:text-4xl text-center md:text-left">
            Expertise Across Industries
          </h1>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center md:text-left">
            Bookswiftpros provides customized accounting solutions designed to
            meet the specific needs of small businesses, non-profits, and
            corporations.
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-center md:text-left">
            Our industry-specific expertise guarantees that each client receives
            the most relevant and effective financial guidance.
          </p>
        </div>
      </div>

      {/* Second Section: Image on the Right */}
      <div className="my-10 flex flex-col md:flex-row-reverse items-center justify-center gap-8 lg:gap-16 mb-20 px-4 sm:px-8 lg:px-16">
        <img
          className="w-full md:max-w-[480px] lg:max-w-[780px] rounded-lg shadow-md"
          src="about1.png"
          alt="about"
        />
        <div className="flex flex-col justify-center gap-6 lg:gap-8 w-full sm:w-4/5 md:w-2/4 lg:w-2/5">
          <h1 className="text-gray-800 font-bold text-2xl sm:text-3xl lg:text-4xl text-center md:text-left">
            Client-Centric Approach
          </h1>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center md:text-left">
            Bookswiftpros emphasizes personalized service, fostering strong and trusted relationships with clients.
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-center md:text-left">
            Our customized financial strategies are designed to perfectly align
            with each client’s specific goals and needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
