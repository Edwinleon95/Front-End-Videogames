import React from "react";
import { Link } from "react-router-dom";
import './card.css';

const Card = ({ name, img, genres, id, rating }) => {
    return (
        <div className="container-card">
            
                <div className="card">
                    <figure>
                     <img src={img} alt={name} />
                    </figure>
                    <div className="contenido-card">
                        <h3>{name}</h3>
                        <p>⭐{rating}</p>
                        <div>
                            <p >{genres.map(e => <h3 key={id}>{e}</h3>)}</p>
                        </div>
                        <Link to={`/detail/${id}`}>  <p>ver mas</p>  </Link>
                    </div>
                
                       
    
                   
                </div>
           
        </div>
    )
}

export default Card;
