'use client';

import { useState } from 'react';
import Image from 'next/image';

const services = [
 {
  id: 1,
  title: 'Business planning',
  icon: 'bi-briefcase',
  image: '/img/abstruct.jpg',
  heading: 'Help our clients succeed by planning',
  subtitle: 'Experience strategy',
  text: 'We always want our client grow with the planning we provide, maintaining strong long-term good relationship.',
 },
 {
  id: 2,
  title: 'Business research',
  icon: 'bi-journal-text',
  image: '/img/abstruct.jpg',
  heading: 'We research what helps your brand',
  subtitle: 'Research strategy',
  text: 'Detailed analysis and research create measurable results for your business.',
 },
 {
  id: 3,
  title: 'Tracking operations',
  icon: 'bi-compass',
  image: '/img/abstruct.jpg',
  heading: 'Track progress. Get better.',
  subtitle: 'Operation strategy',
  text: 'Keep an eye on KPIs and let your performance grow in the right direction.',
 },
 {
  id: 4,
  title: 'Business campaign',
  icon: 'bi-globe',
  image: '/img/abstruct.jpg',
  heading: 'Global campaigns with local impact',
  subtitle: 'Campaign strategy',
  text: 'Launch powerful marketing campaigns designed for global and local markets.',
 },
 {
  id: 5,
  title: 'Client retention',
  icon: 'bi-people',
  image: '/img/abstruct.jpg',
  heading: 'Retain clients long-term',
  subtitle: 'Retention strategy',
  text: 'Loyalty-building and retention practices to grow your lifetime value.',
 },
 {
  id: 6,
  title: 'Brand positioning',
  icon: 'bi-bullseye',
  image: '/img/abstruct.jpg',
  heading: 'Position your brand to lead',
  subtitle: 'Brand strategy',
  text: 'We help your brand stand out and stay remembered.',
 },
];

export default function ServiceTabs() {
 const [activeTab, setActiveTab] = useState(0);
 const service = services[activeTab];

 return (
  <section className="bg-white py-5">
   <div className="container">
    <div className='row'  data-aos="fade-up"
        data-aos-duration="1000">
     <p className="text-uppercase text-muted mb-2 text-center">Key Features</p>
     <h2 className="fw-bold mb-5  text-center">Inspiring Ideas, Expert Insights, Creative Perspectives</h2>
    </div>
    <div className="row align-items-center">
     {/* Tabs (left) */}
     <div className="col-lg-3  mb-4 mb-lg-0"  data-aos="fade-right"
        data-aos-duration="1200">
      <ul className="nav flex-column ">
       {services.map((item, index) => (
        <li key={item.id} className="mb-3">
         <button
          className={`btn text-start d-flex align-items-center gap-2 border-0 ${activeTab === index
            ? 'bg-dark border shadow-sm fw-semibold text-white fs-5'
            : 'bg-transparent text-dark'
           }`}
          onClick={() => setActiveTab(index)}
         >
          <i className={`bi ${item.icon} fs-5`}></i>
          {item.title}
         </button>
        </li>
       ))}
      </ul>
     </div>

     {/* Image (center) */}
     <div className="col-lg-6 text-center px-md-5  px-3"  data-aos="fade-up"
        data-aos-duration="1200">
      <Image
       src={service.image}
       alt={service.title}
       width={600}
       height={400}
       className="img-fluid rounded shadow"
      />
     </div>

     {/* Content (right) */}
     <div className="col-lg-3 px-3"  data-aos="fade-left"
        data-aos-duration="1000">
      <span className="badge bg-white text-dark shadow-sm px-3 py-3 rounded-pill mb-3">
       <i className="bi bi-globe me-2"></i> {service.subtitle}
      </span>
      <h3 className="fw-bold">{service.heading}</h3>
      <p className="text-muted">{service.text}</p>
      <a href="#explore" className="btn btn-dark rounded-pill px-4">
       EXPLORE NOW
      </a>
     </div>
    </div>
   </div>
  </section>
 );
}
