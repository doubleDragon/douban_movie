import {combineReducers} from 'redux';
import ALIAS from "../app/routes";
import HotReducer from "../containers/hot/reducer";

// const frontendReducers = combineReducers({
//     // [ALIAS.HOT]: HotReducer,
//     hot: HotReducer,
// });


const frontendReducers = combineReducers({
    [ALIAS.HOT]: HotReducer,
    // hot: HotReducer,
});

export default frontendReducers;