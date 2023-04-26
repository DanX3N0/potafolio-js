'use client';
import Link from 'next/link';
import './Body.modules.css'
import 'animate.css';

const  Body = () => {
   return (
      <div className="body">
         
            <Link href="/about" className='linkBody'>
               About me
            </Link>
            <Link href="/projects" className='linkBody'>
               Projects
            </Link>
            <Link href="/skills" className='linkBody'>
               Skills
            </Link>
            <Link href="/experience" className='linkBody'>
               Experience
            </Link>
            <Link href="/contact" className='linkBody'>
               Contact me
            </Link>
            <Link href="/formation" className='linkBody'>
               Formation
            </Link>
         
      </div>
   )
}

export default Body;