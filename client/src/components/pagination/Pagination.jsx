import React from "react";
import './pagination.css'


const Pagination = (props) => {
    const {currentPage,totalPage, onLeftClick, onRightClick}=props
    return (
        <div className="pagination">
            <button onClick={onLeftClick}>⇐</button>
            <div>{currentPage} de {totalPage}</div>
            <button onClick={onRightClick}>⇒</button>
        </div>
    )
}


export default Pagination;
