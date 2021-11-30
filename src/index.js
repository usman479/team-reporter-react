import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import firebase from 'firebase/compat/app';
import firebaseConfig from './firebase/firebaseConfig';




const style = { background: '#0092ff', padding: '8px 10px' };

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
<App/>
  ,
  document.getElementById('root')
);

