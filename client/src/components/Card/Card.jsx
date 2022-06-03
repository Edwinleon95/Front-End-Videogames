import React from "react";
import { Link } from "react-router-dom";
import './card.css';

const Card = ({ name, img, genres, id, rating }) => {
    
    return (
        <div className="card">
            <figure>
                <img src={img} alt={name} />
            </figure>
            <div className="contenido-card">
                <h3 className="title-card">{name}</h3>
                <h4>Genres</h4>
                <div className="contenedor-intermediate">
                    {genres.map(e => <p key={e}>{e}</p>)}
                </div>
                <p className="rating">⭐{rating}⭐</p>
                <Link to={`/detail/${id}`}>  ver mas  </Link>
            </div>
        </div>
    )
}

export default Card;
