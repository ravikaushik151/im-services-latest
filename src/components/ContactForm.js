'use client';

import { useState } from 'react';
import '../app/styles/contact-form.css';

export default function ContactForm() {
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
    <section data-aos="fade-up"
      data-aos-duration="1500"
      className="section position-relative text-white"
      style={{
        backgroundImage: `url('/img/slider3.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        backgroundColor: '#000',
        backgroundSize: 'cover',
      }}
    >
      {/* ✅ Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ background: 'rgba(0,0,0,0.3)', zIndex: 1 }}
      ></div>

      {/* ✅ Content */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row">
          <div className="col-md-10 d-block mx-auto shadow px-md-5 px-3 py-3 py-md-5 py-4 bg-white text-dark rounded-4" data-aos="fade-up"
      data-aos-duration="2000">
            <p className="text-uppercase text-muted text-center mb-2">Contact Us</p>
            <h2 className="fw-bold mb-5 text-center text-uppercase">
              Let’s Elevate Your Retail Brand Experience
            </h2>

            <form onSubmit={handleSubmit} className="row g-4 contact-form">
              <div className="col-md-6 col-12">
                <input
                  type="text"
                  className="form-control form-field"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 col-12">
                <input
                  type="email"
                  className="form-control form-field"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 col-12">
                <input
                  type="text"
                  className="form-control form-field"
                  name="brand"
                  placeholder="Brand"
                  value={form.brand}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 col-12">
                <input
                  type="tel"
                  className="form-control form-field"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12">
                <select
                  className="form-select form-field"
                  name="messageType"
                  value={form.messageType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select One</option>
                  <option value="Strategy">Strategy</option>
                  <option value="Design">Design</option>
                  <option value="Rollout">Rollout</option>
                  <option value="Audit">Audit</option>
                </select>
              </div>

              <div className="col-12">
                <textarea
                  className="form-control form-field"
                  rows="4"
                  placeholder="Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="col-8  col-12 text-start small text-muted">
                We are committed to protecting your privacy. We will never collect information about you without your explicit consent.
              </div>

              <div className="col-4  col-12 text-center d-flex align-items-center justify-content-center">
                <button type="submit" className="btn btn-dark px-5 py-3">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
