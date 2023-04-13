import Link from 'next/link';
 
function NavBar() {
  return (
    <nav className='bg-gradient-to-r from-slate-200 to-slate-300 flex justify-between items-center  px-4 md:px-10 lg:px-20 py-4 shadow-xl'>
        <div>
            <h1 className='gradient-text text-3xl'>Portfolio</h1>
        </div>

        <div className='flex gap-5 text-xl'>
            <Link href='/' className='hover:underline underline-offset-8'>Home</Link>
            <Link href={'/projects'} className='hover:underline underline-offset-8'>Projects</Link>
        </div>
    </nav>
  )
}

export default NavBar;