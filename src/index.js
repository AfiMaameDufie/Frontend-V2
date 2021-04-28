import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from "redux"
import { AllReducer } from './service/reducer/combineReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom'


const store = createStore(AllReducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f))

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

serviceWorker.unregister();
