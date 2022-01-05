import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../cards/Cards";
import './home.css'
import Nav from "../nav/Nav";
import AuxNav from "../auxNav/AuxNav";
import { apiVideogames, changeState, clearStateFilters, clearVideogamesState, dbVideogames, filter, getVideogamesName, orderAscRating, orderDesRating, sortaz, sortza } from "../../redux/actions/actions";
import Loading from "../loading/Loading";

const Home = () => {
    const dispatch = useDispatch();
    let videogames = useSelector((state) => state.videogames)

    const [cardsPerPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);

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
        setCurrentPage(1);
        dispatch(getVideogamesName(name));

    }

    const onChange = (e) => {
        if (e.target.value === 'ordenaraz') {
            dispatch(sortaz());
            dispatch(clearVideogamesState())
            dispatch(changeState())
            dispatch(clearStateFilters())
        }

        if (e.target.value === 'ordenarza') {
            dispatch(sortza());
            dispatch(clearVideogamesState())
            dispatch(changeState())
            dispatch(clearStateFilters())
        }
        if (e.target.value === 'ordenarAsc') {
            dispatch(orderAscRating());
            dispatch(clearVideogamesState());
            dispatch(changeState())
            dispatch(clearStateFilters())
        }
        if (e.target.value === 'ordenarDes') {
            dispatch(orderDesRating());
            dispatch(clearVideogamesState());
            dispatch(changeState())
            dispatch(clearStateFilters())
        }
        if (e.target.value === 'db') {
            dispatch(dbVideogames());
            dispatch(clearVideogamesState());
            dispatch(changeState());
            dispatch(clearStateFilters());
        }
        if (e.target.value === 'api') {
            dispatch(apiVideogames());
            dispatch(clearVideogamesState());
            dispatch(changeState());
            dispatch(clearStateFilters());
        }
    }

    const filters = (e) => {

        if (e.target.value === 'db') {
            dispatch(dbVideogames());
            dispatch(clearVideogamesState());
            dispatch(changeState());
            dispatch(clearStateFilters());
            setCurrentPage(1);
        } else if (e.target.value === 'api') {
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
            <div> <Nav /></div>
            <div>
                <AuxNav totalPage={totalPage}
                    currentPage={currentPage}
                    onLeftClick={onLeftClick}
                    onRightClick={onRightClick}
                    onSearch={onSearch}
                    onChange={onChange}
                    filter={filters}
                />
            </div>
            {videogames.length ? <div><Cards videogames={currentCardsItems} /> </div> : <div><Loading /></div>}
        </div>

    )
}


export default Home;