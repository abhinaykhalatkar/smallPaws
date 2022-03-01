// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdS4zKzZP4ReKmGENHr6XwmxdxUid5oPg",
  authDomain: "ui-ux-dumbledore-team.firebaseapp.com",
  projectId: "ui-ux-dumbledore-team",
  storageBucket: "ui-ux-dumbledore-team.appspot.com",
  messagingSenderId: "926879509842",
  appId: "1:926879509842:web:681f7bab2288fe56aade8b",
  measurementId: "G-PQN8QEGPZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);