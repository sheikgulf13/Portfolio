"use client";
import Image from 'next/image';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function skills() {

  return (
    <div className='skills flex flex-col justify-center items-center py-8'>
        <h2 className='text-4xl font-extrabold my-5 mb-10'>Skills</h2>

        <div className='flex flex-col justify-center items-center gap-5 lg:flex-row-reverse lg:gap-20'>

            <ul className='text-xl font-bold grid grid-cols-2 gap-y-8 gap-x-24 p-20 bg-slate-50 rounded-2xl'>
                <li><FiberManualRecordIcon/> HTML</li>
                <li><FiberManualRecordIcon/> CSS</li>
                <li><FiberManualRecordIcon/> javaScript</li>
                <li><FiberManualRecordIcon/> Tailwind css</li>
                <li><FiberManualRecordIcon/> Sass</li>
                <li><FiberManualRecordIcon/> react.js</li>
                <li><FiberManualRecordIcon/> Next.js</li>
                <li><FiberManualRecordIcon/> typeScript</li>
                <li><FiberManualRecordIcon/> Material UI</li>
            </ul>
        </div>
    </div>
  )
}

export default skills;