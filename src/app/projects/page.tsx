import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
 
import { BackgroundBeamsWithCollision } from '../components/BackgroundBeamsWithCollision'


const Project = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <BackgroundBeamsWithCollision>
   
    <div>
        <section className="text-white body-font bg-black">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
    <h2 className="lg:text-4xl md:text-4xl text-3xl font-serif text-center mb-12 text-white">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-blue-600 to-pink-400 font-serif lg:text-5xl md:text-5xl text-4xl">
            Projects
          </span>
        </h2>
    </div>
    <div className="flex flex-wrap -m-8">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/pictures/back-1.jpg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
              Event Management Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Event Management
            </h1>
            <p className="leading-relaxed text-black " >
            &ldquo; A streamlined event management website designed to simplify planning and deliver exceptional experiences effortlessly.&ldquo;            </p>
              <Link href={"https://event-website-tau.vercel.app/"}>
              <p className="leading-relaxed text-blue-600 hover:underline ">
              View Project..</p>
              </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/pictures/cover-01-01.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
              Desert Safari Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Desert Safari
            </h1>
            <p className="leading-relaxed text-black " >
            &ldquo; A visually stunning desert safari website showcasing various attractions, unique experiences, and a unique design.   &ldquo;  </p>
              <Link href={"https://desert-safari-website.vercel.app/"}>
              <p className="leading-relaxed text-blue-600 hover:underline ">
              View Project..</p>
              </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/pictures/Screenshot (215).png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
              Shan Foods Website Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Shan foods Clone Website
              </h1>
            <p className="leading-relaxed text-black " >
            &ldquo; A clone website of Shan Foods, featuring a modern, visually appealing design, and a user-friendly interface. &ldquo;     </p>
              <Link href={"https://shan-foods-clone-website.vercel.app/"}>
              <p className="leading-relaxed text-blue-600 hover:underline ">
              View Project..</p>
              </Link>
              <p className='text-white'>Explore more</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/pictures/Screenshot (237).png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
              Coffee Shop Website Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Coffee Shop Website              </h1>
            <p className="leading-relaxed text-black " >
            &ldquo;  Crafted a modern, responsive website for a coffee shop client, blending design elegance with seamless functionality to enhance their online presence. &ldquo;</p>
            <Link href={"coffee-shop-tailwind-css.vercel.app"}>
              <p className="leading-relaxed text-blue-600 hover:underline ">
              View Project..</p>
              </Link>
              <p className='text-white'>Explore more</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/pictures/Screenshot (236).png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
              Portfolio Website Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Portfolio Website
              </h1>
            <p className="leading-relaxed text-black " >
            &ldquo; Designed and developed a fully responsive portfolio website using HTML, CSS, and JavaScript, showcasing my projects, skills, and expertise in web development.&ldquo;</p>
                          <Link href={"https://shan-foods-clone-website.vercel.app/"}>
              <p className="leading-relaxed text-blue-600 hover:underline ">
              View Project..</p>
              </Link>
              <p className='text-white'>Explore more</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/pictures/Screenshot (238).png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
              Restaurant Website Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Restaurant Website
              </h1>
            <p className="leading-relaxed text-black " >
            &ldquo; Built a responsive restaurant website with HTML, CSS, and JavaScript, offering modern design, intuitive navigation, and essential features for an excellent user experience. &ldquo; </p>
                          <Link href={"https://shan-foods-clone-website.vercel.app/"}>
              <p className="leading-relaxed text-blue-600 hover:underline ">
              View Project..</p>
              </Link>
              <p className='text-white'>Explore more</p>
          </div>
        </div>
      </div>



    </div>
  </div>
</section>

    </div>
    </BackgroundBeamsWithCollision>
    </main>
  )
}

export default Project;