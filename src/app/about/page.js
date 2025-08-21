import Image from "next/image";







import Link from "next/link";
export default function About() {
  const reasons = [
    {
      icon: '/img/icon-02.webp',
      title: 'Free consultation',
      description: 'Quis autem velo eum iure molestiae suam nihil molestiae.',
    },
    {
      icon: '/img/icon-02.webp',
      title: 'Qualified attorneys',
      description: 'Quis autem velo eum iure molestiae suam nihil molestiae.',
    },
    {
      icon: '/img/icon-02.webp',
      title: 'Proven results',
      description: 'Quis autem velo eum iure molestiae suam nihil molestiae.',
    },
    {
      icon: '/img/icon-02.webp',
      title: 'Legal information',
      description: 'Quis autem velo eum iure molestiae suam nihil molestiae.',
    },
  ];

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
          <p className="text-center fs-1 mb-0 text-uppercase">About us</p>
          <p className="text-center fs-6">
            <Link className="text-white text-decoration-none" href={'./'}>
              Home
            </Link>{" "}
            / About Us
          </p>
        </div>
      </div>


      <section className="section bg-light" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <div className="position-relative d-inline-block">
                <Image
                  src='/img/2.png'
                  alt="Team Working"
                  width={400}
                  height={400}
                  className="rounded shadow img-fluid mb-3"
                  data-aos="fade-left"
                  data-aos-duration="1400"
                />

              </div>
            </div>
            <div className="col-md-6 mb-4 mb-md-0 d-flex align-items-center py-3" data-aos="fade-right" data-aos-duration="1400">
              <div>
                <p className="text-uppercase text-muted small mb-0">About</p>
                <h2 className="fw-bold text-uppercase  mb-3">IM Solutions</h2>
                <div><h5 class="fw-bold"> Where we take advertising to the next big level!</h5><p>
                  With the right advertising, you don't just get results but you multiply your profits. IM Solutions delivers just that. We are a team of experts creating unconventional ads that truly makes an impression. Our ads are short, simple and straight to the point targeting ideal customers for a faster outcome. From digital space to every nook and corner of the offline market, we cover it all. IM Solutions connects people and businesses across the digital and physical world, powering people-based marketing. Presentation matters! We help brands present themselves better and reach their customers with our advertising expertise. In simple, we amplifying your business and enhance your branding. Why wait when you can start now? Contact us for more details.
                </p> </div>

              </div>
            </div>


          </div>
        </div>
      </section>

      <section className="py-5 bg-white" style={{ backgroundColor: '#f9f8f4' }}>
        <div className="container">
          <div className="text-center mb-5">
            <p className="text-muted mb-1" style={{ fontSize: '0.9rem' }}>Lorem Lipsom</p>
            <h2 className="display-6 fw-bold" style={{ color: '#333', position: 'relative', display: 'inline-block' }}>
              Lorem   <span> Lipsom</span>
            </h2>
          </div>

          <div className="row justify-content-center g-4">
            {reasons.map((reason, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-10">
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center bg-light" style={{ backgroundColor: '#fff' }}>
                  <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <div className="icon-wrapper mb-3" style={{ color: '#d4af37', fontSize: '2.5rem' }}>

                      <Image src={reason.icon} width={100} height={100} className="img-fluid"></Image>
                    </div>
                    <h5 className="card-title fw-semibold mb-2" style={{ color: '#333' }}>
                      {reason.title}
                    </h5>
                    <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <div className="d-inline-flex align-items-center" style={{ color: '#d4af37' }}>
              <hr className="w-25 mx-2" style={{ borderColor: '#d4af37', opacity: 1 }} />
              <p className="lead fst-italic mb-0" style={{ color: '#555', fontSize: '1.1rem' }}>
                Committed to providing solutions for commercial affairs
              </p>
              <hr className="w-25 mx-2" style={{ borderColor: '#d4af37', opacity: 1 }} />
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex align-items-center  bg-light ">
        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* Left Column - Image */}
            <div className="col-lg-6">
              <div
                className="d-flex justify-content-center align-items-center h-100 p-4 about-page-img"
                style={{
                  backgroundImage: `url('/img/OB3.png')`, // Placeholder image
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',

                  borderRadius: '0 rem', // Apply rounded corners
                }}
              >
                {/* This div is just to make the image container visible with a background */}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="col-lg-6 d-flex align-items-center">
              <div className="p-5 text-white bg-dark w-100 h-100 d-flex flex-column justify-content-center" style={{ borderRadius: '0 rem' }}>
                <h2 className="display-6 fw-bold mb-4">
                  Lorem ipsum dolor sit amet
                </h2>
                <p className="lead mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ipsum dolor sit amet, consectetur.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-check-circle-fill me-2 text-success"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <span>Change all you have in your world.</span>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-check-circle-fill me-2 text-success"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <span>We develop good teams and leaders.</span>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-check-circle-fill me-2 text-success"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <span>The business guru gives you the idea.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container">


          <div className="row align-items-center  my-4 py-5">

            <div className="col-md-6 text-white px-md-5 px-3">
              <h5 className="text-uppercase text-start text-black fw-bold">Misson</h5>
              <p className="text-black pb-4 pb-lg-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum enim, deleniti fuga magnam soluta eveniet omnis dicta pariatur odio nisi accusantium neque molestiae ullam! Dicta corrupti nulla voluptates commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas illo facere eos perferendis! Fuga possimus laboriosam placeat consectetur quidem illo commodi deserunt, totam iste dolor est dolore vero maiores iure!
              </p>

            </div>
            <div className="col-md-6 px-md-5 px-3">
              <Image src="/img/blog1.jpg" width={650} height={400} className="d-block w-100 img-fluid" alt="slider" />
            </div>
          </div>
          <div className="row align-items-center  my-4 py-5">
            <div className="col-md-6 px-md-5 px-3">
              <Image src="/img/blog1.jpg" width={650} height={400} className="d-block w-100 img-fluid" alt="slider" />
            </div>
            <div className="col-md-6 text-white  px-md-5 px-3">
              <h5 className="text-uppercase text-start text-black fw-bold">Vision</h5>
              <p className="text-black pb-4 pb-lg-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum enim, deleniti fuga magnam soluta eveniet omnis dicta pariatur odio nisi accusantium neque molestiae ullam! Dicta corrupti nulla voluptates commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas illo facere eos perferendis! Fuga possimus laboriosam placeat consectetur quidem illo commodi deserunt, totam iste dolor est dolore vero maiores iure!
              </p>
              <p className="text-black">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum enim, deleniti fuga magnam soluta eveniet omnis dicta pariatur odio nisi accusantium neque molestiae ullam! Dicta corrupti nulla voluptates commodi?
              </p>
            </div>

          </div>
        </div>
      </section>



    </>
  );
}