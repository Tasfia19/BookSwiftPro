import { useState } from 'react'
import './index.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Serve from './components/Serve';
import About from './components/About';






 const App=()=> {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Hero/>
      <Serve/>
      <About/>

    </div>
  )
}

export default App
