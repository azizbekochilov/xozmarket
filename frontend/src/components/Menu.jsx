import React from "react";
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
      <a href="#">
        <div className="menu-item">
          <FaPumpSoap size={30} />
          <span>
            Товары <br /> для <br /> дома
          </span>
        </div>
      </a>
      <a href="#">
        <div className="menu-item">
          <GiWashingMachine size={30} />
          <span>
            Бытовая <br /> техника
          </span>
        </div>
      </a>
      <a href="#">
        <div className="menu-item">
          <GiKnifeFork size={30} />
          <span>Посуда</span>
        </div>
      </a>
      <a href="#">
        <div className="menu-item">
          <GiGardeningShears size={30} />
          <span>
            Все <br /> для <br /> сада
          </span>
        </div>
      </a>
      <a href="#">
        <div className="menu-item">
          <GiDutchBike size={30} />
          <span>
            Отдых <br /> на даче <br /> и туризм
          </span>
        </div>
      </a>
      <a href="#">
        <div className="menu-item">
          <FaRegLightbulb size={30} />
          <span>
            Электрика <br /> и свет
          </span>
        </div>
      </a>
      <a href="#">
        <div className="menu-item">
          <GiChainsaw size={30} />
          <span>Бензоинструмент</span>
        </div>
      </a>
      <a href="#">
        <div className="menu-item">
          <GiDrill size={30} />
          <span>Электроинструмент</span>
        </div>
      </a>
      <a href="#">
        <div className="menu-item">
          <FaHammer size={30} />
          <span>
            Инструменты <br /> и крепеж
          </span>
        </div>
      </a>
      <a href="#">
        <div className="menu-item">
          <GiKitchenTap size={30} />
          <span>Сантехника</span>
        </div>
      </a>
      <a href="#">
        <div className="menu-item">
          <GiCartwheel size={30} />
          <span>Автотовары</span>
        </div>
      </a>
      <a href="#">
        <div className="menu-item">
          <GiGreenhouse size={30} />
          <span>
            Теплицы <br /> и парники
          </span>
        </div>
      </a>
      <a href="#">
        <div className="menu-item">
          <AiOutlineGift size={30} />
          <span>Акции</span>
        </div>
      </a>
    </figure>
  )
}

export default Menu;
