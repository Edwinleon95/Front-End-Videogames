import React from "react";
import { useDispatch } from "react-redux";
import { clearVideogamesState, getVideogames } from "../../redux/actions/actions";
import './error.css'


const Error = () => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(clearVideogamesState())
        dispatch(getVideogames())
    }
    return (
        <div className="container-error">
            <div>
                
                <button className="btn-error" onClick={onClick}> try again</button>
            </div>
        </div>
    )
}

export default Error;