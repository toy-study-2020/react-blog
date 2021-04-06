import {createAction, handleActions} from 'redux-actions';
import {createActionTypes} from '../lib/reduxUtils';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createActionTypes('auth/REGISTER');
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createActionTypes('auth/LOGIN');

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

const auth = handleActions({
  [REGISTER]        : state => ({}),
  [REGISTER_SUCCESS]: state => ({}),
  [REGISTER_FAILURE]: state => ({}),
  [LOGIN]           : state => ({}),
  [LOGIN_SUCCESS]   : state => ({}),
  [LOGIN_FAILURE]   : state => ({})
}, initialState);

export default auth;