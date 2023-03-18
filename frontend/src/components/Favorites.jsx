import React, { Profiler } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import "../css/Favorites.css"


function Favorites(setShow) {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")));

    console.log(products)

    if (products) {
        return (
            <React.StrictMode>
                <Navbar />
                <Menu />
                <div className="favorites">

                    <h1 className="favorites__h1">Избранное</h1>
                    <d  iv className="favorites__box">
                        {products && products.map(product => (
                            <div className="favorites__box_boxes">
                                <p className="ex" onClick={() => setShow(false)}>x</p>
                                <Link to={`/product/${product.product.id}`} className="favorites__box_link">
                                    <img className="favorites__box_img"
                                        src={`http://localhost:1337${product.product.attributes.image.data.attributes.url}`}
                                    />
                                </Link>
                                <div className="favorites__box_name">
                                    <h2 className="favorites__box_name_1h"> {product.product.attributes.title}</h2>
                                </div>
                                <div className="favorites__box_btn">
                                    <h1 className="favorites__box_btn_h1"> $ {product.product.attributes.price} </h1>
                                    <br />
                                 
                                </div>
                            </div>
                        ))}
                    </d>

                </div>
                <Footer />
            </React.StrictMode>
        );
    }


}
export default Favorites;

