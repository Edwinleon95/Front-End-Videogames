import React from "react";
import { useSelector } from "react-redux";
import Cards from "../cards/Cards";
import './home.css'




const Home = () => {
    const videogames = useSelector((state) => state.videogames)

return (
    <div className="home">
        <Cards videogames={videogames}/>
    </div>
)
}


export default Home;