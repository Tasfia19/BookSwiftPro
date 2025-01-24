import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 px-4 sm:px-8 font-medium">
      {/* Logo */}
      <img src="logo.png" className="w-32 sm:w-40" alt="logo" />

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-6 text-lg text-gray-900 font-bold">
        {['HOME', 'ABOUT US', 'SERVICES', 'CONTACT US'].map((item, index) => (
          <NavLink
            key={index}
            to={item === 'HOME' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '')}`}
            className="flex flex-col items-center justify-center gap-1 rounded-full border-4 border-blue-300 px-3 py-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-300 hover:to-white hover:text-blue-800 hover:-translate-y-2"
          >
            {item}
          </NavLink>
        ))}
      </ul>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <button className="bg-black text-white text-sm px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300 hover:-translate-y-1">
          Hire Us on Fiverr
        </button>
        <button className="bg-black text-white text-sm px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300 hover:-translate-y-1">
          Hire Us on Upwork
        </button>

        {/* Mobile Menu Toggle */}
        <img
          onClick={() => setVisible(true)}
          src="menu1.gif"
          className="w-8 cursor-pointer sm:hidden"
          alt="Menu Icon"
        />
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-full bg-gradient-to-b from-[#005f99] via-[#57c4f0] to-[#d6f0fc] text-white z-50 transition-transform ${
          visible ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '75%' }}
      >
        {/* Close Button */}
        <div
          onClick={() => setVisible(false)}
          className="flex items-center gap-4 p-4 cursor-pointer hover:bg-[#57c4f0] transition"
        >
          <img className="h-4 rotate-180" src="dropdown_icon.png" alt="Back" />
          <p className="font-bold text-lg">BACK</p>
        </div>

        {/* Mobile Nav Links */}
        <div className="flex flex-col">
          {['HOME', 'ABOUT US', 'SERVICES', 'CONTACT'].map((item, index) => (
            <NavLink
              key={index}
              onClick={() => setVisible(false)}
              to={item === 'HOME' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '')}`}
              className="py-4 px-6 border-b border-[#57c4f0] font-bold hover:bg-[#005f99] hover:text-[#d6f0fc] transition"
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
