import React from "react";
import "../css/OrderPage.css"

const OrderPage = () => {
  return (
    <div>
      <div className="ordp_litso">
        <h1 className="">Физическое лицо</h1>
      </div>
      <hr />
      <div className="ordp_inputs">
        <div className="ordp_input ">
          <p className="fio_p">Ф.И.О</p>
          <input type="text" name="" id="" className="fio_inp" />
        </div>
        <div className="ordp_input ">
          <p className="email_p">E-mail</p>
          <input type="text" name="" id="" className="email_inp" />
        </div>
        <div className="ordp_input ">
          <p className="tel_p">Телефон</p>
          <input type="text" name="" id="" className="tel_inp" />
        </div>
        <div className="ordp_input ">
          <p className="gorod_p">Город</p>
          <input type="text" name="" id="" className="gorod_inp" />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
