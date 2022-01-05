import React from "react";
import { Link } from "react-router-dom";
import './landingPage.css'


const LandinPage = () => {
    return (
        <div className="container-landing">
            <div className="container-btn">
               <div className="title">
                   <h1>PI Videojuegos</h1>
                </div> 
                <Link to='/home'>
                  <div><button className="btn">COMENZAR</button></div> 
                </Link>
            </div>
        </div>
    )
}

export default LandinPage;