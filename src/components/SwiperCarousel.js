'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

// Swiper core styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



export default function SwiperCoverflowCarousel() {
  return (
    <Swiper
      spaceBetween={40}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={false}
      slidesPerView={'1'}
       autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      coverflowEffect={{
        rotate: 25,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: true,
      }}
      breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
           1376: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      modules={[Autoplay,EffectCoverflow, Pagination]}
      className="mySwiper my-md-4"
    >
      {Array.from({ length: 8 }, (_, i) => (
        <SwiperSlide key={i}>
          <img
            src={`https://swiperjs.com/demos/images/nature-${i + 1}.jpg`}
            alt={`Nature ${i + 1}`}
            className="img-fluid"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
