import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import '../css/Klub.css'

const Klub = () => {
  return (
    <div>
      <Navbar />
      <Menu />
      <div className="Klub">
        <br /><br />
         <h1 className="Klub-text">Дисконтная программа</h1>
        <br /><hr /><br /><br/>
        <div className="Klub-word-4">
            <h5>Накопительная дисконтная карта
             выдается при совершении покупки в торговых точках сети «Хозмаркет» <br />
             Размер скидки увеличивается в зависимости от суммы накоплений на счете дисконтной карты. <br />
             Повышение статуса дисконтной карты происходит при достижении следующих сумм:</h5>
        </div>

        <div className="boxes">
          <div className="box">Посмотреть уровень <br />
          скидки на сайте <br />
          <br />
         <button className="button" >Посмотреть</button>
        </div>
        </div>
        
          <div className="Klub-words-1">  
             <h5>- 3% при покупке на сумму до 24 999 рублей;</h5>
             <br />
             <h5>- 5% при покупке на сумму от 25 000 рублей;</h5>
             <br />
             <h5>- 7% при покупке на сумму от 75 000 рублей;</h5>
             <br />
             <h5>- 10% при покупке на сумму от 150 000 рублей;</h5>
           </div>
           <br /> <br />
           <div className="Klub-img" >
            <img src="https://xozm.ru/loyality/card_loylty_Hoz_market-01.jpg" alt="" />
           </div>
           <br />
            <h5 className="Klub-words-2">Действуют ограничения на скидку для товара,
               участвующего в акциях и рассрочке, все товарные группы <br /> участвуют в процессе накопления.
                В интернет магазине скидки действуют Карта становится <br /> накопительной только после регистрации, без нее действует только скидка 3%.</h5>
                <br />
                <h2 className="Klub-words-3" >Правила программы лояльности.</h2>
                <br /><br />
      </div>

      <Footer />
    </div>
  );
};

export default Klub;