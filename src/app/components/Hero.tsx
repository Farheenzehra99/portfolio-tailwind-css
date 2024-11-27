 "use client"
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaEnvelope, FaLinkedin, FaInstagram, FaDiscord, FaFacebook } from "react-icons/fa";
import { BackgroundBeamsWithCollision } from './BackgroundBeamsWithCollision';
function Hero() {
  return (
    
        <section className="text-white body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col">
    <BackgroundBeamsWithCollision>
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      
    <div className="container mx-auto px-4 lg:px-8 py-8">
        <h1 className="lg:text-5xl  text-4xl font-serif  mb-12 text-white">
          I &apos;m{" "}<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-blue-600 to-pink-400 font-serif lg:text-5xl md:text-5xl text-4xl">
            Syeda Farheen Zehra
          </span>
        </h1>
</div>

<h1 className="px-9 text-transparent bg-clip-text bg-gradient-to-br from-pink-700 via-blue-600 to-pink-700 font-serif lg:text-5xl md:text-5xl text-4xl">
    
        <Typewriter
  options={{
    strings: ['Web Developer', 'UI/UX Designer', 'Programmer', 'Graphic Designer'],
    autoStart: true,
    loop: true,
  }}
  /> 
      </h1>
      <div className='w-[300px] h-[2px] bg-blue-600 ml-10'></div>
      <p className="mb-8 leading-relaxed font-serif text-3xl px-8 ">
       Future Cloud Applied Gen-AI Engineer...</p>
      

       <div className='px-8'>
        <Link href="/contact">
            <button className="sm:text-center w-full lg:w-[8rem] px-6 py-3 rounded-full mr-3 sm:w-fit font-semibold bg-gradient-to-br from-pink-900 via-blue-900 to-pink-900 text-white hover:scale-105 hover:animate-pulse hover:shadow-[0_0_8px_6px_rgba(52,27,190)]"> Contact</button>
        </Link>
        <a href="/cv/Farheen Zehra Resume.pdf">
        <button className="sm:text-center w-full lg:w-[8rem] px-2 py-3 rounded-full mr-3 sm:w-fit font-semibold bg-gradient-to-br from-pink-900 via-blue-900 to-pink-900 text-white hover:scale-105 hover:animate-pulse hover:shadow-[0_0_8px_6px_rgba(52,27,190)]">
        Download CV
            </button>
          </a>        </div>    
          
        {/* Social Links */}
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 px-5 py-4 mb-4">
            <a href="https://github.com/Farheenzehra99" target="_blank" rel="nooper noreferrer" className="transition-transform transform hover:scale-110 hover:text-white p-2 rounded-full text-white" style={{fontSize: "2rem"}}>
            <FaGithub />
          </a>
          <a href="mailto:farheenzehra481@gmail.com" target="_blank" rel="nooper noreferrer" className="transition-transform transform hover:scale-110 hover:text-blue-800 p-2 rounded-full text-white" style={{fontSize: "2rem"}}>
            <FaEnvelope />
            </a>
            <a href="https://www.instagram.com/farheen11099/" target="_blank" rel="nooper noreferrer" className="transition-transform transform hover:scale-110 p-2 hover:text-pink-700 rounded-full text-white" style={{fontSize: "2rem"}}>
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/syeda-farheen-zehra-648459268/" target="_blank" rel="nooper noreferrer" className="transition-transform transform hover:scale-110 hover:text-blue-700 p-2 rounded-full text-white" style={{fontSize: "2rem"}}>
            <FaLinkedin />
           </a>
           <a href="https://discord.com/channels/790484092772548613/1190584161359122552" target="_blank" rel="nooper noreferrer" className="transition-transform transform hover:scale-110 hover:text-blue-700 p-2 rounded-full text-white" style={{fontSize: "2rem"}}>
            <FaDiscord />
           </a>
           <a href="https://www.facebook.com/profile.php?id=61552506270420" target="_blank" rel="nooper noreferrer" className="transition-transform transform hover:scale-110 hover:text-blue-700 p-2 rounded-full text-white" style={{fontSize: "2rem"}}>
            <FaFacebook />
           </a>


            </div>
      

    </div>
    <div
            className="rounded-full bg-[#070730] lg:w-[400px] lg:h-[400px]
            w-[250px] h-[250px] relative hover:animate-pulse"
          >
            <Image
              src="/pictures/hero.jpg"
              alt="Hero Section Image"
              width={350}
              height={350}
              className="transition-shadow duration-300 ease-in hover:shadow-[0_0_8px_6px_rgba(252,27,90)] rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>  
          </BackgroundBeamsWithCollision>
          </div>
</section>

  )
}

export default Hero;