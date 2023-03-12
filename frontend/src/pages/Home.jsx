import React from "react";
import Footer from "../components/Footer";
import Karusel from "../components/Karusel";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Promotion from "../components/Promotion";
import HomeAd from "../components/HomeAd";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { PRODUCTS } from "../utils/urls";
import News from "../components/News";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      axios.get(PRODUCTS).then((res) => setProducts(res.data.data));
    }, []);

    return (
      <div>
        <Navbar />
        <Menu />
        <Karusel />
        <Promotion />

        <HomeAd
          products={products.filter((product) => product.attributes.isSeller)}
        />
        <News
          products={products.filter((product) => product.attributes.isNew)}
        />

        <Footer />
      </div>
    );
  };

export default Home;
