// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAZKkCBQ9y3KNsgJAhlHHi17nciyzGwnM",
  authDomain: "netflixgpt-562be.firebaseapp.com",
  projectId: "netflixgpt-562be",
  storageBucket: "netflixgpt-562be.appspot.com",
  messagingSenderId: "341204687853",
  appId: "1:341204687853:web:1e1982483eb6cd8926a5e4",
  measurementId: "G-2DQRLE3ST4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
