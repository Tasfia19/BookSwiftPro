import React from 'react'

const Hero = () => {
  return (
     <div className='flex flex-col sm:flex-row '>
        {/*Hero-left*/}
<div className="w-full sm:w-1/2 flex items-center justify-center py-5 sm:py-0">
  <div className="text-center max-w-3xl">
    <h3 className="text-[#000000] font-semibold text-lg lg:text-2xl sm:text-xl mb-4 py-2">
      Grow Your Business With Us
    </h3>
    <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 py-2">
      Your Trusted Accounting <br /> & Finance Partner
    </h1>
    <h3 className="font-medium text-lg lg:text-3xl sm:text-xl mb-5">
      Transform Your Business <br/>Finance Technologically
    </h3>
    <p className="text-[#000000] text-lg sm:text-base lg:text-xl leading-relaxed">
      Our team of expert finance and accounting <br/> professionals will manage your
      financials, so you can focus on driving your business forward.
    </p>
<div className='flex justify-center gap-2 my-4'>
  <button className='bg-black text-white text-sm px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300 hover:-translate-y-2'>Explore More</button>
  <button className='bg-black text-white text-sm px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300 hover:-translate-y-2'>Contact Us</button>
  </div>
  </div>
  </div>


         {/*Hero-right*/}
         <img className='w-full sm:w-1/2' src="hero.jpg" alt="" />
 </div>
  )
}

export default Hero
