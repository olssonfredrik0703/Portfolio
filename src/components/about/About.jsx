import React from 'react'
import Me from '../../assets/marko1.png'
import {FaHome, FaConnectdevelop} from 'react-icons/fa'
import {FiPhone} from 'react-icons/fi'
 import './About.css'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5> 
      <h2>About Me</h2>

      <div className="container about__container">
      <div className="about__me">
      <div className="about__me-image">
      <img src={Me} alt='About image' />
      </div>
      </div>

      <div className="container about__content">
      <div className="about__cards">
      <article className='about__card'>
      <FaHome className=' about__icon' />
      <h5>Sweden</h5>
      <small>Greater Stockholm</small><br/>
      <small>Stockholm</small>
      </article>
      <article className='about__card'>
      <FiPhone className=' about__icon' />
      <h5>Phone</h5>
      <small>+16038376011</small><br/>
      </article>
      <article className='about__card'>
      <FaConnectdevelop className=' about__icon' />
      <h5>Experience</h5>
      <small>5+ Years Working</small>
      </article>
     
        </div>
        <p>
        I am a seasoned senior software engineer with 5+ years of hands-on experience in designing, 
        developing, and implementing cutting-edge software solutions. </p>
        <p>My expertise spans Full Stack Development, Mobile Developement, 
        allowing me to effectively lead and contribute to complex projects. I possess a strong proficiency in 
        Software engineer, which has been instrumental in delivering high-quality, scalable solutions. </p>
        <p>
          I thrive in dynamic environments,
          leveraging my technical knowledge and leadership capabilities to drive innovation and achieve optimal results.
           My career reflects a passion for staying updated with emerging technologies and adapting them to create robust, efficient software systems.          
       </p>
      </div>
      </div>
    </section>
  )
}

export default About