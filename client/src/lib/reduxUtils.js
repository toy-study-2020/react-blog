import {call, put} from 'redux-saga/effects';

export const createActionTypes = type => ([type, `${type}_SUCCESS`, `${type}_FAILURE`]);

export const createRequestSaga = (type, apiCall) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    try {
      const response = yield call(apiCall, action.payload);
      put({
        type   : SUCCESS,
        payload: response.data
      });
    } catch (e) {
      put({
        type   : FAILURE,
        payload: e
      });
    }
  };
};