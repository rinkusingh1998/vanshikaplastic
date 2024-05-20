import React from 'react'
import './Footer.css';
import { Link } from "react-router-dom";
import BottomToTopButton from '../data/BottomToTopButton';
import DisableRightClick from '../data/DisableRightClick';
const Footer = () => {
  return (
    <>

    {/* map section  */}
    <section className="map_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-6">
          <p><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13985.435433363786!2d77.0802192!3d28.798378!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b283fffffff%3A0x4eba60d66fa6b13e!2sVanshika%20Plastic%20Industry%20RP%20HDPE%20Granules%20Manufacturer%2FSupplier!5e0!3m2!1sen!2sin!4v1715939803590!5m2!1sen!2sin" width="100%" height={300} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
</p>
          </div>

          <div className="col-lg-6 col-6">
         <p><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14067.32586659012!2d76.873845!3d28.1820405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d378b118500e5%3A0x1ac4c46b565dbf4!2sVanshika%20Plastic%20Industry%20Rajasthan!5e0!3m2!1sen!2sin!4v1715939670073!5m2!1sen!2sin" width="100%" height={300} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></p>

          </div>

          
          

        </div>
      </div>
    </section>
    {/* map section end */}

  <footer className="footer">
    <div className="footer_overlay">
      <div className="container">
        <div className="row">
          {/* col start */}
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="footer_about_div" data-aos="fade-down" data-aos-duration={800} data-aos-offset={0}>
              <div className="footer_logo_div">
                <Link to="index.php"><img src="../logo/logo.png" alt className="img-fluid" /></Link>
              </div>

              <div className="footer_img">
                <img src="../images/footerimg.png" alt="" />
              </div>
             
              <div className="makeindia">
                <img src="../images/makeindia.png" alt className="img-fluid" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src="../images/swachh-bharat.png" alt className="img-fluid" />
              </div>
            </div>
          </div>
          {/* col end */}
          {/* col start */}
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="footer_headti" data-aos="fade-down" data-aos-duration={1200} data-aos-offset={0}>
              <h5> Products</h5>
              <ul>
                <li><Link to="">PE 100 SSBK Granules</Link></li>  
                <li><Link to="">PE 80 SBK Granules</Link></li>  
                <li><Link to="">PE 63 BK Granules</Link></li>  
                <li><Link to="">BD (Blow Grade) Granules</Link></li>  
                {/* <li><Link to="">Natural Granules</Link></li>   */}
              </ul>
            </div>
          </div>
          {/* col end */}
          {/* col start */}
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="footer_headti" data-aos="fade-up" data-aos-duration={1400} data-aos-offset={0}>
              <h5> Address</h5>
              {/* media div start */}
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <i className="bx bx-map" />
                </div>
                <div className="flex-grow-1 ms-2">
                  <div className="footer_num_div">
                    <p>D-25 &amp; 26 Sector-5, D.S.I.I.D.C Bawana Industrial Area, Delhi 110039 - India</p>
                  </div>
                </div>
              </div>
              {/* media div end */}

              {/* media div start */}
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <i className="bx bx-map" />
                </div>
                <div className="flex-grow-1 ms-2">
                  <div className="footer_num_div">
                    <p>G1-228 & 229, RIICO Industrial Area, Kahrani, Bhiwadi, Rajasthan - 301019 - India</p>
                  </div>
                </div>
              </div>
              {/* media div end */}

            
            </div>
          </div>
          {/* col end */}

            {/* col start */}
            <div className="col-lg-2 col-md-6 col-sm-12 col-12">
            <div className="footer_headti" data-aos="fade-up" data-aos-duration={1400} data-aos-offset={0}>
              <h5> Contact Us</h5>
             
              {/* media div start */}
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <i className="bx bxs-phone-call" />
                </div>
                <div className="flex-grow-1 ms-2">
                  <div className="footer_num_div">
                    <Link to="tel:+91-9810347240"> +91-9810347240</Link>
                    <Link to="tel:+91-9310347240"> +91-9310347240</Link>
                  </div>
                </div>
              </div>
              {/* media div end */}
              {/* media div start */}
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <i className="bx bx-envelope-open" />
                </div>
                <div className="flex-grow-1 ms-2">
                  <div className="footer_num_div">
                    <Link to="mailto:info@vanshikaplastic.com">  info@vanshikaplastic.com</Link>
                    <Link to="mailto:sales@vanshikaplastic.com">  sales@vanshikaplastic.com</Link>
                  </div>
                </div>
              </div>
              {/* media div end */}
            </div>
          </div>
          {/* col end */}
        </div>
      </div>
    </div>
  </footer>
  {/* ===================================copyright section start================= */}
  <section className="copyright_section">
    <div className="container">
      <div className="row">
        {/* col start  */}
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <p>Copyright © 2023 Vanshika Plastic Industry. All Right Reserved.</p>
        </div>
        {/* col end */}
      </div>
    </div>
  </section>
  {/* ===================================copyright section end================= */}

{/* =============== */}
<BottomToTopButton/>
<DisableRightClick/>
{/* =============== */}
    </>
  )
}

export default Footer
