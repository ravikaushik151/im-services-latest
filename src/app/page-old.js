
import Image from "next/image";
import Link from "next/link";
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
                <Link href="#get-started" className="btn btn-dark btn-lg mt-4 rounded-pill px-4 mb-0">
                  GET STARTED NOW <i className="bi bi-arrow-right ms-2"></i>
                </Link>
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
                  className="rounded shadow img-fluid"  data-aos="fade-left"
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
      <section className="section bg-white">
        <div className="container">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <p className="text-muted mb-1">Why Us</p>
              <h2 className="fw-bold mb-0">Creative Authority</h2>
            </div>
            <button className="btn view-more-btn">
              View More <i className="bi bi-arrow-right ms-2" />
            </button>
          </div>

          <div className="section-divider" />

          {/* Content Block 1 */}
          <div className="row align-items-center position-relative mt-5" data-aos="fade-up"
            data-aos-duration="1000">
            {/* Floating Arrow Button */}
            <div className="d-flex justify-content-end ">
              <button className="arrow-btn">
                <i className="bi bi-box-arrow-up-right" />
              </button>
            </div>

            <div className="col-lg-6" data-aos="fade-right"
              data-aos-duration="1400">
              <img src="/img/abstruct.jpg" alt="Creative Visual" className="img-fluid rounded" />
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0 position-relative" data-aos="fade-left"
              data-aos-duration="1400">
              <div className="d-flex justify-content-start align-items-start mb-3">
                <h6 className="fw-semibold text-uppercase">Creative Campaign Strategy</h6>
              </div>
              <p>
                We specialize in developing bespoke advertising campaigns that are meticulously
                tailored to your brand’s unique goals. Our approach ensures a comprehensive strategy
                across various traditional media platforms, creating a cohesive and impactful presence
                that resonates with your target audience.
              </p>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <button className="tag-btn">Integrated Multi-Channel Campaigns</button>
                <button className="tag-btn">Brand Positioning</button>
              </div>
            </div>
          </div>

          <div className="section-divider my-3 py-3" data-aos="fade-up"
            data-aos-duration="1400" />

          {/* Content Block 2 */}
          <div className="row align-items-center position-relative mt-5" data-aos="fade-up"
            data-aos-duration="1400">
            <div className="d-flex justify-content-end ">
              <button className="arrow-btn">
                <i className="bi bi-box-arrow-up-right" />
              </button>
            </div>

            <div className="col-lg-6" data-aos="fade-right"
              data-aos-duration="1400">
              <img src="/img/abstruct.jpg" alt="Creative Visual" className="img-fluid rounded" />
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0 position-relative" data-aos="fade-left"
              data-aos-duration="1400">
              <div className="d-flex justify-content-start align-items-start mb-3">
                <h6 className="fw-semibold text-uppercase">Creative Campaign Strategy</h6>
              </div>
              <p>
                We specialize in developing bespoke advertising campaigns that are meticulously
                tailored to your brand’s unique goals. Our approach ensures a comprehensive strategy
                across various traditional media platforms, creating a cohesive and impactful presence
                that resonates with your target audience.
              </p>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <button className="tag-btn">Integrated Multi-Channel Campaigns</button>
                <button className="tag-btn">Brand Positioning</button>
              </div>
            </div>
          </div>

          <div className="section-divider my-3 py-3" />
        </div>

      </section>

      <WhatMakesUsDifferent />
      {/* <section className="section bg-white d-none">
    <div className="container">
      <div className="mb-2 text-muted">Our Service</div>
      <h2 className="fw-bold">Creative Authority</h2>
      <div className="service-card row align-items-center my-4">
        <div className="col-lg-7 mb-4 mb-lg-0">
          <h5 className="fw-semibold text-uppercase">
            Creative Campaign Strategy
          </h5>
          <div className="my-3">
            <button className="tag-btn">
              Integrated Multi-Channel Campaigns
            </button>
            <button className="tag-btn">Brand Positioning</button>
          </div>
          <p>
            We specialize in developing bespoke advertising campaigns that are
            meticulously tailored to your brand’s unique goals. Our approach
            ensures a comprehensive strategy across various traditional media
            platforms, creating a cohesive and impactful presence that
            resonates with your target audience.
          </p>
        </div>
        <div className="col-lg-5 text-center">
          <img src="/img/right.jpg" alt="Service" className="service-image" />
        </div>
      </div>
      <div className="service-card row align-items-center my-4">
        <div className="col-lg-7 mb-4 mb-lg-0">
          <h5 className="fw-semibold text-uppercase">
            Creative Campaign Strategy
          </h5>
          <div className="my-3">
            <button className="tag-btn">
              Integrated Multi-Channel Campaigns
            </button>
            <button className="tag-btn">Brand Positioning</button>
          </div>
          <p>
            We specialize in developing bespoke advertising campaigns that are
            meticulously tailored to your brand’s unique goals. Our approach
            ensures a comprehensive strategy across various traditional media
            platforms, creating a cohesive and impactful presence that
            resonates with your target audience.
          </p>
        </div>
        <div className="col-lg-5 text-center">
          <img src="/img/right.jpg" alt="Service" className="service-image" />
        </div>
      </div>
      <div className="service-card row align-items-center  my-4">
        <div className="col-lg-7 mb-4 mb-lg-0">
          <h5 className="fw-semibold text-uppercase">
            Creative Campaign Strategy
          </h5>
          <div className="my-3">
            <button className="tag-btn">
              Integrated Multi-Channel Campaigns
            </button>
            <button className="tag-btn">Brand Positioning</button>
          </div>
          <p>
            We specialize in developing bespoke advertising campaigns that are
            meticulously tailored to your brand’s unique goals. Our approach
            ensures a comprehensive strategy across various traditional media
            platforms, creating a cohesive and impactful presence that
            resonates with your target audience.
          </p>
        </div>
        <div className="col-lg-5 text-center">
          <img src="/img/right.jpg" alt="Service" className="service-image" />
        </div>
      </div>
    </div>
  </section> */}
      <section className="section bg-white" data-aos="fade-up"
        data-aos-duration="1000">
        <div className="container">
          <div className="">
            <p className="text-muted">About Advera</p>
            <h1 className="fw-bold">
              At our core, we are storytellers. With decades of experience in
              traditional advertising,<br />
              we blend time-tested strategies with creative brilliance to
            </h1>
            <div className="mt-3 mb-5">
              <span className="highlighted-text">
                <span className="highlighted-bg">build</span> brands that
                <span className="highlighted-bg">last</span>.
              </span>
            </div>
          </div>
          <hr className="my-5" />
          <div className="row text-center text-md-start mt-3">
            <div className="col-md-4 mb-4" data-aos="fade-right"
              data-aos-duration="1400">
              <p>
                For over 30 years, we’ve been crafting powerful brand stories
                through traditional media — delivering consistent, results-driven
                campaigns that build lasting impressions, and foster trust.
              </p>
              <div className="stat-number">30+</div>
            </div>
            <div className="col-md-4 mb-4" data-aos="fade-right"
              data-aos-duration="1600">
              <p>
                For over 30 years, we’ve been crafting powerful brand stories
                through traditional media — delivering consistent, results-driven
                campaigns that build lasting impressions, and foster trust.
              </p>
              <div className="stat-number">92%</div>
            </div>
            <div className="col-md-4 mb-4" data-aos="fade-right"
              data-aos-duration="1600">
              <p>
                For over 30 years, we’ve been crafting powerful brand stories
                through traditional media — delivering consistent, results-driven
                campaigns that build lasting impressions, and foster trust.
              </p>
              <div className="stat-number">5,000+</div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection />
      <section className="faq-section text-center section bg-light" data-aos="fade-up"
        data-aos-duration="1200">
        <div className="container">
          <p className="text-muted">Our FAQs</p>
          <h2 className="mb-5">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            {/* FAQ 1 */}
            <div className="accordion-item" data-aos="fade-up"
              data-aos-duration="1400">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  1. How Long Will It Take Before I See Better Rankings In Google?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  The time it will take for your website's search engine rankings to begin improving depends on several of its characteristics prior to optimization. Older websites, with diverse backlink portfolios and more trust from search engines.
                </div>
              </div>
            </div>
            {/* FAQ 2 */}
            <div className="accordion-item" data-aos="fade-up"
              data-aos-duration="1600">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                  2. How Long Do Search Engine Results Last?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Results can last long-term with continued optimization and link-building efforts.
                </div>
              </div>
            </div>
            {/* FAQ 3 */}
            <div className="accordion-item" data-aos="fade-up"
              data-aos-duration="1800">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                  Is Travel Insurance Included In The Package?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  No, travel insurance is not included by default but can be added upon request.
                </div>
              </div>
            </div>
            {/* FAQ 4 */}
            <div className="accordion-item" data-aos="fade-up"
              data-aos-duration="2000">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                  4. Why Should I Choose Springboard SEO?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  We offer tailored strategies, expert support, and a proven track record in boosting search rankings.
                </div>
              </div>
            </div>
            {/* FAQ 5 */}
            <div className="accordion-item" data-aos="fade-up"
              data-aos-duration="2200">
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                  5. How Much Does Search Engine Optimization Cost?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  SEO costs vary depending on project scope, competition, and timeline — contact us for a custom quote.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section text-center" data-aos="fade-up"
        data-aos-duration="1200">
        <div className="container">
          <p className="text-uppercase text-muted mb-2">Our Blog</p>
          <h2 className="fw-bold mb-5">Inspiring Ideas, Expert Insights, Creative Perspectives</h2>
          <div className="row g-4">
            {/* Blog Card 1 */}
            <div className="col-md-4" data-aos="fade-up"
              data-aos-duration="1500">
              <div className="card h-100 border-0">
                <img src="/img/abstruct.jpg" className="card-img-top" alt="3D Design 1" />
                <div className="card-body text-start px-2">
                  <Link href="#" className="text-decoration-underline text-muted small">Design &amp; Branding Insight</Link>
                  <h5 className="card-title fw-bold mt-2">
                    <Link href="#" className="text-dark text-decoration-none">How 3D Design is Shaping Modern Branding</Link>
                  </h5>
                  <p className="card-text">In today’s digital world, 3D design is transforming the way brands connect with their audiences.</p>
                </div>
              </div>
            </div>
            {/* Blog Card 2 */}
            <div className="col-md-4" data-aos="fade-up"
              data-aos-duration="1800">
              <div className="card h-100 border-0">
                <img src="/img/abstruct.jpg" className="card-img-top" alt="3D Design 2" />
                <div className="card-body text-start px-2">
                  <Link href="#" className="text-decoration-underline text-muted small">Design &amp; Branding Insight</Link>
                  <h5 className="card-title fw-bold mt-2">
                    <Link href="#" className="text-dark text-decoration-none">How 3D Design is Shaping Modern Branding</Link>
                  </h5>
                  <p className="card-text">In today’s digital world, 3D design is transforming the way brands connect with their audiences.</p>
                </div>
              </div>
            </div>
            {/* Blog Card 3 */}
            <div className="col-md-4" data-aos="fade-up"
              data-aos-duration="2100">
              <div className="card h-100 border-0">
                <img src="/img/abstruct.jpg" className="card-img-top" alt="3D Design 3" />
                <div className="card-body text-start px-2">
                  <Link href="#" className="text-decoration-underline text-muted small">Design &amp; Branding Insight</Link>
                  <h5 className="card-title fw-bold mt-2">
                    <Link href="#" className="text-dark text-decoration-none">How 3D Design is Shaping Modern Branding</Link>
                  </h5>
                  <p className="card-text">In today’s digital world, 3D design is transforming the way brands connect with their audiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>

  );
}
