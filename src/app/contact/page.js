import Image from "next/image";







import Link from "next/link";
export default function About() {
  return (
    <>
      <div
        className="header-section position-relative text-white"
        style={{
          marginTop: "-100px",
          maxHeight: "50vh",
          backgroundImage: "url(/img/About-About-us.jpg)",
          minHeight: "450px",
          backgroundPosition: "center",
          backgroundSize: "cover", // instead of objectFit
        }}
      >
        {/* Overlay */}
        <div className="overlay2 d-flex flex-column justify-content-center align-items-center h-100 w-100">
          <p className="text-center fs-1 mb-0 text-uppercase">Contact us</p>
          <p className="text-center fs-6">
            <Link className="text-white text-decoration-none" href={'./'}>
              Home
            </Link>{" "}
            / Contact Us
          </p>
        </div>
      </div>


      <section className="section bg-white" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <div className="row align-items-center">
           

            <div className="row">
              <div className="col-md-12 mt-3 ">
                <div className="contact_inner bg-light">
                  <div className="row">
                    <div className="col-md-10">
                      <div className="contact_form_inner">
                        <div className="contact_field">
                          <h3 className="text-main">Get In Touch</h3>
                          <p className="text-main">
                            Feel Free to contact us any time. We will get back to you as
                            soon as we can!.
                          </p>
                          <form id="contact-form">
                            <input
                              type="text"
                              className="form-control form-group mb-3  bg-transparent"
                              placeholder="Name"
                              name="name"
                            />
                            <input
                              type="email"
                              className="form-control form-group mb-3  bg-transparent"
                              placeholder="Email"
                              name="email"
                            />
                            <input
                              type="tel"
                              className="form-control form-group mb-3  bg-transparent"
                              placeholder="Mobile"
                              name="phone"
                            />
                            <textarea
                              className="form-control form-group mb-3 bg-transparent"
                              placeholder="Message"
                              name="message"
                              defaultValue={""}
                            />
                            <div className="col-md-12 text-center">
                              <button
                                className="btn btn-danger contact_form_submit mb-3"
                                id="contact-button"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>


                  </div>
                  <div className="contact_info_sec bg-black my-5">
                    <h4 className="text-white">Contact Info</h4>
                    <div className="d-flex info_single align-items-center text-white">
                      <a
                        href="tel:+918880564488"
                        className="text-white text-decoration-none"
                      >
                        <i className="fas fa-headset" />
                        <span>+91 8880564488</span>
                      </a>
                    </div>
                    <div className="d-flex info_single align-items-center text-white">
                      <a
                        href="mailto: info@imsolutions.mobi "
                        className="text-white text-decoration-none"
                      >
                        <i className="fas fa-envelope-open-text" />
                        <span> info@imsolutions.mobi </span>{" "}
                      </a>
                    </div>
                    <div className="d-flex info_single align-items-center">
                      <i className="fas fa-map-marked-alt text-white" />
                      <span>
                        <strong>Corporate Office</strong>
                        <br />
                        921, Laxmi Tower, 4th Floor, 5th Main Rd, Sector 7, HSR Layout, Bengaluru, Karnataka 560102
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>





          </div>
        </div>
      </section>
      <div className="" >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3670.6963626783363!2d77.63135178923629!3d12.909845614905615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1491d13b6519%3A0x3cb3ab2f8e060d9!2sIM%20Solutions!5e0!3m2!1sen!2sin!4v1689854111409!5m2!1sen!2sin"
          width="100%"
          height="420"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>



    </>
  );
}