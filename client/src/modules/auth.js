import {createAction, handleActions} from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import {API, createActionTypes, createRequestSaga} from '../lib/reduxUtils';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createActionTypes('auth/REGISTER');
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createActionTypes('auth/LOGIN');

export const register = createAction(REGISTER, ({userId, password, name, email}) => ({userId, password, name, email}));
export const login = createAction(LOGIN, ({userId, password}) => ({userId, password}));

const registerSaga = createRequestSaga(REGISTER, API.auth.register);
const loginSaga = createRequestSaga(LOGIN, API.auth.login);

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  register: {
    userId         : '',
    password       : '',
    passwordConform: '',
    name           : '',
    email          : ''
  },
  login   : {
    userId  : '',
    password: ''
  },
  error   : null
};

/**
 * @todo auth handle 정의 [2021-04-07]
 * */
const auth = handleActions({
  [REGISTER_SUCCESS]: state => ({}),
  [REGISTER_FAILURE]: state => ({}),
  [LOGIN_SUCCESS]   : state => ({}),
  [LOGIN_FAILURE]   : state => ({})
}, initialState);

export default auth;