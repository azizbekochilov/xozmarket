import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { AiOutlineStar } from "react-icons/ai";

function MasterDetail() {
    return (
        <div>
            <Navbar />
            <Menu />
            <div className="ProductDetail">
                <section className="product-section">
                    <div className="shadow">
                        <div className="product-columns">
                            <div className="product-column is-70">
                                <div className="product-category">
                                    <p className="product-category__p">
                                    </p>
                                </div>
                                <div className="">
                                    <h1 className="product-name">
                                       <br />
                                        (арт.381)
                                    </h1>
                                </div>
                                <div className="product-rating"></div>
                            </div>
                            <div className="product-column is-30 amir">
                                <div className="product-favorites">
                                    <AiOutlineStar />
                                    <p>Избранное</p>
                                </div>
                                <div className="product-compare">
                                    <input type="checkbox" className="" />
                                    <p className="">Сравнить</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr />
                <div className="">
                    <div className="product-columns">
                        <div className="produt-column is-50">
                            <div className="product-img">
                                <img
                                    src=''
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="product-column is-50">
                            <div className="product-left">
                                <div className="product-box">
                                    <div className="product-price">
                                        <h1 className="detail__h1_underlined">$1.9</h1>
                                        <h1 className="detail__h1">$</h1>
                                    </div>
                                    <div className="product-order">
                                        <button className="product__button">Заказать</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-info">
          <div className="tabs">
            <div className="tabs-columns">
              <div className="tabs-column is-25">
                <p>Обзор</p>
              </div>
              <div className="tabs-column is-25">
                <p>Отзывы</p>
              </div>
              <div className="tabs-column is-25">
                <p>Характеристики</p>
              </div>
              <div className="tabs-column is-25">
                <p>Аксессуары</p>
              </div>
            </div>
          </div>
        </div>
            <Footer />
        </div>
    );
}
export default MasterDetail;
