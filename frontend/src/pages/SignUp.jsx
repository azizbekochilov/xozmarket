import React, { useState, useEffect } from "react";
import "../css/Login.css";
import { Link ,useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password2, setPassword2] = useState("");
  const [empty, setEmpty] = useState(true);
  const navigate = useNavigate();

  const auth = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: username,
        password,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("jwt", JSON.stringify(res.data.jwt));
        navigate("/");
      })
      .catch((err) => alert("Неверный логин или пароль"));
  };

  const signUp = (event) => {
    event.preventDefault();
    if (empty) {
      if (password === password2) {
        axios
          .post("http://localhost:1337/api/auth/local/register", {
            username: username,
            email: email,
            password: password,
          })
          .then((res) => {
            navigate("/signin");
          })
          .catch((err) => console.log(err));
      } else {
        alert("Пароль не совпадает");
      }
    } else {
      alert("Логин занять");
    }
  };

  useEffect(() => {
    axios.get("http://localhost:1337/api/users").then((res) => {
      const user = res.data.filter((r) => r.username === username);
      console.log(user);
      if (user[0]) {
        setEmpty(false);
      } else {
        setEmpty(true);
      }
    });
  }, [username]);
  return (
    <div className="container">
      <div className="su-section">
        <h2 className="heading">Регистрация</h2>
        <br />
        <form action="">
          <input type="text" className="input" placeholder="Ваше имя" />
          <br />
          <input type="text" className="input" placeholder="Ваша фамилия" />
          <br />
          <input type="email" className="input" placeholder="Ваш E-mail" />
          <br />
          <input type="password" className="input" placeholder="Пароль" />
          <br />
          <input
            type="password"
            className="input"
            placeholder="Подверждение пароля"
          />
        </form>
        <br />
        <span className="navigate">
          У вас уже есть аккаунт? Кликните{" "}
          <a href="/sign-in" className="link underline">
            сюда.
          </a>
        </span>
        <br />
        <br />

        <div className="si-btn">
          <Link to="/">
            <button className="si-btnn"> Регистрация</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
