import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer, {rootSaga} from './modules';
import App from './App';
// import {loginAction} from './modules/auth';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

// const reduxTest = () => {
//   store.dispatch(loginAction({userId:'test', password:'1234'}))
// }

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
