"use client";
import React, { useState }  from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon} from "@heroicons/react/16/solid";
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';

export const navbarLinks = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Skills",
        path: "/skills"
    },
    {
        title: "Projects",
        path: "/projects"
    },
    {
        title: "Contact",
        path: "/contact"
    },
]

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false); 
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-40'>
      <div className='flex flex-wrap items-center justify-between px-4 py-2'>
           <Link href="" className="flex title-font  items-center text-white mb-4 md:mb-0">
           <div className="w-16 h-16 relative transition-shadow duration-300 ease-in hover:shadow-[0_0_8px_6px_rgba(252,27,90)] rounded-full overflow-hidden">
           <Image
                 src="/pictures/logo.png"
                 alt="Logo"
                 layout="fill"
                 objectFit="cover"
                className="rounded-full" />
                </div>
           </Link>
        <div className='block md:hidden'>
           {!isNavbarOpen? (
            <button onClick={() => setIsNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-pink-500 hover:border-purple-700'>
                <Bars3Icon className="h-5 w-5" />
            </button>
           ): (
            <button onClick={() => setIsNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-pink-500 hover:border-purple-700'>
                <XMarkIcon className="h-5 w-5" />
            </button>
           )}
        </div>
        <div className='hidden md:block pt-6 pr-6' id='navbar'>
            <ul className='flex md:flex-row p-4 md:p-0 md:space-x-8 mt-0'>
               {
                navbarLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink href={link.path} title={link.title} />
                    </li>
                ))
               }
            </ul>
        </div>
      </div>
      {isNavbarOpen? <MenuOverlay links={navbarLinks}/>: null }
    </nav>
  )
}

export default Navbar;