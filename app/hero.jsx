"use client";

import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function hero() {
  return (
    <div className='hero flex flex-col items-center justify-center'>
        <div className='flex flex-col mr-40 text-gray-800'>

        <h2 className='text-6xl'>Hi! I am <span className='text-white'>Sheik Gulfaan</span></h2>
        <h5 className='mt-3 text-2xl'>Frontend Developer</h5>

        <div className='flex gap-6 mt-5 text-xl'>
            <Link href={'https://www.linkedin.com/in/sheik-gulfaan-248285203'} target='blank'>
                <LinkedInIcon className='hover:opacity-70 text-2xl' />
            </Link>

            <Link href={'https://twitter.com/sheik_gulfaan'} target='blank'>
                <TwitterIcon className='hover:opacity-70 text-2xl' />
            </Link>

            <Link href={'https://github.com/sheikgulf13'} target='blank'>
                <GitHubIcon className='hover:opacity-70 text-2xl' />
            </Link>
        </div>
        </div>
      </div>
  )
}

export default hero;