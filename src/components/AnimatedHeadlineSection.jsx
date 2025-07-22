'use client';

import React from 'react';

export default function AnimatedHeadlineSection({ background, headline }) {
 const words = headline.split(' ');

 return (
  <section
   className="position-relative bg-white text-white my-0"
   data-aos="fade-up"
   data-aos-duration="1000"
   style={{
    backgroundImage: `url('${background}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '60px 0',
   }}
  >
   {/* Overlay */}
   <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
     backgroundColor: 'rgba(0, 0, 0, 0.5)',
     zIndex: 1,
    }}
   ></div>

   {/* Content */}
   <div className="container position-relative" style={{ zIndex: 2 }}>
    <div className="row justify-content-center">
     <div className="col-md-12 text-center">
      <h2 className="fw-bold my-4 text-uppercase text-white text-center">
       {words.map((word, index) => (
        <span
         key={index}
         data-aos="fade-right"
         data-aos-duration={300 + index * 300}
         className="d-inline-block me-1"
        >
         {word}
        </span>
       ))}
      </h2>
     </div>
    </div>
   </div>
  </section>
 );
}
