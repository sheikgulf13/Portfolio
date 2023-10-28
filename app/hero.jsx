"use client";

import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import backgroundImg from '../public/hero-bg.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '@/utils/motion';
import { TypingText } from '@/components/CustomTexts';

function hero() {
  return (
    <div className='hero relative flex flex-col dark:bg-opacity-30 items-center justify-center h-screen max-w-screen'>
        {/*<div className='overflow-hidden'>
            <Image className='absolute inset-0 hero-img !h-full w-full object-cover bg-no-repeat !transition-all !duration-1000' src={backgroundImg} alt='hero-img'/>
            <div className='dark:absolute dark:inset-0 dark:h-full dark:bg-black dark:opacity-50 dark:!transition-all dark:!duration-1000'></div>
  </div>*/}
        <div className='absolute w-full inset-0 gradient-01'/>
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{once: false, amount: 0}}
            className='relative flex flex-col !max-h-full  md:flex-row lg:flex text-black items-start md:items-center justify-center lg:items-center md:!justify-center gap-5 md:gap-10'>
            <motion.div variants={textVariant(0.2)} className=' flex md:flex-col lg:flex-col gap-6 mt-5 text-xl'>
                <Link href={'https://www.linkedin.com/in/sheik-gulfaan-248285203'} target='blank' >
                    <LinkedInIcon className='hover:opacity-70 text-2xl social-link' />
                </Link>

                <Link href={'https://twitter.com/sheik_gulfaan'} target='blank'>
                    <TwitterIcon className='hover:opacity-70 text-2xl social-link' />
                </Link>

                <Link href={'https://github.com/sheikgulf13'} target='blank'>
                    <GitHubIcon className='hover:opacity-70 text-2xl social-link' />
                </Link>
            </motion.div>
            <div className='flex-col md:pl-20'>
                <motion.h5 variants={textVariant(0)} className='text-3xl md:text-6xl lg:text-6xl text-black dark:text-white dark:drop-shadow-xl'>Sheik Gulfaan</motion.h5>
                <motion.h5 variants={textVariant(0.2)} className='mt-3 text-xl md:2xl lg:text-2xl text-black dark:text-white dark:drop-shadow-lg'>Frontend Developer</motion.h5>
                <motion.div variants={textVariant(0.4)} className='flex gap-8 pt-6'>
                    <Link href='#contact' className='bg-white text-black px-5 py-3 rounded-md hover:opacity-70  social-link-2 dark:text-white dark:bg-black next-link  dark:!transition-colors dark:!duration-1000 !transition-all !duration-1000'>Let's Connect</Link>
                    <Link href='#projects' className='bg-white text-black px-5 py-3 rounded-md hover:opacity-70 next-link transition-all social-link-2 dark:text-white dark:bg-black next-link dark:!transition-colors dark:!duration-1000'>My Work</Link>
                </motion.div>
            </div>
        </motion.div>
      </div>
  )
}

export default hero;