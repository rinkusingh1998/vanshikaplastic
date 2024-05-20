import React from 'react'
import { Link } from "react-router-dom";

const Hdpegranulesdetails = () => {
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
                    <h1> PE 100 SSBK Granules</h1>
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li>PE 100 SSBK Granules</li>
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

{/* product details section start */}
<section className="products_dt_section">
    <div className="container">
        <div className="row justify-content-center">
            {/*  */}
            <div className="col-lg-4">
                <div className="product_details_img_box">
                    <img src="../categoriesimg/hdpeimg/1.png" alt="" />
                </div>
            </div>
            {/*  */}

             {/*  */}
             <div className="col-lg-7">
                <div className="product_dt_table">
                    <h3>Specification</h3>
                   <table className='table table-bordered table-striped'>
                    <tr>
                        <th>Physical State</th>
                        <td>GRANULES</td>
                    </tr>
                    <tr>
                        <th>Usage/Application</th>
                        <td>Pipes & Construction</td>
                    </tr>

                    <tr>
                        <th>Type</th>
                        <td>Polyethylene</td>
                    </tr>

                    <tr>
                        <th>Color</th>
                        <td>Black</td>
                    </tr>

                    <tr>
                        <th>Material Grade</th>
                        <td>PE 100</td>
                    </tr>

                    <tr>
                        <th>Material</th>
                        <td>PE 100</td>
                    </tr>
                    
                   </table>
                </div>
            </div>
            {/*  */}
        </div>
    </div>
</section>

{/* end */}


    </>
  )
}

export default Hdpegranulesdetails
