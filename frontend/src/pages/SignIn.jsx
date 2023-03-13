import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const auth = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: email,
        password,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("jwt", JSON.stringify(res.data.jwt));
        navigate("/");
      })
      .catch((err) => alert("Неверный логин или пароль"));
  };

  return (
    <div className="container">
      <div className="section">
        <h2 className="heading">Вход</h2>
        <br />
        <br />
        <form onSubmit={(e) => auth(e)}>
          <input
            type="email"
            className="input"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            className="input"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="si-btn">
            <button className="si-btnn"> Вход</button>
          </div>
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
      </div>
    </div>
  );
};

export default SignIn;
