import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routerlist from '@/router';
import Banner from '@/components/banner/banner';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Banner />
    <Routerlist />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
