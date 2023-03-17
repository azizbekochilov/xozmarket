import React from "react";
import "../css/OrderPage.css";

const OrderPage = () => {
  return (
    <div>
      <div className="ordp_litso">
        <h1 className="">Физическое лицо</h1>
      </div>
      <hr />
      <br />
      <br />

      <p className="kod1">Ф.И.О</p>
      <input type="text" name="" id="" className="inp_a" />
      <br />
      <br />
      <p className="kod2">E-mail</p>
      <input type="text" name="" id="" className="inp_b" />
      <br />
      <br />
      <p className="kod3">Телефон</p>
      <input type="text" name="" id="" className="inp_c" />
      <br />
      <br />
      <p className="kod4">Город</p>
      <input type="text" name="" id="" className="inp_d" />
      <br />
      <br />
      <br />

      <div className="Koment">
        <p className="komin">Комментарии</p>
        <input type="text" name="" id="" className="inp_f" />
      </div>
      <br />
      <br />
      <br />
      <div className="chick">
        <input type="checkbox" id="ch1k" />
        <label for="ch1k">
          {" "}
          Я согласен с политикой обработки персональных данных <br />
          <br /> <p className="p12">и условиями пробдажи товаров</p>
        </label>
      </div>
      <br />
      <br />

      <button className="btn123">Потдвердить заказ</button>
    </div>
  );
};

export default OrderPage;
