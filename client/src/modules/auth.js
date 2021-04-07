import {createAction, handleActions} from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import {API, createActionTypes, createRequestSaga} from '../lib/reduxUtils';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createActionTypes('auth/REGISTER');
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createActionTypes('auth/LOGIN');

export const registerAction = createAction(REGISTER, ({userId, password, name, email}) => ({
  userId,
  password,
  name,
  email
}));
export const loginAction = createAction(LOGIN, ({userId, password}) => ({userId, password}));

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
  user    : null,
  error   : null
};

const auth = handleActions({
  [REGISTER_SUCCESS]: (state, {payload: user}) => {
    console.log('[register handleActions]', user);
    return {
      ...state,
      error: null,
      user
    };
  },
  [REGISTER_FAILURE]: state => ({}),
  [LOGIN_SUCCESS]   : (state, {payload: user}) => {
    console.log('[login handleActions]', user);
    return {
      ...state,
      error: null,
      user
    };
  },
  [LOGIN_FAILURE]   : state => ({})
}, initialState);

export default auth;