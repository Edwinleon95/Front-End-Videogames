import React from "react";
import './searchBar.css';
import { useState } from "react";
import { IconSearch } from "../icons/IconSearch";



const SearchBar = (props) => {

    const { onSearch } = props;
    const [search, setSearch] = useState('');

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    const onClick = (e) => {
        e.preventDefault()
        onSearch(search);
    }


    return (
        <form action="submit"
            className="form">
            <input className="input-name"
                placeholder="Search by name..."
                type='text'
                onChange={onChange}>
            </input>
            <button className="btn-input"
                type="submit"
                onClick={onClick}><IconSearch/>
            </button>
        </form>


    )
}

export default SearchBar;