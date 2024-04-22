import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
<<<<<<< HEAD
    <React.StrictMode>
      <App />
    </React.StrictMode>
=======
    <BrowserRouter>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </BrowserRouter>
>>>>>>> 13ecb2a603866ebde2c6ffc92728890f619f0dda
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
