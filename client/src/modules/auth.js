import {createAction, handleActions} from 'redux-actions';
import {createActionTypes} from '../lib/reduxUtils';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createActionTypes('auth/REGISTER');
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createActionTypes('auth/LOGIN');

/**
 * @todo auth actions 정의 [2021-04-07]
 * */
export const register = createAction(REGISTER, () => ({}));
export const login = createAction(LOGIN, () => ({}));

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
  [REGISTER]        : state => ({}),
  [REGISTER_SUCCESS]: state => ({}),
  [REGISTER_FAILURE]: state => ({}),
  [LOGIN]           : state => ({}),
  [LOGIN_SUCCESS]   : state => ({}),
  [LOGIN_FAILURE]   : state => ({})
}, initialState);

export default auth;