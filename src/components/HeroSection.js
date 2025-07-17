'use client';

import '../app/styles/slider.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function HeroSlider({ slides }) {
  return (
    <section className="position-relative top-hero">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="swiper-container"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="position-relative vh-100 text-white d-flex justify-content-center align-items-center align-items-lg-center">
              <Image
                src={slide.image}
                alt={`Slide ${slide.id}`}
                layout="fill"
                objectFit="cover"
                className="z-n1"
                priority
              />

              {/* Dark overlay */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 0 }}
              ></div>

              {/* Slide content */}
              <div className="container z-1">
                <div className="row justify-content-center justify-content-lg-start">
                  <div className="col-lg-7 text-center text-lg-start">
                    <p className="text-uppercase small mb-2">{slide.subheading}</p>
                    <h1 className="display-4">
                      {slide.heading.split(' ').slice(0, -2).join(' ')}{' '}
                      <span className="text-white fw-bold">
                        {slide.heading.split(' ').slice(-2).join(' ')}
                      </span>
                    </h1>
                    <a
                      href="#get-started"
                      className="btn btn-light btn-lg mt-4 rounded-pill px-4"
                    >
                      GET STARTED NOW <i className="bi bi-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Slide number */}
              <div className="position-absolute bottom-0 start-0 p-4 z-1">
                <h1 className="display-1 opacity-25">
                  {String(slide.id).padStart(2, '0')}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
