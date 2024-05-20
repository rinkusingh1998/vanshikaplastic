import React, { useEffect } from 'react';
import { Link } from "react-router-dom";


const Aboutus = () => {

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
                <h1> About Us</h1>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li>About Us</li>
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
  {/* about us section start */}
  <section className="about_us_section">
    <div className="container">
     
      <div className="row align-items-center">
        {/* col start */}
        <div className="col-lg-5 col-md-6 col-sm-12 col-12">
          <div className="about_img_main_div" data-aos="fade-up" data-aos-duration={1000} data-aos-offset={0}>
            <div className="about_vd_div">
              <video width="100%" loop muted autoPlay>
                <source src="../banner/about02.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        {/* col end */}
        {/* col start */}
        <div className="col-lg-7 col-md-6 col-sm-12 col-12">
          <div className="about_content_div" data-aos="fade-down" data-aos-duration={1600} data-aos-offset={0}>
          <h1>Welcome to<span>Vanshika Plastic</span> </h1>
            <h3>Leading Manufacturer, Supplier and Exporter of</h3>
            <h4> HDPE Granules |  PPCP Granules |  Cable Compounds</h4>
            <b>"A Unit Of Plastic Rebirth"</b>
            <p>Excellence in Recycled Plastic Granules Since 1994</p>
           <p><b>Introduction:</b> Founded by the visionary Mr. Ashok Saraf, Vanshika Plastic Industry has established itself as a paragon of quality and innovation in the recycled plastics market. With over two decades of dedication, we have been at the vanguard of promoting recycling as a gift to the next generation, ensuring that our operations contribute to a sustainable future.</p>
           <p><b>Our Growth Story:</b> From our inception in Delhi, we have expanded our horizons to Rajasthan, enhancing our production capacity to an impressive 10,000 MT annually. This expansion is a testament to our relentless pursuit of catering to the evolving needs of our clients and solidifying our presence as an industry trailblazer.</p>
          
          </div>
        </div>
        {/* col end */}
        {/* col s */}
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="about_content_div" data-aos="fade-up" data-aos-duration={1600} data-aos-offset={0}>
          <p><b>Sustainability as Our Forte:</b> Recycling isn’t just a process for us; it’s our identity. We are committed to reducing the carbon footprint of plastics by repurposing them into valuable materials. Our advanced recycling facilities embody our commitment to sustainability, operating under the highest environmental standards.</p>
          <p><b>Sustainable Practices:</b> We are more than a manufacturer; we are a catalyst for change. Our semi-automatic plants in Delhi and Rajasthan reflect our mission to minimize environmental impact. By optimizing efficiency and reducing waste, we ensure that our practices align with our goal of contributing significantly to the recycling movement.</p>
          <p><b>Innovation and Quality:</b> Our facilities are a testament to our innovative spirit, equipped with semi-automatic machinery, expert technicians, and stringent quality control measures. We guarantee that our recycled granules are not only of superior quality but also consistent in performance, meeting the highest standards of the industry.</p>
          <p><b>Infrastructure:</b> Our semi-automatic plants, sprawling across 1000 Sqm in Delhi and 2100 Sqm in Rajasthan, are the lifeblood of our operations. They are designed to maximize efficiency and minimize waste, embodying our dedication to the recycling movement. Our facilities are equipped with cutting-edge machinery, operated by a team of skilled technicians, lab experts, and production managers, all working in unison to deliver products that set industry benchmarks.</p>
          <p><b>Quality Assurance:</b> Vanshika Plastic Industry is synonymous with quality. Our polymers undergo rigorous testing at every stage – from compounding to dispatch – ensuring that our products exceed the expectations of our clients. Our commitment to quality is unwavering, as we maintain strict checks on Melt Flow Index, Density, Colour Consistency, Tensile Strength, and Impact.</p>
          <p><b>Our Distinction:</b> What sets us apart is our collaborative approach. We support PIBO vendors under EPR, providing a platform for efficient recycling and reducing reliance on virgin polymers. Our batch-coded bags and meticulous quality checks ensure that our clients receive nothing but the best.</p>
          <p><b>Our Vision:</b> We believe in a world where recycling is not just a choice but a necessity. Vanshika Plastic Industry is dedicated to leading the revolution in sustainable plastic manufacturing, setting new benchmarks for environmental responsibility.</p>
          <p><b>Join Us:</b> We invite you to be part of our journey towards a greener tomorrow. For inquiries or to learn more about our commitment to sustainability, please reach out to us. Together, we can redefine the future of plastics.</p>
          </div>
        </div>
        {/* col end */}
      </div>
    </div>
  </section>
  {/* about us section end */}
  
  {/* why vanshika sec end */}
  <section className="container our_team_sec">
    {/* col start */}
    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
      <div className="making_main_txt_div" data-aos="fade-down" data-aos-duration={1800} data-aos-offset={0}>
        <h3> Premium Plastic Material For Every Need.</h3>
        <p>Your search for a flawless range of Plastic Granules ends at Vanshika Plastic Industry. We offer a range which comprises of HDPE Granules, PPCP Granules, Cable Compounds.</p>
      </div>
    </div>
    {/* col end */}
    <section className="card__container" data-aos="fade-up" data-aos-duration={2500} data-aos-offset={0}>
      {/*==================== SERVICE CARD ====================*/}
      <div className="container">
        <div className="row justify-content-center">
          {/* col s */}
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="card__bx card__1">
              <div className="card__data">
                <div className="card__icon">
                  <div className="card__icon-bx">
                    <i className="bx bx-cog" />
                  </div>
                </div>
                <div className="card__content">
                  <h3>infrastructure</h3>
                  <p>The manufacturing unit and office of the company are located in the Bhiwadi Rajasthan &amp; Delhi. The unit is supported with state-of-the-art machinery for manufacturing of the Plastic Granules.</p>
                </div>
              </div>
            </div>
          </div>
          {/* col end */}
          {/* col s */}
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="card__bx card__2">
              <div className="card__data">
                <div className="card__icon">
                  <div className="card__icon-bx">
                    <i className="bx bx-user-pin" />
                  </div>
                </div>
                <div className="card__content">
                  <h3>Our Team</h3>
                  <p>Forming the backbone of the company, the team at Vanshika Plastic Industry is always ready to rise up to the challenging market demands and is trained specifically for delivering quality and consistency.</p>
                </div>
              </div>
            </div>
          </div>
          {/* col end */}
          {/* col s */}
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="card__bx card__3">
              <div className="card__data">
                <div className="card__icon">
                  <div className="card__icon-bx">
                    <i className="bx bx-edit" />
                  </div>
                </div>
                <div className="card__content">
                  <h3>quality assurance</h3>
                  <p>We have a keen understanding of the quality levels expected by the clientele and accordingly undertake the strictest checking at all levels to ensure the best. Right from sourcing high grade raw material.</p>
                </div>
              </div>
            </div>
          </div>
          {/* col end */}
          {/* col s */}
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="card__bx card__4">
              <div className="card__data">
                <div className="card__icon">
                  <div className="card__icon-bx">
                    <i className="bx bxs-message-alt-dots" />
                  </div>
                </div>
                <div className="card__content">
                  <h3>Commitment</h3>
                  <p>Our commitment to our customers is to maintain product consistency and ensure that our service is good, not limited to the point of sale but also to issues that arise after the sale. We listen to all feedback and continue to improve all aspects.</p>
                </div>
              </div>
            </div>
          </div>
          {/* col end */}
        </div>
      </div>
    </section>
  </section>
  {/* end section */}

  

    </>
  )
}

export default Aboutus
