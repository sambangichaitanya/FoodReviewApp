// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJxdg4dIjl7lE3kjVnxgSyJjK_x1ewHR8",
    authDomain: "food-review-platform.firebaseapp.com",
    projectId: "food-review-platform",
    storageBucket: "food-review-platform.appspot.com",
    messagingSenderId: "275543092606",
    appId: "1:275543092606:web:499f2491ad996fe0d8972f",
    measurementId: "G-L6EDBMP58S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = firebaseApp.firestore();
export default db;