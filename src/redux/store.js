import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import buttonReducer from './buttonDucks'
import registerReducer from './registerDucks'
import authReducer from './authDucks'
import listReducer from './listDucks'

const rootReducer = combineReducers({
    header: buttonReducer,
    register: registerReducer,
    auth: authReducer,
    list: listReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    return store
}