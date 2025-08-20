"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function ClientsSection({ data }) {
  return (
    <section className="clients-section text-center py-5">
      <div className="container">
        {/* Heading */}
        <h2 className="mb-5">{data.title}</h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 },
          }}
        >
          {data.clients.map((client, index) => (
            <SwiperSlide key={index}>
              <Image
                src={client.logo}
                alt={client.name}
                width={150}
                height={80}
                className="img-fluid"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button */}
        <a href={data.buttonLink} className="btn btn-danger mt-4">
          {data.buttonText}
        </a>
      </div>
    </section>
  );
}
