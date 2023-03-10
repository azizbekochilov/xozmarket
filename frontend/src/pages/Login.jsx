import React, { useState } from "react";
import "../css/Login.css";

const Login = () => {
  // let {email ,setEmail}= useState()
  // let {password ,setPassword}=useState()


  return (
    <div className="container">
      <div className="section">
        <h2 className="headi1ng">Вход</h2>
        <br />
        <br />
        <form action="">
          <input
            type="email"
            className="input"
            placeholder="E-mail"
          />
          <br />
          <input type="password" className="input" placeholder="Пароль" />
        </form>
        <br />
        <span className="navigate">
        У вас нет аккаунта? Кликните{" "}
          <a href="/SignUp" className="link underline">
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
