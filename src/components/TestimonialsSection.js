'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const testimonials1 = [
  {
    text: "Working with Advera was a game-changer for our brand. Their creative vision and attention to detail helped us bring our ideas to life in a way we never imagined. The 3D mascot design perfectly captured the essence of our brand",
    author: 'Emily Tran from EcoTourism Co.',
    avatar: '/img/testimonial-1.jpg',
  },
  {
    text: "Their storytelling approach is powerful. We saw a brand lift within weeks!",
    author: 'Alex Gomez from FitNow Ltd.',
    avatar: '/img/testimonial-1.jpg',
  },
];

const testimonials2 = [
  {
    text: "Advera’s creative strategy doubled our engagement rates on traditional media.",
    author: 'Lisa Ray from UrbanStyle.',
    avatar: '/img/testimonial-1.jpg',
  },
];

const testimonials3 = [
  {
    text: "Advera’s campaign created a lasting impact on our market positioning.",
    author: 'Natalie Lee from SmartBank.',
    avatar: '/img/testimonial-1.jpg',
  },
  {
    text: "The creative executions went beyond our expectations.",
    author: 'David Kim from EcoHome.',
    avatar: '/img/testimonial-1.jpg',
  },
];

const TestimonialCard = ({ text, author, avatar }) => (
  <div className="bg-white p-4 shadow rounded text-start">
    <p>{text}</p>
    <div className="d-flex align-items-center mt-3">
      <img src={avatar} alt={author} className="rounded-circle me-2" width="50" height="50" />
      <strong>{author}</strong>
    </div>
  </div>
);

export default function TestimonialsSection() {
  return (
  <section className='section'   data-aos="fade-up"
              data-aos-duration="1200"
  style={{
    backgroundImage: `url("/img/BG-Stories-1.png")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    
  }}
>


<div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
       background: 'rgba(226, 106, 166, 0.2)',
      
      zIndex: 1,
    }}
  />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section 1 */}
        <div className="row mb-5 align-items-center">
          <div className="col-md-4"   data-aos="fade-right"
              data-aos-duration="1200">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              spaceBetween={20}
            >
              {testimonials1.map((t, i) => (
                <SwiperSlide key={i}>
                  <TestimonialCard {...t} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-md-4 text-center"   data-aos="fade-right"
              data-aos-duration="1200">
            <img src="/img/testimonial-1.jpg" className="rotate-img img-fluid" alt="center" />
          </div>
          <div className="col-md-4">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 4000 }}
              pagination={{ clickable: true }}
              spaceBetween={20}
            >
              {testimonials1.map((t, i) => (
                <SwiperSlide key={i}>
                  <TestimonialCard {...t} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Section 2 */}
        <div className="row mb-5 align-items-center"   data-aos="fade-up"
              data-aos-duration="1500">
          <div className="col-md-4 text-center">
            <img src="/img/testimonial-2.jpg" className="rotate-img img-fluid" alt="left" />
          </div>
          <div className="col-md-4 text-center">
            <h6 className="text-white fw-bold">Testimonials</h6>
            <h2 className="fw-bold text-white mb-3">Real Stories, Real Impact, Trusted Results</h2>
            <p className="text-white-50">
              Discover how our clients’ experiences and success stories showcase the value of our creative solutions
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img src="/img/testimonial-4.jpg" className="rotate-img img-fluid" alt="right" />
          </div>
        </div>

        {/* Section 3 */}
        <div className="row align-items-center">
          <div className="col-md-4"   data-aos="fade-left"
              data-aos-duration="1200">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              spaceBetween={20}
            >
              {testimonials3.map((t, i) => (
                <SwiperSlide key={i}>
                  <TestimonialCard {...t} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-md-4 text-center" data-aos="fade-left"
              data-aos-duration="1400">
            <img src="/img/testimonial-3.jpg" className="rotate-img img-fluid" alt="center-2" />
          </div>
          <div className="col-md-4">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 4000 }}
              pagination={{ clickable: true }}
              spaceBetween={20}
            >
              {testimonials3.map((t, i) => (
                <SwiperSlide key={i}>
                  <TestimonialCard {...t} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}