import React from 'react'
import './Header.css'
import CTA from './CTA'
import shigeo from '../../assets/download.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Divine Badibanga</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={shigeo} alt="cat" />
        </div>

        <a href="#Contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header