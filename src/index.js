import './index.css';
import React from 'react';
import { render } from 'react-dom'
import App from './containers/App/App.js';
import { Provider } from 'react-redux'
import rootReducer from '../src/reducers'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

render(
  <Provider store={ store } >
    <App />
  </Provider>,
  document.getElementById('root')
)