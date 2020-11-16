/**
 * CONSTANTS
 */
const initData = {
    section: ''
}


/**
 * TYPES
 */
const BUTTON_SECTION = 'BUTTON_SECTION'
const BUTTON_REGISTER = 'BUTTON_REGISTER'


/**
 * REDUCERS
 * @param {*} state 
 * @param {*} action 
 */
export default function reducer(state = initData, action){
    
    switch(action.type){
        case BUTTON_SECTION:
            return {...state, section: action.section}
        default:
            return state
    }

}


/**
 * ACTIONS
 */
export const buttonSection = (params) => async (dispatch, getState) => {
    try {
        
        if(typeof params.redirect != 'undefined' && params.redirect != ''){
            if(typeof params.blank != 'undefined' && params.blank === true){
                window.open(params.redirect, '_blank');
            }else{
                window.location.href = params.redirect;
            }
        }
        


        //const {next} = getState();
        // const data = getState();
        

        dispatch({
            type: BUTTON_SECTION,
            section: 'home'
        })

    } catch (error) {
        console.log(error);
    }
}