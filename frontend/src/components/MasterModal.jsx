import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MASTERS } from "../utils/urls";

function MasterMadal({ master, setShow, setMasters }) {
    const customer = JSON.parse(localStorage.getItem("user"))
    const [days, setDays] = useState(1)
    const [price] = useState(Number(master.attributes.price))
    const [total, setTotal] = useState(Number(master.attributes.price))
    const navigate = useNavigate()


    const decrease = () => {
        if (days > 1) {
            setDays(days - 1)
            setTotal(total - price)
        }
    };
    const increase = () => {
        setDays(days + 1)
        setTotal(total + price)
    };


    const orderMaster = () => {
        axios.post("http://localhost:1337/api/order-masters?populate=user&populate=master", {
            data: {
                user: customer,
                master: master,
            }
        }).then(res => {
            axios.put(`http://localhost:1337/api/masters/${master.id}`, {
                data: {
                    isBusy: true
                }
            }).then(res => {
                setShow(false)
                navigate("/")
            })
        })
    }
    return (
        <div class="shadow">
            <div class="modal">
                <img src={`http://localhost:1337${master.attributes.image.data.attributes.url}`} alt="" />
                <div class="modal-content">
                    <p class="close" onClick={() => setShow(false)}>x</p>
                    <h1>{master.attributes.name}</h1>
                    <br /><br />
                    <p className="p11">Тип работы: <span className="span">{master.attributes.kind}</span> </p>
                    <p className="p11">Опыт: {master.attributes.experience} года</p>
                    <p className="p11">Прайс: ${master.attributes.price}</p>
                    <p>Нас сколько дней:</p>
                    <div className="modal-content_btn">
                        <button className="content_btn1" onClick={() => decrease()}>-</button>
                        <h1 className="content_h1">{days}</h1>
                        <button className="content_btn1" onClick={() => increase()}>+</button>
                    </div>
                    <p>Общая сумма: ${total}</p>

                    <div class="modal-content__bottom">
                        <p>{master.attributes.isBusy ? "Занять" : "Свободень"}</p>
                        <button class="modal-content__bottom-button" disabled={master.attributes.isBusy} onClick={() => orderMaster()}>Заказать</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MasterMadal;