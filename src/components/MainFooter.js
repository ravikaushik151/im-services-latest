'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import '../app/styles/contact-form.css';

export default function Footer() {
 const [form, setForm] = useState({
  name: '',
  email: '',
  brand: '',
  phone: '',
  messageType: 'Strategy',
  message: '',
 });

 const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form Submitted:', form);
 };

 return (
  <>


   <footer className=" text-light mt-0 pt-5 pb-3" style={{
    backgroundImage: `url('/img/bg-01.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center',
    backgroundColor: '#000', // fallback dark navy
    backgroundSize: 'contain',
   }}>
    {/* Call to Action */}
    <div className="container pb-4 border-bottom border-secondary text-center text-md-start d-none" data-aos="fade-up"
     data-aos-duration="1200">
     <div className="row align-items-center ">
      <div className="col-md-6 mb-3 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start">
       <div>
        <h2 className="fw-bold text-white text-uppercase ">Get a GEO Consultation</h2>
        <p className="text-white text-uppercase "> We optimize your brand for AI-driven discovery platforms.</p>
       </div>

      </div>
      <div className="col-md-6 text-md-end d-flex align-items-center justify-content-center justify-content-md-end">
       <div>
        <Link href="/" className="btn btn-danger rounded-pill me-3 mb-3">
         <i className="bi bi-envelope-fill me-1"></i> Free consultation
        </Link>
        <Link href="tel:+918880564488" className="btn btn-outline-light rounded-pill me-3 mb-3 d-none">
         <i className="bi bi-telephone-fill me-1"></i> +91 888 056 4488
        </Link>
       </div>

      </div>
     </div>

    </div>


    <div className="container my-5">
     <div className="row">
      <div className="col-md-3">
       <div className="d-flex  justify-content-center align-items-center  ">
        <div>
         <h6 className="fw-bold text-white mb-md-5 mb-4 text-center">Powered By</h6>
         <Image
          src="/img/weblogo.png" // Update this path to your actual logo file
          alt="Logo"
          width={100}
          height={40}
          className="d-block mx-auto img-fluid mt-3 mb-3 mt-md-5 "
         />



         <Link href="mailto:info@imsolutions.mobi" className="text-white mb-md-0 my-1 d-block fs-5 text-center text-decoration-none"> <i className="bi bi-envelope-open"></i> info@imsolutions.mobi</Link>

         <Link href="tel:+918880564488" className="text-white  mb-md-0 my-1 d-block  fs-5 text-center text-decoration-none"> <i className="bi bi-telephone"></i> +91 888 056 4488</Link>
         <div className="d-flex gap-3 mt-3   align-items-md-start align-items-start justify-content-md-start  justify-content-center fs-6">
          Follow Us :
          <Link href="#" className="text-white"><i className="bi bi-facebook"></i></Link>

          <Link href="#" className="text-white"><i className="bi bi-twitter-x"></i></Link>
          <Link href="#" className="text-white"><i className="bi bi-linkedin"></i></Link>
         </div>
        </div>


       </div>
      </div>
      {/* Project Info */}
      <div className="col-md-3 ps-md-4 ps-0  py-3 py-md-0 ">
       <h4 className="footer-title m-center">Address</h4>
       <p className="m-center mt-3">
        <strong>Corporate Office</strong>
        <br />
        921, Laxmi Tower, 4th Floor, 5th Main Rd, Sector 7, HSR Layout, Bengaluru, Karnataka 560102
       </p>
       <p className="m-center mt-3">
        <strong>Branch Office</strong>
        <br />
        214, South West Block, Near Ram Mandir, Alwar, Rajasthan
        <br />
        219, Nilkanth Plaza, Near Kiran Chowk, Varachha Road, Surat, Gujarat 395010
       </p>



       <div className="footer-social text-center d-flex justify-content-md-start justify-content-center ">
        <Link href="#">
         <i className="fab fa-facebook-f"></i>
        </Link>
        <Link href="#">
         <i className="fab fa-instagram"></i>
        </Link>
        <Link href="#">
         <i className="fab fa-youtube"></i>
        </Link>
        <Link href="#">
         <i className="fab fa-linkedin-in"></i>
        </Link>
       </div>
      </div>

      {/* Developer Info */}
      <div className="col-md-2 m-center py-3 py-md-0 ">
       <h4 className="footer-title ps-md-3 ps-0">Quick Links</h4>
       <ul className="px-0 mt-3 ps-md-5  ps-md-5 ps-0" style={{ listStyle: "none" }}>
        <li className="noclass  ">
         <Link href="./" className="text-decoration-none text-white lh-lg">
          Home
         </Link>
        </li>
        <li>
         <Link href="/" className="text-decoration-none text-white lh-lg">
          About
         </Link>
        </li>
        <li>
         <Link href="/" className="text-decoration-none text-white lh-lg">
          Services
         </Link>
        </li>
        <li>
         <Link href="/" className="text-decoration-none text-white lh-lg">
          Blog
         </Link>
        </li>
        <li>
         <Link
          href="/"
          className="text-decoration-none text-white  lh-lg"
         >
          Career
         </Link>
        </li>
        <li>
         <Link
          href="/"
          className="text-decoration-none text-white lh-lg"
         >
          Contact
         </Link>
        </li>
        <li>
         <Link
          href="/contact"
          className="text-decoration-none text-white lh-lg"
         >
          Privacy Policy
         </Link>
        </li>
       </ul>
      </div>

      {/* Association */}

      {/* Get In Touch Form */}
      <div className="col-md-4">

       <div className="row px-md-3 px-3">

        <h4 className="footer-title  m-center ps-4">Enquire Now</h4>
        <div className="col-md-12 d-block mx-auto shadow  text-white rounded-4 my-3" >


         <form onSubmit={handleSubmit} className="row g-3 px-3 rounded contact-form bg-transparent ">


          <div className="col-md-6 ">
           <input
            type="text"
            className="form-control p-2"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
           />
          </div>

          <div className="col-md-6">
           <input
            type="email"
            className="form-control p-2"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
           />
          </div>

          {/* <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control p-3"
                        name="brand"
                        placeholder="Brand Name"
                        value={form.brand}
                        onChange={handleChange}
                        required
                      />
                    </div> */}

          <div className="col-md-12">
           <input
            type="tel"
            className="form-control p-2"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
           />
          </div>



          <div className="col-12">
           <textarea
            className="form-control p-2 "
            rows="2"
            placeholder="Your Message"
            name="message"

            value={form.message}
            onChange={handleChange}
           ></textarea>
          </div>

          <div className="col-12 text-center d-block mx-auto">
           <button type="submit" className="btn mx-auto btn-primary btn-lg  d-flex justify-content-center align-items-center gap-2">
            Submit
            <span className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }}>
             <i className="bi bi-arrow-right text-primary"></i>
            </span>
           </button>
          </div>
         </form>

        </div>
       </div>
      </div>
     </div>
    </div>




    {/* Bottom Bar */}
    <div className="container mt-md-5 pt-md-3 mt-0 mb-0 border-top border-secondary text-center text-muted small" >
     <div className="row" >
      <div className="col-md-6 text-md-start my-md-3 mt-3 mb-md-0 text-white"  >
       <p >   © Copyright {new Date().getFullYear()} <Link href="/" className="text-decoration-none text-light">IM Solutions</Link></p>

      </div>
      <div className="col-md-6 text-md-end my-md-3 mt-1 mb-md-0">
       <Link href="/privacy-policy" className="text-light text-decoration-none me-3">Privacy policy</Link>
       <Link href="/terms" className="text-light text-decoration-none me-3">Terms and conditions</Link>
       <Link href="/copyright" className="text-light text-decoration-none">Copyright</Link>
      </div>
     </div>
    </div>
   </footer>
  </>
 );
}
