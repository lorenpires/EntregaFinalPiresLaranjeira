/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLY107YpDsv99fhFwVhqz-XDFbfOonMH8",
    authDomain: "futar-store.firebaseapp.com",
    projectId: "futar-store",
    storageBucket: "futar-store.appspot.com",
    messagingSenderId: "537033894658",
    appId: "1:537033894658:web:4d7f67ea2e7a993e74701b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
