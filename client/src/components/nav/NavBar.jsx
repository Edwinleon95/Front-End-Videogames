import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import { IconController } from "../icons/IconController";
import { Filters } from "../filters/Filters";

const NavBar = ({ setOpenOverlayCreate, onSearch, onChange, filter }) => {
    const [overlay, setOverlay] = useState(false)

    const openOverlay = () => {
        setOverlay(!overlay)
    }
    return (
        <>
            <nav
                className="contenedor-navbar"
                id="navBar">
                <div className="contenedor-title">
                    <Link
                        className="title"
                        to='/'
                    >
                        <span>
                            <IconController />
                        </span>
                        <p>VIDEOGAMES</p>
                    </Link>
                </div>
                <div className="options">
                    <button
                        className="option"
                        onClick={() => window.location.reload()}
                    >
                        <p >Refresh</p>
                    </button>

                    <button
                        className="option"
                        onClick={setOpenOverlayCreate}
                    >
                        <p>Create</p>
                    </button>
                </div>

                <div
                    className="filtros"
                    onClick={openOverlay}>
                    <p>Filter by</p>
                </div>
            </nav >
            {
                overlay ?
                    <Filters
                        onSearch={onSearch}
                        onChange={onChange}
                        filter={filter}
                        openOverlay={openOverlay} />
                    : null
            }
        </>
    )
}


export default NavBar;
