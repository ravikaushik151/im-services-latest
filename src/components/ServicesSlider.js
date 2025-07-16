'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../app/styles/serviceslider.css'

const services = [
  {
    title: 'Market research',
    subtitle: 'COMPETITORS RESEARCH',
    tag: 'FLEXIBLE',
    image: '/img/slider-img-03.jpg',
  },
  {
    title: 'Business consulting',
    subtitle: 'TARGETED GROWTH',
    tag: 'DISCOVER',
    image: '/img/slider-img-03.jpg',
  },
  {
    title: 'Audience analysis',
    subtitle: 'COMPETITORS RESEARCH',
    tag: 'MODERN',
    image: '/img/slider-img-03.jpg',
  },
  {
    title: 'Business planning',
    subtitle: 'INNOVATIVE SOLUTIONS',
    tag: 'CREATIVITY',
    image: '/img/slider-img-03.jpg',
  },
];

export default function CorporateServicesSlider() {
  return (
    <section
      className="text-white section"
      style={{
        backgroundImage: `url('/img/bg-01.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        backgroundColor: '#070718e8', // fallback dark navy
        backgroundSize: 'contain',
      }}
      >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ background: 'rgba(0,0,0,0.6)', zIndex: 0 }}
      ></div>

      <div className="container">
        <div className="mb-4" data-aos="fade-up"
      data-aos-duration="1500">
          <p className="text-uppercase small text-white">Creative Approach</p>
          <h2 className="display-6 fw-bold">Corporate services</h2>
          <p className="text-white" style={{ maxWidth: '500px' }}>
            We strive to develop real-world web solutions that are ideal for small to large projects
            with bespoke your custom project requirements.
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="card border-0 text-white position-relative overflow-hidden" data-aos="fade-up"
      data-aos-duration="1500">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={400}
                  className="img-fluid object-fit-cover w-100"
                  style={{ height: '350px', objectFit: 'cover' }}
                />
                <div className="position-absolute top-0 start-0 m-3 px-3 py-1 bg-dark text-white rounded-pill small">
                  {service.tag}
                </div>

                {/* Bottom overlay with background image + gradient */}
                <div className="card-content-overlay">
                  <h5 className="mb-0">{service.title}</h5>
                  <small className="text-white-50">{service.subtitle}</small>
                </div>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>

        <div className="text-center mt-5" data-aos="fade-up"
      data-aos-duration="1800">
          <i className="bi bi-envelope me-2 fs-4"></i>
          <span className='fs-5'>
            Save your precious time and effort spent for finding a solution.
            <a href="#contact" className="text-white ms-1 text-decoration-none fw-bold">
              Contact us now
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
