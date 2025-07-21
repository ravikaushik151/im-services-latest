'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../app/styles/serviceslider.css';

export default function ServicesSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const services = [
    {
      title: 'Strategic GEO Audits',
      subtitle: '',
      shortdesc: 'Comprehensive AI-readiness scans of your digital ecosystem.',
      tag: '',
      image: '/img/slider-img-03.jpg',
      link: '#',
    },
    {
      title: 'Local GEO Optimization',
      subtitle: '',
      shortdesc: 'Making your brand discoverable in location-intent queries and map-based AI results.',
      tag: '',
      image: '/img/slider-img-03.jpg',
      link: '#',
    },
    {
      title: 'Generative Product SEO',
      subtitle: '',
      shortdesc: 'Engineered for marketplaces and eCommerce platforms, optimized for voice and snippet exposure.',
      tag: '',
      image: '/img/slider-img-03.jpg',
      link: '#',
    },
    {
      title: 'GEO for Enterprise & SaaS',
      subtitle: '',
      shortdesc: 'Structured data frameworks and generative UX mapping for B2B buyers and CXOs.',
      tag: '',
      image: '/img/slider-img-03.jpg',
      link: '#',
    },
      {
      title: 'AI-Centric Copywriting:',
      subtitle: '',
      shortdesc: 'Microcopy, answers, and narratives tailored for generative training datasets.',
      tag: '',
      image: '/img/slider-img-03.jpg',
      link: '#',
    },
      {
      title: 'Technical GEO Engineering',
      subtitle: '',
      shortdesc: 'Performance-layer upgrades, schema injection, and crawl simulation for AI engines.',
      tag: '',
      image: '/img/slider-img-03.jpg',
      link: '#',
    },
     {
      title: 'Workshops & Team Enablement',
      subtitle: '',
      shortdesc: 'GEO onboarding for CMOs, content heads, and in-house teams.',
      tag: '',
      image: '/img/slider-img-03.jpg',
      link: '#',
    },
  ];

  useEffect(() => {
    // Swiper navigation refs need to be updated after mount
  }, []);

  return (
    <section
      className="text-white section position-relative"
      style={{
        backgroundImage: `url('/img/bg-01.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        backgroundColor: '#070718e8',
        backgroundSize: 'contain',
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ background: 'rgba(0,0,0,0.6)', zIndex: 0 }}
      ></div>

      <div className="container position-relative">
        {/* Heading + Navigation */}
        <div className="mb-4" data-aos="fade-up" data-aos-duration="1500">
          <p className="text-uppercase small text-white">Types of </p>
          <div className="d-flex align-items-center justify-content-between">
            <h2 className="display-6 fw-bold text-uppercase">GEO Services We Offer
            </h2>
            <div className="d-flex gap-2">
              <button ref={prevRef} className="btn btn-outline-light custom-prev">
                <i className="bi bi-chevron-left"></i>
              </button>
              <button ref={nextRef} className="btn btn-outline-light custom-next">
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
          <p className="text-white" style={{ maxWidth: '500px' }}>
            
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 2 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="row bg-white p-0 g-0">
                    <div className="col-md-6 text-center mb-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="img-fluid object-fit-cover w-100"
                        style={{ height: '350px', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="col-md-6 px-3 px-md-4 m-center d-flex align-items-center justify-content-center">
                      <div>
                        {service.tag && (
                          <span className="badge bg-white text-dark shadow-sm px-3 py-2 my-3 fw-semibold rounded-pill">
                            {service.tag}
                          </span>
                        )}

                        <h2 className="fw-bold fs-4  mb-1 text-dark text-uppercase m-center">
                          {service.title.split(' ')[0]}{' '}
                          <span className="text-dark fw-bold">{service.title.split(' ').slice(1).join(' ')}</span>
                        </h2>

                        <p className="text-muted fs-5 mb-3  m-center">{service.subtitle}</p>
                        <p className="text-dark mb-3  m-center">{service.shortdesc}</p>
                        <div className="m-center">
                          <a href="#" className="btn btn-dark rounded-pill px-4 my-3 ">
                            Read more <span className="ms-2">&rarr;</span>
                          </a>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA */}
        <div className="text-center mt-5" data-aos="fade-up" data-aos-duration="1800">
          <i className="bi bi-envelope me-2 fs-4"></i>
          <span className="fs-5">
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
