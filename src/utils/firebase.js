// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwfnR3REGsvbkOcn2csvUHSWnLMjKuZ9Q",
  authDomain: "blogapp-83741.firebaseapp.com",
  projectId: "blogapp-83741",
  storageBucket: "blogapp-83741.appspot.com",
  messagingSenderId: "867293770242",
  appId: "1:867293770242:web:a9d89301184d3210e16d1b",
  measurementId: "G-5KRPYT920W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;