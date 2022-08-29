import React from 'react'
import './About.css'
import download from '../../assets/download.jpg'
import {BiUserCircle} from 'react-icons/bi'
import {FaUserFriends} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='About'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={download} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiUserCircle className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <FaUserFriends className='about__icon' />
              <h5>Clients</h5>
              <small>1 loyal and supporting client</small>
            </article>
            <article className="about__card">
              <AiFillFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>Variety of Work</small>
            </article>
          </div>

          <p>One year experience working as a Fullstack Developer for Milk Moovement</p>
          <p>One year experience as a Computer Science Teaching Assistant at Memorial University of Newfoundland</p>
          <a href="#Contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About