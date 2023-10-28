'use client'
import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Hero from './hero';
import MyProject from './myProject';
import About from './about';
import Services from './services';

const allPages = () => {
    
  return (
    <div className='overflow-hidden sm:overflow-hidden md:overflow-hidden'>
        <Hero />
        <div className='relative'>
        <About />
        <div className='gradient-03 z-0'/>
        </div>
        <div className='relative'>
        <Services />
        <div className='gradient-04 z-0'/>
        </div>
        
        <MyProject />
    </div>
  )
}

export default allPages