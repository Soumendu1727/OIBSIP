import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Soumendu Sadhukhan</h1>
        <h3 className='text-light'>Fullstack Developer</h3>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img className='Me' src={ME} alt="me" />
        </div>

        <a href="#contact" className='scrool__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
