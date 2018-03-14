import {combineReducers} from 'redux';

import frontend from './frontend';
import user from './user';
import entities from './entities';

const rootReducer = combineReducers({
    entities,
    frontend,
    user
});

// const rootReducer = (state, action) => {
//     return state
// };

export default rootReducer;