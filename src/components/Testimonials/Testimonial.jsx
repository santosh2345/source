
import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Sandhya Rai',
    review:'I have been very happy with the customer service and the attention to detail. '
  },
  {
    avatar: AVTR2,
    name: 'Andrew',
    review:'We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Thrive has been great.'
  },
  {
    avatar: AVTR3,
    name: 'John Lee',
    review:'Our website has transformed the image of our firm and is the key introductory point for new and potential clients.  Thanks for a job well done!'
  },
  {
    avatar: AVTR4,
    name: 'Amelia',
    review:'It has been a pleasure working with Thrive. I appreciate your dedication to the projects that you and your team are on. '
  }
]


const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review},index)=>{
            return (
              <SwiperSlide key={index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar} />
            
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
       
      </Swiper>
    </section>
  )
}

export default Testimonial

