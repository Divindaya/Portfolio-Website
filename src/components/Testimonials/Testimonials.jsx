import React from 'react'
import './Testimonials.css'
import download from '../../assets/download.jpg'
import dimplesama from '../../assets/dimplesama.jpg'
import mrburns from '../../assets/mrburns.jpg'
import mussolini from '../../assets/mussolini.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: dimplesama,
    name: 'Dimple-sama',
    review: 'I would work on the colour.'
  },
  {
    avatar: mrburns,
    name: 'Mr Burns',
    review: 'Excellent!'
  },
  {
    avatar: mussolini,
    name: 'Mussolini',
    review: 'Great for propaganda'
  }
]

const Testimonials = () => {
  return (
    <section id='Testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
                <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt="" />
                  </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className="client__review">{review}</small>
                </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials