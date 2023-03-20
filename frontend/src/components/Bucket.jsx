import React from "react";
import Navbar from './Navbar'
import Menu from './Menu'
import Footer from './Footer'
import '../css/Bucket.css'
import { json, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCT, REVIEWS_OF_PRODUCT } from "../utils/urls";
import axios from "axios";

function Bucket() {

    let [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    );
 
    console.log(cart);

    const navigate = useNavigate();
    const removeCartItem = (cartItem) => {
        setCart([
            ...cart.filter((item) => item.product.id !== cartItem.product.id),
        ]);
    };

    const increase = (cartItem) => {
        setCart(
            cart.map((item) => {
                if (item.product.id === cartItem.product.id) {
                    item.count += 1;
                }
                return item;
            })
        );
    };

    const decrease = (cartItem) => {
        if (cartItem.count <= 1) {
            return removeCartItem(cartItem);
        } else {
            setCart(
                cart.map((item) => {
                    if (item.product.id === cartItem.product.id) {
                        item.count -= 1;
                    }
                    return item;
                })
            );
        }
    };


    const createOrderProducts = item => {
        axios.post("http://localhost:1337/api/order-products", {
            data: {
                product: item.product,
                amount: item.count,
                total: item.product.attributes.price * item.count
            }
        })
            .then((res) => {
                console.log(res.data.data)
                // navigate(`/order/${res.data.data.id}/${item.count}`
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        localStorage.setItem("order", JSON.stringify(cart));
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    return (
        <React.StrictMode>
            <Navbar />
            <Menu />
            <div className="buscet">
                <h1 className="buscet__h1">Ваша корзина</h1>

                {!cart || cart.length === 0 ? (
                    <h1 className="title is-1 has-text-danger has-text-centered">
                        Empty cart
                    </h1>
                ) : (

                    cart.map((cartItem) => (

                        <div className="buscet__box">

                            <div className="buscet__boxes">
                                <img className="buscet__boxes_img" src={`http://localhost:1337${cartItem.product.attributes.image.data.attributes.url}`} alt="" />
                                <h1 className="buscet__boxes_h1">{cartItem.product.attributes.title}</h1>
                                <div className="buscet__boxes_plas">
                                    <button className="buscet__boxes_plas_btn1" onClick={() => decrease(cartItem)}>-</button>
                                    <h1 className="buscet__boxes_plas_h1">{cartItem.count}</h1>
                                    <button className="buscet__boxes_plas_btn1" onClick={() => increase(cartItem)}>+</button>
                                </div>
                                <p className="buscet__boxes_p">$ {cartItem.product.attributes.price}</p>

                                <div className="buscet__boxes_btn">
                                    <button className="buscet__boxes_btn1" onClick={() => createOrderProducts(cartItem)}>kupit</button>

                                    <button className="buscet__boxes_btn2" onClick={() => removeCartItem(cartItem)}>delete</button>
                                </div>

                            </div>
                            <hr />
                        </div>
                    ))
                )}

            </div>
            <Footer />
        </React.StrictMode>
    );
}
export default Bucket;