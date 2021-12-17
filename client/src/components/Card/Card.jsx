import React from "react";
import './card.css';

const Card = ({name,img,genres,id}) => {
    return (
        <div className="card-container">
            <div className="head">
                <div className="name"><h1>{name}</h1></div>
            </div>
            <div className="body">
                <div className="img-container"><img className="img" src={img} alt={name}/></div>
                <div className="genres">
                <div >{genres.map(e => <h3 key={id}>{e}</h3>)}</div> 
                </div>
            </div>
        </div>
    )
}

export default Card;