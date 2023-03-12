import React from "react";

function MasterMadal({master, setShow}) {
    console.log(master)
    return (
        <div class="shadow">
            <div class="modal">
                <img src={`http://localhost:1337${master.attributes.image.data.attributes.url}`} alt=""/>
                    <div class="modal-content">
                        <p class="close" onClick={() => setShow(false)}>x</p>
                        <h1>{master.attributes.name}</h1>
                        <br /><br />
                        <p className="p11">Тип работы: <span className="span">{master.attributes.kind}</span> </p>
                        <p className="p11">Опыт: {master.attributes.experience} года</p>
                        <p className="p11">Прайс: ${master.attributes.price}</p>
                        <div class="modal-content__bottom">
                            <p>{master.attributes.isBusy ? "Занять" : "Свободень"}</p>
                            <button class="modal-content__bottom-button" disabled={master.attributes.isBusy}>Заказать</button>
                        </div>
                    </div>
            </div>
        </div>
    );
}
export default MasterMadal;