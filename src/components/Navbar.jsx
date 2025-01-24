import React from 'react';
import {NavLink} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Navbar = () => {

  const [visible,setVisible]=useState(false)

  return (
    <div className="flex items-center justify-between py-5 font-medium">
     <img src="logo.png" className='w-40lop' alt="logo" />
<ul className='hidden sm:flex gap-5 text-lg text-gray-900 font-bold'>
     <NavLink
  to="/"
className="flex flex-col items-center justify-center text-center gap-1 rounded-full border-4 border-blue-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-300 hover:to-white hover:text-blue-800 hover:-translate-y-2 sm:text-center"> 
<p className="transition-all duration-300 px-3">HOME</p>
</NavLink>


     <NavLink
  to="/"
 className="flex flex-col items-center justify-center text-center gap-1 rounded-full border-4 border-blue-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-300 hover:to-white hover:text-blue-800 hover:-translate-y-2 sm:text-center">   <p className="transition-all duration-300 px-3">ABOUT US</p>
</NavLink>
     <NavLink
  to="/"
 className="flex flex-col items-center justify-center text-center gap-1 rounded-full border-4 border-blue-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-300 hover:to-white hover:text-blue-800 hover:-translate-y-2 sm:text-center">  <p className="transition-all duration-300 px-3">SERVICES</p>
</NavLink>
    <NavLink
  to="/"
 className="flex flex-col items-center justify-center text-center gap-1 rounded-full border-4 border-blue-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-300 hover:to-white hover:text-blue-800 hover:-translate-y-2 sm:text-center">  <p className="transition-all duration-300 px-3">CONTACT US</p>
</NavLink>
 </ul>
 <div className="flex justify-between items-center gap-3 my-6">
  <button className="bg-black text-white text-sm px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300 hover:-translate-y-2">
    Hire Us on Fiver
  </button>
  <button className="bg-black text-white text-sm px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300 hover:-translate-y-2">
    Hire Us on Upwork
  </button>
   <img onClick={()=>setVisible(true)} src="menu1.gif" className='w-10 cursor-pointer sm:hidden' alt=""/>
</div>
<div
  className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-gradient-to-b from-[#005f99] via-[#57c4f0] to-[#d6f0fc] transition-all ${
    visible ? 'w-full' : 'w-0'
  }`}
>
  <div className="flex flex-col text-white">
    {/* Back Button */}
    <div
      onClick={() => setVisible(false)}
      className="flex items-center gap-4 p-3 cursor-pointer hover:bg-[#57c4f0] transition"
    >
      <img
        className="h-4 rotate-180"
        src="dropdown_icon.png"
        alt=""
      />
      <p className="font-bold text-lg">BACK</p>
    </div>

    {/* Navigation Links */}
    <NavLink
      onClick={() => setVisible(false)}
      className="py-6 pl-6 border-b border-[#57c4f0] font-bold hover:bg-[#005f99] hover:text-[#d6f0fc] transition"
      to="/"
    >
      HOME
    </NavLink>
    <NavLink
      onClick={() => setVisible(false)}
      className="py-6 pl-6 border-b border-[#57c4f0] font-bold hover:bg-[#005f99] hover:text-[#d6f0fc] transition"
      to="/about"
    >
      ABOUT US
    </NavLink>
    <NavLink
      onClick={() => setVisible(false)}
      className="py-6 pl-6 border-b border-[#57c4f0] font-bold hover:bg-[#005f99] hover:text-[#d6f0fc] transition"
      to="/services"
    >
      SERVICES
    </NavLink>
    <NavLink
      onClick={() => setVisible(false)}
      className="py-6 pl-6 border-b border-[#57c4f0] font-bold hover:bg-[#005f99] hover:text-[#d6f0fc] transition"
      to="/contact"
    >
      CONTACT
    </NavLink>
  </div>
</div>



    </div>
  );
};

export default Navbar;
