import React from "react";
import {Link} from "react-router-dom"
import "../css/Menu.css";
import { FaPumpSoap, FaRegLightbulb, FaHammer } from "react-icons/fa";
import { AiOutlineGift } from "react-icons/ai";
import {
  GiWashingMachine,
  GiKnifeFork,
  GiGardeningShears,
  GiDutchBike,
  GiChainsaw,
  GiDrill,
  GiKitchenTap,
  GiCartwheel,
  GiGreenhouse,
} from "react-icons/gi";

const Menu = () => {
  return (
    <figure className="menu">
      <Link to="/products/4">
        <div className="menu-item">
          <FaPumpSoap size={30} />
          <span>
            Товары <br /> для <br /> дома
          </span>
        </div>
      </Link>
      <Link to="/products/5">
        <div className="menu-item">
          <GiWashingMachine size={30} />
          <span>
            Бытовая <br /> техника
          </span>
        </div>
      </Link>
      <Link  to='/products/6'>
        <div className="menu-item">
          <GiKnifeFork size={30} />
          <span>Посуда</span>
        </div>
      </Link>
      <Link  to='/products/7'>
        <div className="menu-item">
          <GiGardeningShears size={30} />
          <span>
            Все <br /> для <br /> сада
          </span>
        </div>
      </Link>
      <Link  to='/products/8'>
        <div className="menu-item">
          <GiDutchBike size={30} />
          <span>
            Отдых <br /> на даче <br /> и туризм
          </span>
        </div>
      </Link>
      <Link  to='/products/9'>
        <div className="menu-item">
          <FaRegLightbulb size={30} />
          <span>
            Электрика <br /> и свет
          </span>
        </div>
      </Link>
      <Link  to='/products/10'>
        <div className="menu-item">
          <GiChainsaw size={30} />
          <span>Бензоинструмент</span>
        </div>
      </Link>
      <Link  to='/products/11'>
        <div className="menu-item">
          <GiDrill size={30} />
          <span>Электроинструмент</span>
        </div>
      </Link>
      <Link  to='/products/12'>
        <div className="menu-item">
          <FaHammer size={30} />
          <span>
            Инструменты <br /> и крепеж
          </span>
        </div>
      </Link>
      <Link  to='/products/13'>
        <div className="menu-item">
          <GiKitchenTap size={30} />
          <span>Сантехника</span>
        </div>
      </Link>
      <Link  to='/products/14'>
        <div className="menu-item">
          <GiCartwheel size={30} />
          <span>Автотовары</span>
        </div>
      </Link>
      <Link  to='/products/15'>
        <div className="menu-item">
          <GiGreenhouse size={30} />
          <span>
            Теплицы <br /> и парники
          </span>
        </div>
      </Link>
      <Link  to='/master'>
        <div className="menu-item">
          <AiOutlineGift size={30} />
          <span>Акции</span>
        </div>
      </Link>
    </figure>
  )
}

export default Menu;
