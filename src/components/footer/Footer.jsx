import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>Olsson Fredrik</a>
      <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">about</a></li>
      <li><a href="#experience">experience</a></li>
      <li><a href="#portfolio">portfolio</a></li>
      <li><a href="#services">work</a></li>
      <li><a href="#testimonials">testimonials</a></li>
      </ul>
      <div className="footer__socials">
          <a href="https://github.com/olssonfredrik0703/"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/olsson-fredrik-9971792a6/"><FaLinkedin/></a> 
       </div>             
    </footer>
  )
}

export default Footer