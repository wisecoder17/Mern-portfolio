import './about.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { useSelector } from 'react-redux'


const About = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { client, description, experience, image, project } = about;
  const img = `${process.env.PUBLIC_URL}/assets/${image}`;

  return (
    <section id='about'>
      <h4>Get To Know  Me</h4>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about-me">
          <div className="about_me-image">
            <img src={img} alt="" />
          </div>
        </div>


        <div className="about_content">

          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon' />
              <h5>Experiences</h5>
              <small>{experience || ""}</small>
            </article>

            <article className="about_card">
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>{client || ""}</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>{project || ""}</small>
            </article>
          </div>

          <p>{description || ""}</p>
          <a href="#contact" className="btn">Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About