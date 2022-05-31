import React from "react";
import { Link } from "react-router-dom";
import { IconController } from "../icons/IconController";
import './landingPage.css'


const LandinPage = () => {
    return (
        <div className="contenedor-landing">
            <section className="contenedor-left">
                <div className="title">
                    <IconController />
                    <h1>VIDEOGAMES</h1>
                </div>
                <h3>Welcome to the video game catalog, where
                    There are titles from different years with their respective description, rating, release date and you can also see the platforms where it is available
                </h3>
                <Link to='/home' className="link">
                    <button className="btn-link">Get Started </button>
                </Link>
            </section>
        </div>
    )
}

export default LandinPage;