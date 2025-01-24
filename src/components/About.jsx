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
      <div className="my-10 flex flex-col md:flex-row items-center justify-center gap-16 mb-28">
        <img
          className="w-full md:max-w-[480px] lg:max-w-[780px]"
          src="about.jpg"
          alt="about"
        />
        <div className="flex flex-col justify-center gap-10 w-full sm:w-4/5 md:w-2/4 lg:w-2/5">
          <h1 className="text-gray-800 font-bold text-4xl text-center">
            Expertise Across Industries
          </h1>
          <h3 className="text-2xl font-semibold  text-center">
            Bookswiftpros provides customized accounting solutions designed to
            meet the specific needs of small businesses, non-profits, and
            corporations.
          </h3>
          <p className="text-xl text-center">
            Our industry-specific expertise guarantees that each client receives
            the most relevant and effective financial guidance.
          </p>
        </div>
      </div>

      {/* Second Section: Image on the Right */}
      <div className="my-10 flex flex-col md:flex-row-reverse items-center justify-center gap-16 mb-28">
        <img
          className="w-full md:max-w-[480px] lg:max-w-[780px]"
          src="about1.png"
          alt="about"
        />
        <div className="flex flex-col justify-center gap-10 w-full sm:w-4/5 md:w-2/4 lg:w-2/5">
          <h1 className="text-gray-800 font-bold text-4xl text-center">
            Client-Centric Approach
          </h1>
          <h3 className="text-2xl font-semibold text-center">
            Bookswiftpros emphasizes personalized service, fostering strong and trusted relationships with clients.
          </h3>
          <p className="text-xl text-center">
            Our customized financial strategies are designed to perfectly align with each client’s specific goals and needs
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
