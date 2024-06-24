import './header.css'
import { Intros } from './data'


const header = () => {
  return (
    <header className="header">
      {Intros.map(intro => (
      <div className="container header_container">
        <div className="header-left">
          <h5>{intro.WelcomeText}</h5>
          <h1>{intro.lname} {intro.fname}</h1>
          <h4 className="text-light">{intro.role}</h4>
          <a href= {intro.cv} download className='btn'>View CV</a>
        </div>
        <div className="header-right">
          <div className="header-circle"></div>
          <div className="header-image">
            <img src= {intro.image} alt="" />
          </div>
        </div>
      </div>
      ))}
    </header>
  )
}

export default header