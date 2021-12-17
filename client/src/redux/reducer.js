import {GET_VIDEOGAMES,GET_GENRES} from './actions/actionTypes';

const initialState = {
    videogames:[],
    genres:[]
}

const rootReducer = (state=initialState, {type,payload})=>{
    switch(type){
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames:payload
            };  
        case GET_GENRES:
            return {
                ...state,
                genres:payload
            };    

        default:return state
    }
}

export default rootReducer;