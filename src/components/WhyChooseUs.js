"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "360˚ Digital Marketing Solution",
      subtitle:
        "We take pride in delivering fully-integrated and measurable digital marketing solutions. We help support all your brands digital needs. We are here to optimize, communicate and advocate. Our team use relevant analytics and metrics to implement a solid digital strategy, customized for your business and geared towards helping you expand your current reach.",
      icon: "bi bi-bookmark-check",
      img: "/img/why.jpg",
    },
    {
      title: "Maximise your Lead Generation",
      subtitle:
        "Research shows that 70% of the data are vague. To increase your sales and grow your client base, you need accurate lead generation (not mere data). We help businesses grow fast with proven real-time leads. We use cutting-edge tools to find the right target audiences giving you the best chance of closing the sale.",
      icon: "bi bi-people-fill",
      img: "/img/why.jpg",
    },
    {
      title: "Full-Scale Branding Agency",
      subtitle:
        "Brands create impression. It is what differentiates a product or service from other and influences customer preferences. IM Solutions make brands become iconic. Our branding campaigns are designed to win the heart and minds of people. To do this, we combine strategy, stunning designs and research to creatively drive your brand.",
      icon: "bi bi-shield-check",
      img: "/img/why.jpg",
    },
    {
      title: "360˚ Digital Marketing Solution",
      subtitle:
        "We take pride in delivering fully-integrated and measurable digital marketing solutions. We help support all your brands digital needs. We are here to optimize, communicate and advocate. Our team use relevant analytics and metrics to implement a solid digital strategy, customized for your business and geared towards helping you expand your current reach.",
      icon: "bi bi-bookmark-check",
      img: "/img/why.jpg",
    },
  ];

  return (
    <section className="why-choose-section text-center">
      <div className="container">
        <p className="why-heading-small mb-1">Lorem Lipsom</p>
        <h2 className="why-heading mb-5">Why choose us?</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={false}
          autoplay={{ delay: 4000 }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {reasons.map((reason, index) => (
            <SwiperSlide key={index}>
              <div className="card why-card border-0 h-100 ">
                {/* Image with overlay */}
                <div className="card-img-wrap position-relative">
                  <Image
                    src={reason.img}
                    alt={reason.title}
                    width={500}
                    height={350}
                    className="card-img rounded"
                  />
                  <div className="overlay d-flex justify-content-center align-items-top py-md-5 py-4">
                    <p className="overlay-text fs-3 fw-semibold">{reason.title}</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="card-footer text-center">
                  <i className={`${reason.icon} me-2`}></i>
                  {reason.subtitle}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
