import React from "react";
import Footer from "../components/Footer";
import Karusel from "../components/Karusel";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Promotion from "../components/Promotion";
import HomeAd from "../components/HomeAd";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Menu />
      <Karusel />
      <Promotion />
      <HomeAd/>
      <Footer />
    </div>
  );
};

export default Home;
