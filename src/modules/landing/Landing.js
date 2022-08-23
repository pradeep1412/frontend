import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import icon from '../../../public/Admin/images/icon.png'
import Footer from '../footer/Footer'
function Landing() {
  return (
    <div>
      <ul className='Header'>
        <li>2022</li>
        <li>Branding,identity,Digital Products,<br/>UX/UI Design,Webflow</li>
        <li className='icon'><Image src={icon} alt='icon'/></li>
        <li>https://webflow.redis.agency</li>
        <li><Link className='Credentials' href="www.instagram.com">Login</Link></li>
        <li><Link className='Credentials' href="www.instagram.com">Sign Up</Link></li>
      </ul>
      <div>
      <p className='Content'>TAKE WEBFLOW,ADD 12 YEARS OF DESIGN <br/>EXPERIENCE,A FLUFFY CAT AND A PINCH<br/>OF PASSION.THAT&#180;S US.WE ARE<br/>DESIGNERS WHO CODE.</p>
      </div>
      <div>
        <p className='Lowercontent'>REDIS®<br/>WEBFLOW</p>
      </div>
     <Footer/>
   </div>
   
  )
}

export default Landing