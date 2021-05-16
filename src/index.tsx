import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


window.onload=function(){setTimeout(function() {window.scrollTo(0, 1000)}, 0)}