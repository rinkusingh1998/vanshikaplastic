import React from 'react';

const Sidenavbar = () => {
  return (
    <>
      {/* =====================================Mobile navbar navigation start================================================================================================================ */}

      <div className="offcanvas offcanvas_scroll offcanvas-start d-block d-lg-none" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            <a href="/">
              <img src="../logo/logo.png" className="img-fluid" alt="Logo" />
            </a>
          </h5>
          <button type="button" data-bs-dismiss="offcanvas" aria-label="Close">
            <i className="bx bx-x" />
          </button>
        </div>
        <div className="offcanvas-body">
          <div className="mobile_navbar">
            <ul className="main_ul">
              <li><a href="/">Home</a></li>
              <li><a href="/About">About Us</a></li>
              {/* products li */}
              <li>
                <a href="javascript:void(0);">
                  Products</a> <span data-bs-toggle="collapse" data-bs-target="#products-menu" className="bx bx-chevron-down" />
                          </li>
              <div className="collapse" id="products-menu">
                <div className="card card-body profile_card_body">
                  <ul className="profile_ul">
                    {/* products sub  li */}
                    <li>
                      <a href="javascript:void(0);">
                        HDPE Granules </a>  <span data-bs-toggle="collapse" data-bs-target="#prosub_menu" className="bx bxs-chevron-down" />
                    </li>
                    <div className="collapse" id="prosub_menu">
                      <div className="card card-body prodct_submenu_cardbody">
                        <ul className="product_submenu_ul">
                          <li><a href="HDPEGranules/PE-100-SSBK-Granules">PE 100 SSBK Granules</a></li>
                          <li><a href="HDPEGranules/PE-80-SBK-Granules">PE 80 SBK Granules</a></li>
                          <li><a href="HDPEGranules/PE-63-BK-Granules">PE 63 BK Granules</a></li>
                          <li><a href="HDPEGranules/BD-(Blow-Grade)-Granules">BD (Blow Grade) Granules</a></li>
                          <li><a href="HDPEGranules/Natural-Granules">Natural Granules</a></li>
                          <li><a href="HDPEGranules/Milky-Granules">Milky Granules</a></li>
                          <li><a href="HDPEGranules/SSBL-Blue-Drum-Granules">SSBL Blue Drum Granules</a></li>
                          <li><a href="HDPEGranules/Custom-Compounded-Granules">Custom Compounded Granules</a></li>
                        </ul>
                      </div>
                    </div>
                    {/*products sub li end */}
                    {/* products sub  li */}
                    <li>
                      <a href="javascript:void(0);">
                        LLDPE Granules</a>  <span data-bs-toggle="collapse" data-bs-target="#prosub_menu2" className="bx bxs-chevron-down" />
                    </li>
                    <div className="collapse" id="prosub_menu2">
                      <div className="card card-body prodct_submenu_cardbody">
                        <ul className="product_submenu_ul">
                          <li><a href="LLDPEGranules/Cable-Compounding-N1,-N2-granules">Cable Compounding N1, N2 granules</a></li>
                        </ul>
                      </div>
                    </div>
                    {/*products sub li end */}
                    {/* products sub  li */}
                    <li>
                      <a href="javascript:void(0);">PPCP Granules</a>  <span data-bs-toggle="collapse" data-bs-target="#prosub_menu3" className="bx bxs-chevron-down" />
                    </li>
                    <div className="collapse" id="prosub_menu3">
                      <div className="card card-body prodct_submenu_cardbody">
                        <ul className="product_submenu_ul">
                          <li><a href="PPCPGranules/Black-PPCP-Granules"> Black PPCP Granule</a></li>
                          <li><a href="PPCPGranules/Natural-PPCP-Granules">Natural PPCP Granule</a></li>
                        </ul>
                      </div>
                    </div>
                    {/*products sub li end */}
                    <li><a href="Customcompounding">Custom Compounding</a></li>
                  </ul>
                </div>
              </div>
              {/*products drop li end */}
              <li className="nav-item"><a className="nav-link" href="/Eprservices">EPR / Waste Management Service</a></li>
              <li className="nav-item"><a className="nav-link" href="/Brochure">Brochure </a></li>
              <li className="nav-item"><a className="nav-link" href="/Contact">Contact Us</a></li>
            </ul>
          </div>
          {/* contact us div */}
          <div className="offcanvas_conatct_div">
            {/* div number */}
            <p>
              <a href="tel:+91-9810347240"><i className="bx bx-phone-outgoing" /> +91-9810347240</a>
              <a href="tel:+91-9310347240"><i className="bx bx-phone-outgoing" /> +91-9310347240</a>
              <a href="mailto:info@vanshikaplastic.com"> <i className="bx bx-mail-send" /> info@vanshikaplastic.com</a>
              <a href="mailto:sales@vanshikaplastic.com"> <i className="bx bx-mail-send" /> sales@vanshikaplastic.com</a>
            </p>
            <b> <i className="bx bx-map" /> Office & Unit-1:</b>
            <p>D-25 & 26 Sector-5, D.S.I.I.D.C Bawana Industrial Area, Delhi 110039 - (INDIA)</p>
            <b> <i className="bx bx-map" /> Unit-2:</b>
            <p>G1-228 RIICO Industrial Area Kahrani Bhiwadi Rajasthan 301019 - (INDIA)</p>
            {/* div number */}
          </div>
          {/* contact us div end */}
        </div>
      </div>
      {/* =====================================Mobile navbar navigation end================================================================================================================ */}
    </>
  );
};

export default Sidenavbar;
