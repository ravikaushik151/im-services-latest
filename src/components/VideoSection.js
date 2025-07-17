'use client';

import Image from 'next/image';
import homeData from '../data/home'; // adjust path if needed

export default function VideoSection() {
  const { videoBanner } = homeData;

  return (
    <section className="py-5" data-aos="fade-up" data-aos-duration="1200">
      <div className="container">
        <div
          className="position-relative overflow-hidden rounded"
          style={{ height: '520px' }}
        >
          {/* Background Image */}
          <Image
            src={videoBanner.image}
            alt="Creative Solutions"
            fill
            className="object-fit-cover"
            style={{ objectPosition: 'top center' }}
          />

          {/* Dark Overlay */}
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50" />

          {/* Content */}
          <div className="position-absolute top-50 start-0 translate-middle-y w-100">
            <div className="row align-items-center">
              {/* Left Text */}
              <div className="col-md-5 offset-md-2 ps-5 px-md-5" data-aos="fade-right" data-aos-duration="1500">
                <h2 className="text-white display-6 fw-semibold mb-0">
                  {videoBanner.heading.split('for')[0]}
                  <br />
                  solutions for <strong>brands!</strong>
                </h2>
              </div>

              {/* Right Play Icon */}
              <div
                className="col-md-2 d-flex justify-content-center align-items-center px-md-5"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <a
                  href={videoBanner.buttonLink}
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    border: '2px solid white',
                    borderRadius: '50%',
                  }}
                >
                  <i className="bi bi-play-fill fs-2 text-white"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
