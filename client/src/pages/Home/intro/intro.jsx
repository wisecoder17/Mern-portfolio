import React from 'react';
import './header.css'
import { useSelector } from 'react-redux';


const Header = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { fname, lname, WelcomeText, image, role, cv } = intro;
  const img = `${process.env.PUBLIC_URL}/assets/${image}`;
  const CV = `${process.env.PUBLIC_URL}/assets/${cv}`;

  return (
    <header className="header">
      <div className="container header_container">
        <div className="header-left">
          <h5>{WelcomeText || ""}</h5>
          <h1>{lname || ""} {fname || ""}</h1>
          <h4 className="text-light">{role || ""}</h4>
          <a href={CV || ""} download className='btn'>View CV</a>
        </div>
        <div className="header-right">
          <div className="header-circle"></div>
          <div className="header-image">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header