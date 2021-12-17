import React from "react";
import Card from "../Card/Card";
import './cards.css'

const Cards = ({videogames}) => {
    return (
        <div className="cards">
            {videogames?.map(e =>
            <Card
            name={e.name}
            img={e.img}
            genres={e.genres}
            id={e.id}
            key={e.id}/>)}
        </div>
    )
}

export default Cards;