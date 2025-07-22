'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import '../app/styles/contact-form.css';

export default function Footer() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    brand: '',
    phone: '',
    messageType: 'Strategy',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
  };

  return (
    <>
    

      <footer className=" text-light mt-0 pt-5 pb-3" style={{
        backgroundImage: `url('/img/bg-01.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        backgroundColor: '#000', // fallback dark navy
        backgroundSize: 'contain',
      }}>
        {/* Call to Action */}
        <div className="container pb-4 border-bottom border-secondary text-center text-md-start d-none" data-aos="fade-up"
          data-aos-duration="1200">
          <div className="row align-items-center ">
            <div className="col-md-6 mb-3 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start">
              <div>
                <h2 className="fw-bold text-white text-uppercase ">Get a GEO Consultation</h2>
                <p className="text-white text-uppercase "> We optimize your brand for AI-driven discovery platforms.</p>
              </div>

            </div>
            <div className="col-md-6 text-md-end d-flex align-items-center justify-content-center justify-content-md-end">
              <div>
                <Link href="/" className="btn btn-danger rounded-pill me-3 mb-3">
                  <i className="bi bi-envelope-fill me-1"></i> Free consultation
                </Link>
                <a href="tel:+918880564488" className="btn btn-outline-light rounded-pill me-3 mb-3 d-none">
                  <i className="bi bi-telephone-fill me-1"></i> +91 888 056 4488
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Content */}
        <div className="container mt-5" data-aos="fade-up"
          data-aos-duration="1400">

          <div className="row gy-4">
            {/* Logo & Social */}
            <div className="col-md-3  col-12 m-center ">
              <div className="d-flex  justify-content-center align-items-center  ">
                <div>
                  <h6 className="fw-bold text-white mb-md-5 mb-4 text-center">Powered By</h6>
                  <Image
                    src="/img/weblogo.png" // Update this path to your actual logo file
                    alt="Logo"
                    width={100}
                    height={40}
                    className="d-block mx-auto img-fluid mt-3 mb-3 mt-md-5 "
                  />



                  <a href="mailto:info@imsolutions.mobi" className="text-white mb-md-0 my-1 d-block fs-5 text-center text-decoration-none"> <i className="bi bi-envelope-open"></i> info@imsolutions.mobi</a>

                  <a href="tel:+918880564488" className="text-white  mb-md-0 my-1 d-block  fs-5 text-center text-decoration-none"> <i className="bi bi-telephone"></i> +91 888 056 4488</a>
                  <div className="d-flex gap-3 mt-3  fs-5 align-items-md-start align-items-center justify-content-center ">
                    Follow Us :
                    <a href="#" className="text-white"><i className="bi bi-facebook"></i></a>

                    <a href="#" className="text-white"><i className="bi bi-twitter-x"></i></a>
                    <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>


              </div>

            </div>


            {/* <div className="col-md-2 col-12 ps-0 ps-md-5 m-center">
            <h6 className="fw-bold text-white mb-3 ">About</h6>
            <ul className="list-unstyled text-white small">
              <li className="py-2" ><Link href="/company" className="text-decoration-none text-white mb-3">Company</Link></li>
              <li className="py-2" ><Link href="/services" className="text-decoration-none text-white mb-3">Services</Link></li>
              <li className="py-2" ><Link href="/process" className="text-decoration-none text-white mb-3">Process</Link></li>
              <li className="py-2" ><Link href="/contact" className="text-decoration-none text-white mb-3">Contact</Link></li>
            </ul>
          </div> */}

            {/* Services */}
            <div className="col-md-2 offset-md-1  col-12 ps-md-3 ps-0 m-center">
              <h6 className="fw-bold text-white mb-md-4 mb-4">Quick Link</h6>
              <ul className="list-unstyled text-white small">
                <li className="py-2" ><Link href="/services/financial" className="text-decoration-none text-white mb-3">Financial Service</Link></li>
                <li className="py-2" ><Link href="/services/investment" className="text-decoration-none text-white mb-3">Investment Service</Link></li>
                <li className="py-2" ><Link href="/services/banking" className="text-decoration-none text-white mb-3">Banking Service</Link></li>
                <li className="py-2" ><Link href="/services/consulting" className="text-decoration-none text-white mb-3">Consulting Service</Link></li>
                <li className="py-2" ><Link href="/services/financial" className="text-decoration-none text-white mb-3">Financial Service</Link></li>
                <li className="py-2" ><Link href="/services/investment" className="text-decoration-none text-white mb-3">Investment Service</Link></li>
                <li className="py-2" ><Link href="/services/banking" className="text-decoration-none text-white mb-3">Banking Service</Link></li>



              </ul>
            </div>

            {/* 
          <div className="col-md-2 m-center">
            <h6 className="fw-bold text-white mb-3">Get in touch</h6>
            <p className="text-white small mb-1">Need support?</p>
            <a href="mailto:info@imsolutions.mobi" className="text-white small d-block">info@imsolutions.mobi</a>
            <p className="text-white small mt-2 mb-1">Customer care?</p>
            <a href="tel:+918880564488" className="text-white small d-block">+91 888 056 4488</a>
          </div>
 */}

            {/* <div className="col-md-3 m-center">
            <h6 className="fw-bold text-white mb-3">Subscribe to newsletter</h6>
            <p className="text-white small">Enter your email and we contact you!</p>
            <div className="input-group mt-2">
              <input
                type="email"
                className="form-control form-control-sm"
                placeholder="Enter your email"
              />
              <span className="input-group-text">
                <i className="bi bi-envelope-fill"></i>
              </span>
            </div>
          </div> */}
            <div className='col-md-6'>
              <div className="row px-md-3 px-3">


                <div className="col-md-12 d-block mx-auto shadow  text-white rounded-4" >


                  <form onSubmit={handleSubmit} className="row g-3 px-3 rounded contact-form bg-transparent ">
                    <h2 className="fw-bold mb-0 text-white">Let’s Elevate Your GEO Presence.</h2>
                    <p className="mb-2 text-white">
                      Partner with India's leading <em>Generative Search Optimization experts</em> to future-proof your digital visibility.
                    </p>

                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control p-3"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control p-3"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control p-3"
                        name="brand"
                        placeholder="Brand Name"
                        value={form.brand}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control p-3"
                        name="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12 d-none">
                      <select
                        className="form-select p-3"
                        name="messageType"
                        value={form.messageType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Message Type</option>
                        <option value="Strategy">Strategy</option>
                        <option value="Design">Design</option>
                        <option value="Rollout">Rollout</option>
                        <option value="Audit">Audit</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control p-3 "
                        rows="1"
                        placeholder="Your Message"
                        name="message"

                        value={form.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-lg w-100 d-flex justify-content-center align-items-center gap-2">
                        Book A Free Retail Branding Session
                        <span className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }}>
                          <i className="bi bi-arrow-right text-primary"></i>
                        </span>
                      </button>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="container mt-md-5 pt-md-3 mt-3 mb-0 border-top border-secondary text-center text-muted small" >
          <div className="row" >
            <div className="col-md-6 text-md-start my-md-3 mt-3 mb-md-0 text-white"  >
              <p >   © Copyright 2025 <Link href="/" className="text-decoration-none text-light">IM Solutions</Link></p>

            </div>
            <div className="col-md-6 text-md-end my-md-3 mt-1 mb-md-0">
              <Link href="/privacy-policy" className="text-light text-decoration-none me-3">Privacy policy</Link>
              <Link href="/terms" className="text-light text-decoration-none me-3">Terms and conditions</Link>
              <Link href="/copyright" className="text-light text-decoration-none">Copyright</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
