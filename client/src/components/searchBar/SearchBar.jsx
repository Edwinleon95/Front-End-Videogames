import React from "react";
import './searchBar.css';
import { useState } from "react";



const SearchBar = (props) => {
    const {onSearch} = props;
    const [search,setSearch]=useState('');

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    const onClick = async (e) => {
        onSearch(search);
    }

 
    return (
        <div>
            <input placeholder="Bucar..." onChange={onChange}></input>
            <button onClick={onClick}>Buscar</button>
        </div>
    )
}

export default SearchBar;