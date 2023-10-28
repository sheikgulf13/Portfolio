"use client";
import BadgeIcon from '@mui/icons-material/Badge';
import WindowIcon from '@mui/icons-material/Window';
import Link from 'next/link';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { fadeIn, planetVariants, slideIn, staggerContainer } from '@/utils/motion';
import { TypingText, TitleText } from '@/components/CustomTexts';
import { motion } from 'framer-motion';

function About() {

  return (
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}
     id='about' className='relative z-4 flex flex-col md:flex-row md:justify-center gap-x-36 items-center pb-1 md:pb-4 about-div md:h-screen lg:h-screen overflow-hidden'>

        <motion.div variants={fadeIn('right', 'tween', 0, .3)}  className='hidden md:hidden lg:flex z-10 bg-zinc-100 dark:bg-zinc-800 p-5 img-div rounded-md '>
          <img src="https://img.freepik.com/premium-vector/cartoon-man-is-sitting-computer-wearing-headphones_120309-124.jpg" alt="" className='rounded-md' />
        </motion.div>

        <motion.div variants={fadeIn('left', 'tween', 0, .3)} className='flex z-10 flex-col items-center gap-5'>
          <TypingText textStyles='text-black dark:text-white text-2xl md:text-3xl pb-10 py-10' title='About Me' />
          <div className='flex justify-around gap-7 z-10'>
            <motion.div  className='flex flex-col z-20 items-center bg-zinc-100 text-black dark:text-black dark:bg-white dark:hover:bg-zinc-800 rounded-md px-6 py-8 !hover:z-20 md:px-12 md:py-7 gap-5 hover:bg-transparent hover:text-black dark:hover:text-white dark:hover:bg-transparent hover:border-none icon-div'>
              <BadgeIcon className='icon text-4xl p-1'/>
              <h4 className='text-md md:text-lg'>Experience</h4>
              <span className='text-xs md:text-sm'>Fresher</span>
            </motion.div>
            <motion.div  className='flex z-10 flex-col items-center bg-zinc-100 text-black dark:text-black dark:bg-white dark:hover:bg-zinc-800 rounded-md px-6 py-8 md:px-12 md:py-7 hover:z-10 gap-5 hover:bg-transparent hover:border-none hover:text-black dark:hover:text-white dark:hover:bg-transparent icon-div '>
              <WindowIcon className='icon text-4xl p-1'/>
              <h4 className='text-md md:text-lg'>Projects</h4>
              <span className='text-xs md:text-sm'>10+ Projects</span>
            </motion.div>
          </div>
          <TitleText  textStyles='text-sm md:text-xl py-10 text-black dark:text-white' title='kdhalsvb' />
          <motion.div  className='pb-16'>
            <Link href='#' className='px-5 py-3 text-sm md:text-xl flex items-center bg-zinc-100 text-black dark:bg-white dark:text-black rounded-md social-link-2  hover:bg-green-500 dark:hover:bg-green-500'>Download Resume <DownloadRoundedIcon /></Link>
          </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About;