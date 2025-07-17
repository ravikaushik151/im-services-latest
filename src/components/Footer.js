'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className=" text-light pt-5 pb-3"  style={{
    backgroundImage: `url('/img/bg-01.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center',
    backgroundColor: '#000', // fallback dark navy
    backgroundSize: 'contain',
  }}>
      {/* Call to Action */}
      <div className="container pb-4 border-bottom border-secondary text-center text-md-start" data-aos="fade-up"
      data-aos-duration="1200">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start">
            <div>
              <h2 className="fw-bold text-white text-uppercase ">Get a consultation services.</h2>
              <p className="text-white text-uppercase ">We will take care of your business accounting services.</p>
            </div>

          </div>
          <div className="col-md-6 text-md-end d-flex align-items-center justify-content-center justify-content-md-end">
            <div>
              <Link href="/" className="btn btn-danger rounded-pill me-2">
                <i className="bi bi-envelope-fill me-1"></i> Free consultation
              </Link>
              <a href="tel:+12345678910" className="btn btn-teal bg-teal text-white rounded-pill">
                <i className="bi bi-telephone-fill me-1"></i> +1 234 567 8910
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
            <div className="d-flex  justify-content-center justify-content-md-start mb-3">
              <Image
                src="/img/weblogo.png" // Update this path to your actual logo file
                alt="Logo"
                width={80}
                height={30}
                className="me-md-2 img-fluid "
              />

            </div>
            <p className="text-white small m-center">
              Lorem ipsum amet adipiscing elit to eiusmod ad tempor.
            </p>
            <div className="d-flex gap-3 mt-3 align-items-md-start align-items-center justify-content-center justify-content-md-start">
              <a href="#" className="text-white"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white"><i className="bi bi-dribbble"></i></a>
              <a href="#" className="text-white"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
            </div>
          </div>

          {/* About */}
          <div className="col-md-2 col-12 ps-0 ps-md-5 m-center">
            <h6 className="fw-bold text-white mb-3 ">About</h6>
            <ul className="list-unstyled text-white small">
              <li><Link href="/company" className="text-decoration-none text-white">Company</Link></li>
              <li><Link href="/services" className="text-decoration-none text-white">Services</Link></li>
              <li><Link href="/process" className="text-decoration-none text-white">Process</Link></li>
              <li><Link href="/contact" className="text-decoration-none text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-2  col-12 ps-0 m-center">
            <h6 className="fw-bold text-white mb-3">Services</h6>
            <ul className="list-unstyled text-white small">
              <li><Link href="/services/financial" className="text-decoration-none text-white">Financial</Link></li>
              <li><Link href="/services/investment" className="text-decoration-none text-white">Investment</Link></li>
              <li><Link href="/services/banking" className="text-decoration-none text-white">Banking</Link></li>
              <li><Link href="/services/consulting" className="text-decoration-none text-white">Consulting</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-2 m-center">
            <h6 className="fw-bold text-white mb-3">Get in touch</h6>
            <p className="text-white small mb-1">Need support?</p>
            <a href="mailto:hi@domain.com" className="text-white small d-block">hi@domain.com</a>
            <p className="text-white small mt-2 mb-1">Customer care?</p>
            <a href="tel:+12345678910" className="text-white small d-block">+1 234 567 8910</a>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 m-center">
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
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mt-4 pt-3 mb-0 border-top border-secondary text-center text-muted small" >
        <div className="row" >
          <div className="col-md-6 text-md-start mb-2 mb-md-0 text-white"  >
            <p >   © Copyright 2025 <Link href="/" className="text-decoration-none text-light">IM Solutions</Link></p>
         
          </div>
          <div className="col-md-6 text-md-end">
            <Link href="/privacy-policy" className="text-light text-decoration-none me-3">Privacy policy</Link>
            <Link href="/terms" className="text-light text-decoration-none me-3">Terms and conditions</Link>
            <Link href="/copyright" className="text-light text-decoration-none">Copyright</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
