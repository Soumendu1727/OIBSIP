import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGooglecloud} from 'react-icons/si'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/soumendu-sadhukhan-605b091b7/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/Soumendu1727" target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href="https://www.cloudskillsboost.google/public_profiles/39682389-be43-4ef9-af14-83ca8a65707e" target='_blank' rel='noreferrer'><SiGooglecloud /></a>
    </div>
  )
}

export default HeaderSocials