import React from 'react'
import CTA from './CTA'
import ME from '../../assets/marko1.png'
import HeaderSocial from './HeaderSocial'
import  './Header.css'
import { TypeAnimation } from "react-type-animation";
function Header() {
  return (
    <header>
    <div className="container header__container">
    <h5>Hello I'm</h5>
   <h1>Olsson Fredrik</h1> 
    <h5 className="text-light">Senior Software Developer</h5>
    <CTA />
    <HeaderSocial />
    <TypeAnimation
        sequence={[
        "Senior Full Stack Developer",
        3000,
        "Open to work",
        3000,
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        style={{
        // display: "block",
        color: "white",
        fontWeight: 400,
        fontFamily: "VT323",
        letterSpacing: 1,
        fontSize: '73px',
        }}
    />
    <a href="#about" className='scroll__down '>Scroll Down</a>
    
    </div>  
    </header>
  )
}

export default Header