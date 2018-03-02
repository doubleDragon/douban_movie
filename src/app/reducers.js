import {combineReducers} from 'redux';
import CommonReducer from './reducer';
import HomeReducer from '../home/HomeReducer';

const rootReducer = combineReducers({
    common: CommonReducer,
    home: HomeReducer
});

export default rootReducer;