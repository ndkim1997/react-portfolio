import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/bu.png';

const projects = [
  {
    id: 1,
    image: IMG1,
    title: 'Biola Database for Music Department',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  // {
  //   id: 2,
  //   image: IMG1,
  //   title: 'Change Later / Put project In',
  //   github: 'https://github.com',
  //   demo: 'https://github.com'
  // },
  // {
  //   id: 3,
  //   image: IMG1,
  //   title: 'Change Later / Put project In',
  //   github: 'https://github.com',
  //   demo: 'https://github.com'
  // },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Some of My Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio_container'>
        {
          projects.map(({ id, image, title, github }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank'>Demo</a> */}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio