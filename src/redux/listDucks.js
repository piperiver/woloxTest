import {GetList} from '../api/list'

/**
 * CONSTANTS
 */
const initData = {
    initList: [],
    filterList: [],
    favorites: [],
    sort: 'ASC'
};


/**
 * TYPES
 */
export const SET_LIST = 'SET_LIST'
export const SET_FILTER = 'SET_FILTER'
export const SET_FAVORITES = 'SET_FAVORITES'
export const SET_SORT = 'SET_SORT'


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
        case SET_SORT:
            return {
                    ...state, 
                    filterList: action.listSort,
                    sort: action.sort
            }
                
        default:
            return state
    }
}


/**
 * ACTIONS
 */
export const setFavorites = (favorites) => (dispatch, getState) => {
    dispatch({
        type: SET_FAVORITES,
        favorites: favorites
    })
}

export const getList = () => async (dispatch, getState) => {
    const list = await GetList();
    const listSort = sortArray(list, 'tech', "ASC");

    dispatch({
        type: SET_LIST,
        list: listSort
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

    const listSort = sortArray(list, 'tech', state.list.sort);
    
    dispatch({
        type: SET_FILTER,
        filter: listSort
    })
}

const sortArray = (array, item, sort = "ASC") => {
    array.sort(function(a, b) {
        var nameA = a[item].toUpperCase();
        var nameB = b[item].toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    if(sort === "DESC"){
        return array.reverse();
    }
    return array;
}

export const sortList = () => async (dispatch, getState) => {
    const state = getState();
    const sort = (state.list.sort === "DESC")? "ASC" : "DESC";
    const listSort = sortArray(state.list.filterList, 'tech', sort);

    dispatch({
        type: SET_SORT,
        listSort: listSort,
        sort: sort
    })
}