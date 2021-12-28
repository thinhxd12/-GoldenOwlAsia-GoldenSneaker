import { combineReducers, createStore } from 'redux';
import {ProductReducer} from './reducers/ProductReducer';
import {CartReducer} from './reducers/CartReducer';


const rootReducer = combineReducers({
    ProductReducer,CartReducer
})


export const store = createStore(rootReducer)

