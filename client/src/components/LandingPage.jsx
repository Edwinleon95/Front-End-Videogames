import React from "react";
import { Link } from "react-router-dom";


const LandinPage = () => {
    return (
        <div>
            <Link to='/home'>
            <button>HOME</button>
            </Link>
        </div>
    )
}

export default LandinPage;