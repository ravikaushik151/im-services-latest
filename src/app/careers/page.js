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
     <p className="text-center fs-1 mb-0 text-uppercase">Careers</p>
     <p className="text-center fs-6">
      <Link className="text-white text-decoration-none" href={'./'}>
       Home
      </Link>{" "}
      / Careers
     </p>
    </div>
   </div>


   <section className="section bg-white" data-aos="fade-up" data-aos-duration="1000">
    <div className="container">
     <div className="row align-items-center">

      <div className="col-md-12 mb-4 mb-md-4 mb-4 " data-aos="fade-right" data-aos-duration="1400">
       <div>

        <h2 className="fw-bold text-uppercase  mb-3 text-center">Careers</h2>
        <div><h5 class="text-center"> Where we take advertising to the next big level!</h5></div>

       </div>
      </div>

    
       <div className="col-md-6 " data-aos="fade-right" data-aos-duration="1400">
        <div>

         <div className=" bg-white rounded-4  position-relative z-1">
          <p className="text-uppercase fw-bold mb-1">
           <span className="text-muted">&nbsp; </span>
           <span className="text-primary">&nbsp;</span>
          </p>
          <h5 className="fw-bold mb-4 text-uppercase m-center">Current Openings</h5>


          <div className="accordion" id="faqAccordion">

           {/* FAQ 1 */}
           <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingOne">
             <button
              className="accordion-button collapsed bg-black text-white "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
             >
              Jobs 1
             </button>
            </h2>
            <div
             id="collapseOne"
             className="accordion-collapse collapse show"
             aria-labelledby="headingOne"
             data-bs-parent="#faqAccordion"
            >
             <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.
             </div>
            </div>
           </div>

           {/* FAQ 2 */}
           <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingTwo">
             <button
              className="accordion-button collapsed bg-black text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
             >
              Lorem ipsum dolor sit amet
             </button>
            </h2>
            <div
             id="collapseTwo"
             className="accordion-collapse collapse"
             aria-labelledby="headingTwo"
             data-bs-parent="#faqAccordion"
            >
             <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien.
             </div>
            </div>
           </div>

           {/* FAQ 3 */}
           <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingThree">
             <button
              className="accordion-button collapsed  bg-black text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
             >
              Lorem ipsum dolor sit amet
             </button>
            </h2>
            <div
             id="collapseThree"
             className="accordion-collapse collapse"
             aria-labelledby="headingThree"
             data-bs-parent="#faqAccordion"
            >
             <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien.
             </div>
            </div>
           </div>

           {/* FAQ 4 */}
           <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingFour">
             <button
              className="accordion-button collapsed  bg-black text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
             >
              Lorem ipsum dolor sit amet
             </button>
            </h2>
            <div
             id="collapseFour"
             className="accordion-collapse collapse"
             aria-labelledby="headingFour"
             data-bs-parent="#faqAccordion"
            >
             <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien.
             </div>
            </div>



           </div>


          </div>


         </div>


        </div>
       </div>

       <div className="col-md-6  " data-aos="fade-left" data-aos-duration="1400">
        <div>

         <div className=" rounded-4 shadow-md bg-light">
          <p className="text-uppercase fw-bold mb-1">
           <span className="text-muted"> &nbsp;</span>
           <span className="text-primary">&nbsp;</span>
          </p>
          <h5 className="fw-bold mb-4 text-uppercase m-center text-center">Apply Now</h5>
          <form className="row g-3 px-4 py-4  rounded-4 ">
           {/* Name */}
           <div className="col-md-6">
            <input
             type="text"
             className="form-control"
             placeholder="NAME*"
             required
            />
           </div>

           {/* Email */}
           <div className="col-md-6">
            <input
             type="email"
             className="form-control"
             placeholder="EMAIL*"
             required
            />
           </div>

           {/* Location */}
           <div className="col-md-6">
            <input
             type="text"
             className="form-control"
             placeholder="LOCATION*"
             defaultValue="Bengaluru"
             required
            />
           </div>

           {/* Phone */}
           <div className="col-md-6">
            <input
             type="tel"
             className="form-control"
             placeholder="PHONE*"
             required
            />
           </div>

           {/* Apply For */}
           <div className="col-md-6">
            <input
             type="text"
             className="form-control"
             placeholder="APPLY FOR*"
             required
            />
           </div>

           {/* Experience */}
           <div className="col-md-6">
            <input
             type="text"
             className="form-control"
             placeholder="EXPERIENCE*"
             required
            />
           </div>

           {/* File Upload */}
           <div className="col-12">
            <input type="file" className="form-control" required />
           </div>

           {/* Message */}
           <div className="col-12">
            <textarea
             className="form-control"
             rows="4"
             placeholder="MESSAGE*"
             required
            />
           </div>

           {/* Submit */}
           <div className="col-12 text-center">
            <button type="submit" className="btn btn-danger ">
             Submit
            </button>
           </div>
          </form>
         </div>


        </div>
       </div>
      


     </div>
    </div>
   </section>





  </>
 );
}