import React from 'react'
import './portfolio.css'
import Off from '../../assets/Avatar1.png'
import OFF from '../../assets/Offer.pdf'

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
      <h5>Experience</h5>
      <h2>Internships</h2>

      <div className="container portfolio__container">
        <div className="about__exp">
          <div className="about__img-exp">
            <img src={Off} alt="About Me" />
          </div>
        </div>
        <div className="about__content_portfolio">

          <h3 className='company'>OASIS INFOBYTE</h3>

            <p>
                Web Development and Designing Intern, where I can learn React.js, node.js, Express.js.

            </p>

            <a href={OFF} className='btn'>Download Offer Letter</a>

        </div>
      </div>

      

      
    </section>
  )
}

export default Portfolio