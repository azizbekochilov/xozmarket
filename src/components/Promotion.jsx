import React from "react";
import '../css/Promotion.css'
import {Link} from "react-router-dom"

function Promotion() {
    return (
        <React.StrictMode>
            <div className="promotion">
                <div className="promotion__promotions">
                    <Link to='/' className="promotion__promotions_1">
                        <p className="promotion__promotions_1_p">Теплицы в наличии!</p>
                        <img className="promotion__promotions_1_img" src="https://xozm.ru/upload/iblock/917/917d29779978c73f588a4ac49048c49f.jpg" alt="" />
                    </Link>
                    <Link to='/' className="promotion__promotions_1">
                        <p className="promotion__promotions_1_p">Мото культиватор в наличии от 11 807р!</p>
                        <img className="promotion__promotions_1_img" src="https://xozm.ru/upload/iblock/6a4/6a4476e51a6565fbbd378bb90a3fe306.jpg" alt="" />
                    </Link>
                    <Link className="promotion__promotions_1">
                        <p  className="promotion__promotions_1_p">Бензиновый триммер от 5 990р!</p>
                        <img className="promotion__promotions_1_img" src="https://xozm.ru/upload/iblock/25f/25f01333a5ef22fa038c6c8a9bea68df.jpg" alt="" />
                    </Link>
                    <div className="promotion__promotions_1">
                        hello
                    </div>
                </div>
            </div>

            <div className="bottom"></div>
        </React.StrictMode>

    );
}
export default Promotion;