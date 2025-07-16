'use client';
import '../app/styles/slider.css'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const slides = [
  {
    id: 1,
    heading: 'Agency for your great business.',
    subheading: 'Best solutions for your business',
    image: '/img/slider1.jpg',
  },
  {
    id: 2,
    heading: 'Grow your brand with confidence.',
    subheading: 'Creative & strategic approach',
    image: '/img/slider2.jpg',
  },
  {
    id: 3,
    heading: 'Smart solutions for your success.',
    subheading: 'Innovation + execution',
    image: '/img/slider3.jpg',
  },
];

export default function HeroSlider() {
  return (
    <section className="position-relative top-hero" >
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
            <div className="position-relative vh-100 text-white d-flex align-items-center">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={`Slide ${slide.id}`}
                layout="fill"
                objectFit="cover"
                className="z-n1"
                priority
              />

              {/* Overlay (semi-transparent black) */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 0 }}
              ></div>

              {/* Overlay Content */}
              <div className="container z-1">
                <div className="row">
                  <div className="col-lg-7">
                    <p className="text-uppercase small mb-2">{slide.subheading}</p>
                    <h1 className="display-4 ">
                      {slide.heading.split(' ').slice(0, -2).join(' ')}{' '}
                      <span className="text-white fw-bold">
                        {slide.heading.split(' ').slice(-2).join(' ')}
                      </span>
                    </h1>
                    <a href="#get-started" className="btn btn-light btn-lg mt-4 rounded-pill px-4">
                      GET STARTED NOW <i className="bi bi-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Slide Index (01, 02, etc.) */}
              <div className="position-absolute bottom-0 start-0 p-4 z-1">
                <h1 className="display-1 opacity-25">{String(slide.id).padStart(2, '0')}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
