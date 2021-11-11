
import { DatVeXemPhim } from './DatVeXemPhim';
import { combineReducers, createStore } from 'redux';


const rootReducer = combineReducers({
    DatVeXemPhim
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

