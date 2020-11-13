/**
 * CONSTANTS
 */
const initData = {
    login: false
};


/**
 * TYPES
 */
const SET_AUTHENTICATION = 'SET_AUTHENTICATION'


/**
 * REDUCERS
 * @param {*} state 
 * @param {*} action 
 */
export default function reducer(state = initData, action){
    
    switch(action.type){
        case SET_AUTHENTICATION:
            return {...state, login: action.auth}
                
        default:
            return state
    }
}


/**
 * ACTIONS
 */
export const setAutentication = () => async (dispatch, getState) => {
    const token = localStorage.getItem('token');
    const isAuth = (token !== null);
    dispatch({
        type: SET_AUTHENTICATION,
        auth: isAuth
    })
}