import React from "react";
import "../css/MyOrderPage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menu from "./Menu";

const MyOrderPage = () => {
  return (
    <div className="">
        <Navbar/>
        <Menu/>
      <div className="padding-bottommy">
        <h2 className="vashzakaz">Ваши Заказы: </h2>

        <div className="table-container">
          <table className="table">
            <tr className="tr">
              <th className="th id">Id: </th>
              <th className="th product">Имя продукта:</th>
              <th className="th nomer">Номер телефона:</th>
              <th className="th adres">Адрес:</th>
              <th className="th status">Статус:</th>
            </tr>
            <tr className="tr">
              <td className=" td_id">1</td>
              <td className="td td_product">Стакан</td>
              <td className="td td_nomer">442 23 17</td>
              <td className="td td_adres">Газлишох</td>
              <td className="td td_status">В дороге</td>
            </tr>
            <tr className="tr">
              <td className=" td_id">2</td>
              <td className="td td_product">Вилка</td>
              <td className="td  td_nomer">333 33 33</td>
              <td className="td td_adres">Удурги</td>
              <td className="td td_status">Ожидает в почте</td>
            </tr>
            <tr className="tr">
              <td className=" td_id">3</td>
              <td className="td td_product">Пылесос</td>
              <td className="td  td_nomer">777 77 77</td>
              <td className="td td_adres">Бухара</td>
              <td className="td td_status">Ожидает в почте</td>
            </tr>
            <tr className="tr">
              <td className=" td_id">4</td>
              <td className="td td_product">Настольная лампа</td>
              <td className="td  td_nomer">123 45 67</td>
              <td className="td td_adres">Когон</td>
              <td className="td td_status">В дороге</td>
            </tr>
          </table>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MyOrderPage;
