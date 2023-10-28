"use client"

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';

function footer() {
  return (
    <div className=' z-10 text-black dark:text-white flex flex-col justify-center items-center gap-5 py-10'>
        <h4 className='text-xl opacity-80 hover:underline underline-offset-4'>Email: sheikgulf01@gmail.com</h4>

        <div className='flex gap-6'>
            <Link href={'https://www.linkedin.com/in/sheik-gulfaan-248285203'} target='blank'>
                <LinkedInIcon className='hover:opacity-70 text-3xl social-link-2' />
            </Link>

            <Link href={'https://twitter.com/sheik_gulfaan'} target='blank'>
                <TwitterIcon className='hover:opacity-70 text-3xl social-link-2' />
            </Link>

            <Link href={'https://github.com/sheikgulf13'} target='blank'>
                <GitHubIcon className='hover:opacity-70 text-3xl social-link-2' />
            </Link>
        </div>
    </div>
  )
}

export default footer;