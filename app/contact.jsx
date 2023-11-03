'use client'

import { TypingText } from '@/components/CustomTexts'
import { MailRounded, WhatsApp } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utils/motion'

const Contact = () => {
  return (
    <motion.div
        variants={fadeIn('left', 'spring', 0.2, 0)}
        initial='hidden'
        whileInView='show'
        id='contact'
        className='flex flex-col py-10 items-center z-10 relative pb-20'
    >
      <div className='absolute feedback-gradient z-0 overflow-hidden'/>
      <TypingText title='Hire Me' textStyles='text-black dark:text-white text-2xl md:text-3xl pt-10 pb-10 text-black dark:text-white font-bold' />

      <div className='flex gap-10 py-10 pb-24'>
        <Link href='mailto:sheikgulf01@gmail.com' target='blank' className='!rounded-xl social-link-2 dark:social-link-2 ![box-shadow:5px_8px_22px_0_rgba(0,0,0,0.17)] [background:linear-gradient(135deg,rgba(255,255,255,0.5),rgba(255,255,255,0.3))] dark:[background:linear-gradient(135deg,rgba(255,255,255,0.2),rgba(255,255,255,0))] !transition-all !duration-500 dark:!transition-all dark:!duration-500 p-3 shadow-lg glass hover:[background:linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0))] dark:hover:[background:linear-gradient(135deg,rgba(255,255,255,0.5),rgba(255,255,255,0.2))]'>
          <MailRounded className='text-black dark:text-white text-2xl md:text-4xl'/>
        </Link>
        <Link href='https://wa.me/8489971978' target='blank' className='!rounded-xl social-link-2 dark:social-link-2 ![box-shadow:5px_8px_22px_0_rgba(0,0,0,0.17)] [background:linear-gradient(135deg,rgba(255,255,255,0.5),rgba(255,255,255,0.3))] dark:[background:linear-gradient(135deg,rgba(255,255,255,0.2),rgba(255,255,255,0))] !transition-all !duration-500 dark:!transition-all dark:!duration-500 p-3 shadow-lg glass hover:[background:linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0))] dark:hover:[background:linear-gradient(135deg,rgba(255,255,255,0.5),rgba(255,255,255,0.2))]'>
          <WhatsApp className='text-black dark:text-white text-2xl md:text-4xl'/>
        </Link>
      </div>
    </motion.div>
  )
}

export default Contact