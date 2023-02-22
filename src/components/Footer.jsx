import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { SiOdnoklassniki } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { SlSocialVkontakte } from "react-icons/sl";
import { RiFileEditLine } from "react-icons/ri";

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
                Интернет-магазин товаров для <br /> дома.
              </p>
            </div>
            <div className="footer__comment">
              <Link to="*">
                <RiFileEditLine className="is-16" />
                Поделитесь <br /> мнением
              </Link>
            </div>
          </div>
          <div className="column is-33 footer-middle">
            <div className="footer-search">
              <input
                type="text"
                className="footer-search__input"
                placeholder="Шуруповерт BOSCH"
              />
              <div className="footer-seach__icon">
                <BsSearch />
              </div>
            </div>
            <div class="footer_menu_links columns">
              <ul class="footer_menu_links__ul column is-50">
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
              <ul class="footer_menu_links__ul column is-50">
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
            </div>
            <div className="footer__addres">
              <a href="" class="footer__address">
                Bukhara - MONDAY_Labs
              </a>
            </div>
            <div className="footer-social">
              <div className="marleft-14">
                <SlSocialVkontakte />
              </div>
              <div className="marleft-14">
                {" "}
                <BsTwitter />
              </div>
              <div className="marleft-14">
                {" "}
                <FaFacebookF />
              </div>
              <div className="marleft-14">
                {" "}
                <SiOdnoklassniki />
              </div>
              <div className="marleft-14">
                {" "}
                <FiInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__bottom_subtitle">
          © 2016-2023. Интернет-магазин ХозМаркет. Все права защищены.
        </p>
      </div>
    </section>
  );
};
export default Footer;
