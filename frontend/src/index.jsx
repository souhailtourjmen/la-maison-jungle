import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './layout/home/Home';
import Header from '../src/components/header/Header'
import Signin from './layout/login/LayouSigin'
import './assets/style/index.css';
import {Provider} from 'react-redux'
import {store} from './store/Store'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
 <React.StrictMode>
  <Provider store={store}>
    <Router>
        <Header/>
        <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route  path="/Signin" element={<Signin/>}/>
        </Routes>
        
    </Router>
    </Provider>
 </React.StrictMode>
   

);