"use client";

import { TypingText } from '@/components/CustomTexts';
import { fadeIn, staggerContainer } from '@/utils/motion';
import CardMedia from '@mui/material/CardMedia';
import Link from 'next/link';

function myProject() {
  return (
    <div variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0}} id='projects' className='flex flex-col max-h-screen text-black dark:text-white justify-center items-center py-10 pb-24 overflow-hidden'>
        <TypingText textStyles='text-4xl font-extrabold my-5 mb-20' title='My Projects' />

        <div variants={fadeIn('down', 'spring', 0.2, .5)} className='flex z-10 gap-5 md:gap-10 project-cat'>
            <button className='bg-zinc-100 text-black hover:bg-zinc-800 focus:bg-black focus:text-white hover:text-white dark:bg-black dark:text-white dark:hover:bg-zinc-100 dark:hover:text-black dark:focus:bg-white dark:focus:text-black px-5 py-2 rounded-lg'>All</button>
            <button className='bg-zinc-100 text-black hover:bg-zinc-800 focus:bg-black focus:text-white hover:text-white dark:bg-black dark:text-white dark:hover:bg-zinc-100 dark:hover:text-black dark:focus:bg-white dark:focus:text-black px-5 py-2 rounded-lg'>FullStack</button>
            <button className='bg-zinc-100 text-black hover:bg-zinc-800 focus:bg-black focus:text-white hover:text-white dark:bg-black dark:text-white dark:hover:bg-zinc-100 dark:hover:text-black dark:focus:bg-white dark:focus:text-black px-5 py-2 rounded-lg'>Frontend</button>
            <button className='bg-zinc-100 text-black hover:bg-zinc-800 focus:bg-black focus:text-white hover:text-white dark:bg-black dark:text-white dark:hover:bg-zinc-100 dark:hover:text-black dark:focus:bg-white dark:focus:text-black px-5 py-2 rounded-lg'>Backend</button>
        </div>
    </div>
  )
}

export default myProject;