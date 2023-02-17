import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
  return (
    <section className="section ">
      <div className="footer">
        <div className="columns">
          <div className="column is-33 footer-left">
            <Link to="*" className="footer__logo">
              <img
                className="footer__logo"
                src="https://xozm.ru/local/templates/main/img/svg/logo.svg"
                alt=""
              />
            </Link>
            <div className="footer__logo_text">
              <p>
                Интернет-магазин <br /> товаров для <br /> дома
              </p>
            </div>
            <div className="footer__comment">
              <Link to="*" >
                <i className="">ICON</i>
                Поделитесь <br /> мнением
              </Link>
            </div>
          </div>
          <div className="column is-33 footer-middle">
            <div className="footer__searchS">
              <input
                type="text"
                className="footer__search"
                placeholder="Шуруповерт BOSCH"
              />
              <button type="submit" className="button__search">
                <i className="">ICON</i>
              </button>
            </div>
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
          <div className="column is-33 footer-right">
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
    </section>
  );
};
export default Footer;
