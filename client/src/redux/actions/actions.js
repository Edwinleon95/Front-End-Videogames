import axios from 'axios';


import {
    GET_VIDEOGAMES,
    GET_GENRES,
    GET_VIDEOGAME_DETAILS,
    GET_VIDEOGAMES_NAME,
    CLEAR_VIDEOGAMES_STATE,
    ORDER_FOR_AZ, ORDER_FOR_ZA,
    CHANGE_STATE,
    CLEAR_STATE_FILTERS,
    FILTER,
    CLEAR_DETAIL_STATE,
    CREATE_VIDEOGAME,
    ORDER_RATING_ASC,
    ORDER_RATING_DES,
    API_VIDEOGAMES,
    DB_VIDEOGAMES,
} from './actionTypes';



export const getVideogames = () => {
    return (dispatch) => {
        axios.get(`${process.env.REACT_APP_PUERTO}videogames`).then((res) => {
            dispatch({
                type: GET_VIDEOGAMES,
                payload: res.data,
            })
        })
    }
}
export const getGenres = () => {
    return async (dispatch) => {
        try {
            const genres = await axios.get(`${process.env.REACT_APP_PUERTO}genres`);
            return dispatch({
                type: GET_GENRES,
                payload: genres.data
            });
        } catch (err) {
            console.log(err)
        }
    }
}

export const getVideogameDetails = (id) => {
    return async (dispatch) => {
        try {
            const videogame = await axios.get(`${process.env.REACT_APP_PUERTO}videogame/${id}`);
            return dispatch({ type: GET_VIDEOGAME_DETAILS, payload: videogame.data })
        } catch (err) {
            console.log(err);
        }
    }
}

export const getVideogamesName = (name) => {
    return async (dispatch) => {
        try {
            let videogames = await axios.get(`${process.env.REACT_APP_PUERTO}videogames?name=${name}`);
            return dispatch({ type: GET_VIDEOGAMES_NAME, payload: videogames.data })
        } catch (err) {
            console.log(err);
        }
    }
}

export const clearVideogamesState = () => {
    return ({ type: CLEAR_VIDEOGAMES_STATE })
}

export const sortaz = () => {
    return ({ type: ORDER_FOR_AZ })
}

export const sortza = () => {
    return ({ type: ORDER_FOR_ZA })
}

export const changeState = () => {
    return ({ type: CHANGE_STATE })
}

export const clearStateFilters = () => {
    return ({ type: CLEAR_STATE_FILTERS })
}

export const filter = (state, genre) => {
    let aux = state.filter(e => e.genres.includes(genre))
    if (!aux.length) {
        aux = ['NotFound']
    }
    return ({ type: FILTER, payload: aux })
}

export const clearDetailState = () => {
    return ({ type: CLEAR_DETAIL_STATE })
}

export const createVideogame = (newVideogame) => {
    return async (dispatch) => {
        try {
            const newGame = axios.post(`${process.env.REACT_APP_PUERTO}videogame`, newVideogame)
            return dispatch({ type: CREATE_VIDEOGAME, payload: newGame.data })
        } catch (err) {
            console.log(err);
        }
    }
}

export const orderAscRating = () => {
    return ({ type: ORDER_RATING_ASC })
}

export const orderDesRating = () => {
    return ({ type: ORDER_RATING_DES })
}

export const apiVideogames = () => {
    return ({ type: API_VIDEOGAMES })
}

export const dbVideogames = () => {
    return ({ type: DB_VIDEOGAMES })
}

