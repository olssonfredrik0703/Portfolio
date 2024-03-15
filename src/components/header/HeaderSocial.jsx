import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa' 
function HeaderSocial() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/olsson-fredrik-9971792a6/" target=" blank"><BsLinkedin /></a>
        <a href="https://github.com/huapengli0703/" target=" blank"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocial