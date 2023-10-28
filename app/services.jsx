'use client'
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import DvrRoundedIcon from '@mui/icons-material/DvrRounded';
import { TypingText, TitleText } from '@/components/CustomTexts';
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '@/utils/motion';

const Services = () => {
  return (
    <motion.div variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}} id='services' className='  w-full flex flex-col items-center justify-center py-10 overflow-hidden'>
        <TypingText textStyles='text-black dark:text-white text-2xl md:text-3xl pt-10 pb-5' title='My Services' />
        <TitleText textStyles='pb-10 text-black dark:text-white' title='uhcsidbl'/>
        <div className='flex flex-col md:flex-row gap-20 pb-20'>
            <motion.div variants={fadeIn('left', 'spring', 0.2, .5)}  className='flex z-10 bg-white text-black dark:bg-black dark:text-white w-80 md:w-80 lg:w-96 gap-5 rounded-md px-10 py-7'>
                <div>
                    <DvrRoundedIcon />
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <h4>Frontend Developer</h4>
                    <p>dcbuhi</p>
                </div>
            </motion.div>

            <motion.div variants={fadeIn('right', 'spring', 0.2, .5)}  className='flex z-10 bg-white text-black dark:bg-black dark:text-white w-80 md:w-80 lg:96 gap-5 rounded-md px-10 py-7'>
                <div>
                    <StorageRoundedIcon />
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <h4>Frontend Developer</h4>
                    <p>dvhduoh</p>
                </div>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default Services