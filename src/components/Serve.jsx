import React from 'react'
import Title from './Title'
const Serve = () => {
  return (
    <div>
       <div className='text-4xl py-4'>   
           <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>
    <div className='flex flex-col gap-3 md:flex-row text-sm mb-20'>
      
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-[#57c4f0] transition duration-300 hover:-translate-y-2 '>
<b>QUALITY ASSURANCE:</b>
<p>
Delivering excellence through meticulous testing and reliable, high-performance solutions. We ensure every product meets the highest standards, empowering businesses with tools they can trust. Our dedication to quality drives customer satisfaction and builds lasting relationships.</p>
 </div>
   <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-[#57c4f0] transition duration-300 hover:-translate-y-2 '>
<b>CONVENIENCE:</b>
<p className='text-gray-800'>
Making life easier with seamless, user-friendly designs and efficient services tailored to your needs. From intuitive interfaces to streamlined processes, we prioritize your comfort and efficiency at every step, enabling you to focus on what truly matters.</p>
 </div>
    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-[#57c4f0] transition duration-300 hover:-translate-y-2 '>
<b>EXCEPTIONAL CUSTOMER SERVICE:</b>
<p className='text-gray-800'>
Committed to providing personalized support that consistently exceeds expectations. We go the extra mile to understand your needs, resolve issues promptly, and ensure your experience with us is smooth and rewarding. Your success is our priority.</p>
 </div>
    </div>
    </div>
  )
}

export default Serve
