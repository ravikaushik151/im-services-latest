'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function BusinessServices({ services }) {
  return (
    <section className="business-section py-5 bg-black">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold display-6 mb-3 text-white">
              Understanding the <br /> business services.
            </h2>
          </div>
          <div className="col-md-6 d-flex justify-content-between align-items-center">
            <p className="text-white mb-0 text-white" style={{color: '#fff !important'}}>
              We strive to develop real-world web solutions that are ideal for small to
              large projects with bespoke your custom project requirements.
            </p>
            {/* Custom navigation buttons */}
            <div className="d-flex align-items-center ms-3 swiper-nav">
              <button className="btn-nav me-2 swiper-button-prev-custom bg-white text-dark">
                <i className="bi bi-chevron-left"></i>
              </button>
              <button className="btn-nav swiper-button-next-custom bg-white text-dark">
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 1 },
            1200: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="card h-100 shadow-sm border-0 service-card">
                <div className="position-relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={250}
                    className="card-img-top"
                  />
                  {service.tag && (
                    <span className="badge bg-dark text-white position-absolute top-0 end-0 m-2 rounded-pill px-3 py-2">
                      {service.tag}
                    </span>
                  )}
                </div>
                <div className="card-body">
                  <h5 className="fw-bold">{service.title}</h5>
                  <p className="text-muted small">{service.description}</p>
                </div>
                <div className="card-footer bg-white border-0">
                  <Link href={service.link} className="fw-bold text-dark text-decoration-none">
                    EXPLORE SERVICES <i className="bi bi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
