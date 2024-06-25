import React from 'react'
import './portfolio.css'
import { portfolios } from './data'


const Portfolio = () => {
  // const [selectedItemIndex, SetSelectedItemIndex] = React.useState(0);
  return (
    <section id='portfolio'>
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {portfolios.map((portfolio) => (
          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={portfolio.image} alt="" />
            </div>
            <h3>{portfolio.title}</h3>
            <div className="portfolio_item-cta">
              <a href={portfolio.gitlink} className="btn btn2">Github</a>
              <a href={portfolio.livedemo} className="btn" target='_blank'>Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio