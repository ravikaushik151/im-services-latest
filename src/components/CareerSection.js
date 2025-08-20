"use client";
import Image from "next/image";

export default function CareerSection({ data }) {
  return (
    <section
      className="career-section text-center text-white d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${data.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "350px",
        position: "relative",
      }}
    >
      <div className="overlay"></div>
      <div className="content position-relative">
        <h2 className="mb-3">{data.title}</h2>
        <p className="mb-3">{data.description}</p>
        <a href={data.buttonLink} className="btn btn-danger">
          {data.buttonText}
        </a>
      </div>
      <style jsx>{`
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }
        .content {
          max-width: 700px;
          z-index: 2;
        }
      `}</style>
    </section>
  );
}
