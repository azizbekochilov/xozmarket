import React from "react";
import "../css/About.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const About = () => {
  return (
    <div>
      <Navbar />
      <Menu />
      <div className="navigation-bar">
        <div className="navigation-item">
          <a href="#history">О компании</a>
        </div>
        <div className="navigation-item">
          <a href="#contacts">Контакты</a>
        </div>
        <div className="navigation-item">
          <a href="#partners">Партнеры</a>
        </div>
        <div className="navigation-item">
          <a href="#news">Новости</a>
        </div>
      </div>
      <div id="history">
        e
      </div>
      <Footer />
    </div>
  );
};

export default About;
