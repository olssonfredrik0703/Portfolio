import React from 'react'
import './Services.css'
import {BiCheck, BiLocationPlus, BiCalendar, BiBuildings, BiListUl} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>My last</h5>
        <h2>Work Experience</h2>
        <div className="container services__container">
        <article className="service">
        <div className="service__head">
        <h3>Full Stack Engineer</h3>
        </div>
        <ul className='service__list'>
          <li>
          <BiBuildings  className='service__list-icon'/>   Self-employed<br/>
          <BiLocationPlus className='service__list-icon' />   Remote<br/>
          <BiCalendar className='service__list-icon'/>   <small>2023.11-present</small><br/>
          </li>
          <li>
          <BiCheck className='service__list-icon'/> <small>Implemented server-side rendering and progressive web app techniques to improve SEO, load times, and overall user experience.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Built a RESTful API that enabled the integration of third-party services with the web application</small><br/>
          <BiCheck className='service__list-icon'/> <small>Utilized DevOps practices to automate deployment processes and improve system reliability.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Worked with project managers, developers, quality assurance and customers to resolve technical issues.</small><br/><br/>
          </li>
        </ul>
        </article>
        <article className="service">
        <div className="service__head">
        <h3>Full Stack Developer</h3>
        </div>
        <ul className='service__list'>
          <li>
          <BiBuildings  className='service__list-icon'/>   Spiria<br/>
          <BiLocationPlus className='service__list-icon' />   Montrea, Canada<br/>
          <BiCalendar className='service__list-icon'/>   <small>2022.8-2023.10</small><br/>
          </li>
          <li>
          <BiCheck className='service__list-icon'/> <small>Developed logging and monitoring systems to ensure system reliability and availability.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Designed and implemented a secure, RESTful API that handled over 3 million requests per day.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Developed a data pipeline to ensure data accuracy and completeness.</small><br/>
          </li>
        </ul>
        </article>

        <article className="service">
        <div className="service__head">
        <h3>Full Stack Engineer</h3>
        </div>
        <ul className='service__list'>
          <li>
          <BiBuildings  className='service__list-icon'/>   Techugo<br/>
          <BiLocationPlus className='service__list-icon' />   Ontario, Canada<br/>
          <BiCalendar className='service__list-icon'/>   <small>2020.4-2022.6</small><br/>
          </li>
          <li>
          <BiCheck className='service__list-icon'/> <small>Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs, and enhancements.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Coordinated efficient large-scale software deployments.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Collaborated with fellow engineers to evaluate software and hardware interfaces.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Analyzed code defects and failures and presented code refactors and design fixes.</small><br/><br/><br/>
          </li>
        </ul>
        </article>

        </div>

    </section>
  )
}

export default Services