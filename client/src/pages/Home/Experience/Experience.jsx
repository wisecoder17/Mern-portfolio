import React from 'react'
import './experience.css'
import { experiences } from './data'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h4>Skills I Have </h4>
      <h2>My Experience</h2>
      <div className="container experience_container">
        {experiences.map((experience) => (
          <div className="experience">
            <h3>{experience.dev}</h3>
            <div className="experience_content">
              {experience.code.map((lang) => (
                <article className="experience_details">
                  <BsPatchCheckFill className='experience_details-icon' />
                  <div>
                    <h4>{lang.language}</h4>
                    <small>{lang.level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience