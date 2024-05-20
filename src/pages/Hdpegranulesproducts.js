import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Categorydata } from "../../data/Categorydata";
import { Link } from "react-router-dom";

export const Hdpegranulesproducts = () => {
  const { type } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const typeName = type.replace(/-/g, " "); // Replace hyphens back to spaces
    const cardData = Categorydata.find((item) => item.type === typeName);
    setProduct(cardData);
  }, [type]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="product-details">
        <div className="product-image-container">
          <h3 style={{ textAlign: "center" }}>{product?.type}</h3>
          <img className="product-image" src={product?.cover} alt="Cover" />
        </div>
        <table className="product-info">
          <tr>
            <td>Wood Species & Colour:</td>
            <td>{product?.type}</td>
          </tr>
          <tr>
            <td>Colour:</td>
            <td>{product?.Code}</td>
          </tr>
          <tr>
            <td>Thickness:</td>
            <td>{product?.thickness}</td>
          </tr>
          <tr>
            <td>Plank Dimension:</td>
            <td>{product?.plank_dimension}</td>
          </tr>
          <tr>
            <td>Finish:</td>
            <td>{product?.finish}</td>
          </tr>
          <tr>
            <td>Joint:</td>
            <td>{product?.joint}</td>
          </tr>
          <Link to="/contact">
            <button className="product-button" style={{ marginTop: "10px" }}>
              Enquire Now
            </button>
          </Link>
        </table>
      </div>
    </>
  );
};