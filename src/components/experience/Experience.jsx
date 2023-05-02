import React from "react";
import "./experience.css";
import { BsFillCloudCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
             
            </article>
            <article className="experience__details">
              <BsFillCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>React.Js</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>Angular.Js</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCloudCheckFill className='experience__details-icon'/>
              <div> 
              <h4>Wordpress & Shopify</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>Node.Js</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>Express.Js</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Others</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>C++</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>C</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>Java</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
