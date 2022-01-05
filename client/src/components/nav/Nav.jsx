import React from "react";
import { Link } from "react-router-dom";
import './nav.css';

const Nav = () => {
    return (
         <ul className="nav">
             <Link to='/home'><li className="nav-option">Inicio</li></Link>
             <Link to='/create'><li className="nav-option">Crear</li></Link>
             <li className="nav-title">PI VIDEOJUEGOS</li>                      
         </ul> 
    )
}


export default Nav;
