import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer">
        <div className="footer__inner">
        <div className="footer-left">
          <Link to="*" className="footer__logo">
            <img  src="https://xozm.ru/local/templates/main/img/svg/logo.svg"  alt="" />
          </Link>
          <div className="footer__search">
            <input
              type="text"
              className="footer__search"
              placeholder="Шуруповерт BOSCH"
            />
            <button type="submit" className="button__search"></button>
          </div>
          <div className="footer__logo_text">
            <p>Интернет-магазин товаров для дома</p>
          </div>
          <div className="footer__icon">
            <i></i>
          </div>
          <a href="">
            <i className=""></i>
            Поделитесь мнением
          </a>
          <div class="footer_menu_links">
            <ul class="footer_menu_links__ul">
              <li class="footer_menu_links__li">
                <a>О компании</a>
              </li>

              <li class="footer_menu_links__li">
                <a>Акции и распродажи</a>
              </li>

              <li class="footer_menu_links__li">
                <a>Новости</a>
              </li>

              <li class="footer_menu_links__li">
                <a>Контакты</a>
              </li>

              <li class="footer_menu_links__li">
                <a>Партнеры</a>
              </li>
            </ul>
            <ul class="footer_menu_links__ul">
              {" "}
              <li class="footer_menu_links__li">
                <a>Договор оферты</a>
              </li>
              <li class="footer_menu_links__li">
                <a>Политика персональных данных</a>
              </li>
              <li class="footer_menu_links__li">
                <a>Доставка и Оплата</a>
              </li>
              <li class="footer_menu_links__li">
                <a>Кредит</a>
              </li>
              <li class="footer_menu_links__li">
                <a>Карта сайта</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <div class="footer__contact">
            <a href="tel:+998914422317" class="footer__tel">
              +998(91)442-23-17
            </a>
            <a href="" class="footer__address">
              Bukhara - MONDAY_Labs
            </a>
          </div>  
        </div>
        </div>
      </div>
      <div className="footer__line">
      © 2016-2023. Интернет-магазин ХозМаркет. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
