import React from 'react'
import HeroImage from '../assets/hero-image.jpg'

const Hero = () => {
  return (
    <div className='py-16 text-center text-white bg-black'>
    <img src={HeroImage} alt=''
    className='object-cover w-48 h-48 mx-auto mb-8 transition-transform duration-300 transform rounded-full hover::scale-105' />
    <h1 className='text-4xl font-bold'>
    I'm {" "}
    <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Juliet Princess</span>
    ,Frontend Developer
    </h1>
    <p className='mt-4 text-lg text-gray-100'>
    I specialize in building modern and responsive web application
    </p>
    <div className='mt-8 space-x-4'>
    <button 
    className='hidden px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 md:inline hover:scale-105'>Connect With Me</button>
    
    <button className='hidden px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 md:inline hover:scale-105'>Resume</button>
    
    </div>
    </div>
  )
}

export default Hero