import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { DataContextprovider } from './FetchApi/Api';
//it is important to enclose the app jsx file into context provider to destructure the Context object inside the <App> component
ReactDOM.render(  
<DataContextprovider>
<Router>
<App/>
</Router>
</DataContextprovider>

,document.getElementById('root'));