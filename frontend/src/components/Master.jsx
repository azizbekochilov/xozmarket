import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import "../css/Master.css"
import { MASTERS } from "../utils/urls";

function Master() {
    return (
        <React.StrictMode>
            <Navbar />
            <Menu />
            <div className="master">
                <h1 className="master_h1">Masters</h1>
                <div className="master__box">
                    <Link to='/masterdetail'>
                        <div className="master__box_link">
                            <img src='img/odam.jpg' alt="" className="master__box_link_img" />
                            <p className="master__box_link_p">name</p>
                        </div>
                    </Link>
                    <Link to='/masterdetail'>
                        <div className="master__box_link">
                            <img src='img/odam.jpg' alt="" className="master__box_link_img" />
                            <p className="master__box_link_p">name</p>
                        </div>
                    </Link>
                    <Link to='/masterdetail'>
                        <div className="master__box_link">
                            <img src='img/odam.jpg' alt="" className="master__box_link_img" />
                            <p className="master__box_link_p">name</p>
                        </div>
                    </Link>
                    <Link to=''>
                        <div className="master__box_link">
                            <img src='img/odam.jpg' alt="" className="master__box_link_img" />
                            <p className="master__box_link_p">name</p>
                        </div>
                    </Link>
                    <Link to='/masterdetail'>
                        <div className="master__box_link">
                            <img src='img/odam.jpg' alt="" className="master__box_link_img" />
                            <p className="master__box_link_p">name</p>
                        </div>
                    </Link>
                    <Link to='/masterdetail'>
                        <div className="master__box_link">
                            <img src='img/odam.jpg' alt="" className="master__box_link_img" />
                            <p className="master__box_link_p">name</p>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </React.StrictMode>
    );
}
export default Master;