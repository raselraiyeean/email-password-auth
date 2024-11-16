// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnByMJJdwUgtpEWAONHsg3ojfGuNCNZ3E",
  authDomain: "email-password-auth-27556.firebaseapp.com",
  projectId: "email-password-auth-27556",
  storageBucket: "email-password-auth-27556.firebasestorage.app",
  messagingSenderId: "113013834060",
  appId: "1:113013834060:web:264986eadc85108594cfe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);