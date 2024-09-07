import React from 'react'
import AboutImage from '../assets/aboutme-image.jpg'

const About = () => {
  return (
    <div className='py-20 text-white bg-black' id='about'>
    <div className='container px-8 mx-auto md:px-16 lg:px-24'>
    <h2 className='mb-12 text-4xl font-bold text-center'>About Me</h2>
    <div className='flex flex-col items-center md:flex-row md:space-x-12'>
    <img src={AboutImage} alt='' 
    className='object-cover mb-8 rounded w-72 h-80 md:mb-0'/>
      <div className='flex-1'>
      <p className='mb-8 text-lg'>
    I am a passionate frontend developer and a designer with a focus on building
    modern and responsive web applications, I strive to create seamless and 
    efficient user experiences and I love to collaborate with developers 
    to create innovative solutions.
    </p>
    <div className='space-y-4'>
    <div className='flex items-center'>
    <label htmlFor='htmlandccss' className='w-2/12'>HTML & CSS</label>
    <div className='h-2.5 bg-gray-800 rounded-full grow'>
    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>
    </div>
    </div>
    </div>
    <div className='flex items-center'>
    <label htmlFor='htmlandccss' className='w-2/12'>React JS</label>
    <div className='h-2.5 bg-gray-800 rounded-full grow'>
    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>
    </div>
    </div>
    </div>
    <div className='flex items-center'>
    <label htmlFor='htmlandccss' className='w-2/12'>Node JS</label>
    <div className='h-2.5 bg-gray-800 rounded-full grow'>
    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'>
    </div>
    </div>
    </div>
    <div className='flex items-center'>
    <label htmlFor='htmlandccss' className='w-2/12'>Next JS</label>
    <div className='h-2.5 bg-gray-800 rounded-full grow'>
    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>
    </div>
    </div>
    </div>
    </div>
    <div className='flex justify-between mt-12 text-center'>
    <div>
    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
    2+
    </h3>
    <p>Years Experience</p>
</div>
<div>
    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
    15+
    </h3>
    <p>Projects Completed</p>
</div>
<div>
    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
    10+
    </h3>
    <p>Happy Clients</p>
</div>
 </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default About