import React from 'react'
import './Footer.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">DIVINE</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://github.com/Divindaya"><BsGithub /></a>
        <a href="https://www.linkedin.com/in/divine-badibanga-4357a8204/"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Divine Badibanga. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer