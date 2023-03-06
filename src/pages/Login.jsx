import React from "react";
import "../css/Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="section">
        <h2 className="heading">Вход</h2>
        <br />
        <br />
        <form action="">
          <input
            type="text"
            className="input"
            placeholder="E-mail или № карты или телефон"
          />
          <br />
          <input type="password" className="input" placeholder="Пароль" />
        </form>
        <br />
        <span className="navigate">
        У вас нет аккаунта? Кликните{" "}
          <a href="#" className="link underline">
            сюда.
          </a>
        </span>
        <br />
        <br />
        <br />
        <div className="link-box">
          <a href="#" className="link">
            Забыли пароль?
          </a>
          <a href="#"><button className="button">Вход</button></a>
        </div>
      </div>
    </div>
  );
};

export default Login;
