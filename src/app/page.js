
import Image from "next/image";
import styles from "./page.module.css";
import SwiperCarousel from '@/components/SwiperCarousel';
import HomeTopSection from '@/components/HomeTopSection';
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import ServiceTabs from '@/components/ServiceTabs';
import TestimonialsSection from '@/components/TestimonialsSection';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import ServicesSlider from '@/components/ServicesSlider';
import BlogCards from '@/components/BlogCards';
import FaqSection from '@/components/FaqSection';
import ContactForm from '@/components/ContactForm';
export default function Home() {

  const slides = [
    { title: 'Slide One', description: 'This is the first slide.' },
    { title: 'Slide Two', description: 'This is the second slide.' },
    { title: 'Slide Three', description: 'This is the third slide.' },
  ];
  return (
    <>

      <HeroSection />

      {/* <section className="hero" data-aos="fade-up"
        data-aos-duration="1200">
        <h1 >Timeless Creativity.<br />Powerful, Lasting Brand Impact.</h1>
        <p>
          We craft compelling campaigns through classic media, building brand
          recognition, trust, and visibility that stand the test of time.
        </p>
        <a href="#" className="btn-round ms-md-5 mt-0 mb-5">Start Your<br />Project</a>
        <div className="container-fluid px-md-5  text-center mt-5">
          <SwiperCarousel />
        </div>
      </section> */}
      {/* About Section */}
      <section className="section bg-light" data-aos="fade-up"
        data-aos-duration="1000">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-md-6 mb-4 mb-md-0 d-flex align-items-center" data-aos="fade-right"
              data-aos-duration="1400">
              <div>

                <p className="text-uppercase text-muted small mb-0">About</p>
                <h2 className="fw-bold display-5 mb-3">Lorem Lipsom.</h2>
                <p>
                  Tortor consequat id porta nibh venenatis cras. Sem et tortor
                  consequat id porta nibh. Et ligula ullamcorper malesuada proin
                  libero nunc consequat interdum varius. Laoreet non curabitur
                  gravida arcu ac tortor dignissim convallis aenean. Non arcu risus
                  quis varius. Commodo odio aenean sed adipiscing diam donec.
                  Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
                  Mattis pellentesque id nibh tortor.
                </p>
                <a href="#get-started" className="btn btn-dark btn-lg mt-4 rounded-pill px-4 mb-0">
                  GET STARTED NOW <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>



            </div>
            {/* Right Image */}
            <div className="col-md-6 text-center">

              <div className="position-relative d-inline-block">
                {/* Back Image */}
                <Image
                  src="/img/about.jpeg" // Replace with your actual path
                  alt="Team Working"
                  width={400}
                  height={400}
                  className="rounded shadow img-fluid" data-aos="fade-left"
                  data-aos-duration="1400"
                />

                {/* Front Image (overlapping) */}
                <Image
                  src="/img/about.jpeg" // Replace with your actual path
                  alt="Man on Phone"
                  width={300}
                  height={300}
                  className="rounded shadow position-absolute"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  style={{
                    top: '70%',
                    left: '-20%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceTabs />
      <VideoSection />
      <ServicesSlider />
      <BlogCards />
      <FaqSection />
   

 <ContactForm />

     



    </>

  );
}
