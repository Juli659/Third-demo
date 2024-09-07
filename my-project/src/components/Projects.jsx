import React from 'react';
import employeeMSImage from '../assets/employee-mi.jpeg';
import BookMSImage from '../assets/admin-dashboard.jpeg';

const projects = [
  {
    id: 1,
    name: 'Employee MS',
    technologies: 'Frontend',
    image: employeeMSImage,
  },
  {
    id: 2,
    name: 'Web Design',
    technologies: 'Frontend',
    image: BookMSImage,
  },
];

const Projects = () => {
  return (
    <div className='py-20 text-white bg-black' id='projects'>
    <div className='container px-8 mx-auto md:px-16 lg:px-24'>
    <h2 className='mb-12 text-4xl font-bold text-center'>My Project</h2>
    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
    {projects.map((project) => (
      <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
      <img src={project.image} alt={project.name} className='rounded-lg mb-4 w-full h-48 object-cover' />
      <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
      <p className='text-gray-400 mb-4 p-3'>{project.technologies}</p>
      </div>
    ))}
    </div>
    </div>
    </div>
  );
};

export default Projects;