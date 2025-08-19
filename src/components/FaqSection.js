'use client';

import { useState } from 'react';
import Image from 'next/image';
import '../app/styles/faq.css';

export default function FaqSection({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section
      className="faq-section position-relative section overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      {/* Background icon */}
      <Image
        src="/img/faq.webp"
        alt="FAQ Icon"
        width={200}
        height={200}
        className="faq-icon-image position-absolute"
      />

      <div className="container bg-light rounded-4 p-md-5 px-3 position-relative z-1">
        <p className="text-uppercase fw-bold mb-1">
          <span className="text-muted">Basic </span>
          <span className="text-primary">Information</span>
        </p>
        <h2 className="fw-bold mb-4 text-uppercase">Frequently asked questions</h2>

        <div className="accordion border-top">
          {faqs.map((item, index) => (
            <div
              className="py-4 border-bottom faq-item"
              key={index}
              onClick={() => toggleIndex(index)}
              style={{ cursor: 'pointer' }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="fw-semibold m-0">{item.question}</h6>
                <span className="faq-icon fs-4">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              {activeIndex === index && (
                <div
                  className="text-muted mt-3 mb-0"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
