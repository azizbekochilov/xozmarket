import React from "react";
import "../css/Login.css"

const SignUp = () => {
  return (
    <div className="container">
      <div className="section">
      <h2 className="heading">Регистрация</h2><br />
       <form action="">
       <input type="text" className="input" placeholder="Ваше имя*" /><br />
        <input type="text" className="input" placeholder="Ваша фамилия*" /><br />
        <input type="text" className="input" placeholder="Телефон*"/><br />
        <input type="password" className="input" placeholder="Пароль"/><br />
        <input type="password" className="input" placeholder="Подверждение пароля"/>
        
       </form><br />
       <span className="navigate">
          У вас уже есть аккаунт? Кликните{" "}
          <a href="/Login" className="link underline">
            сюда.
          </a>
        </span>
        <div className="link-box">
        <a href="#"><button className="button btn-margin">Вход</button></a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
