import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers/reducer'

const allReducers = combineReducers({
  reducer
});

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(promiseMiddleware())));

export default store;
