'use client';

import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.refresh();
    }

    // Close offcanvas on link click
    const links = document.querySelectorAll(".offcanvas .nav-link");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        const offcanvasEl = document.querySelector(".offcanvas");
        if (offcanvasEl) {
          const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
          if (bsOffcanvas) {
            bsOffcanvas.hide();
          }
        }
      });
    });
  }, []);

  return (
    <nav className="navbar navbar-dark bg-transparent py-3">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img
            src="https://www.imsolutions.co/img/weblogo.png"
            alt="IM Logo"
            style={{ width: "80px" }}
          />
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas Menu */}
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <Link className="navbar-brand" href="/">
                <img
                  src="https://www.imsolutions.co/img/weblogo.png"
                  alt="IM Logo"
                  style={{ width: "80px" }}
                />
              </Link>
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link fw-bold mb-3" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold mb-3" href="/about">About Us</Link>
              </li>
              <li className="nav-item dropdown ">
                <Link
                  className="nav-link dropdown-toggle fw-bold  mb-3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Services
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark ps-3">
                  <li>
                    <Link className="dropdown-item" href="/service/service-1">Service 1</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/service/service-2">Service 2</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/service/service-3">Service 3</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/service/service-4">Service 4</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/service/service-5">Service 5</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold mb-3" href="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold mb-3" href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
