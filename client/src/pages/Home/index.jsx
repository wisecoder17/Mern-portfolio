import React from 'react'
import Intro from './intro/intro'
import Navbar from '../../component/Navbar'
import About from './about/About.jsx'
import Services from './services/Services'
import Experience from './Experience/Experience'
import Portfolio from './portfolio/Portfolio'
import Contact from './contact/contact'
import Sider from './Sider/Sider'
import Footer from '../../component/footer'
import { useSelector } from 'react-redux'




function Home() {
    const { portfolioData } = useSelector((state) => state.root);
    return (
        <div>
            <Navbar />
                <div className="">
                    <Intro />
                    <About />
                    <Services />
                    <Experience />
                    <Portfolio />
                    <Contact />
                    <Sider />
                    <Footer />
                </div>
            {portfolioData && (
                "helo"
            )}

        </div>
    )
}

export default Home