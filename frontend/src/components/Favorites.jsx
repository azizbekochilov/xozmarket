import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import "../css/Favorites.css"
import { PRODUCT, REVIEWS_OF_PRODUCT } from "../utils/urls";
import { useParams } from "react-router-dom";
import axios from "axios";

function Favorites(setShow) {
    const [product, setProduct] = useState();
    const params = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios
            .get(PRODUCT.replace("id", params.id))
            .then((res) => setProduct(res.data.data));
    }, []);

    const loadReviews = () => {
        axios
          .get(REVIEWS_OF_PRODUCT.replace("productId", params.id))
          .then((res) => setReviews(res.data.data));
      };    

    useEffect(() => {
        loadReviews();
      }, []);

    if (product) {
        return (
            <React.StrictMode>
                <Navbar />
                <Menu />
                <div className="favorites">

                    <h1 className="favorites__h1">Избранное</h1>
                    <div className="favorites__box">

                        <div className="favorites__box_boxes">
                            <p class="ex" onClick={() => setShow(false)}>x</p>
                            <Link to='/' className="favorites__box_link">
                                <img className="favorites__box_img" src='' alt="" />
                            </Link>
                            <div className="favorites__box_name">
                                <h2>name</h2>
                            </div>
                            <div className="favorites__box_btn">
                                <h1 className="favorites__box_btn_h1"> $ 13 546 </h1>
                                <br />
                                <button className="favorites__box_btn_btn">Заказать</button>
                            </div>
                        </div>

                    </div>

                </div>
                <Footer />
            </React.StrictMode>
        );
    }


}
export default Favorites;

