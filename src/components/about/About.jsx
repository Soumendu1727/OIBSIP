import React from 'react'
import './about.css'
import ME from '../../assets/me-about.JPG'
import {MdCollectionsBookmark} from 'react-icons/md'
import {HiAcademicCap} from 'react-icons/hi'
import {SiCodeproject} from 'react-icons/si'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <MdCollectionsBookmark className='about__icon'/>
                <h5>Experience</h5>
                <small>Fresher</small>
              </article>

              <article className='about__card'>
                <HiAcademicCap className='about__icon'/>
                <h5>Hackathons</h5>
                <small>3+ Participations</small>
              </article>

              <article className='about__card'>
                <SiCodeproject className='about__icon'/>
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>
            </div>

            <p>
            A student of Computer Science and Engineering who is seeking to
            find the opportunity to work in a fun and challenging working
            environment that will encourage me to improve and learn new and
            necessary skills as well as be motivated by the company to do his
            best for the sake of helping myself .

            </p>

            <a href="#contact" className='btn btn-primary'> Let's Talk</a>

        </div>
      </div>

      </section>
  )
}

export default About