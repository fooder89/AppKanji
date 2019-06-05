import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";

import { Provider } from 'react-redux'
import {createStore} from 'redux';
import reducer from './redux/reducers/index'; 
const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
    < App />
</Provider>
, document.getElementById('root'));

serviceWorker.unregister();