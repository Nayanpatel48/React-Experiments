import React from 'react';
//React is our core foundational library

import ReactDOM from 'react-dom';
//Here `ReactDOM is a implimentation of React on `web` just like ReactNative is a implimentation
//of React on App

import App from './App';

//here .createRoot() function expects that give me any element from html by selecting
//push ctrl button to see `ReactDOM`
const root = ReactDOM.createRoot(document.getElementById('root'));
//here we have searched the element having id 'root'

root.render(
  //<React.StrictMode>
  <App />
  //this <App /> is nothing but just a function returning html

  //</React.StrictMode> this tag is used specifically for development purpose
  //even without this tag the react app will be able to run
);