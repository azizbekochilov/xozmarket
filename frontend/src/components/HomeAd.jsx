import React from "react";
import "../css/HomeAd.css";

const HomeAd = () => {
  return (
    <div className="bestseller-part">
      <h2>Популярные товары</h2>
      <div className="main-div">
        <div className="ad-product">
          <div className="top">
            <div className="bestseller-tag">
              <p className="tag">Bestseller</p>
            </div>
            <img
              src="https://xozm.ru/upload/resize_cache/iblock/bf0/182_182_1/bf094b45ee1208133f40105146526d42.jpg"
              alt=""
            />
            <a href="#" className="ad-product-info">
              Швабра Рыжий кот МорМ11 ТВИСТ
            </a>
          </div>
          <hr />
          <div className="bottom">
            <span className="price">
              699 <span className="discount">549₽</span>
            </span>
          </div>
        </div>
        <div className="ad-product">
          <div className="top">
            <div className="bestseller-tag">
              <p className="tag">Bestseller</p>
            </div>
            <img
              src="https://xozm.ru/upload/resize_cache/iblock/e70/182_182_1/e709429f095f9b40118c699395c6fc68.jpg"
              alt=""
            />
            <a href="#" className="ad-product-info">
              Емкость Бытпласт для холодильника и микроволновой печи
            </a>
          </div>
          <hr />
          <div className="bottom">
            <span className="price">
              165 <span className="discount">115₽</span>
            </span>
          </div>
        </div>
        <div className="ad-product">
          <div className="top">
            <div className="bestseller-tag">
              <p className="tag">Bestseller</p>
            </div>
            <img
            className="mrg"
              src="https://xozm.ru/upload/resize_cache/iblock/bc8/182_182_1/bc802b816a401e05a81a2cd8d73f415e.jpg"
              alt=""
            />
            <a href="#" className="ad-product-info">
              Набор "Гранение" 7 предметов
            </a>
          </div>
          <hr />
          <div className="bottom">
            <span className="price">
              1190 <span className="discount">649₽</span>
            </span>
          </div>
        </div>
        <div className="ad-product">
          <div className="top">
            <div className="bestseller-tag">
              <p className="tag">Bestseller</p>
            </div>
            <img className="mrg"
              src="https://xozm.ru/upload/resize_cache/iblock/dd3/182_182_1/dd30944f4a1a5a8ae2b6b42340e4d1d4.jpg"
              alt=""
            />
            <a href="#" className="ad-product-info">
              Мешки для мусора Горыныч ДС-106
            </a>
          </div>
          <hr />
          <div className="bottom">
            <span className="price">
              <span className="discount">56₽</span>
            </span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default HomeAd;
