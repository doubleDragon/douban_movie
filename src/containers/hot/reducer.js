import {combineReducers} from 'redux';

import now from './reducer/HotNowReducer';
import next from './reducer/HotNextReducer';

const hotReducer = combineReducers({
    now,
    next
});

export default hotReducer;