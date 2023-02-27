import React from "react";
import "../css/About.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { BsPencilSquare } from "react-icons/bs";

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
        <h1 className="about-heading">О компании</h1>
        <div className="history-item">
          <img
            src="https://xozm.ru/upload/iblock/57f/0_02_05_9fdf37913f0ac1e102739dcea5bd30f12e3764826b4b0d0b7d59fee5fd442b29_full.jpg"
            alt="photo 1"
          />
          <p className="about-text">
            Хозмаркет — товары для дома в одном месте! <br /> <br /> Наша миссия
            — неуклонно, каждый день делать так, чтобы <br /> дома стало лучше!
          </p>
        </div>
        <div className="history-item">
          <p className="about-text">
            Хозмаркет — это сеть удобных магазинов с товарами для дома под боком
            с серьезным ассортиментом инструментов, бытовой химии, товаров для
            сада. активного отдыха, зоотоваров, текстиля, посуды и массой
            интересных хозяйственных штучек!
          </p>
          <img
            src="https://xozm.ru/upload/iblock/c12/0_02_05_49d18300f304d66d6a2abd1eb95500e1a9c1e7f475ed6e5d172af27c296568e4_full.jpg"
            alt="photo 2"
          />
        </div>
        <div className="history-item">
          <img
            src="https://xozm.ru/upload/iblock/844/0_02_05_c887e5b1030d2240bbe121a868ad229e556b96da5883943fd54b67fc8b511da9_full.jpg"
            alt="photo 3"
          />
          <p className="about-text">
            Уникальность магазинов Хозмаркет состоит в том, что мы заключили
            прямые договоры с проверенными производителями и тем самым
            гарантировали лучшие цены на тысячи товаров для дома в одном месте,
            при этом создали уютную атмосферу в магазине и логичность выбора!
          </p>
        </div>
        <div className="history-item">
          <p className="about-text">
            Мы работаем для тех, кто любит свой дом и семью, для тех, кто кому
            нравится сам процесс покупки. Всегда находимся в поиске чего-то
            нового, чтобы стать еще более интересными для наших покупателей,
            понимать их потребности, искать и предлагать то, что им нужно.
          </p>
          <img
            src="https://xozm.ru/upload/iblock/fa7/0_02_05_d6a9b9ff2b6d33fa79578550c1e356146fb0ca18756be1c83ebb5cf020931ee7_full.jpg"
            alt="photo 4"
          />
        </div>
        <div className="history-item">
          <img
            src="https://xozm.ru/upload/iblock/690/0_02_05_3dfd14b50c0929050263b7bb1e3a3c1e829c26ce56d2aa8e8a615abbd7ddc530_full.jpg"
            alt="photo 5"
          />
          <p className="about-text">
            Информация о юридическом лице: <br />
            <br />
            ООО "ХозМаркетГрупп" <br />
            ИНН 6215030581 <br />
            КПП 621501001 <br />
            ОГРН 1166234070100 <br />
            Юридический адрес: 390507, Рязанская обл., Рязанский р-н, <br />
            с. Дядьково, д. 30 лит. А
          </p>
        </div>
      </div>
      <hr />
      <div id="contacts">
        <h1 className="about-heading">Контакты</h1>
        <a className="icon icon-hover" href="#">
          <BsPencilSquare size={30} />
          <span className="feedback">Напишите нам</span>
        </a>
        <p className="about-text icon">
          г. Сасово (ул. Деповская, 32А) <br />
          8 (4912) 777-695 <br />
          8:00 — 19:00 ежедневно
        </p>
      </div>
      <hr />
      <div id="partners">
        <h1 className="about-heading">Партнеры</h1>
        <p className="about-text text-center">
          Мы заключаем только прямые партнёрские договоры с известными мировыми
          производителями бытовой техники и электроники, чтобы Вы получали самые
          выгодные цены, самые последние новинки, приятные подарки и специальные
          цены по федеральным программам!
        </p>
        <div className="images">
          <img src="https://xozm.ru/upload/iblock/f21/moulinex1.png" alt="" />
          <img src="https://xozm.ru/upload/iblock/f21/moulinex1.png" alt="" />
          <img src="https://xozm.ru/upload/iblock/f21/moulinex1.png" alt="" />
          <img src="https://xozm.ru/upload/iblock/f21/moulinex1.png" alt="" />
          <img src="https://xozm.ru/upload/iblock/f21/moulinex1.png" alt="" />
          <img src="https://xozm.ru/upload/iblock/f21/moulinex1.png" alt="" />
          <img src="https://xozm.ru/upload/iblock/f21/moulinex1.png" alt="" />
          <img src="https://xozm.ru/upload/iblock/f21/moulinex1.png" alt="" />
          <img src="https://xozm.ru/upload/iblock/f21/moulinex1.png" alt="" />
          <img src="https://xozm.ru/upload/iblock/f21/moulinex1.png" alt="" />
        </div>
      </div>
      <hr />

      <div id="news">
      <h1 className="about-heading">Новости</h1>
        <div className="years">
          <a href="#" className="about-text icon-hover pad">
            2016
          </a>
          <a href="#" className="about-text icon-hover pad">
            2017
          </a>
          <a href="#" className="about-text icon-hover pad">
            2018
          </a>
          <a href="#" className="about-text icon-hover pad">
            2019
          </a>
        </div>
        <div className="news-item">
          <img
            src="https://xozm.ru/upload/resize_cache/iblock/6ef/470_999_1/6ef5ba444326fa74021b3295e93725ad.jpeg"
            alt=""
            width='200px'
          />
          
          <p className="about-text">
          <a href="#" className="icon-hover news-heading">Как выбрать электролобзик</a>
          <span className="read-more"> 2 Декабря 2019</span><br /><br />

            В этой статье мы поговорим о функционале электролобзика и подскажем,
            на что обратить внимание при выборе данного электроинструмента.
            <a href="#" className="icon-hover read-more">Читать дальше </a>
          </p>

          
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
