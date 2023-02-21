import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import searchReducer from './Search-Reducer'
import galleryReducer from './Gallery-Reducer'


let state = combineReducers({
    searchReducer: searchReducer,
    galleryReducer: galleryReducer
});

let store = createStore(state,applyMiddleware(thunk));

export default store;