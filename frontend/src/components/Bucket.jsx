import React from "react";
import Navbar from './Navbar'
import Menu from './Menu'
import Footer from './Footer'
import '../css/Bucket.css'
import { Link } from "react-router-dom";

function Bucket() {
    return (
        <React.StrictMode>
            <Navbar />
            <Menu />
            <div className="buscet">
                <h1 className="buscet__h1">Ваша корзина</h1>

                <div className="buscet__box">

                    <div className="buscet__boxes">
                        <img className="buscet__box_img" src="./img/odam.jpg" alt="" />
                    </div>

                </div>
            </div>
            <Footer />
        </React.StrictMode>
    );
}
export default Bucket;