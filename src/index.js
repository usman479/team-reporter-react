import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import { Row, Col, Divider } from 'antd';
import firebase from 'firebase/compat/app'
import firebaseConfig from './firebase/firebaseConfig';

const style = { background: '#0092ff', padding: '8px 10px' };

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
<App/>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
