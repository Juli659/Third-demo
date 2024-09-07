import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='py-20 text-white bg-black' id='contact'>
    <div className='container px-8 mx-auto md:px-16 lg:px-24'>
    <h2 className='mb-12 text-4xl font-bold text-center'>Contact Me</h2>
    <div className='flex flex-col items-center md:flex-row md:space-x-12'>
    <div className='flex-1'>
    <h3
    >Lets Talk</h3>
    <p>I'm open to discussing different web designs projects or patnership opportunities.</p>
    <div className='mb-4 mt-8'>
    <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
    <a href='okenwajuliet79@gmail.com' className='hover:underline'>
    My Email Address
    </a>
    </div>
    <div className='mb-4 mt-8'>
    <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
    <span>08132247251</span>
    </div>
    <div className='mb-4 mt-8'>
    <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
    <span>street, city, pronice, country</span>
    </div>
      </div>
    <div className='flex-1 w-full'>
    <form className='space-y-4'>
    <div>
    <label htmlFor='name' className='block mb-2'>Name</label>
    <input type='text'
    className='w-full p-2 rounded bg-gray-800 border  border-gray-600 focus:outline-none focus:border-green-400'
    placeholder='Enter Your Name' />
    </div>
    <div>
    <label htmlFor='email' className='block mb-2'>Email</label>
    <input type='text'
    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
    placeholder='Enter Your Email' />
    </div>
    <div>
    <label htmlFor='message' className='block mb-2'>Message</label>
    <textarea type='text'
    className='w-full p-2 rounded bg-gray-800 border  border-gray-600 focus:outline-none focus:border-green-400'
    rows='5'
    placeholder='Enter Your Message' />
    </div>
    <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
    
    </form>
     </div>
    </div>
    </div>
    </div>
  )
}
export default Contact
