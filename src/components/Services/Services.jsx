import React from 'react'
import './Services.css'
import {BsCheckLg} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='Services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
            <ul className="service__list">
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>whatever whatever whatever</p>
              </li>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>whatever whatever whatever</p>
              </li>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>whatever whatever whatever</p>
              </li>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>whatever whatever whatever</p>
              </li>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>whatever whatever whatever</p>
              </li>
            </ul>
        </article>
        {/**web development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
            <ul className="service__list">
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>whatever whatever whatever</p>
              </li>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>whatever whatever whatever</p>
              </li>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>whatever whatever whatever</p>
              </li>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>whatever whatever whatever</p>
              </li>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>whatever whatever whatever</p>
              </li>
            </ul>
        </article>
        {/**Content Creation */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
            <ul className="service__list">
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>whatever whatever whatever</p>
              </li>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>whatever whatever whatever</p>
              </li>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>whatever whatever whatever</p>
              </li>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>whatever whatever whatever</p>
              </li>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>whatever whatever whatever</p>
              </li>
            </ul>
        </article>
      </div>
    </section>
  )
}

export default Services