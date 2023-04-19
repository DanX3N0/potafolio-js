import Link from 'next/link'
import './NavBar.modules.css'

export default function NavBar(){
   return (
      <div className='navContainer'>
         <Link className="nav" href="">
            About me
         </Link>
         <Link className="nav" href="">
            Skills
         </Link>
         <Link className="nav" href="">
            Projects
         </Link>
         <Link className="nav" href="">
            Work Experience
         </Link>
         <Link className="nav" href="">
            Formation
         </Link>
         <Link className="nav" href="">
            Contact me
         </Link>
      </div>
   )
}