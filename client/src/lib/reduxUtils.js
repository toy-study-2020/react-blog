import axios from 'axios';
import {call, put} from 'redux-saga/effects';

export const createActionTypes = type => ([type, `${type}_SUCCESS`, `${type}_FAILURE`]);

export const createRequestSaga = (type, apiCall) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    try {
      const response = yield call(apiCall, action.payload);
      yield put({
        type   : SUCCESS,
        payload: response.data
      });
    } catch (e) {
      yield put({
        type   : FAILURE,
        payload: e
      });
    }
  };
};

const client = axios.create();

export const API = {
  auth: {
    login   : ({userId, password}) => client.post('/api/auth/login', {userId, password}),
    register: ({userId, password, name, email}) => client.post('/api/auth/register', {userId, password, name, email}),
    logout  : () => client.post('/api/auth/logout'),
    check   : () => client.get('/api/auth/check')
  }
};
