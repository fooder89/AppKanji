import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";

import { Provider } from 'react-redux'
import {createStore} from 'redux';
import reducer from './redux/reducers/index'; 

//import { PersistGate } from 'redux-persist/lib/integration/react';

// import the two exports from the last code snippet.
//import { store } from './redux/store/index';

const store = createStore(reducer);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
, document.getElementById('root'));

serviceWorker.unregister();


export default App;