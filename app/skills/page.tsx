import React from 'react'
import Marquee from "react-fast-marquee";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { SiRedux } from "react-icons/si";
const Skills = () => {
  return (
    <div className='h-[82vh] flex flex-col gap-10  justify-center'>
        <Marquee>
              <div className='flex text-6xl gap-16'>
                  <FaHtml5 />
                  <FaSass />
                  <FaCss3 />
                  <BsFiletypeScss />
                  <FaBootstrap />
                  <FaReact />
                  <RiTailwindCssFill />
                  <IoLogoFirebase />
                  <SiNextdotjs />
                  <SiTypescript />
                  <FaGitAlt />
                  <FaGithub />
                  <SiNetlify />
                  <SiRedux />
            </div>
          </Marquee>
          <div>
              <div className='flex px-10 gap-2 items-center h-4'>
                  <p>HTML</p>
                  <p className='bg-green-600 w-40 h-4 text-xs text-white text-end pr-2'>100</p>
            </div>
          </div>
    </div>
  )
}

export default Skills
