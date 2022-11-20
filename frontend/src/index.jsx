import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './layout/home/Home';
import Header from '../src/components/header/Header'
import Signup from './layout/signup/Signup'
import './assets/style/index.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <Router>
        <Header/>
        <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route  path="/Signup" element={<Signup/>}/>
        </Routes>
        
    </Router>
    
 </React.StrictMode>
   

);