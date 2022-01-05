import React from "react";
import { useSelector } from "react-redux";





const Filter = (props) => {
    const { filter } = props
    let genres = useSelector((state) => state.genres)
    genres = genres.map(e => e[0])
    return (
        <div>
            <div>
                <span>filtar por</span>
            </div>

            <div>
                <select onChange={filter}>
                    {genres.map(e => <option value={e.name}>{e.name}</option>)}
                    <option value='api'>videojuegos de la api</option> 
                    <option value='db'>videojuegos creados</option> 
                </select>
           
            </div>
        </div>
    )
}


export default Filter;