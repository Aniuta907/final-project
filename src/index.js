import * as $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/js/dist/util';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

import './index.css';

window.$ = $;
ReactDOM.render(<App />, document.getElementById('root'));

