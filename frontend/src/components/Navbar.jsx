import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faStar, faMagnifyingGlass, faBasketShopping} from "@fortawesome/free-solid-svg-icons";
import {BsPersonSquare} from "react-icons/bs"

function Navbar() {
  return (
    <React.StrictMode>
      <div className="navbar">
        <div className="navbar__start">
          <select name="" id="" className="navbar__start_select">
            <option value="">Сасово</option>
            <option value="">Рязань</option>
          </select>
          <strong>
            {" "}
            <a href="tel:+998914422317" className="navbar__start_number">
              {" "}
              +998(91)442-23-17
            </a>
          </strong>
        </div>

        <div className="navbar__center">
          <Link className="navbar__center_link" to="/">
            <FontAwesomeIcon icon={faStar} /> Избранное
          </Link>

          <div className="navbar__end">
            <Link className="navbar__end_link1" to="/sign-in">
              Вход{" "}
            </Link>
            <Link className="navbar__end_link2" to="/sign-up">
              Регистрация
            </Link>
          </div>
        </div>
      </div>

      <div className="nav">
        <div className="navv">
          <div className="nav__start">
            <Link to="/klub" >
              <div className="nav__start_link">
                <FontAwesomeIcon icon={faUserGroup} className='nav__start_link_icon' />
                <ul className="nav__start_link_ul">
                  <li>Клуб</li>
                  <li>Хозмаркет</li>
                </ul>
              </div>
            </Link>
          </div>

          <div className="nav__img">
            <Link to='/'>
              <img className="nav__img_img" src="https://xozm.ru/local/templates/main/img/svg/logo.svg" />
            </Link>
          </div>

          <div className="nav__input">
            <input type="text" placeholder="Шуруповерт BOSCH" className="nav__input_inp" />
            <Link className="nav__input_link" to='/'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
          </div>

          <div className="nav__end">
            <Link to='/'>
              <div className="nav__end_link">
                <FontAwesomeIcon icon={faBasketShopping} className='nav__end_link_icon' />
                <p>Ваша <br /> корзина</p>
              </div>

            </Link>
            <Link to="/master" className="nav__end_link">
              <div className="nav__end_master">
                <BsPersonSquare className="nav__end_icon" size={20} />
                <h1 className="nav__end_master-h1">Мастеры</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div>
      </div>
    </React.StrictMode>
  );
}
export default Navbar;