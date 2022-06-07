import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/bu.png';
import IMG2 from '../../assets/bu.png';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Some of My Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio_container'>
        <aritcle className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt="Biola Database" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </aritcle>

        <aritcle className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt="Biola Database" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </aritcle>

        <aritcle className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt="Biola Database" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </aritcle>

        <aritcle className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt="Biola Database" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </aritcle>
      </div>
    </section>
  )
}

export default Portfolio