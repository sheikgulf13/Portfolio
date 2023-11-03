'use client'
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import DvrRoundedIcon from '@mui/icons-material/DvrRounded';
import { TypingText, TitleText } from '@/components/CustomTexts';
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '@/utils/motion';
import { Card } from '@/components/Card';
import { ServiceCard } from '@/components/ServiceCard';

const Services = () => {
  return (
    <motion.div variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}} id='services' className='  w-full flex flex-col items-center justify-center py-10 relative'>
        <div className='absolute gradient-04 z-0 overflow-hidden'/>
        <TypingText textStyles='text-black dark:text-white text-2xl md:text-3xl pt-10 pb-5 text-black dark:text-white font-bold' title='My Services' />
        <TitleText textStyles='pb-10 text-black dark:text-white font-medium text-lg' title='I have done my hands on given things'/>
        <div className='flex flex-col md:flex-row !gap-20 pb-20 relative w-full !items-center !justify-center [perspective:1000px]'>
            <motion.div
                 variants={fadeIn('left', 'spring', 0.2, 0)}
                 className='z-20 '
            >
                <ServiceCard 
                    textStyles='text-black dark:text-white  gap-4'
                    element={<DvrRoundedIcon className='text-black dark:text-white text-4xl'/>}
                    name='Frontend Developer'
                    title='I have a solid grasp of JavaScript, React, Next.js, and Tailwind CSS. Your product will look good and will be accesible on all devices.'
                    style2='items-start gap-2 z-10000'
                />
            </motion.div>
            
            <motion.div
                variants={fadeIn('right', 'spring', 0.2, 0)}
            >
                <ServiceCard   
                    textStyles='text-black dark:text-white gap-4'
                    element={<StorageRoundedIcon className='text-black dark:text-white text-4xl'/>}
                    name='Backend Developer'
                    title="I have experince in Express.js, Node.js, and MongoDB. I'm committed to building the sturdy infrastructure that keeps web systems running smoothly and reliably."
                    style2=' flex flex-col items-start gap-2'
                />
            </motion.div>
            

            
        </div>
    </motion.div>
  )
}

export default Services