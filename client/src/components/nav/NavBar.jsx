import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import { IconController } from "../icons/IconController";

const NavBar = ({openOverlay}) => {
    return (
        <nav className="contenedor-navbar" id="navBar">
            <div className="contenedor-title">
                <Link className="title" to='/'>
                    <span><IconController /></span>
                    <p>VIDEOGAMES</p>
                </Link>
            </div>
            <div className="options"> 
                <Link to='/home' className="option"><p>Home</p></Link>
                <Link to='/create' className="option"><p>Create</p></Link>
            </div>
            <div className="filtros" onClick={openOverlay}>
                <p>Filter by</p>
            </div>
        </nav >
    )
}


export default NavBar;
