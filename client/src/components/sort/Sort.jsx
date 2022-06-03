import React from "react";
import './sort.css';


const Sort = ({ onChange, options, title }) => {
    return (
        <div className="contenedor-select">
            <label className="title-select" htmlFor="select">{title}</label>
            <div className="select">
                <select className="contenedor-options"
                    onChange={onChange}
                    id='select'>
                    {options?.map(e => <option value={e.name} key={e.name}>{e.name}</option>)}
                </select>
            </div>
        </div>
    )
};

export default Sort;