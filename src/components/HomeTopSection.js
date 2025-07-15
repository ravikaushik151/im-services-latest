'use client';

import React from 'react';

export default function HomeTopSection() {
  return (
    <section className="hero-section text-white text-center py-5 position-relative">
      <div className="container">
        {/* Headline */}
        <h1 className="display-4 fw-bold mb-2">Timeless Creativity.</h1>
        <h2 className="display-6 fw-bold mb-4">
          Powerful,<span className="text-nowrap">Lasting Brand Impact.</span>
        </h2>
        <p className="lead mb-4">
          We craft compelling campaigns through classic media, building brand
          recognition, trust, and visibility that stand the test of time.
        </p>

        {/* CTA Button */}
        <div className="my-4">
          <a
            href="#"
            className="btn btn-dark rounded-pill px-4 py-2 fs-6 fw-semibold"
          >
            Start Your Project
          </a>
        </div>

        {/* Image Strip */}
        <div className="row justify-content-center align-items-end mt-5 g-3">
          {['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'].map(
            (img, i) => (
              <div className="col-6 col-sm-4 col-md-2" key={i}>
                <img
                  src={`/img/${img}`}
                  alt={`image-${i}`}
                  style={{minWidth:"348px", minHeight:"348px", objectFit:"cover", objectPosition:"center"}}
                  className={`img-fluid ${
                    i === 0
                      ? 'rotate-neg'
                      : i === 2
                      ? 'rotate-pos'
                      : i === 4
                      ? 'rotate-neg-sm'
                      : ''
                  }`}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
