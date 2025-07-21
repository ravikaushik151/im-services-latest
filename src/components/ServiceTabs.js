'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ServiceTabs({ services }) {
  const [activeTab, setActiveTab] = useState(0);
  const service = services[activeTab];

  return (
    <section className="bg-white py-5">
      <div className="container">
        <div className='row' data-aos="fade-up" data-aos-duration="1000">
          <p className="text-uppercase text-muted mb-2 text-center">Key Features of </p>
          <h2 className="fw-bold mb-5 text-center text-uppercase ">
            GEO
          </h2>
        </div>
        <div className="row align-items-center">
          {/* Tabs */}
          <div className="col-lg-3 mb-4 mb-lg-0" data-aos="fade-right" data-aos-duration="1200">
            <ul className="nav flex-column flex-lg-column d-flex justify-content-center align-items-center align-items-lg-start">
              {services.map((item, index) => (
                <li key={item.id} className="mb-3">
                  <button
                    className={`btn text-start d-flex align-items-center gap-2 border-0 ${activeTab === index
                      ? 'bg-dark border shadow-sm fw-semibold text-white fs-5'
                      : 'bg-transparent text-dark'
                      }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <i className={`bi ${item.icon} fs-5`}></i>
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="col-lg-6 text-center px-md-5 px-3" data-aos="fade-up" data-aos-duration="1200">
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={400}
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Text Content */}
          <div className="col-lg-3 px-3 py-3" data-aos="fade-left" data-aos-duration="1000">
            <span className="badge bg-white text-dark shadow-sm px-3 py-3 rounded-pill mb-3">
              <i className="bi bi-globe me-2"></i> {service.subtitle}
            </span>
            <h3 className="fw-bold">{service.heading}</h3>
            <p className="text-muted">{service.text}</p>
            <a href="#explore" className="btn btn-dark rounded-pill px-4">
              EXPLORE NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
