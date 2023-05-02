import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUserGraduate} from 'react-icons/fa'
import {FaBook} from 'react-icons/fa'
import {GiNetworkBars} from 'react-icons/gi'
import {RiMessage3Fill} from 'react-icons/ri'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (

    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><FaHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserGraduate /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook /></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GiNetworkBars /></a>
      <a href="#contact" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RiMessage3Fill /></a>
    </nav>
  )
}

export default Nav