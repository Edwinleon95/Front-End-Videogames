import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../cards/Cards";
import './home.css'
import { apiVideogames, changeState, clearStateFilters, clearVideogamesState, dbVideogames, filter, getVideogamesName, orderAscRating, orderDesRating, sortaz, sortza } from "../../redux/actions/actions";
import Loading from "../loading/Loading";
import NavBar from "../nav/NavBar";
import Pagination from "../pagination/Pagination";
import { Filters } from "../filters/Filters";

const Home = () => {
    const dispatch = useDispatch();
    let videogames = useSelector((state) => state.videogames)

    const [cardsPerPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);

    const [overlay, setOverlay] = useState(false)

    const openOverlay = () => {
        setOverlay(!overlay)
    }

    let lastCardInpage = currentPage * cardsPerPage;
    let firstCardInpage = lastCardInpage - cardsPerPage
    let totalPage = Math.ceil(videogames.length / cardsPerPage);
    let currentCardsItems = videogames?.slice(firstCardInpage, lastCardInpage)

    const onRightClick = () => {
        const page = Math.max(currentPage + 1)
        page > totalPage ? setCurrentPage(totalPage) : setCurrentPage(page)
    }

    const onLeftClick = () => {
        const page = currentPage - 1
        page < 1 ? setCurrentPage(1) : setCurrentPage(page)
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
            setCurrentPage(1);
        } else if (e.target.value === 'Videogames api') {
            dispatch(apiVideogames());
            dispatch(clearVideogamesState());
            dispatch(changeState());
            dispatch(clearStateFilters());
            setCurrentPage(1);
        } else {
            dispatch(filter(videogames, e.target.value))
            dispatch(clearVideogamesState())
            dispatch(changeState())
            dispatch(clearStateFilters())
            setCurrentPage(1);
        }

    }

    return (


        <div className="home">
            <NavBar openOverlay={openOverlay} />
            {overlay ?
                <Filters onSearch={onSearch}
                    onChange={onChange}
                    filter={filters}
                    openOverlay={openOverlay}
                /> : null}

            <Pagination totalPage={totalPage}
                currentPage={currentPage}
                onLeftClick={onLeftClick}
                onRightClick={onRightClick} />

            {videogames.length ?
                <Cards videogames={currentCardsItems}
                    key={currentCardsItems.id}
                /> : <Loading />}

            <Pagination totalPage={totalPage}
                currentPage={currentPage}
                onLeftClick={onLeftClick}
                onRightClick={onRightClick} />
        </div>

    )
}


export default Home;