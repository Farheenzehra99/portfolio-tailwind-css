import Image from "next/image";
import React from "react";
const AboutSection: React.FC = () => {
  return (
    <section>
        <div className="flex-col items-center container mx-auto">

        <h1 className="lg:text-4xl md:text-4xl text-3xl font-serif text-center text-white">About <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-600 via-blue-600 to-pink-600 font-serif lg:text-5xl md:text-5xl text-4xl">Me</span></h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-4 px-4 xl:gap-16 sm:py-16 xl:px-16">

        <Image
          src="/pictures/about.jpg"
          alt="About Section Image"
          width={500}
          height={500}
          className="transition-shadow duration-300 ease-in hover:shadow-[0_0_8px_6px_rgba(182,27,79)] rounded"
        />
        <div className="mt-4 md:mt-0 text-left flex-col h-full">

          <div className="sm:text-center w-full border-4 rounded-full px-2 py-2 border-double border-pink-600 mb-8 mt-8 transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(70,150,255)] hover:scale-105">
         <div className="sm:text-center w-full border-4 rounded-full px-2 py-2 border-blue-600">
        <p className="lg:text-[1rem] text-base mb-6 rounded-full block bg-[#121212] pt-4 text-white">
        My name is Syeda Farheen Zehra, and I am a dedicated front-end web developer with expertise in TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Next.js, and Node.js. Alongside web development, I also have a strong background in graphic design.            <br /> </p>
        </div>
        </div>

        <div className="sm:text-center w-full border-4 rounded-full px-2 py-2 border-double border-pink-600 mb-8 mt-8 transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(70,150,255)] hover:scale-105">
         <div className="sm:text-center w-full border-4 rounded-full px-2 py-2 border-blue-600">
        <p className="lg:text-[1rem] text-base mb-6 rounded-full block bg-[#121212] pt-4 text-white">
        I completed my Matriculation from Govt. Girls High School, Mirpurkhas in 1996-1997 with an `&quot;`A`&quot;` grade (76%). I pursued Intermediate in Pre-Medical from Govt. Ibne Rushd College, Mirpurkhas in 1998-1999. I graduated from the University of Sindh, Jamshoro in 2000-2003 and completed my B.Ed from the same university in 2004-2005.
<br />
            </p>
            </div>
            </div>

            <div className="sm:text-center w-full border-4 rounded-full px-2 py-2 border-double border-pink-600 mb-8 mt-8 transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(70,150,255)] hover:scale-105">
         <div className="sm:text-center w-full border-4 rounded-full px-2 py-2 border-blue-600">
        <p className="lg:text-[1rem] text-base mb-6 rounded-full block bg-[#121212] pt-4 text-white">
        I thrive on exploring cutting-edge technologies and taking on exciting new challenges. I’m passionate about personal growth and equally dedicated to helping others learn and succeed alongside me. My mission is to innovate, inspire, and make a lasting impact through collaboration and shared knowledge.            </p>
            </div>
            </div>
            </div>  
      </div>
      {/* </BackgroundBeamsWithCollision> */}
      </div>
    </section>
  );
};

export default AboutSection;