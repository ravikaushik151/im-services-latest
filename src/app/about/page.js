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
                  className="rounded shadow img-fluid"
                  data-aos="fade-left"
                  data-aos-duration="1400"
                />

              </div>
            </div>
            <div className="col-md-6 mb-4 mb-md-0 d-flex align-items-center" data-aos="fade-right" data-aos-duration="1400">
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
              <Image src="/img/blog1.jpg" width={650} height={400} className="d-block w-100" alt="slider" />
            </div>
          </div>
          <div className="row align-items-center  my-4 py-5">
            <div className="col-md-6 px-md-5 px-3">
              <Image src="/img/blog1.jpg" width={650} height={400} className="d-block w-100" alt="slider" />
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