// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDdS4zKzZP4ReKmGENHr6XwmxdxUid5oPg",
//   authDomain: "ui-ux-dumbledore-team.firebaseapp.com",
//   projectId: "ui-ux-dumbledore-team",
//   storageBucket: "ui-ux-dumbledore-team.appspot.com",
//   messagingSenderId: "926879509842",
//   appId: "1:926879509842:web:681f7bab2288fe56aade8b",
//   measurementId: "G-PQN8QEGPZR"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
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
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
