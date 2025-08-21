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

      <div className="col-md-12 mb-4 mb-md-0 d-flex align-items-center justify-content-center" data-aos="fade-right" data-aos-duration="1400">
       <div>

        <h2 className="fw-bold text-uppercase  mb-3 text-center">Careers</h2>
        <div><h5 class="text-center"> Where we take advertising to the next big level!</h5></div>

       </div>
      </div>

      <div className="row mb-5">
       <div className="col-md-6 mb-4 mb-md-0 d-flex align-items-center justify-content-center" data-aos="fade-right" data-aos-duration="1400">
        <div>

         <div className="container bg-white rounded-4  position-relative z-1">
          <p className="text-uppercase fw-bold mb-1">
           <span className="text-muted">&nbsp; </span>
           <span className="text-primary">&nbsp;</span>
          </p>
          <h5 className="fw-bold mb-4 text-uppercase">Current Openings</h5>


          <div className="accordion" id="faqAccordion">

           {/* FAQ 1 */}
           <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
             <button
              className="accordion-button collapsed"
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
             className="accordion-collapse collapse"
             aria-labelledby="headingOne"
             data-bs-parent="#faqAccordion"
            >
             <div className="accordion-body">
              You will need to provide a valid ID proof, address proof, and your
              credit card details.
             </div>
            </div>
           </div>

           {/* FAQ 2 */}
           <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
             <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
             >
              2. How can I obtain cash against my credit card?
             </button>
            </h2>
            <div
             id="collapseTwo"
             className="accordion-collapse collapse"
             aria-labelledby="headingTwo"
             data-bs-parent="#faqAccordion"
            >
             <div className="accordion-body">
              You can visit our branch or call customer support to initiate the
              cash withdrawal process.
             </div>
            </div>
           </div>

           {/* FAQ 3 */}
           <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
             <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
             >
              3. Is it safe to get cash using my credit card?
             </button>
            </h2>
            <div
             id="collapseThree"
             className="accordion-collapse collapse"
             aria-labelledby="headingThree"
             data-bs-parent="#faqAccordion"
            >
             <div className="accordion-body">
              Yes, it is completely safe as long as you use authorized channels
              and follow the process correctly.
             </div>
            </div>
           </div>

           {/* FAQ 4 */}
           <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
             <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
             >
              4. What does “cash against a credit card” mean?
             </button>
            </h2>
            <div
             id="collapseFour"
             className="accordion-collapse collapse"
             aria-labelledby="headingFour"
             data-bs-parent="#faqAccordion"
            >
             <div className="accordion-body">
              It means you can withdraw cash from your credit card&apos;s
              available balance. We simply swipe your card, and the funds are
              transferred to your account immediately. For details, call us at
              +91-7090122133. We&apos;re here to help!
             </div>
            </div>
            ----


           </div>


          </div>


         </div>


        </div>
       </div>

       <div className="col-md-6 mb-4 mb-md-0 d-flex align-items-center justify-content-center py-5" data-aos="fade-left" data-aos-duration="1400">
        <div>

         <div className="   bg-light">
          <p className="text-uppercase fw-bold mb-1">
           <span className="text-muted"> &nbsp;</span>
           <span className="text-primary">&nbsp;</span>
          </p>
          <h2 className="fw-bold mb-4 text-uppercase text-center">Apply Now</h2>
          <form className="row g-3 px-4 py-4  rounded-4 shadow-sm">
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
    </div>
   </section>





  </>
 );
}