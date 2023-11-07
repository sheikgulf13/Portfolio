import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectCard = ({ title, desc, imgUrl, github, liveSite }) => {
  return (
    <motion.div layout className='glass relative [background:linear-gradient(135deg,rgba(255,255,255,0.5),rgba(255,255,255,0.3))] dark:[background:linear-gradient(135deg,rgba(255,255,255,0.2),rgba(255,255,255,0))] !transition-colors !duration-1000 dark:!transition-all dark:!duration-500 project-card w-[280px] h-[40vh] md:h-[400px] p-5 flex flex-col hover:cursor-pointer social-link-3 dark:social-link-3'>
        <img src={imgUrl} alt='project img' className='rounded-lg w-[220px] md:w-[260px] h-[120px] md:h-[150px] mb-5' />
        <h4 className='text-xl break-words mb-1 text-black dark:text-white font-bold'>{title}</h4>
        <p className='!break-words text-black dark:text-white font-light text-sm'>{desc}</p>
        <div className='flex absolute bottom-7 gap-5'>
            <Link href={`${liveSite}`} target='blank' className='glass px-3 py-2 !rounded-xl !shadow-xl [background:linear-gradient(135deg,rgba(255,255,255,0.3),rgba(255,255,255,0))] dark:[background:linear-gradient(135deg,rgba(255,255,255,0.2),rgba(255,255,255,0))] text-black dark:text-white hover:[background:linear-gradient(135deg,rgba(255,255,255,0.7),rgba(255,255,255,0.5))] dark:hover:[background:linear-gradient(135deg,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] !transition-all !duration-1000 dark:!transition-all dark:!duration-500 social-link-2 dark:social-link-2 font-semibold text-md'>
                Live Site
            </Link>
            <Link href={`${github}`} target='blank' className='glass px-3 py-2 !rounded-xl !shadow-xl [background:linear-gradient(135deg,rgba(255,255,255,0.3),rgba(255,255,255,0))] dark:[background:linear-gradient(135deg,rgba(255,255,255,0.2),rgba(255,255,255,0))] text-black dark:text-white hover:[background:linear-gradient(135deg,rgba(255,255,255,0.7),rgba(255,255,255,0.5))] dark:hover:[background:linear-gradient(135deg,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] !transition-all !duration-1000 dark:!transition-all dark:!duration-500 social-link-2 dark:social-link-2 font-semibold text-md'>
                Github
            </Link>
        </div>
    </motion.div>
  )
}

export default ProjectCard