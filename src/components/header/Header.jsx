import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ME.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Favour Okafor</h1>
        <h5 className="text-light">Front End Web Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
          
          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header