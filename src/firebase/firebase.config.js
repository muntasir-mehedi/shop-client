// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6xOB_1mFpS5CSLnSGVQgwuHPfGzQi6GM",
  authDomain: "eco-shop-718e9.firebaseapp.com",
  projectId: "eco-shop-718e9",
  storageBucket: "eco-shop-718e9.appspot.com",
  messagingSenderId: "955657733073",
  appId: "1:955657733073:web:336b4c1b92d8a2a84256f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;