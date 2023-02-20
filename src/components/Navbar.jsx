import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faStar, faMagnifyingGlass, faBasketShopping, } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

function Navbar({ categories }) {

  const [product, setProduct] = useState([])

  useEffect(() => {
    // axios.get(http://localhost:1337/api/categories)
    //   .then((res) => console.log(res.data.data))

    axios.get(`http://localhost:1337/api/products?populate=image`)
      .then((res) => setProduct(res.data.data))
  }, [])

  useEffect(() => {
    if (product && product[0]) {
      console.log(product[0]);
    }
  }, [product])

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
            <Link className="navbar__end_link1" to="/">
              Вход{" "}
            </Link>
            <Link className="navbar__end_link2" to="/">
              Регистрация
            </Link>
          </div>
        </div>
      </div>

      <div className="nav">
        <div className="navv">
          <div className="nav__start">
            <Link to="/" >
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
            <Link>
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
          </div>
        </div>
      </div>

      <div>
        {product && product.map(item => (
          <div>

            
            <h1>{item.attributes.title}</h1>
            <h1>{item.attributes.price}</h1>
          <img src={`http://localhost:1337${item.attributes.image.data[0].attributes.url}`} width="100px" alt="" />
          </div>
        ))}
      </div>

    </React.StrictMode>
  );
}
export default Navbar;