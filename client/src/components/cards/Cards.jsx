import React from "react";
import Card from "../Card/Card";
import Error from "../error/Error";
import './cards.css'

const Cards = ({ videogames }) => {
    return (
        <div className="cards">
            {videogames?.map(e => e.id?<Card
                    name={e.name}
                    img={e.img}
                    genres={e.genres}
                    id={e.id}
                    rating={e.rating}
                    key={e.id} />: <Error/>)}
        </div>
    )
}

export default Cards;