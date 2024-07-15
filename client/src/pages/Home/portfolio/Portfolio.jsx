import React from 'react'
import { useSelector } from 'react-redux';
import './portfolio.css'


const Portfolio = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { portfolio } = portfolioData;

  return (
    <section id='portfolio'>
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {portfolio.map((portfolioItem) => (
          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={`${process.env.PUBLIC_URL}/assets/${portfolioItem.image}`} alt="" />
            </div>
            <h3>{portfolioItem.title}</h3>
            <div className="portfolio_item-cta">
              <a href={portfolioItem.gitlink} className="btn btn2">Github</a>
              <a href={portfolioItem.livedemo} className="btn" target='_blank'>Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio