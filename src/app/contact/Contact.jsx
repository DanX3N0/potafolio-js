import './Contact.modules.css';
import Link from 'next/link';
export default function Contact(){
   return(
      <div  className="logoContact">
         <h2>MY SOCIALS:</h2>

         <p>Github</p>
         <Link className='githubContact' href='https://github.com/DanX3N0'>
         </Link>

         <p>Gmail</p>
         <Link className='gmailContact' href='contact/'>
            danieldv283@gmail.com
         </Link>

         <p>WhatsApp</p>
         <Link className='whatsAppContact' href='https://wa.me/59174249453'>
         </Link>
      </div>
   )
}