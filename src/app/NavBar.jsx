'use client';
import Link from 'next/link'
import './NavBar.modules.css'
import 'animate.css';
import {BsBorderWidth} from "react-icons/bs";
import { useState } from 'react';
const NavBar = () => {
   const [name2, setName2] = useState("topnav");
   
   function showItems(){
      if(name2 == "topnav"){
         setName2("topnav responsive");
      }else{
         setName2("topnav");
      }
   }

   function close(){
      setName2("topnav");
   }

   return (
      <div className={name2}>
         <Link className="link" href="/" onClick={close}>
            Home
         </Link>
         <Link className="link" href="/about" onClick={close}>
            About me
         </Link>
         <Link className="link" href="/skills" onClick={close}>
            Skills
         </Link>
         <Link className="link" href="/projects" onClick={close}>
            Projects
         </Link>
         <Link className="link" href="/experience" onClick={close}>
            Work Experience
         </Link>
         <Link className="link" href="/formation" onClick={close}>
            Formation
         </Link>
         <Link className="link" href="/contact" onClick={close}>
            Contact me
         </Link>

         <button className='icon' onClick={showItems}>
            <BsBorderWidth/>
         </button>
      </div>
   )
}

export default NavBar;