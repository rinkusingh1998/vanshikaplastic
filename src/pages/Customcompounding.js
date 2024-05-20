import React from 'react';
import { Link } from 'react-router-dom';

const Customcompounding = () => {
  
  return (
    <>
      {/* Page title section start */}
      <section className="page_title_mkp_section">
        <div className="page_ti_overly_mkp_div">
          <div className="container">
            <div className="row">
              {/* Column start */}
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-12">
                <div className="page_title_tax_mkp_main_div">
                  <div className="page_title_tax_mkp_div">
                    <h1>Custom Compounding</h1>
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li>Custom Compounding</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Column end */}
            </div>
          </div>
        </div>
      </section>
      {/* Page title section end */}

      {/* Product details section start */}
      <section className="products_dt_section">
        <div className="container">
          <div className="row justify-content-center">
            {/* Image section */}
            <div className="col-lg-4">
              <div className="product_details_img_box">
                <img src="../categoriesimg/hdpeimg/8.png"/>
              </div>
            </div>
            {/* Details section */}
            <div className="col-lg-7">
              <div className="product_dt_table">
                <h3>Specification</h3>
                <table className='table table-bordered table-striped'>
                  <tbody>

                    <tr>
                      <th>Product Name</th>
                     <td>Custom Compounding</td>
                    </tr>

                    <tr>
                        <th>Description</th>
                        <td>PE 100: This Likely Stands For Polyethylene (PE) 100...</td>
                    </tr>

                  

                  </tbody>
                </table>
   
              </div>
              
<div className="prodt_enqyury_btn">
    <a href="/Contact">Enquiry Now</a>
</div>
             
            </div>
          </div>
        </div>
      </section>
      {/* Product details section end */}
    </>
  );
};

export default Customcompounding;