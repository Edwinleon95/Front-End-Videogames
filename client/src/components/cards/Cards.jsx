import React from "react";
import Card from "../Card/Card";
import Error from "../error/Error";
import './cards.css'

const Cards = ({ videogames }) => {
    return (
        <div className="cards">
            {videogames?.map(e => e.id? <div><Card
                    name={e.name}
                    img={e.img}
                    genres={e.genres}
                    id={e.id}
                    rating={e.rating}
                    key={e.id} /></div>: <div><Error/></div>)}
        </div>
    )
}

export default Cards;