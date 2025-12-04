import React from 'react'
import Img from '../assets/about.avif'
import  Image  from 'next/image';
const About = () => {
  return (
    <div className='h-[82vh] grid grid-cols-2 gap-20 px-10 items-center'>
      <div className='flex flex-col gap-4'>
        <h3 className='text-5xl font-bold'>About Me</h3>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis illum accusantium, eveniet quos deleniti tenetur possimus? Repellat, alias suscipit itaque ducimus ipsam ab laboriosam praesentium?</p>
              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis illum accusantium, eveniet quos deleniti tenetur possimus? Repellat, alias suscipit itaque ducimus ipsam ab laboriosam praesentium?</p>
              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis illum accusantium, eveniet quos deleniti tenetur possimus? Repellat, alias suscipit itaque ducimus ipsam ab laboriosam praesentium?</p>
      </div>
      <div className=''>
        <Image className='w-full' src={Img} alt='About'/>
      </div>
    </div>
  )
}

export default About
