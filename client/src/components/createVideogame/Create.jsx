import React from "react";
import { useState } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { platforms } from "../../redux/aux/sort";
import Nav from "../nav/Nav";
import { createVideogame } from "../../redux/actions/actions";
import './create.css'

const Create = () => {
    const dispatch = useDispatch();
    let genres = useSelector((state) => state.genres)
    genres = genres.map(e => e[0])

    const [input, setInput] = useState({
        name: '',
        description: '',
        img: '',
        rating: '',
        releaseDate: ''
    })

    const [arrayPlatforms, setarrayPlatforms] = useState([]);
    const [arrayGenres, setArrayGenres] = useState([]);
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };


    const handleChangeRelaseDate = (e) => {
        let date = new Date(e.target.value)
        setInput({ releaseDate: date });
    };

    const handleChangePlatforms = (e) => {
        const checked = arrayPlatforms.indexOf(e.target.value);
        const newCheked = [...arrayPlatforms]

        if (checked === -1) {
            newCheked.push(e.target.value)
            setarrayPlatforms(newCheked)
        } else {
            let auxCheckbox = arrayPlatforms
            setarrayPlatforms(auxCheckbox = auxCheckbox.filter((element) => { return e.target.value !== element }))
        }
    }


    const handleChangeGenres = (e) => {
        const checked = arrayGenres.indexOf(e.target.value);
        const newCheked = [...arrayGenres]

        if (checked === -1) {
            newCheked.push(e.target.value)
            setArrayGenres(newCheked)
        } else {
            let auxCheckbox = arrayGenres
            setArrayGenres(auxCheckbox = auxCheckbox.filter((element) => { return e.target.value !== element }))
        }
        console.log(arrayGenres)
    }
    const newGame = {
        name: input.name,
        description: input.description,
        img: input.img,
        rating: input.rating,
        releaseDate: input.releaseDate,
        platforms: arrayPlatforms,
        slug: arrayGenres
    }
    const onSubmit = () => {
        dispatch(createVideogame(newGame))
    }


    return (
        <div>
            <Nav />
            <form onSubmit={onSubmit} className="container-create">
                <label>
                    <p>ReleaseDate:</p>
                    <input onChange={handleChangeRelaseDate} type='date' name="releaseDate" className="input-create"></input>
                </label>
                <label>
                    <input onChange={handleChange} type='text' placeholder="insert url:" name="img" className="input-create"></input>
                </label>

                <label>
                    <input onChange={handleChange} type='text' placeholder="insert name:" name="name" className="input-create"></input>
                </label>

                <label>
                    <p>Select genres:</p>
                    <ul>
                        {genres.map(e => <li><input onChange={handleChangeGenres} type='checkbox' value={e.id} name="slug"></input>{e.name}</li>)}
                    </ul>
                </label>

                <label>
                    <textarea onChange={handleChange} placeholder="Descrption:" rows='10' cols='40' name="description" className="input-create"></textarea>
                </label>
                <label>
                    <div className="div-input-rating">
                        <p>Raiting:</p>
                        <input onChange={handleChange} type='range' min='0' max='5' step='0.01' name="rating" className="input-rating"></input>
                    </div>
                </label>


                <footer className="footer-create">
                    <label>
                        <ul>{platforms.map(e => <li><input onChange={handleChangePlatforms} type='checkbox' value={e} name="platforms"></input>{e}</li>)}</ul>
                    </label>

                    <div>
                        <button type="submit" className="btn-create">Create Videogame</button>
                    </div>
                </footer>

            </form>
        </div>
    )
}

export default Create;




// "rating":"4",
// "description":"es un juego donde tienes que programar bien para ganarte la vida",

// "platforms": ["vidareal,pc,play"],
