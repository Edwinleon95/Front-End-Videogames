import React from "react";
import './auxNav.css'
import Pagination from "../pagination/Pagination";
import SearchBar from "../searchBar/SearchBar";
import Sort from "../sort/Sort";
import Filter from "../filter/Filter";


const AuxNav = (props) => {
const {totalPage,currentPage, onLeftClick, onRightClick , onSearch , onChange,filter} = props

    return (
        <div className="container-auxnav">
            <div>
                <SearchBar onSearch={onSearch}/>
            </div>
            <div>
                <Sort onChange={onChange}/>
            </div>
            <div>
                <Filter filter={filter}/>
            </div>
            <div>
                <Pagination totalPage={totalPage}
                             currentPage={currentPage}
                             onLeftClick={onLeftClick}
                             onRightClick={onRightClick}/>
            </div>
           
        </div>
    )
}

export default AuxNav;