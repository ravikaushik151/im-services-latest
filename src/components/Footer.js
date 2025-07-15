'use client';
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="footer-section bg-dark text-white mb-0 pb-0">
        <div className="container">
          <div className="row pb-5 border-bottom border-light">
            <div className="col-md-5 px-md-5 d-flex justify-content-center align-items-center">
              <div className="footer-association">
                <Link href="/">
                  <Image
                    src="/img/weblogo.png"
                    alt="logo"
                    width={150}
                    height={50}
                    className="d-none logo white-png d-block mx-auto img-fluid"
                  />
                </Link>
                <p className="text-md-start text-center text-white fs-1 lh-sm">
                  Let's make something great work together.
                </p>
                <div className="row py-md-4 py-3">
                  <div className="col-md-6">
                    <p className="fw-bold text-md-start text-center text-white mb-0">Address</p>
                    <p className="text-md-start text-center text-white ">
                      <i className="fa fa-map-marker "></i> 123 Street, City, Country
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className="fw-bold text-md-start text-center text-white mb-0">Call our office</p>
                    <p className="text-md-start text-center text-white ">
                      <i className="fa fa-phone "></i> +123 456 7890
                    </p>
                  </div>
                </div>

              </div>
            </div>
            {/* Project Info */}

          
            <div className="col-md-2 m-center py-3">
              <div>
                <h4 className="footer-title pb-3">Quick Links</h4>
                <ul className="px-0" style={{ listStyle: "none" }}>
                  <li className="noclass">
                    <Link href="./" className="text-decoration-none text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-decoration-none text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-decoration-none text-white">
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-decoration-none text-white">
                      Blog
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className="text-decoration-none text-white"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-decoration-none text-white"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

            <div className="col-md-2 m-center py-3 ">
              <h4 className="footer-title pb-3 ">Service</h4>
              <ul className="px-0 " style={{ listStyle: "none" }}>
                <li className="noclass">
                  <Link href="./" className="text-decoration-none text-white">
                    Service
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-decoration-none text-white">
                    Service
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-decoration-none text-white">
                    Service
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-decoration-none text-white">
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-decoration-none text-white"
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-decoration-none text-white"
                  >
                    Service
                  </Link>
                </li>

              </ul>
            </div>
            {/* Developer Info */}

            {/* Get In Touch Form */}
            <div className="col-md-3">
              <div>
                <h4 className="footer-heading m-center py-3">GET IN TOUCH</h4>
                <form className="footer-form ">
                  <div className="row">
                    <div className="col-md-6"> <input
                      type="text"
                      placeholder="Name"
                      className="footer-input rounded-0 form-control mb-3"
                    /> </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        placeholder="Email"
                        className="footer-input rounded-0 form-control mb-3"
                      /> </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <input
                        type="tel"
                        placeholder="Contact Number"
                        className="footer-input rounded-0 form-control mb-3"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <textarea className="footer-input rounded-0 form-control mb-3 rows=2" placeholder="Message"></textarea>
                    </div>
                  </div>
                  <div className="m-center text-center row">
                    <div className="col-md-12">
                      <button type="submit" className="btn btn-light footer-button mb-3">
                        SUBMIT
                      </button></div>

                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom text-center mb-0 ">
          <p className="mb-0 py-4">© {new Date().getFullYear()} IM Services. All rights reserved.</p>
        </div>
      </footer>

    </>

  );
}
