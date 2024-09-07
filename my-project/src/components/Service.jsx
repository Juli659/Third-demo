import React from 'react'
const services =[
    {
        id: 1,
        title: 'Web Design',
        description: 'Creating visually appealing and user-freiendly web design.',
       
    },
    {
        id: 2,
        title: 'Web Development',
        description: 'Developing web applications using React, Node.js, Nextjs e.t.c.',
    },
    {
        id: 3,
        title: 'Frontend Development',
        description: 'Building responsive and interactive user interfaces.',
    },
    {
        id: 4,
        title: 'UI/UX Designer',
        description: 'Designing frontend designs.',
    },
];
const Service = () => {
  return (
    <div className='py-20 text-white bg-black' id='services'>
    <div className='container px-8 mx-auto md:px-16 lg:px-24'>
    <h2 className='mb-12 text-4xl font-bold text-center'>My Services</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
    {services.map(service => (
        <div 
        key={service.id}
        className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
      <div 
      className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>
      {service.id}
      </div> 
      <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
      {service.title}
      </h3> 
      <p className='mt-2 text-gray-300'>{service.description}</p>
      <a href='#' className='mt-4 inline-block text-green-400 hover:text-blue-500'>Read Carefully</a>
        </div>

    ))}
    </div>
    </div>
    </div>
  )
}

export default Service