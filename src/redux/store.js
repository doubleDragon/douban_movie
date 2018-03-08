// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
//
// // import reducers from './reducers';
// import reducers from './index';
// import logger from 'redux-logger';
// import api from '../middleware/api';
//
// // Connect our store to the reducers
// export default createStore(reducers, applyMiddleware(thunk, api, logger));



import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import api from '../middleware/api';
import logger from 'redux-logger';

import reducers from '../redux'; //Import the reducer

// Connect our store to the reducers
export default createStore(reducers, applyMiddleware(thunk, api, logger));