import React from "react";
import { IconController } from "../icons/IconController";
import './loading.css';


const Loading = () => {

    return (
        <div className="container-loading">
            <IconController/>
            <div className="loading">
                <h2><span>|</span></h2>
            </div>
        </div>
    )
}

export default Loading