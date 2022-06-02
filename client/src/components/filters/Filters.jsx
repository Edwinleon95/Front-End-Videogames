import React from "react";
import './filters.css'
import SearchBar from "../searchBar/SearchBar";
import Sort from "../sort/Sort";
import { aggregate, options } from "../../redux/aux/sort";
import { useSelector } from "react-redux";


export const Filters = ({ onSearch, onChange, filter }) => {
    let genres = useSelector((state) => state.genres)
    genres = genres.map(e => e[0])
    return (
        <div className="container-filters">
            <SearchBar onSearch={onSearch} />
            <Sort onChange={onChange}
                options={options}
                title={'Sort by: '} />
            <Sort onChange={filter}
                options={[...genres,...aggregate]}
                title={'Filter by: '} />
            {/* <Filter filter={filter} /> */}
        </div>
    )
};
