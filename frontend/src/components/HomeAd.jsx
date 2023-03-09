import React from "react";
import {Link} from "react-router-dom"
import "../css/HomeAd.css";

const HomeAd = ({products}) => {
  return (
    <div className="bestseller-part">
      <h2>Популярные товары</h2>
      <div className="main-div">
        {products.map(product => (
          <div className="ad-product">
          <div className="top">
            <div className="bestseller-tag">
              <p className="tag">Bestseller</p>
            </div>
            <img
              src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
              alt=""
            />
            <Link to={'product/' + product.id} className="ad-product-info">
              {product.attributes.title}
            </Link>
          </div>
          <hr />
          <div className="bottom">
            <span className="price">
              <span className="discount">${product.attributes.price}</span>
            </span>
          </div>
        </div>
        ))}
    </div>
  </div>
  );
};

export default HomeAd;
