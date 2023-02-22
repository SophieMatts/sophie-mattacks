import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

//Fonts
import './fonts/AbhayaLibre-Bold.ttf';
import './fonts/AbhayaLibre-ExtraBold.ttf';
import './fonts/AbhayaLibre-Medium.ttf';
import './fonts/AbhayaLibre-Regular.ttf';
import './fonts/AbhayaLibre-SemiBold.ttf';
import './fonts/Montserrat-Italic-VariableFont_wght.ttf';
import './fonts/Montserrat-VariableFont_wght.ttf';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter><App /></BrowserRouter>);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
