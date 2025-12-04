import React from 'react'
import Img from '../assets/about.avif'
import  Image  from 'next/image';
import { FaExternalLinkAlt } from "react-icons/fa";
const Projects = () => {
  return (   
    <div className='h-[82vh] flex justify-center items-center'>
      <div className='grid px-10 grid-cols-3 gap-4'>
        <div className='flex flex-col gap-4 border-2 border-amber-300 relative p-4 rounded-md items-center cursor-pointer'>
            <Image className='w-full' src={Img} alt="projects"/>
            <h3>Online Shopping</h3>
            <div className='flex gap-2 justify-center flex-wrap'>
                <span className='bg-green-500 text-white p-2 rounded-xs'>HTML</span>
                <span className='bg-green-500 text-white p-2 rounded-xs'>CSS</span>
                <span className='bg-green-500 text-white p-2 rounded-xs'>JS</span>
                <span className='bg-green-500 text-white p-2 rounded-xs'>React</span>
                <span className='bg-green-500 text-white p-2 rounded-xs'>Tailwind CSS</span>
            </div>
                  <FaExternalLinkAlt className='absolute top-2 right-2 cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Projects
