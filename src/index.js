import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import NavBar from './components/NavBar';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkEqfhqyRIOeYniOzkqKzGihtC0Evy9Sk",
  authDomain: "tecnomundo-c50e5.firebaseapp.com",
  projectId: "tecnomundo-c50e5",
  storageBucket: "tecnomundo-c50e5.appspot.com",
  messagingSenderId: "1016289749247",
  appId: "1:1016289749247:web:a233fd21323ee9b7b044ca"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
