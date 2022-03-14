// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpvCM2LAyZtZTeZ21cggTsNLZd1mxr2L4",
  authDomain: "smallpaws-7f7f8.firebaseapp.com",
  databaseURL: "https://smallpaws-7f7f8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "smallpaws-7f7f8",
  storageBucket: "smallpaws-7f7f8.appspot.com",
  messagingSenderId: "729062511418",
  appId: "1:729062511418:web:a5b6054aa5e0a02d593603",
  measurementId: "G-CBT2J1CBJY"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
export default fire;
