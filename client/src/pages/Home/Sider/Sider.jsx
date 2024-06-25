import React from 'react'
import './Sider.css'
import { FaFacebook } from "react-icons/fa6"
import { GoMail } from "react-icons/go";
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"


function Sider() {
  return (
    <div className='sider-container'>
      <div className="sider">
        <div className="icons">
          <FaFacebook className='icon'/>
          <GoMail className='icon'/>
          <FaInstagram  className='icon'/>
          <FaLinkedin className='icon'/>
          <FaGithub className='icon'/>
        </div>
        <div className="hr"></div>
      </div>
    </div>
  )
}

export default Sider