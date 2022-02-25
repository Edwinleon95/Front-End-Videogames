import React from "react";
import { Link } from "react-router-dom";
import './nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
             <Link to='/home'><li className="nav-option">Home</li></Link>
             <Link to='/create'><li className="nav-option">Create</li></Link>
             <li className="nav-title">VIDEOGAMES</li>                      
         </ul> 
        </nav>
    )
}


export default Nav;
