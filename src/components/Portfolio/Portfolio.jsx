import React from 'react'
import './Portfolio.css'
import download from '../../assets/download.jpg'

const data = [
  {
    id: 1,
    image: download,
    title: 'Calculator',
    github: 'https://github.com/Divindaya/Calculator',
    demo: ''
  }, 
  {
    id: 2,
    image: download,
    title: 'Mancala',
    github: 'https://github.com/Divindaya/Mancala',
    demo: ''
  },
  {
    id: 3,
    image: download,
    title: 'World of Westeros',
    github: 'https://github.com/Divindaya/World-of-Westeros',
    demo: ''
  }
]

const Nav = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'>GitHub</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  </div>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Nav
