'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../app/styles/serviceslider.css';
import Link from 'next/link';

export default function ServicesSlider({ services }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // Swiper navigation refs update
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
        <div className="mb-4" data-aos="fade-up" data-aos-duration="1500">
          <p className="text-uppercase small text-white">{services.shortTitle}</p>
          <div className="d-flex align-items-center justify-content-between">
            <h2 className="display-6 fw-bold text-uppercase">{services.mainTitle}</h2>
            <div className="d-flex gap-2">
              <button ref={prevRef} className="btn btn-outline-light custom-prev">
                <i className="bi bi-chevron-left"></i>
              </button>
              <button ref={nextRef} className="btn btn-outline-light custom-next">
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
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
          {services.items.map((service, index) => (
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
                    <div className="col-md-6 px-3 px-md-4 d-flex align-items-center justify-content-center">
                      <div>
                        {service.tag && (
                          <span className="badge bg-white text-dark shadow-sm px-3 py-2 my-3 fw-semibold rounded-pill">
                            {service.tag}
                          </span>
                        )}
                        <h2 className="fw-bold fs-4 mb-2 text-dark text-uppercase">
                          {service.title.split(' ')[0]}{' '}
                          <span className="text-dark fw-bold">
                            {service.title.split(' ').slice(1).join(' ')}
                          </span>
                        </h2>
                        <p className="text-dark fs-6 mb-3">{service.subtitle}</p>
                        <p className="text-dark mb-3">{service.shortdesc}</p>
                        <div>
                          {service.link ? (
                            <Link href={service.link} className="btn btn-dark rounded-pill px-4 my-3">
                              Read more <span className="ms-2">&rarr;</span>
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-5" data-aos="fade-up" data-aos-duration="1800">
          <i className="bi bi-envelope me-2 fs-4"></i>
          <span className="fs-5">
            Save your precious time and effort spent for finding a solution.
            <Link href="#contact" className="text-white ms-1 text-decoration-none fw-bold">
              Contact us now
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
