import React from "react";
import "../css/HomeAd.css";

const News = ({products}) => {
  return (
    <div className="bestseller-part">
      <h2>Новинки</h2>
      <div className="main-div">
        {products.map(product => (
          <div className="ad-product">
          <div className="top">
            <div className="bestseller-tag">
              <p className="tag1">Новинка</p>
            </div>
            <img
              src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
              alt=""
            />
            <a href="#" className="ad-product-info">
              {product.attributes.title}
            </a>
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
    <br />
    <br />
  </div>
  );
};

export default News;
