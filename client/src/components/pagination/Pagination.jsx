import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cards from "../cards/Cards";
import Loading from "../loading/Loading";
import './pagination.css'


const Pagination = () => {

    let videogames = useSelector((state) => state.videogames)
    useEffect(() => {
        setCurrentPage(1)
    }, [videogames.length]);


    const [cardsPerPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);

    let lastCardInpage = currentPage * cardsPerPage;
    let firstCardInpage = lastCardInpage - cardsPerPage
    let totalPage = Math.ceil(videogames.length / cardsPerPage);
    let currentCardsItems = videogames?.slice(firstCardInpage, lastCardInpage)

    const onRightClick = (e) => {
        let page = currentPage + 1;
        page > totalPage ? setCurrentPage(totalPage) : setCurrentPage(page);
    }

    const onLeftClick = (e) => {
        let page = currentPage - 1
        page < 1 ? setCurrentPage(1) : setCurrentPage(page)
    }

    let pages = []
    let page = 1
    while (page <= totalPage) {
        pages.push(page)
        page++;
    }

    const actualPage = (event) => {
        setCurrentPage(parseInt(event.target.id))
    }
    return (
        <>
            {
                videogames[0] === 'NotFound' || videogames.length <= 0 ?
                    null :
                    <div className="pagination">
                        {
                            currentPage !== 1 ?
                                <button
                                    className="button-prev"
                                    onClick={onLeftClick}
                                >Prev
                                </button>
                                : null
                        }
                        <section>
                            {
                                pages.map(e =>
                                    <button
                                        className={`btn-pages ${parseInt(e) === currentPage ? 'active' : null}`}
                                        onClick={actualPage}
                                        id={e}
                                        key={e}
                                    >{e}
                                    </button>)
                            }
                        </section>

                        {
                            currentPage !== totalPage ?
                                <button
                                    className="button-next"
                                    onClick={onRightClick}
                                >Next
                                </button>
                                : null
                        }
                    </div>
            }

            {
                videogames.length ?
                    <Cards
                        videogames={currentCardsItems}
                        key={currentCardsItems.id}
                    />
                    : <Loading />
            }

            {
                videogames[0] === 'NotFound' || videogames.length <= 0 ?
                    null :
                    <div className="pagination">
                        {
                            currentPage !== 1 ?
                                <a
                                    className="button-prev"
                                    onClick={onLeftClick}
                                    href="#navBar"
                                >Prev
                                </a>
                                : null
                        }
                        <section>
                            {
                                pages.map(e =>
                                    <a
                                        className={`btn-pages ${parseInt(e) === currentPage ? 'active' : null}`}
                                        onClick={actualPage}
                                        id={e}
                                        href='#navBar'
                                        key={e}
                                    >{e}
                                    </a>)
                            }
                        </section>

                        {
                            currentPage !== totalPage ?
                                <a
                                    className="button-next"
                                    onClick={onRightClick}
                                    href="#navBar"
                                >Next
                                </a>
                                : null
                        }
                    </div>
            }
        </>
    )
}


export default Pagination;
