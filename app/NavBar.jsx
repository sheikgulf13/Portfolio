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
  
  typeof window !== undefined && window.addEventListener('scroll', changeBackground)
  
  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`${navbar ? 'bg-white transition dark:bg-zinc-800 shadow-xl dark:!shadow-xl bg-opacity-60 bg-clip-padding dark:bg-opacity-80 active' : 'navbar' } text-black dark:text-white  flex justify-between items-center px-10 md:px-10 lg:px-20 py-4  fixed md:fixed w-full z-50 overflow-hidden`}>
        <div>
            <h1 className='gradient-text text-2xl md:text-3xl'>Portfolio</h1>
        </div>

        <div className='gap-5 text-xl hidden md:flex '>
            <Link href='/' className='hover:underline underline-offset-8 scroll-smooth' >Home</Link>
            <Link href='#about' className='hover:underline underline-offset-8 scroll-smooth'>About</Link>
            <Link href='#services' className='hover:underline underline-offset-8'>Services</Link>
            <Link href='#projects' className='hover:underline underline-offset-8'>Projects</Link>
            <Link href='#contact' className='hover:underline underline-offset-8'>Contact</Link>
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