import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import sweggerReducer from './reducers';

const store = createStore(sweggerReducer, applyMiddleware(thunk));
export default store;
