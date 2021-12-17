import axios from 'axios';


import { GET_VIDEOGAMES , GET_GENRES , GET_VIDEOGAME_DETAILS } from './actionTypes';


export const getVideogames = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/videogames').then((res)=>{
            dispatch({
                type:GET_VIDEOGAMES,
                payload: res.data,
            })
        })
    }
}

export const getGenres = () => {
    return async (dispatch) =>{
        try {
            const genres = await axios.get('http://localhost:3001/genres');
            return dispatch({
                type:GET_GENRES,
                payload:genres.data});
        }catch(err){
            console.log(err)
        }
    }
}

export const getVideogameDetails = (id) => {
    return async (dispatch) => {
        try {
            const videogame = await axios.get(`http://localhost:3001/videogame/${id}`);
            return dispatch({ type:GET_VIDEOGAME_DETAILS,payload:videogame.data})
        }catch(err){
            console.log(err);
        }
    }
}