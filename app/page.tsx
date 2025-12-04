"use client"

import Image from "next/image";
import { motion } from "motion/react"
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function Home() {
  return (
   <div className="h-[82vh] flex justify-center items-center flex-col gap-10">
      <motion.h1 initial={{
        translateX:-1500
      }} animate={{
        translateX: 0,
        transition: { duration: 2 }
      }} className="text-6xl font-bold">I am React/Next Frontend Developer</motion.h1>
      <motion.p initial={{
        translateX: 1500
      }} animate={{
        translateX: 0,
        transition: { duration: 2 }
      }} className="w-[70%] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iure vero eos. Quo necessitatibus modi eos vitae voluptate cupiditate accusantium alias, qui exercitationem consequatur ad.</motion.p>
      <motion.a initial={{
        translateY: -500
      }} animate={{
        translateY: 0,
        transition: { duration: 2 }
      }} href="http://" className="bg-orange-500 text-white py-2 px-6 cursor-pointer">Download My CV</motion.a>
    <div className="flex gap-2 text-2xl">
        <FaTelegram />
        <FaInstagram />
        <FaFacebook />
        <FaYoutube />
    </div>
   </div>
  );
}
