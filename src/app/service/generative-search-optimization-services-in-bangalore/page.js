import Image from 'next/image';
import homeData from '@/data/home';
import HeroSlider from '@/components/HeroSection';
import ServiceTabs from '@/components/ServiceTabs';
import VideoSection from '@/components/VideoSection';
import ServicesSlider from '@/components/ServicesSlider';
import BlogCards from '@/components/BlogCards';
import FaqSection from '@/components/FaqSection';
import ContactForm from '@/components/ContactForm';
import Link from "next/link";
import AnimatedHeadlineSection from '@/components/AnimatedHeadlineSection';
export default function ServicePage({ params }) {
  const { heroSlides, about } = homeData;

  return (
    <>
      <HeroSlider slides={heroSlides} />

      <section className="section bg-light" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 d-flex align-items-center" data-aos="fade-right" data-aos-duration="1400">
              <div>
                <p className="text-uppercase text-muted small mb-0">About</p>
                <h2 className="fw-bold text-uppercase  mb-3">{about.title}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${about.text} `,
                  }}
                />
                <Link href="#get-started" className="btn btn-dark fs-6 btn-lg mt-4 rounded-pill px-4 mb-0">
                  GET STARTED NOW <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <div className="position-relative d-inline-block">
                <Image
                  src={about.imageBack}
                  alt="Team Working"
                  width={400}
                  height={400}
                  className="rounded shadow img-fluid"
                  data-aos="fade-left"
                  data-aos-duration="1400"
                />
                <Image
                  src={about.imageFront}
                  alt="Man on Phone"
                  width={300}
                  height={300}
                  className="rounded shadow position-absolute"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  style={{ top: '70%', left: '-20%', transform: 'translateY(-50%)', zIndex: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceTabs services={homeData.serviceTabs} />
      <VideoSection />
      <ServicesSlider services={homeData.services} />
      <BlogCards posts={homeData.blogPosts} />
      <FaqSection faqs={homeData.faqs} />
      <AnimatedHeadlineSection
        background="/img/slider2.jpg"
        headline="Partner with one of the top GEO agencies in India."
      />
    </>
  );
}
