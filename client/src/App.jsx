import React from 'react'
// import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Intro from './pages/intro/intro'
import Navbar from './component/Navbar'
import About from './pages/about/About.jsx'
import Services from './pages/services/Services'
import Experience from './pages/Experience/Experience'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/contact'
import Sider from './pages/Sider/Sider'
import Footer from './component/footer'




const App = () => {
  return ( 
    <>
      <Intro/>
      <Navbar/>
      <About/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Sider/>
      <Footer/>      
    </>
  )
}

export default App