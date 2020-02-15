import * as $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/js/dist/util';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import App2 from './App2';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-toggle/css/bootstrap-toggle.min.css';
import '../node_modules/bootstrap-toggle/css/bootstrap-toggle.css';
//import * as bootstrapToggle from '../node_modules/bootstrap-toggle/js/bootstrap-toggle.js';

window.$ = $;
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
