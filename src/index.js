import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase/app';
import 'firebase/database';

const appKey = 'fountain';
const config = {
  apiKey: "AIzaSyDEEVJQ8CsEnEmTMIf1kXZ-O-6gBkmWbjg",
  authDomain: "fountain-bae31.firebaseapp.com",
  databaseURL: "https://fountain-bae31.firebaseio.com",
  projectId: "fountain-bae31",
  storageBucket: "fountain-bae31.appspot.com",
  messagingSenderId: "1061300480573"
};

firebase.initializeApp(config);
const signup = (email) => {
  const newEmail = firebase.database().ref(`${appKey}/`).push();
  newEmail.set({
    email,
  });
};

ReactDOM.render(<App appKey={appKey} signup={signup}/>, document.getElementById('root'));
registerServiceWorker();
