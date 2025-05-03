// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnvAtpL6QlelPQ4WEz03nHUTrt5jUo9LU",
  authDomain: "expense-tracker-2ccd2.firebaseapp.com",
  projectId: "expense-tracker-2ccd2",
  storageBucket: "expense-tracker-2ccd2.firebasestorage.app",
  messagingSenderId: "528309474895",
  appId: "1:528309474895:web:a41dc81fb7a011e1317c3a",
  measurementId: "G-S9BK7H8TZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy