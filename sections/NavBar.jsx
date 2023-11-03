'use client'
import Link from 'next/link';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { navVariants } from '@/utils/motion';

 
function NavBar() {
  let [darkMode, setDarkMode] = useState(false);
  const [navbar, setNavbar] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => { 
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const changeBackground = () => {
    if(typeof window !== undefined && window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  const activeLink = () => {
    if(typeof window !== undefined && window.scrollY >= 0) {
      setActive('home')
    } 
    if(typeof window !== undefined && window.scrollY >= 320) {
      setActive('about')
    } 
    if(typeof window !== undefined && window.scrollY >= 1200) {
      setActive('services')
    } 
    if(typeof window !== undefined && window.scrollY >= 1580) {
      setActive('projects')
    }
    if(typeof window !== undefined && window.scrollY >= 2300) {
      setActive('contact')
    }
  }
  useEffect(() => {
    if(window === undefined) {
      return
    } else {
      window.addEventListener('scroll', () => {
        changeBackground()
        activeLink()
      })
    }
  }, [])
 
  
  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`${navbar && 'glass !border-none !backdrop-blur-xl !transition-all !duration-1000 !rounded-none shadow-xl dark:!shadow-xl [background:linear-gradient(135deg,rgba(255,255,255,0.3),rgba(255,255,255,0))] dark:[background:linear-gradient(135deg,rgba(255,255,255,0.2),rgba(255,255,255,0))]'} text-black dark:text-white  flex justify-between items-center px-10 md:px-10 lg:px-20 py-4 !transition-all !duration-1000  fixed md:fixed w-full z-50 overflow-hidden`}>
        <div>
            <h1 className='text-black dark:text-white text-2xl md:text-3xl font-bold'>Portfolio</h1>
        </div>

        <div className='gap-5 text-lg hidden md:flex font-semibold'>
          <div className='relative'>
            <Link href='#home' className={`${active === 'home' && 'belowline-1'} scroll-smooth belowline after:bg-black dark:after:bg-white text-black dark:text-white `}>Home</Link>
          </div>
          <div className='relative'>
            <Link href='#about' className={`${active === 'about' && 'belowline-1'} scroll-smooth belowline after:bg-black dark:after:bg-white text-black dark:text-white`}>About</Link>
          </div>
          <div className="relative">
            <Link href='#services' className={`${active === 'services' && 'belowline-1'} scroll-smooth belowline after:bg-black dark:after:bg-white text-black dark:text-white`}>Services</Link>
          </div>
          <div className="relative">
            <Link href='#projects' className={`${active === 'projects' && 'belowline-1'} scroll-smooth belowline after:bg-black dark:after:bg-white text-black dark:text-white`}>Projects</Link>
          </div>
          <div className="relative">
            <Link href='#contact' className={`${active === 'contact' && 'belowline-1'} scroll-smooth belowline after:bg-black dark:after:bg-white text-black dark:text-white`}>Contact</Link>
          </div>
        </div>

        <div onClick={() => {setDarkMode(!darkMode)}} className='cursor-pointer '>
          {
            darkMode ? <LightModeIcon className='text-black dark:text-white '/> : <DarkModeIcon className='text-black dark:text-white 0' />
          }
        </div>
    </motion.nav>
  )
}

export default NavBar;