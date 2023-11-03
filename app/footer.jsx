"use client"

import { fadeIn, footerVariants, slideIn } from '@/utils/motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
import { motion } from 'framer-motion';

function footer() {
  return (
    <motion.div
        variants={footerVariants}
        initial='hidden'
        whileInView='show'
        className='z-50 text-black dark:text-white flex flex-col justify-center items-center gap-5 py-10 relative'
    >
        <div className='footer-gradient !w-[40%] z-0 overflow-hidden '/>
        <motion.div
            variants={slideIn('left', 'tween', 0.2, 0)}
         className='w-[80%] items-center z-0 overflow-hidden absolute top-[-10%] border-t-[2px] glass bg-zinc-800 dark:bg-white bg-opacity-60 dark:bg-opacity-60 '/>
        {/*<div className='relative z-10'>
            <h4
                className={`text-xl hover:opacity-60  belowline after:bg-black dark:after:bg-white text-black dark:text-white`}>
                    Email: sheikgulf01@gmail.com
            </h4>
  </div>*/}

        <div className='flex gap-6 z-10'>
            <Link href={'https://www.linkedin.com/in/sheik-gulfaan-248285203'} target='blank'>
                <LinkedInIcon className='hover:opacity-70 text-3xl social-link-2 text-black dark:text-white' />
            </Link>

            <Link href={'https://twitter.com/sheik_gulfaan'} target='blank'>
                <TwitterIcon className='hover:opacity-70 text-3xl social-link-2 text-black dark:text-white' />
            </Link>

            <Link href={'https://github.com/sheikgulf13'} target='blank'>
                <GitHubIcon className='hover:opacity-70 text-3xl social-link-2 text-black dark:text-white' />
            </Link>
        </div>
    </motion.div>
  )
}

export default footer;