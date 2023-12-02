import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducer';

const rootReducer = combineReducers({
  order: Reducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
