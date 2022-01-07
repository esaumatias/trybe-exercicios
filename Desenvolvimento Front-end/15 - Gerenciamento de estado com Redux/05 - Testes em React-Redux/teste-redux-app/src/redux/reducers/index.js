import { combineReducers } from 'redux';
import clickReducer from './reducer';

const rootReducer = combineReducers({ clickReducer });

export default rootReducer;
