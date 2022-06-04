import React from "react";
import { useState } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { platforms } from "../../redux/aux/sort";
import { createVideogame } from "../../redux/actions/actions";
import './create.css';

const Create = ({setOpenOverlayCreate}) => {
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
        <div className="container-form">
            <button onClick={setOpenOverlayCreate}>Close</button>
            <form onSubmit={onSubmit} className="container-create">
                <label>ReleaseDate:
                    <input
                        onChange={handleChangeRelaseDate}
                        type='date'
                        name="releaseDate"
                        className="input-create">
                    </input>
                </label>

                <label>
                    <input
                        onChange={handleChange}
                        type='text'
                        placeholder="insert url:"
                        name="img"
                        className="input-create">
                    </input>
                </label>

                <label>
                    <input
                        onChange={handleChange}
                        type='text'
                        placeholder="insert name:"
                        name="name"
                        className="input-create">
                    </input>
                </label>

                <label>Select genres:
                    {genres.map(e =>
                        <label key={e.id} >{e.name}
                            <input
                                onChange={handleChangeGenres}
                                type='checkbox'
                                value={e.id}
                                name="slug">
                            </input>
                        </label>)
                    }
                </label>

                <label>
                    <textarea
                        onChange={handleChange}
                        placeholder="Descrption:"
                        rows='10'
                        cols='40'
                        name="description"
                        className="input-create">
                    </textarea>
                </label>

                <label>Raiting:
                    <input
                        onChange={handleChange}
                        type='range'
                        min='0'
                        max='5'
                        step='0.01'
                        name="rating"
                        className="input-rating">
                    </input>
                </label>

                <label>
                    {
                        platforms.map(e =>
                            <p key={e}>{e}
                                <input
                                    onChange={handleChangePlatforms}
                                    type='checkbox'
                                    value={e}
                                    name="platforms">
                                </input>
                            </p>)
                    }
                </label>

                <button
                    type="submit"
                    className="btn-create">Create Videogame
                </button>
            </form>
        </div>
    )
}

export default Create;




// "rating":"4",
// "description":"es un juego donde tienes que programar bien para ganarte la vida",

// "platforms": ["vidareal,pc,play"],
