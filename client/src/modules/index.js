import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import auth from './auth';

const rootReducer = combineReducers({auth});

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;