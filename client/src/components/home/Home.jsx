import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './home.css'
import { apiVideogames, changeState, clearStateFilters, clearVideogamesState, dbVideogames, filter, getVideogamesName, orderAscRating, orderDesRating, sortaz, sortza } from "../../redux/actions/actions";
import NavBar from "../nav/NavBar";
import Pagination from "../pagination/Pagination";
import { Filters } from "../filters/Filters";

const Home = () => {
    const dispatch = useDispatch();
    let videogames = useSelector((state) => state.videogames)



    const [overlay, setOverlay] = useState(false)

    const openOverlay = () => {
        setOverlay(!overlay)
    }



    const onSearch = (name) => {
        dispatch(clearVideogamesState());
        dispatch(getVideogamesName(name));

    }

    const onChange = (e) => {
        if (e.target.value === 'Sort by A to Z') {
            dispatch(sortaz());
            dispatch(clearVideogamesState())
            dispatch(changeState())
            dispatch(clearStateFilters())
        }

        if (e.target.value === 'Sort by Z to A') {
            dispatch(sortza());
            dispatch(clearVideogamesState())
            dispatch(changeState())
            dispatch(clearStateFilters())
        }
        if (e.target.value === 'Sort by descending rating') {
            dispatch(orderAscRating());
            dispatch(clearVideogamesState());
            dispatch(changeState())
            dispatch(clearStateFilters())
        }
        if (e.target.value === 'Sort by ascending rating') {
            dispatch(orderDesRating());
            // window.location.reload();
            dispatch(clearVideogamesState());
            dispatch(changeState())
            dispatch(clearStateFilters())
        }
    }

    const filters = (e) => {

        if (e.target.value === 'Videogames created') {
            dispatch(dbVideogames());
            dispatch(clearVideogamesState());
            dispatch(changeState());
            dispatch(clearStateFilters());
        } else if (e.target.value === 'Videogames api') {
            dispatch(apiVideogames());
            dispatch(clearVideogamesState());
            dispatch(changeState());
            dispatch(clearStateFilters());
        } else {
            dispatch(filter(videogames, e.target.value))
            dispatch(clearVideogamesState())
            dispatch(changeState())
            dispatch(clearStateFilters())
        }

    }

    return (
        <>
            <NavBar openOverlay={openOverlay} />

            {
                overlay ?
                    <Filters
                        onSearch={onSearch}
                        onChange={onChange}
                        filter={filters}
                        openOverlay={openOverlay} />
                    : null
            }
            
            <div className="home">
                <Pagination />
            </div>
        </>

    )
}


export default Home;