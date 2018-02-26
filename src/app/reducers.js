import {combineReducers} from 'redux';
import HomeReducer from '../home/HomeReducer';

const rootReducer = combineReducers({
    home: HomeReducer
});

export default rootReducer;