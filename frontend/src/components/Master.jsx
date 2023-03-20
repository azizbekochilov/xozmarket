import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import "../css/Master.css"
import axios from "axios";
import MasterMadal from "../components/MasterModal";
import "../css/MasterMadal.css"
import { MASTERS } from "../utils/urls";

function Master() {

    const [masters, setMasters] = useState([])
    const [master, setMaster] = useState({})
    const [show, setShow] = useState(false)

    const loadMasters = () => {
        axios.get(MASTERS)
            .then(res => setMasters(res.data.data))
    }

    useEffect(() => {
        loadMasters()
    }, [])


    const showModal = master => {
        setMaster(master)
        setShow(true)
    }   

    return (
        <React.StrictMode>
            <Navbar />
            <Menu />
            <div className="master">
                {show ? <MasterMadal setShow={setShow} master={master}  setMasters={setMasters}/>: ""}
                <h1 className="master_h1">Мастеры</h1>
                <div className="master__box">
                    {masters && masters.map(master => (
                        <div className="master__box_link" onClick={() => showModal(master)}>
                            <img src={`http://localhost:1337${master.attributes.image.data.attributes.url}`} alt="" className="master__box_link_img" />
                            <div className="pp">
                                <p className="master__box_link_p">{master.attributes.name}</p>
                                <p className="master__box_link_p2">{master.attributes.kind}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </React.StrictMode>
    );
}
export default Master;