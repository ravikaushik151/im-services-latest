'use client';

import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
  // Optional: Re-initialize AOS on mount (safe)
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <nav className="navbar  navbar-dark">
      <div className="container">
        <Link className="navbar-brand" data-aos="fade-right" href="#">
          <img
            src="https://www.imsolutions.co/img/weblogo.png"
            alt="IM Logo"
            style={{ width: "80px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav " style={{ maxHeight: "500px" }}>
            {/* Home Link */}
            <li
              className="nav-item px-5"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Link className="nav-link fw-bold fs-6 py-md-0 py-1" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item px-5">
              <Link
                className="nav-link fw-bold fs-6 py-md-0 py-1"
                href="/"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                About Us
              </Link>
            </li>

            {/* Service Dropdown */}
            <li
              className="nav-item dropdown px-5"
              data-aos="fade-left"
              data-aos-duration="1400"
            >
              <Link
                className="nav-link dropdown-toggle fw-bold fs-6 py-md-0 py-1"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </Link>
              <ul className="dropdown-menu bg-black bg-opacity-75 py-3 mt-3  ps-2" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item text-white" href="/service/service-1">Service 1</Link>
                </li>
                <li>
                  <Link className="dropdown-item text-white" href="/service/service-2">Service 2</Link>
                </li>
                <li>
                  <Link className="dropdown-item text-white" href="/service/service-3">Service 3</Link>
                </li>
                <li>
                  <Link className="dropdown-item text-white" href="#/service/service-4">Service 4</Link>
                </li>
                <li>
                  <Link className="dropdown-item text-white" href="#/service/service-5">Service 5</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item px-5">
              <Link
                className="nav-link fw-bold fs-6  py-md-0 py-1"
                href="/"
                data-aos="fade-left"
                data-aos-duration="1600"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item px-5">
              <Link
                className="nav-link fw-bold fs-6  py-md-0 py-1"
                href="/"
                data-aos="fade-left"
                data-aos-duration="1800"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
