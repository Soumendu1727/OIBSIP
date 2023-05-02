import React from 'react'
import EXP from '../../assets/Design Koktail Experience Letter.pdf'
import Exp from '../../assets/letter.png'
import './portfolio2.css'
const Portfolio2 = () => {
  return (
    <section id='portfolio2'>
      <div className="container portfolio__container">
        <div className="about__exp">
          <div className="about__img-exp">
            <img src={Exp} alt="About Me" />
          </div>
        </div>
        <div className="about__content_portfolio">
            <h3 className='company'>DESIGN KOKTAIL-all designs, one solution</h3>
            <p>
              Role: Developer and Project Manager Intern.
            • Developed full-stack web applications which processed, analysed, and rendered data visually.
            
            • Planned and debugged web applications and software with 100% accuracy.
              Key Achievement: Have lowered the latency by 30% by converting LAMP stack to MERN stack, thus
              increasing the overall effectiveness by 15% of the database, under the guidance of my immediate
              supervisor.
            </p>

            <a href={EXP} className='btn'>Download Experience Letter</a>

        </div>
      </div>
    </section>
  )
}

export default Portfolio2