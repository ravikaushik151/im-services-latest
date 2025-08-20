import Image from "next/image";


export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Preferred style of accommodation.",
      subtitle: "SUPERIOR SERVICE",
      icon: "bi bi-bookmark-check",
      img: "/img/why.jpg",
    },
    {
      title: "Our local guides and tour directors.",
      subtitle: "GREATEST GUIDES",
      icon: "bi bi-people-fill",
      img: "/img/why.jpg",
    },
    {
      title: "The best consumer protection plan.",
      subtitle: "FULLY PROTECTED",
      icon: "bi bi-shield-check",
      img: "/img/why.jpg",
    },
  ];

  return (
  
    <section className="why-choose-section text-center ">
      <div className="container">
        <p className="why-heading-small mb-1">Brilliant Reasons</p>
        <h2 className="why-heading mb-5">Why choose us?</h2>

        <div className="row g-4">
          {reasons.map((reason, index) => (
            <div className="col-md-4" key={index}>
              <div className="card why-card border-0 h-100">
                {/* Image with overlay */}
                <div className="card-img-wrap position-relative">
                  <Image
                    src={reason.img}
                    alt={reason.title}
                    width={500}
                    height={350}
                    className="card-img rounded"
                  />
                  <div className="overlay d-flex justify-content-center align-items-top py-md-5 py-4">
                    <p className="overlay-text fs-3 fw-semibold">{reason.title}</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="card-footer text-center">
                  <i className={`${reason.icon} me-2`}></i>
                  {reason.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
