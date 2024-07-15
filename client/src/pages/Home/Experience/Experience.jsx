import React from 'react'
import './experience.css'
// import { experiences } from './data'
import { BsPatchCheckFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Experience = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { experience } = portfolioData;
  const { code, dev } = experience;

  return (
    <section id='experience'>
      <h4>Skills I Have </h4>
      <h2>My Experience</h2>
      <div className="container experience_container">
        {experience.map((experienc) => (
          <div className="experience">
            <h3>{dev || ""}</h3>
            <div className="experience_content">
              {experienc.code.map((lang) => (
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