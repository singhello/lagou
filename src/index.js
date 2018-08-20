import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import store from './store';

import { BrowserRouter as Router} from "react-router-dom";
console.log("root",store.getState())
ReactDOM.render(
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
