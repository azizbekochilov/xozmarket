import React from "react";
import "../css/FooterIdea.css"
import { Link } from "react-router-dom";


function FooterIdea() {

    return (
        <React.StrictMode>
            <div className="footerIdea">
                <div className="footerIdea__box">
                    <div className="footerIdea__box_link">
                        <Link to='/' className="link">x</Link>
                    </div>
                    <h2 className="footerIdea__box_h2">Поделитесь мнением</h2>

                    <div className="footerIdea__box_inp1">
                        <p className="footerIdea__box_inp1_p">Ваше имя</p>
                        <input type="text" className="footerIdea__box_inp1_inp" />
                    </div>

                    <div className="footerIdea__box_inp1">
                        <p className="footerIdea__box_inp1_p">Телефон <br /> или e-mail</p>
                        <input type="text" className="footerIdea__box_inp1_inp" />
                    </div>

                    <div className="footerIdea__box_textarea">
                        <p className="footerIdea__box_textarea_p">Сообщение</p>
                        <textarea type="text" className="footerIdea__box_inp1_textarea" />
                    </div>
                    <br />
                    <br />
                    <div className="button">
                        <button>Отправить</button>
                    </div>
                </div>
            </div>
        </React.StrictMode>

    );
}
export default FooterIdea;