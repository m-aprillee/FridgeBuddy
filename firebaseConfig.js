// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEzLPQ9tgvrAfzLx8eOCkcpIVXC-SoSO0",
  authDomain: "fridgebuddy-4d321.firebaseapp.com",
  projectId: "fridgebuddy-4d321",
  storageBucket: "fridgebuddy-4d321.appspot.com",
  messagingSenderId: "585530473141",
  appId: "1:585530473141:web:b39f9891bbd780f84cdcfc",
  measurementId: "G-G8BJ234F86",
  databaseURL: "https://fridgebuddy-4d321-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };