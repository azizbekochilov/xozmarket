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
            navigate("/sign-in");
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
        <form onSubmit={e => signUp(e)}>
          <input type="text" className="input" placeholder="Логин" value={username} onChange={e => setUsername(e.target.value)}/>
          <br />
          <input type="email" className="input" placeholder="Ваш E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
          <br />
          <input type="password" className="input" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)}/>
          <br />
          <input
            type="password"
            className="input"
            placeholder="Подверждение пароля"
            value={password2} onChange={e => setPassword2(e.target.value)}
          />

          <button className="si-btnn"> Регистрация</button>
        </form>
        <br />
        <span className="navigate">
          У вас уже есть аккаунт? Кликните{" "}
          <a href="/sign-in" className="link underline">
            сюда.
          </a>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
