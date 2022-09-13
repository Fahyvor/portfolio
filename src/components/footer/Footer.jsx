import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>FAVOUR</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Home</a></li>
        <li><a href="#experience">Home</a></li>
        <li><a href="#services">Home</a></li>
        <li><a href="#porfolio">Home</a></li>
        <li><a href="#contact">Home</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/fahyvor"> <FaFacebookF /></a>
        <a href="https://instagram.com/fahyvor"> <FiInstagram /></a>
        <a href="https://twitter.com/fahyvor"> <IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Favour Okafor. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer