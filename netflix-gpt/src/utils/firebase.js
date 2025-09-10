// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNh_7JtSnLerGx5ad4cp4xYm082_g-8Xs",
  authDomain: "netflixgpt-cc3cf.firebaseapp.com",
  projectId: "netflixgpt-cc3cf",
  storageBucket: "netflixgpt-cc3cf.firebasestorage.app",
  messagingSenderId: "116033015547",
  appId: "1:116033015547:web:fa086011a318ce403e6a5e",
  measurementId: "G-3NW8XNKSG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log("analytics",analytics)
export const auth = getAuth()