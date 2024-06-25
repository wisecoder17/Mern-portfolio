import './about.css'
import { aboutInfo } from './data'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const about = () => {
  return (
    <section id='about'>
      <h4>Get To Know  Me</h4>
      <h2>About Me</h2>

      {aboutInfo.map(about => (
        <div className="container about_container">
          <div className="about-me">
            <div className="about_me-image">
              <img src={about.image} alt="" />
            </div>
          </div>


          <div className="about_content">

            <div className="about_cards">
              <article className="about_card">
                <FaAward className='about_icon' />
                <h5>Experiences</h5>
                <small>{about.experience}</small>
              </article>

              <article className="about_card">
                <FiUsers className='about_icon' />
                <h5>Clients</h5>
                <small>{about.client}</small>
              </article>

              <article className="about_card">
                <VscFolderLibrary className='about_icon' />
                <h5>Projects</h5>
                <small>{about.project}</small>
              </article>
            </div>

            <p>{about.description}</p>
            <a href="#contact" className="btn">Let's Talk</a>

          </div>
        </div>
      ))}
    </section>
  )
}

export default about