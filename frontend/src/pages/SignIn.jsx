import React, { useState } from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="container">
      <div className="section">
        <h2 className="heading">Вход</h2>
        <br />
        <br />
        <form action="">
          <input type="email" className="input" placeholder="E-mail" />
          <br />
          <input type="password" className="input" placeholder="Пароль" />
        </form>
        <br />
        <span className="navigate">
          У вас нет аккаунта? Кликните{" "}
          <a href="/sign-up" className="link underline">
            сюда.
          </a>
        </span>
        <br />
        <br />

        <a href="#" className="si-a">
          Забыли пароль?
        </a>
        <br />
        <br />
        <div className="si-btn">
          <Link to="/">
            <button className="si-btnn"> Вход</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
