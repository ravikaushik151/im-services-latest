'use client';

export default function WhatMakesUsDifferent() {
  return (
    <section className="section text-center bg-light position-relative what-makes-us-different">
      <div className="container">
        <p className="text-uppercase text-muted small">What Makes Us Different</p>
        <h2 className="fw-bold display-5 mb-3">
          Experience. Integrity. Results-Driven Advertising Excellence
        </h2>
        <p className="lead mb-5">
          Combining timeless strategy and creative execution to deliver consistent, high-impact results for every client campaign.
        </p>

        <div className="row g-4 align-items-stretch">
          {/* Left Column */}
          <div className="col-lg-4 d-flex flex-column justify-content-between">
            <div className="card border-0  bg-white shadow-sm h-100">
              <div className="card-body text-start">
                <div className="mb-3">
                  <img src="/img/icon-experience.svg" alt="Experience Icon" width="32" />
                </div>
                <h5 className="card-title fw-bold">Decades of Industry Experience</h5>
                <p className="card-text">
                  Our team offers years of hands-on experience in traditional advertising, mastering brand storytelling that resonates across various offline channels.
                </p>
              </div>
            </div>

            <div className="card border-0 bg-white  shadow-sm mt-4 h-100">
              <div className="card-body text-start">
                <div className="mb-3">
                  <i className="bi bi-person-lines-fill fs-4 text-secondary"></i>
                </div>
                <h5 className="card-title fw-semibold">Client-Centric Approach</h5>
                <p className="card-text">
                  Our team offers years of hands-on experience in traditional advertising, mastering brand storytelling that resonates across various offline channels.
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="col-lg-4 d-flex align-items-center justify-content-center">
            <img src="/img/abstruct.jpg" className="img-fluid rounded" alt="Center Performance" />
          </div>

          {/* Right Column */}
          <div className="col-lg-4 d-flex flex-column justify-content-between">
            <div className="card border-0 bg-white h-100">
              <div className="card-body text-start">
                <div className="mb-3">
                  <i className="bi bi-arrow-repeat fs-4 text-secondary"></i>
                </div>
                <h5 className="card-title fw-semibold">Proven Track Record</h5>
                <p className="card-text">
                  Our team offers years of hands-on experience in traditional advertising, mastering brand storytelling that resonates across various offline channels.
                </p>
              </div>
            </div>

            <div className="card border-0 bg-white mt-4 h-100">
              <div className="card-body text-start">
                <div className="mb-3">
                  <i className="bi bi-globe-americas fs-4 text-secondary"></i>
                </div>
                <h5 className="card-title fw-semibold">Full-Spectrum Traditional Services</h5>
                <p className="card-text">
                  Our team offers years of hands-on experience in traditional advertising, mastering brand storytelling that resonates across various offline channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
