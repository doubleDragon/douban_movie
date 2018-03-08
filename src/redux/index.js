import {combineReducers} from 'redux';

import frontend from './frontend';
import entities from './entities';

const rootReducer = combineReducers({
    entities,
    frontend,
});

// const rootReducer = (state, action) => {
//     return state
// };

export default rootReducer;