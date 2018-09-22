import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.scss'
import {BrowserRouter as Router} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));