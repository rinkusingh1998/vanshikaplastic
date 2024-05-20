import React from 'react'
import { Link } from "react-router-dom";
import { Categorydata } from '../data/Categorydata';

const PPCPgranules = () => {
  const filteredItems = Categorydata.filter(item => item.categoryname === 'PPCP Granules');
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
                <h1> PPCP Granules</h1>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li>PPCP Granules</li>
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

  {/* category page section start */}
  <section className="category_page_section">
    <div className="container">
        <div className="row">

{filteredItems.map((item, index) =>(
  <Categoryitems 
  key={index}
  image={item.image}
  cateproduct_name={item.cateproduct_name}
  catepro_desc={item.catepro_desc}
  catebtn_view={item.catebtn_view}
  />
))}

           
        </div>
    </div>
  </section>
  {/* category page section end */}
      
    </>
  )
}

export default PPCPgranules;

const Categoryitems = ({
  image,
  cateproduct_name,
  catepro_desc,
  catebtn_view
}) =>{
  return(
    <>
    {/*  col start  */}
    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
      <Link to="">
      <div className="category_items_main_div">
        <div className="category_items_img_box">
          <img src={image} alt="" className='img-fluid' />
        </div>
        <h3>{cateproduct_name}</h3>
        <p>{catepro_desc}</p>
        <div className="categoryitem_btn_div">
              <p>{catebtn_view} <span className="fa fa-long-arrow-right" /></p>
            </div>
      </div>
      </Link>
    </div>

    {/*  col end */}
    </>
  )
}
