import {GET_VIDEOGAMES,GET_GENRES,GET_VIDEOGAMES_NAME,CLEAR_VIDEOGAMES_STATE, ORDER_FOR_AZ, ORDER_FOR_ZA, CHANGE_STATE, CLEAR_STATE_FILTERS, FILTER, GET_VIDEOGAME_DETAILS, CLEAR_DETAIL_STATE, CREATE_VIDEOGAME, ORDER_RATING_ASC, ORDER_RATING_DES, DB_VIDEOGAMES, API_VIDEOGAMES,} from './actions/actionTypes';
import { sortAZ, sortRatingAsc, sortRatingDes, sortZA } from './aux/sort';
const initialState = {
    videogames:[],
    genres:[],
    filters:[],
    detail:[]
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
        case GET_VIDEOGAMES_NAME:
            return {
                ...state,
                videogames:payload
            }
        case CLEAR_VIDEOGAMES_STATE:
            return {
                ...state,
                videogames:[]
            }   
        case ORDER_FOR_AZ:
            return {
                ...state,
                filters: state.videogames.sort(sortAZ)
            } 
        case ORDER_FOR_ZA:
            return {
                ...state,
                filters: state.videogames.sort(sortZA)
            }
        case CHANGE_STATE:
            return{
                ...state,
                videogames:state.filters
            }
        case CLEAR_STATE_FILTERS:
            return{
                ...state,
                filters:[]
            }
        case FILTER:
            return{
                ...state,
                filters:payload
             }
        case GET_VIDEOGAME_DETAILS:
            return{
                ...state,
                detail:payload
            }
         case CLEAR_DETAIL_STATE:
             return{
                 ...state,
                 detail:[]
             }
        case CREATE_VIDEOGAME:
            return {
                ...state,
                dbVideogames:payload
            }
        case ORDER_RATING_ASC:
            return {
                ...state,
                filters: state.videogames.sort(sortRatingAsc)
            }
        case ORDER_RATING_DES:
            return {
                ...state,
                filters: state.videogames.sort(sortRatingDes)
            } 
        case DB_VIDEOGAMES:
            return{
                ...state,
                filters: state.videogames.filter(e => isNaN(e.id)).length?state.videogames.filter(e => isNaN(e.id))  :['NotFound']
            }
        case API_VIDEOGAMES:
            return{
                ...state,
                filters: state.videogames.filter(e => typeof e.id === 'number').length? state.videogames.filter(e => typeof e.id === 'number'):['NotFound']
            }                                                         
        default:return state
    }
}

export default rootReducer;