
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import decode from 'jwt-decode';
import { syncInfoAc } from './components/login/store/actionCreators';

const tk = localStorage.getItem('@#@TOKEN');

store.dispatch(syncInfoAc())
if (tk) store.dispatch(syncInfoAc(decode(tk)));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>

      <App />
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
