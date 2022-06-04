import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './home.css'
import { apiVideogames, changeState, clearStateFilters, clearVideogamesState, dbVideogames, filter, getVideogamesName, orderAscRating, orderDesRating, sortaz, sortza } from "../../redux/actions/actions";
import NavBar from "../nav/NavBar";
import Pagination from "../pagination/Pagination";
import Create from "../createVideogame/Create";

const Home = () => {
    const dispatch = useDispatch();
    let videogames = useSelector((state) => state.videogames)

    const [overlayCreate, setOverlayCreate] = useState(false);
    const setOpenOverlayCreate = () => {
        setOverlayCreate(!overlayCreate)
    };

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

        <div
            className={`home ${overlayCreate ? 'overlay-active' : null}`}
        >
            
            {
                overlayCreate ?
                    <Create setOpenOverlayCreate={setOpenOverlayCreate} />
                    : null
            }

            <NavBar
                setOpenOverlayCreate={setOpenOverlayCreate}
                onSearch={onSearch}
                onChange={onChange}
                filter={filters}
            />

            <Pagination />
        </div>


    )
}


export default Home;