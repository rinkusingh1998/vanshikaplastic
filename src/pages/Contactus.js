import React from 'react'
import { Link } from "react-router-dom";

const Contactus = () => {
  return (
    <>
    

  {/* pagte titile section start  */}
  <section className="page_title_mkp_section">
    <div className="page_ti_overly_mkp_div">
      <div className="container">
        <div className="row">
          {/* col start */}
          <div className="col-xxl-12 colxl-12 col-lg-12 col-sm-12 col-12">
            <div className="page_title_tax_mkp_main_div">
              <div className="page_title_tax_mkp_div">
                <h1> Contact Us</h1>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
          {/* col end */}
        </div>
      </div>
    </div>
  </section>
  {/* pagte titile section end */}
  {/* ===================contact us page section start ============== */}
  <section className="contact_us_page_section">
    <div className="container">
      {/* contact us page title end */}
      <div className="row">
        {/* col start  */}
        <div className="col-lg-5 col-md-6 col-sm-12 col-12">
          {/* main div contact page start*/}
          <div className="main_div_contactus_page" data-aos="fade-down" data-aos-duration={1600} data-aos-offset={0}>
            <h2>Contact Us</h2>
            {/* contact us flex div main start*/}
            <div className="contact_us_flx_div_main">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <i className="bx bxs-phone-call" />
                </div>
                <div className="flex-grow-1 ms-3">
                  <div className="contact_page_num_div">
                    <strong>Mr. Ashok Saraf (managing director)</strong>
                    
                    <a href="tel:+91-9810347240"> +91-9810347240 </a>
                    <strong>Mr. Ayush Saraf</strong>

                    <a href="tel:+91-9310347240"> +91-9310347240</a>
                  </div>
                </div>
              </div>
            </div>
            {/* contact us flex div main end*/}
            {/* contact us flex div main start*/}
            <div className="contact_us_flx_div_main">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <i className="bx bx-mail-send" />
                </div>
                <div className="flex-grow-1 ms-3">
                  <div className="contact_page_num_div">
                    <b>E-Mail ID:</b>
                    <a href="mailto:info@vanshikaplastic.com"> info@vanshikaplastic.com</a>
                    <a href="mailto: sales@vanshikaplastic.com">  sales@vanshikaplastic.com</a>
                  </div>
                </div>
              </div>
            </div>
            {/* contact us flex div main end*/}
            {/* contact us flex div main start*/}
            <div className="contact_us_flx_div_main">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <i className="bx bxs-map-pin" />
                </div>
                <div className="flex-grow-1 ms-3">
                  <div className="contact_page_num_div">
                    <b> Office &amp; Unit-1:</b>
                    <p>D-25 &amp; 26 Sector-5, D.S.I.I.D.C Bawana Industrial Area, Delhi 110039 - (INDIA)</p>
                    <b> Unit-2:</b>
                    <p>G1-228 & 229, RIICO Industrial Area, Kahrani, Bhiwadi, Rajasthan - 301019 - (INDIA)</p>
                  </div>
                </div>
              </div>
            </div>
            {/* contact us flex div main end*/}
          </div>
          {/* main div contact page end*/}
        </div>
        {/* col end */}
        {/* col start */}
        <div className="col-lg-7 col-md-6 col-sm-12 col-12">
          <div className="contact_page_form" data-aos="fade-up" data-aos-duration={1000} data-aos-offset={0}>
            <h2>Post Your Requirement</h2>
            <form method="POST" className="contact-form" autoComplete="off">
              {/* row nested start */}
              <div className="row">
                {/* col nested start */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="input-group mb-3">
                    <span className="input-group-text fa fa-user" />
                    <input type="text" name="name" id="name" className="form-control" placeholder="Name*" required />
                  </div>
                </div>
                {/* col nested end */}
                {/* col nested start */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="input-group mb-3">
                    <span className="input-group-text fa fa-user" />
                    <input type="text" name="name" id="test" className="form-control" placeholder="Surname*" required />
                  </div>
                </div>
                {/* col nested end */}
                {/* col nested start */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="input-group mb-3">
                    <span className="input-group-text fa fa-envelope" />
                    <input type="text" className="form-control" name="email" placeholder="Email Id*" required />
                  </div>
                </div>
                {/* col nested end */}
                {/* col nested start */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="input-group mb-3">
                    <span className="input-group-text fa fa-phone" />
                    <input type="tel" className="form-control" name="mobile" id="phone" placeholder="Mobile No." />
                  </div>
                </div>
                {/* col nested end */}
                {/* col nested start */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="input-group mb-3">
                    <span className="input-group-text fa fa-phone" />
                    <input type="text" className="form-control" name="company" id placeholder="Company Name*" />
                  </div>
                </div>
                {/* col nested end */}
                {/* col nested start */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="input-group mb-3">
                    <span className="input-group-text fa fa-phone" />
                    <input type="text" className="form-control" name="grade" id placeholder="Grade Required*" />
                  </div>
                </div>
                {/* col nested end */}
                {/* col nested start */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="input-group mb-3">
                    <span className="input-group-text fa fa-commenting" />
                    <textarea name="messgae" className="form-control" placeholder="Description*" defaultValue={""} />
                  </div>
                </div>
                {/* col nested end */}
                {/* col nested start */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="input_div">
                    <div className="form-group">
                      <center><input type="submit" name="SubmitEmail" defaultValue="Submit Request" className="btn" /></center>
                    </div>
                  </div>
                </div>
              </div>
              {/* col nested end */}
            </form></div>
          {/* row nested end */}
        </div>
      </div>
      {/* col end */}
      <br />
     
    </div>
  </section>
  {/* ===================contact us page section end ============== */}



    </>
  )
}

export default Contactus
