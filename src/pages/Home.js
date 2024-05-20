import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
     
     {/* Start Main Banner Area */}
     <section className="main_section_video"> 
  <div className="video_main_div">
    <video width="100%" loop muted autoPlay>
      <source src="/banner/bannervd22.mp4" type="video/mp4" />
    </video>
  </div>
</section>
{/* End Main Banner Area */}





  <div>
  {/* about us section start */}
  <section className="about_us_section">
    <div className="container">
      <div className="row">
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
          <div className="about_content_div" data-aos="fade-down" data-aos-duration={1200} data-aos-offset={0}>
            <h1>Welcome to <span> Vanshika Plastic</span> </h1>
            <h3>Leading Manufacturer, Supplier and Exporter of</h3>
            <h4> HDPE Granules |  PPCP Granules |  Cable Compounds</h4>
            <b>"A Unit Of Plastic Rebirth"</b>
            <p>Excellence in Recycled Plastic Granules Since 1994</p>
           <p><b>Introduction:</b> Founded by the visionary Mr. Ashok Saraf, Vanshika Plastic Industry has established itself as a paragon of quality and innovation in the recycled plastics market. With over two decades of dedication, we have been at the vanguard of promoting recycling as a gift to the next generation, ensuring that our operations contribute to a sustainable future.</p>
           <p><b>Our Growth Story:</b> From our inception in Delhi, we have expanded our horizons to Rajasthan, enhancing our production capacity to an impressive 10,000 MT annually. This expansion is a testament to our relentless pursuit of catering to the evolving needs of our clients and solidifying our presence as an industry trailblazer.</p>
            <div className="about_btn_div">
              <Link to="About"> Read More</Link>
            </div>
          </div>
        </div>
        {/* col end */}
      </div>
    </div>
  </section>
  {/* about us section end */}
  
  {/* making diffrent section start */}
  <section className="making_section">
    <div className="container">
      <div className="row justify-content-center">
        {/* col start */}
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="making_main_txt_div" data-aos="fade-up" data-aos-duration={1400} data-aos-offset={0}>
            <h3> Making a <span>difference to the world</span> we live in!</h3>
            <p>Vanshika Plastic Industries is a Delhi (India) based business whose main motive is to promote the use of recycled plastic granules. The offered range of granules can be utilized in the production of a vast range of plastic products including but not limited to HDPE Pipes, Water Tanks, DWC Pipes, PE Cables, Geo-Membrane Sheets, Tarpauline, PLB Pipes, Drums, chairs, mugs, bottles, Automobile Parts etc. to name a few. The waste material is processed into granular form in attractive colors. These granules are known for their fine finishing, and strong endurance. High-tech machinery are employed in the production of plastic granules according to the set national standards. To safely store the recycled plastic granules in bulk quantity, we have set-up a warehousing facility. Customers can avail from us a wide range of granules, from HDPE Granules, PPCP Granules to Cable Compounds.</p>
          </div>
        </div>
        {/* col end */}
        <div className="row justify-content-center" data-aos="fade-down" data-aos-duration={2200} data-aos-offset={0}>
          {/* col start  */}
          <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            <div className="recycle_icon_div">
              <div className="recycle_img_div">
                <img src="../images/mk011.png" alt className="img-fluid" />
              </div>
              <h5>use recycled materials</h5>
            </div>
          </div>
          {/* col end */}
          {/* col start  */}
          <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            <div className="recycle_icon_div">
              <div className="recycle_img_div recycle_img_div2">
                <img src="../images/mk02.png" alt className="img-fluid" />
              </div>
              <h5>dump collection</h5>
            </div>
          </div>
          {/* col end */}
          {/* col start  */}
          <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            <div className="recycle_icon_div">
              <div className="recycle_img_div">
                <img src="../images/mk03.png" alt className="img-fluid" />
              </div>
              <h5>no landfilling</h5>
            </div>
          </div>
          {/* col end */}
          {/* col start  */}
          <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            <div className="recycle_icon_div">
              <div className="recycle_img_div recycle_img_div2">
                <img src="../images/mk04.png" alt className="img-fluid" />
              </div>
              <h5>hot washed 3 times with industrial chemical </h5>
            </div>
          </div>
          {/* col end */}
          {/* col start  */}
          <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            <div className="recycle_icon_div">
              <div className="recycle_img_div">
                <img src="../images/mk05.png" alt className="img-fluid" />
              </div>
              <h5>sorting &amp; Granulating</h5>
            </div>
          </div>
          {/* col end */}
        </div>
      </div>
    </div>
  </section>
  {/* making diffrent section end */}

  
  {/* ================= products start==================*/}
  <section className="product_section">
    <div className="container">
      {/* head ti */}
      <div className="product_haed_ti">
        <h3>Our Products</h3>
        <p>Empowered by our state-of-the-art infrastructural facilities we have been able to successfully offer a wide range of Reprocessed Granules. The entire range is manufactured using qualitative raw material and undergoes thorough quality checks so that flawless range is delivered to the clients. Our range encompasses the followings:</p>
      </div>
      {/* end */}
      <div className="row">
        {/* col start  */}
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="products_main_div" data-aos="fade-up" data-aos-duration={1200} data-aos-offset={0}>
            <div className="products_img_box">
              <img src="../products/1.png" alt className="img-fluid" />
            </div>
            <h4>HDPE Granules</h4>
            <p> HDPE is a type of polyethylene with a high molecular weight, resulting.</p>
            <div className="product_btn_div">
              <Link to="">View More <span className="fa fa-long-arrow-right" /></Link>
            </div>
          </div>
        </div>
        {/* col end */}
        {/* col start  */}
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="products_main_div" data-aos="fade-down" data-aos-duration={1600} data-aos-offset={0}>
            <div className="products_img_box">
              <img src="../products/2.png" alt className="img-fluid" />
            </div>
            <h4>PPCP Granules</h4>
            <p>PP is often used to make plastic bags, films, and sheets due to its flexibility and durability.</p>
            <div className="product_btn_div">
              <Link to="">View More <span className="fa fa-long-arrow-right" /></Link>
            </div>
          </div>
        </div>
        {/* col end */}
        {/* col start  */}
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="products_main_div" data-aos="fade-up" data-aos-duration={2000} data-aos-offset={0}>
            <div className="products_img_box">
              <img src="../products/3.png" alt className="img-fluid" />
            </div>
            <h4>Cable Grade Granules</h4>
            <p>Cable Grade Granules refer to the small, granular particles or pellets of LLDPE.</p>
            <div className="product_btn_div">
              <Link to="">View More <span className="fa fa-long-arrow-right" /></Link>
            </div>
          </div>
        </div>
        {/* col end */}
      </div>
    </div>
  </section>
  {/* ================= products end==================*/}
  {/* why vanshika sec strat */}
  <section className="why_sectin_md">
    <div className="why_md_ovr">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-7 col-sm-12 col-12">
            <div className="why_md_txt_div">
              <h3>Why Vanshika Plastic Industry ?</h3>
              <p>At Vanshika Plastic Industry our commitment to providing exceptional customer service is what sets us apart from the competition. Guided by a straight set of principles, the Vanshika Plastic Industry team works continuously towards ensuring an effortless experience for all clients.</p>
              <div className="why_mdl_btn">
                <Link to="/Contact">Enquiry Now ! <i className="bx bx-mail-send bx-tada" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


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

  

  
  {/* why choose us section s */}
  <div className="whychoose_us_sec2">
    <div className="whu_us_ovrlay_bg2">
      <div className="container">
        <div className="row align-items-center">
          {/* col  */}
          <div className="col-xxl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            {/*  */}
            <div className="why_us_txt_div_m2" data-aos="fade-down" data-aos-duration={1000} data-aos-offset={0}>
              <h4>Meeting Your Expectations </h4>
              <p>Our product range is flexible enough to meet the individual needs of our customers and we deliver on our promise by performing appropriate testing  during  production and delivery to ensure product consistency.</p>
            </div>
            {/*  */}
          </div>
          {/* col enmd */}
          {/* col img */}
          <div className="col-xxl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="why_us_cnt_img_box_m2" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={0}>
              {/* <img src="../images/qty01.jpeg" alt="" class="img-fluid"> */}
              <video width="100%" loop muted autoPlay>
                <source src="../banner/whyvd.mp4" type="video/mp4" />
              </video>
              <div className="overly_whyus_img_dd2">
                <div className="overlay_qty">
                  {/* <img src="../images/qtyms01.png" alt="" class="img-fluid"> 
                        */}
                  <video width="100%" loop muted autoPlay>
                    <source src="../banner/whyvd2.mp4" type="video/mp4" />
                  </video>
                  <div className="overly_qty">
                    <Link to="/Contact" className="bx bx-envelope-open bx-tada" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* col img */}
          {/* col img */}
          <div className="col-xxl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            {/*  */}
            <div className="why_us_txt_div_m2" data-aos="fade-down" data-aos-duration={1900} data-aos-offset={0}>
              <h4>On-Time Delivery</h4>
              <p>With the passion &amp; expertise of our professionals and working criteria to maximize the customer satisfaction, we have aligned all the activities in our organization that enable us to undertake large scale production projects and fulfill the order of voluminous quantity within promised time frame.</p>
            </div>
            {/*  */}
          </div>
          {/* col img */}
        </div>
      </div>
    </div>
  </div>
  {/* why choose us section end */}
  {/* ===============center image section=========== */}
  <section className="center_img_sec" data-aos="fade-down" data-aos-duration={1600} data-aos-offset={0}>
    <img src="../images/ctrimg.jpg" alt className="img-fluid" />
  </section>
  {/* ===============center image section=========== */}
  {/* counter section start */}
  <section className="counter_section">
    <div className="counter_section_ovr">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* col start */}
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="main_div_counter">
              <div className="counter_icon_div">
                <i className="bx bx-user-plus" />
              </div>
              <div className="count_run_div">
                <span className="count">200 </span> <span className="plus">+</span>
              </div>
              <h5>Happy Customers</h5>
            </div>
          </div>
          {/* col end */}
          {/* col start */}
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="main_div_counter">
              <div className="counter_icon_div main_div_counter2">
                <i className="bx bxs-factory" />
              </div>
              <div className="count_run_div">
                <span className="count">35000 </span> <span className="plus">+</span>
              </div>
              <h5>SQ. FEET OF INFRASTRUCTURE</h5>
            </div>
          </div>
          {/* col end */}
          {/* col start */}
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="main_div_counter">
              <div className="counter_icon_div">
                <i className="bx bx-layer" />
              </div>
              <div className="count_run_div">
                <span className="count">15 </span> <span className="plus">+</span>
              </div>
              <h5>VARIETY OF PRODUCTS</h5>
            </div>
          </div>
          {/* col end */}
          {/* col start */}
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="main_div_counter">
              <div className="counter_icon_div main_div_counter2">
                <i className="bx bx-buildings" />
              </div>
              <div className="count_run_div">
                <span className="count">30 </span> <span className="plus">+</span>
              </div>
              <h5>YEARS OF EXPERIENCE</h5>
            </div>
          </div>
          {/* col end */}
        </div>
      </div>
    </div>
  </section>
  {/* counter end */}
  {/* ===================================sustainability section ================ */}
  <section className="sustaina_sec">
    <div className="container">
      <div className="row justify-content-center align-items-center">
        {/* col */}
        <div className="col-lg-7 col-md-7 col-sm-12 col-12">
          <div className="sustain_txt_div" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={0}>
            <h3>Sustainability</h3>
            <p>A sustainable business is one that can live within the constraints of a two degree sustainable world. A business that can reduce its impact on the externalities, as required by the shrinking legal space within which it must operate, as well as one that can adapt to external factors that are driven by global megatrends that will inevitably affect it.</p>
            <div className="sustain_img_box" data-aos="fade-down" data-aos-duration={1000} data-aos-offset={0}>
              <a href> <img src="../images/eprimg2.png" alt className="img-fluid" /></a>
            </div>
          </div>
        </div>
        {/* col end */}
        {/* col  */}
        <div className="col-lg-4 col-md-5 col-sm-12 col-12">
          <div className="sustain_img_box_txt" data-aos="fade-down" data-aos-duration={2800} data-aos-offset={0}>
            <h4> EPR - How Vanshika Plastic Industry can help you grow sustainably ? </h4>
            <p>With an increase in non-biodegradable production in manufacturing companies, both the governmental or industrial responsibility rises by several folds. Not just responsibility, the cost to dispose of the ultimate waste increases.</p>
            <a href><img src="../images/epr.jpg" alt className="img-fluid" /></a>
          </div>
        </div>
        {/*  col end*/}
      </div>
    </div>
  </section>
  {/* ===================================sustainability section ================ end */}
  {/* ================== why choose us section start ===================== */}
  <section className="why_us_sec">
    <div className="container">
      <div className="row">
        <div className="col-lg-12" />
      </div>
    </div>
  </section>
  {/* ================== why choose us section end ===================== */}
</div>


    </>
  )
}

export default Home
