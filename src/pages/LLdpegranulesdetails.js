import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Categorydata } from '../data/Categorydata';

const LLdpegranulesdetails = () => {
  const { id } = useParams(); // Get the ID from the URL
  const product = Categorydata.find(item => item.cateproduct_name.replace(/\s/g, '-') === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Replace spaces with hyphens in the product name
  const productNameWithHyphens = product.cateproduct_name.replace(/\s/g, '-');

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
                    <h1>{product.cateproduct_name}</h1>
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li>{product.cateproduct_name}</li>
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
                <img src={product.image} alt={product.cateproduct_name} />
              </div>
            </div>
            {/* Details section */}
            <div className="col-lg-7">
              <div className="product_dt_table">
                <h3>Specification</h3>
                <table className='table table-bordered table-striped'>
                  <tbody>

                    <tr>
                      <th>Category Name</th>
                      <td>{product.categoryname}</td>
                    </tr>

                    <tr>
                      <th>Product Name</th>
                      <td>{product.cateproduct_name}</td>
                    </tr>
                    <tr>
                      <th>Description</th>
                      <td>{product.catepro_desc}</td>
                    </tr>
                    

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product details section end */}
    </>
  );
};

export default LLdpegranulesdetails;