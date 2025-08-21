"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "360˚ Digital Marketing Solution",
      subtitle:
        "We take pride in delivering fully-integrated and measurable digital marketing solutions. We help support all your brands digital needs. We are here to optimize, communicate and advocate. Our team use relevant analytics and metrics to implement a solid digital strategy, customized for your business and geared towards helping you expand your current reach.",
      img: "/img/icon-02.webp",
    },
    {
      title: "Maximise your Lead Generation",
      subtitle:
        "Research shows that 70% of the data are vague. To increase your sales and grow your client base, you need accurate lead generation (not mere data). We help businesses grow fast with proven real-time leads. We use cutting-edge tools to find the right target audiences giving you the best chance of closing the sale.",
      img: "/img/icon-02.webp",
    },
    {
      title: "Full-Scale Branding Agency",
      subtitle:
        "Brands create impression. It is what differentiates a product or service from other and influences customer preferences. IM Solutions make brands become iconic. Our branding campaigns are designed to win the heart and minds of people. To do this, we combine strategy, stunning designs and research to creatively drive your brand.",
      img: "/img/icon-02.webp",
    },
    {
      title: "360˚ Digital Marketing Solution",
      subtitle:
        "We take pride in delivering fully-integrated and measurable digital marketing solutions. We help support all your brands digital needs. We are here to optimize, communicate and advocate. Our team use relevant analytics and metrics to implement a solid digital strategy, customized for your business and geared towards helping you expand your current reach.",
      img: "/img/icon-02.webp",
    },
  ];

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section className="why-choose-section text-center">
      <div className="container">
        <p className="why-heading-small mb-1">LOREM LIPSOM</p>
        <h2 className="why-heading mb-5">Why choose us?</h2>
        <style jsx>{`
          .why-choose-section {
            padding: 80px 0;
            background-color: #f8f9fa;
          }

          .swiper-container-wrapper {
            position: relative;
            padding: 0 60px;
          }

          .swiper-button-prev-custom01,
          .swiper-button-next-custom01 {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            background-color: #e9ecef;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s ease;
          }

          .swiper-button-prev-custom01:hover,
          .swiper-button-next-custom01:hover {
            background-color: #ced4da;
          }

          .swiper-button-prev-custom01 {
            left: 0;
          }

          .swiper-button-next-custom01 {
            right: 0;
          }

          .swiper-button-prev-custom01::after,
          .swiper-button-next-custom01::after {
            content: '';
            width: 12px;
            height: 12px;
            border: 2px solid #212529;
            border-top: none;
            border-left: none;
            display: inline-block;
          }

          .swiper-button-prev-custom01::after {
            transform: rotate(135deg);
            margin-right: 2px;
          }

          .swiper-button-next-custom01::after {
            transform: rotate(-45deg);
            margin-left: 2px;
          }

          .swiper-button-prev,
          .swiper-button-next {
            display: none !important;
          }

          /* Default state: Light background, dark text/icons */
          .why-card {
            background-color: #ffffff;
            border-radius: 1rem;
            transition: background-color 0.4s ease, box-shadow 0.4s ease;
            cursor: pointer;
            height: 100%;
            border: 1px solid #e9ecef;
          }

          .why-card .card-body {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            text-align: center;
            padding: 2.5rem;
          }

          .why-card .card-title {
            color: #000;
            transition: color 0.4s ease;
            font-weight: 600;
          }

          .why-card .card-text {
            color: #000;
            transition: color 0.4s ease;
          }

          .why-card .icon-wrapper {
            margin-bottom: 1.5rem;
            display: flex;
            justify-content: center;
          }

          .why-card .icon-wrapper .img-fluid {
            width: 100px;
            height: 100px;
            filter: none; /* Default state: No filter, original image color (assuming it's dark) */
            transition: filter 0.4s ease;
          }

          /* Hover state: Dark background, light text/icons */
          .why-card:hover {
            background-color: #dedede96;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }

          .why-card:hover .card-title,
          .why-card:hover .card-text {
            color: #000;
          }

          .why-card:hover .white-png {
            filter: brightness(0) saturate(100%) invert(99%) sepia(1%) saturate(2%) hue-rotate(286deg) brightness(115%) contrast(101%) !important; 
          }

          @media (max-width: 991.98px) {
            .swiper-container-wrapper {
              padding: 0 20px;
            }
            .swiper-button-prev-custom01,
            .swiper-button-next-custom01 {
              top: 55%;
            }
            .swiper-button-prev-custom01 {
              left: -10px;
            }
            .swiper-button-next-custom01 {
              right: -10px;
            }
          }
          `}
        </style>

        <div className="swiper-container-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            pagination={false}
            autoplay={{ delay: 4000 }}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 1 },
              992: { slidesPerView: 3 },
            }}
          >
            {reasons.map((reason, index) => (
              <SwiperSlide key={index}>
                <div key={index} className="div">
                  <div className="card why-card border-0 h-100 shadow-sm">
                    <div className="card-body d-flex flex-column">
                      <div className="icon-wrapper mb-3">
                        <Image src={reason.img} width={100} height={100} className="img-fluid white-png" alt={reason.title + " icon"}></Image>
                      </div>
                      <h5 className="card-title fw-semibold mb-2">
                        {reason.title}
                      </h5>
                      <p className="card-text flex-grow-1">
                        {reason.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div ref={navigationPrevRef} className="swiper-button-prev-custom01"></div>
          <div ref={navigationNextRef} className="swiper-button-next-custom01"></div>
        </div>
      </div>
    </section>
  );
}