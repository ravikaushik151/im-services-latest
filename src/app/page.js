import Image from 'next/image';
import Link from "next/link";
import homeData from '@/data/home-new';
import HeroSlider from '@/components/HeroSection';
import ServiceTabs from '@/components/ServiceTabs';
import VideoSection from '@/components/VideoSection';
import ServicesSlider from '@/components/ServicesSlider';
import BlogCards from '@/components/BlogCards';
import FaqSection from '@/components/FaqSection';
import ContactForm from '@/components/ContactForm';
import AnimatedHeadlineSection from '@/components/AnimatedHeadlineSection';
import WhyChooseUs from "@/components/WhyChooseUs";
import BusinessServices from '@/components/BusinessServices';
import ClientsSection from "@/components/ClientsSection";
import CareerSection from "@/components/CareerSection";
const servicess = [
  {
    title: 'DESIGN & DEVELOPMENT',
    description: 'Lorem ipsum simply dummy text of amet consectetur.',
    tag: 'FINANCE',
    image: '/img/a3.png',
    link: '/services/finance',
  },
  {
    title: 'SEARCH ENGINE OPTIMIZATION',
    description: 'Lorem ipsum simply dummy text of amet consectetur.',
    tag: 'ANALYTICS',
    image: '/img/a2.png',
    link: '/services/tech',
  },
  {
    title: 'SOCIAL MEDIA MARKETING',
    description: 'Lorem ipsum simply dummy text of amet consectetur.',
    tag: 'DIGITAL',
    image: '/img/a4.png',
    link: '/services/commerce',
  },
  {
    title: 'Cloud computing',
    description: 'Lorem ipsum simply dummy text of amet consectetur.',
    tag: 'DIGITAL',
    image: '/img/a5.png',
    link: '/services/cloud',
  },

];
const clientsData = {
  clients: {
    title: "OUR CLIENTS",
    clients: [
      { name: "Asset", logo: "/img/buildwell-projects.png" },
      { name: "Assets Guru", logo: "/img/buildwell-projects.png" },
      { name: "Axis", logo: "/img/buildwell-projects.png" },
      { name: "Brigade", logo: "/img/buildwell-projects.png" },
      { name: "BSR", logo: "/img/buildwell-projects.png" },
      { name: "Prestige", logo: "/img/buildwell-projects.png" },
    ],
    buttonText: "VIEW ALL CLIENTS",
    buttonLink: "/clients",
  },
}
const careerData = {
  career: {
    title: "CAREER",
    description:
      "Interested in joining our phenomenal family? As a rapidly expanding company, we are always on the lookout for young, energetic and creative blood...",
    backgroundImage: "/img/slider3.jpg",
    buttonText: "APPLY",
    buttonLink: "/career",
  },
}
export const metadata = {
  title: "Home | IM Solutions",
  description: "IM Solutions",
  keywords: "IM Solutions, Services, SEO, Web Development, Digital Marketing",
};
export default function ServicePage({ params }) {
  const { heroSlides, about, } = homeData;

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
      <WhyChooseUs />
      {/* <ServiceTabs services={homeData.serviceTabs} /> */}


      <BusinessServices services={servicess} />
      <VideoSection />
      {/* <ServicesSlider services={homeData.services} /> */}

      <BlogCards posts={homeData.blogPosts} />
      {/* <FaqSection faqs={homeData.faqs} /> */}
      <CareerSection data={careerData.career} />
      <ClientsSection data={clientsData.clients} />
      {/* <AnimatedHeadlineSection
        background="/img/slider2.jpg"
        headline="Your audience is already asking AI. Is your brand the answer?"
      /> */}
    </>
  );
}
