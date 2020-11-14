import {GetList} from '../api/list'

/**
 * CONSTANTS
 */
const initData = {
    initList: [],
    filterList: [],
    favorites: []
};


/**
 * TYPES
 */
const SET_LIST = 'SET_LIST'
const SET_FILTER = 'SET_FILTER'
const SET_FAVORITES = 'SET_FAVORITES'


/**
 * REDUCERS
 * @param {*} state 
 * @param {*} action 
 */
export default function reducer(state = initData, action){
    
    switch(action.type){
        case SET_LIST:
            return {
                    ...state, 
                    initList: action.list,
                    filterList: action.list
            }
        case SET_FILTER:
            return {
                    ...state, 
                    filterList: action.filter
            }
        case SET_FAVORITES:
            return {
                    ...state, 
                    favorites: action.favorites
            }
                
        default:
            return state
    }
}


/**
 * ACTIONS
 */
export const setFavorites = (favorites) => async (dispatch, getState) => {
    dispatch({
        type: SET_FAVORITES,
        favorites: favorites
    })
}

export const getList = () => async (dispatch, getState) => {
    const list = await GetList();
    dispatch({
        type: SET_LIST,
        list: list
    })
}

export const filter = (name, type) => async (dispatch, getState) => {
    const state = getState();
    let list = state.list.initList;

    if(type.length > 0 && type != 'All'){
       list = list.filter(item => item.type === type);
    }

    if(name.trim().length > 0){
        list = list.filter((item) =>
            item.tech.toLowerCase().indexOf(name.toLowerCase()) > -1
        );
    }
    
    dispatch({
        type: SET_FILTER,
        filter: list
    })
}